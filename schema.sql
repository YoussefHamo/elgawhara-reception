-- ============================================================
-- مجموعة الجوهرة لطب الأسنان (فرع ميامي)
-- Supabase Database Schema & Seed Data
-- ============================================================

-- 1. Create Doctors Table
CREATE TABLE IF NOT EXISTS public.doctors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    specialty TEXT DEFAULT 'طبيب أسنان عام',
    is_pedo BOOLEAN DEFAULT false,
    is_supervisor BOOLEAN DEFAULT false,
    phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Schedules Table (Doctor Clinics & Shifts)
CREATE TABLE IF NOT EXISTS public.schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    doctor_name TEXT NOT NULL,
    day TEXT NOT NULL, -- السبت, الأحد, الإثنين, الثلاثاء, الأربعاء, الخميس, الجمعة
    shift TEXT NOT NULL, -- morning, evening
    shift_label TEXT NOT NULL, -- صباحي, مسائي
    clinic_name TEXT NOT NULL, -- Clinic 1, Clinic 2, Pedo 1, بانوراما...
    time_range TEXT NOT NULL, -- 9:00 ص - 3:30 م أو 4:00 م - 11:00 م
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Services & Price List Table
CREATE TABLE IF NOT EXISTS public.services (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- كشوفات وأشعة, حشوات وعلاج جذور, جراحة وخلع, تركيبات وزراعة, تقويم أسنان, أسنان أطفال, تجميل وتنظيف
    price NUMERIC NOT NULL DEFAULT 0,
    duration TEXT DEFAULT 'حسب الحالة',
    notes TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create Daily Notices Table (سبورة الملاحظات والتعليمات اليومية للريسبشن)
CREATE TABLE IF NOT EXISTS public.daily_notices (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'warning', -- urgent, warning, info, success
    type_label TEXT DEFAULT 'توجيه إداري',
    author TEXT DEFAULT 'إدارة المركز',
    pinned BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_notices ENABLE ROW LEVEL SECURITY;

-- Allow Public / Anon Read & Manage Access
CREATE POLICY "Allow public read access to doctors" ON public.doctors FOR SELECT USING (true);
CREATE POLICY "Allow public manage doctors" ON public.doctors FOR ALL TO public USING (true) WITH CHECK (true);

CREATE POLICY "Allow public read access to schedules" ON public.schedules FOR SELECT USING (true);
CREATE POLICY "Allow public manage schedules" ON public.schedules FOR ALL TO public USING (true) WITH CHECK (true);

CREATE POLICY "Allow public read access to services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public manage services" ON public.services FOR ALL TO public USING (true) WITH CHECK (true);

-- Allow Public / Staff Full Access to Daily Notices (المزامنة اللحظية بين جميع شاشات الاستقبال والمدير)
CREATE POLICY "Allow all access to daily_notices" ON public.daily_notices FOR ALL USING (true) WITH CHECK (true);

-- Allow Public / Staff Full Access to Doctor Absences
CREATE POLICY "Allow public manage absences" ON public.doctor_absences FOR ALL TO public USING (true) WITH CHECK (true);

-- Enable Realtime for all clinic tables
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'daily_notices') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.daily_notices;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'doctor_absences') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.doctor_absences;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'services') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.services;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'doctors') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.doctors;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'schedules') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.schedules;
  END IF;
END $$;

-- Allow Staff / Authenticated Full Access
CREATE POLICY "Allow staff update to services" ON public.services FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow staff update to schedules" ON public.schedules FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow staff update to doctors" ON public.doctors FOR ALL TO authenticated USING (true);

-- Create Fast Search Indexes
CREATE INDEX IF NOT EXISTS idx_doctors_name ON public.doctors (name);
CREATE INDEX IF NOT EXISTS idx_schedules_doctor_name ON public.schedules (doctor_name);
CREATE INDEX IF NOT EXISTS idx_schedules_day_shift ON public.schedules (day, shift);
CREATE INDEX IF NOT EXISTS idx_services_name ON public.services (name);
CREATE INDEX IF NOT EXISTS idx_services_category ON public.services (category);
CREATE INDEX IF NOT EXISTS idx_daily_notices_pinned ON public.daily_notices (pinned, created_at DESC);

-- ============================================================
-- Initial Seed Data: Sample Services
-- ============================================================
INSERT INTO public.services (name, category, price, duration, notes) VALUES
('كشف استشاري وفحص شامل', 'كشوفات وأشعة', 150, '20 دقيقة', 'يشمل خطة العلاج وتحديد الجلسات'),
('أشعة ديجيتال سينية عادية (Periapical)', 'كشوفات وأشعة', 70, '5 دقائق', 'للسن الواحد داخل العيادة'),
('أشعة بانوراما كاملة للفكين (Panorama)', 'كشوفات وأشعة', 200, '10 دقائق', 'متوفرة بغرفة البانوراما بالمركز'),
('حشو كومبوزيت ليزر تجميلي (أمامي)', 'حشوات وعلاج جذور', 450, '40 دقيقة', 'حسب حجم النخر وعدد الأسطح'),
('حشو كومبوزيت ضرس خلفي', 'حشوات وعلاج جذور', 400, '35 دقيقة', 'حشوة تجميلية بلون السن الطبيعي'),
('علاج عصب (حشو جذور) - سن أمامي', 'حشوات وعلاج جذور', 700, 'جلسة إلى جلستين', 'بأحدث أجهزة الروتاري'),
('علاج عصب (حشو جذور) - ضرس خلفي', 'حشوات وعلاج جذور', 1100, 'جلستان', 'يشمل تنظيف القنوات والحشو النهائي'),
('خلع سن / ضرس عادي', 'جراحة وخلع', 250, '20 دقيقة', 'يشمل التخدير الموضعي والمتابعة'),
('خلع ضرس عقل جراحي مدفون', 'جراحة وخلع', 1200, '45 دقيقة', 'مع دكتور الجراحة المتخصص'),
('فتح خراج وتنظيف جراحي', 'جراحة وخلع', 300, '20 دقيقة', 'مع وصف المضاد المناسب'),
('طربوش بورسلين معدن (PFM)', 'تركيبات وزراعة', 950, 'معملي', 'ضمان جودة الخامة'),
('طربوش زيركون تجميلي عالي الدقة (Zirconia)', 'تركيبات وزراعة', 1800, 'معملي', 'الأكثر قوة ومظهر طبيعي ممتاز'),
('طقم أسنان متحرك كامل (فكي)', 'تركيبات وزراعة', 5500, 'معملي', 'مع أخصائي التركيبات المتحركة'),
('غرسة سن تيتانيوم (زراعة ألمانية/كورية)', 'تركيبات وزراعة', 8500, 'جلسة جراحة + تركيب', 'مع د. خالد عبد النبي وفريق الزراعة'),
('كشف ودراسة حالة تقويم', 'تقويم أسنان', 300, '30 دقيقة', 'أخذ مقاسات وصور ودراسة خطة العلاج'),
('قسط تقويم شهري (متابعة وشد)', 'تقويم أسنان', 500, '20 دقيقة', 'يتم تحديده حسب خطة العلاج'),
('كشف أطفال وتهيئة نفسية', 'أسنان أطفال', 150, '20 دقيقة', 'عيادات Pedo 1 & Pedo 2'),
('حشو سن لبني ملون / تجميلي', 'أسنان أطفال', 300, '25 دقيقة', 'خامات مخصصة لأسنان الأطفال'),
('خلع سن لبني للأطفال', 'أسنان أطفال', 150, '15 دقيقة', 'تخدير لطيف وتجربة بدون خوف'),
('حافظ مسافة (Space Maintainer)', 'أسنان أطفال', 750, 'معملي', 'للحفاظ على أماكن الأسنان الدائمة'),
('جلسة إزالة جير وتلميع بالموجات الصوتية', 'تجميل وتنظيف', 350, '30 دقيقة', 'إزالة التصبغات والاصفرار'),
('تبييض أسنان ليزر / زووم (In-Clinic Zoom)', 'تجميل وتنظيف', 2200, '45 دقيقة', 'نتائج فورية في جلسة واحدة');
