// ============================================================
// Al-Jawhara Dental Center - Reception System Core Application
// Version: 2.0 (Live Clinic Floor, Treatment Calculator, PWA & Dark Mode)
// ============================================================

// ============================================================
// Core High-Performance Inline SVGs (Zero DOM parsing overhead)
// ============================================================
const CORE_SVGS = {
  sun: `<svg class="w-3.5 h-3.5 text-amber-600 inline-block flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg class="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 inline-block flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  layers: `<svg class="w-3 h-3 text-teal-600 dark:text-teal-400 inline-block flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  clock: `<svg class="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 inline-block flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  copy: `<svg class="w-4 h-4 inline-block flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  plus: `<svg class="w-3.5 h-3.5 inline-block flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
};

// ============================================================
// Specialized Authentic Dental SVG Icons (Pixel-perfect & Vector)
// ============================================================
const DENTAL_ICONS = {
  // 1. Dental Implant (زرعة وغرسة الأسنان - مثل د/ خالد عبد النبي)
  implant: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M7 4.5C7 2.8 8.5 2 12 2C15.5 2 17 2.8 17 4.5C17 6.5 16 7.5 15 8H9C8 7.5 7 6.5 7 4.5Z" fill="currentColor" fill-opacity="0.18" />
      <path d="M8.5 8H15.5V10.5H8.5V8Z" fill="currentColor" fill-opacity="0.35" />
      <path d="M9.5 10.5L10 20C10 21.2 10.8 22 12 22C13.2 22 14 21.2 14 20L14.5 10.5" />
      <line x1="8" y1="12" x2="16" y2="12" stroke-width="1.8" />
      <line x1="8.5" y1="14.5" x2="15.5" y2="14.5" stroke-width="1.8" />
      <line x1="9" y1="17" x2="15" y2="17" stroke-width="1.8" />
      <line x1="10" y1="19.5" x2="14" y2="19.5" stroke-width="1.8" />
    </svg>
  `,

  // 2. Dental Crown & Bridge (تركيبات الأسنان المتحركة والثابتة والزيركون)
  crown: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M4 18C4 18 5 17 8 17.5C11 18 13 18 16 17.5C19 17 20 18 20 18C20.5 13 20 7.5 17.5 5.5C15.8 4 14 5 12 6C10 5 8.2 4 6.5 5.5C4 7.5 3.5 13 4 18Z" fill="currentColor" fill-opacity="0.2" />
      <path d="M12 6V12.5" />
      <path d="M8 9.5L9 13.5" stroke-width="1.6" />
      <path d="M16 9.5L15 13.5" stroke-width="1.6" />
      <path d="M5.5 18C8 17.2 16 17.2 18.5 18" stroke-dasharray="1 1.5" />
      <path d="M19.5 2.5L20 4L21.5 4.5L20 5L19.5 6.5L19 5L17.5 4.5L19 4Z" fill="currentColor" />
    </svg>
  `,

  // 3. Orthodontics (تقويم الأسنان - براكت وسلك تقويم)
  braces: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M6 5.5C6 3.5 8 2.5 12 2.5C16 2.5 18 3.5 18 5.5C18 11 17 21 14.5 21C13 21 13 17 12 17C11 17 11 21 9.5 21C7 21 6 11 6 5.5Z" fill="currentColor" fill-opacity="0.15" />
      <path d="M2 11.5H22" stroke-width="2.2" />
      <rect x="8" y="8" width="8" height="7" rx="1.5" fill="currentColor" fill-opacity="0.3" stroke-width="1.6" />
      <path d="M12 8V15" stroke-width="1.8" />
      <circle cx="9.5" cy="9.5" r="0.7" fill="currentColor" />
      <circle cx="14.5" cy="9.5" r="0.7" fill="currentColor" />
      <circle cx="9.5" cy="13.5" r="0.7" fill="currentColor" />
      <circle cx="14.5" cy="13.5" r="0.7" fill="currentColor" />
    </svg>
  `,

  // 4. Pediatric Dentistry (طب أسنان أطفال - سن لبني مبتسم)
  pediatric: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M5.5 7C5.5 4.5 7.5 3 12 3C16.5 3 18.5 4.5 18.5 7C18.5 12 17.5 20.5 15 20.5C13.5 20.5 13.2 16.5 12 16.5C10.8 16.5 10.5 20.5 9 20.5C6.5 20.5 5.5 12 5.5 7Z" fill="currentColor" fill-opacity="0.18" />
      <circle cx="9.5" cy="8.5" r="1.3" fill="currentColor" />
      <circle cx="14.5" cy="8.5" r="1.3" fill="currentColor" />
      <path d="M9.5 11.5C10.2 13 13.8 13 14.5 11.5" stroke-width="1.8" />
      <ellipse cx="7.5" cy="11.5" rx="1" ry="0.6" fill="currentColor" fill-opacity="0.4" />
      <ellipse cx="16.5" cy="11.5" rx="1" ry="0.6" fill="currentColor" fill-opacity="0.4" />
      <path d="M19 2L19.5 3.2L20.8 3.7L19.5 4.2L19 5.5L18.5 4.2L17.2 3.7L18.5 3.2Z" fill="currentColor" />
    </svg>
  `,

  // 5. Oral Surgery (جراحة الفم والخلع)
  surgery: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M6 6C6 3.8 7.5 2.5 10.5 2.5C13.5 2.5 15 3.8 15 6C15 9.5 14.5 15.5 13 17.5C12 19 11.2 19 10.5 17.5C9.5 15.5 9 9.5 9 6" fill="currentColor" fill-opacity="0.15" />
      <path d="M4 20L8 16" stroke-width="2.5" />
      <path d="M8 16L7 13" stroke-width="2" />
      <rect x="13.5" y="11.5" width="8" height="8" rx="2.5" fill="currentColor" fill-opacity="0.25" stroke-width="1.6" />
      <path d="M17.5 13V18" stroke-width="2" />
      <path d="M15 15.5H20" stroke-width="2" />
    </svg>
  `,

  // 6. Molar & Endodontics (طبيب أسنان عام وحشوات وعلاج جذور)
  molar: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M5 6.5C5 4 7 2.5 12 2.5C17 2.5 19 4 19 6.5C19 11.5 17.8 21.5 15.2 21.5C13.5 21.5 13.2 16.5 12 16.5C10.8 16.5 10.5 21.5 8.8 21.5C6.2 21.5 5 11.5 5 6.5Z" fill="currentColor" fill-opacity="0.15" />
      <path d="M8 6C10 7.5 14 7.5 16 6" />
      <path d="M12 7V11" />
      <path d="M8.8 14C8.8 16 9.3 18.2 9.7 19.5" stroke-width="1.6" stroke-dasharray="1.5 2" />
      <path d="M15.2 14C15.2 16 14.7 18.2 14.3 19.5" stroke-width="1.6" stroke-dasharray="1.5 2" />
    </svg>
  `,

  // 7. Dental Mirror (كشوفات وأشعة وتشخيص)
  mirror: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <circle cx="8" cy="8" r="5.5" fill="currentColor" fill-opacity="0.2" />
      <path d="M6 6C7 5 9 5 10 6" stroke-width="1.4" />
      <path d="M12 12L14 14" stroke-width="2.5" />
      <path d="M14 14L21 21" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  // 8. Dental Whitening (تجميل وتبييض وتنظيف)
  whitening: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M5 6.5C5 4 7 2.5 12 2.5C17 2.5 19 4 19 6.5C19 11.5 17.8 21.5 15.2 21.5C13.5 21.5 13.2 16.5 12 16.5C10.8 16.5 10.5 21.5 8.8 21.5C6.2 21.5 5 11.5 5 6.5Z" fill="currentColor" fill-opacity="0.15" />
      <path d="M12 7L13.2 9.8L16 11L13.2 12.2L12 15L10.8 12.2L8 11L10.8 9.8Z" fill="currentColor" />
      <path d="M19 2.5L19.5 3.8L20.8 4.3L19.5 4.8L19 6.1L18.5 4.8L17.2 4.3L18.5 3.8Z" fill="currentColor" />
    </svg>
  `,

  // 9. Panorama X-ray (أشعة بانوراما)
  panorama: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <rect x="3" y="4" width="18" height="16" rx="3" fill="currentColor" fill-opacity="0.12" />
      <path d="M6 15C7 10 11 8.5 12 8.5C13 8.5 17 10 18 15" stroke-width="2" />
      <path d="M8 12.5V14.5" />
      <path d="M10 10.5V13.5" />
      <path d="M12 9.5V13" />
      <path d="M14 10.5V13.5" />
      <path d="M16 12.5V14.5" />
    </svg>
  `,

  // 10. General Tooth Emblem
  all: (cls = "w-6 h-6") => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">
      <path d="M5 6C5 3.8 6.8 2 12 2C17.2 2 19 3.8 19 6C19 11 17.5 21 15 21C13.5 21 13.2 17 12 17C10.8 17 10.5 21 9 21C6.5 21 5 11 5 6Z" fill="currentColor" fill-opacity="0.2" />
      <path d="M9 10C9.5 11.5 14.5 11.5 15 10" />
      <path d="M12 6V8" />
    </svg>
  `
};

// 1. Shift Configuration
const SHIFTS_CONFIG = {
  morning: {
    label: "الشيفت الصباحي",
    hours: "9:00 ص - 3:30 م",
    startHour: 9,
    startMinute: 0,
    endHour: 15,
    endMinute: 30,
    daysOff: ["الجمعة"]
  },
  evening: {
    label: "الشيفت المسائي",
    hours: "4:00 م - 11:00 م",
    startHour: 16,
    startMinute: 0,
    endHour: 23,
    endMinute: 0,
    daysOff: []
  }
};

const WEEKDAYS = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];

// 2. Clinics Configuration
const CLINICS_LIST = [
  { id: "pedo1", name: "عيادة أطفال 1 (Pedo 1)", shortName: "Pedo 1", isPedo: true },
  { id: "pedo2", name: "عيادة أطفال 2 (Pedo 2)", shortName: "Pedo 2", isPedo: true },
  { id: "c1", name: "عيادة 1", shortName: "Clinic 1" },
  { id: "c2", name: "عيادة 2", shortName: "Clinic 2" },
  { id: "c3", name: "عيادة 3", shortName: "Clinic 3" },
  { id: "c4", name: "عيادة 4", shortName: "Clinic 4" },
  { id: "c5", name: "عيادة 5 (جراحة)", shortName: "Clinic 5", isSurgery: true },
  { id: "pano", name: "غرفة أشعة البانوراما", shortName: "بانوراما", isPano: true },
  { id: "c7", name: "عيادة 7", shortName: "Clinic 7" },
  { id: "c8", name: "عيادة 8", shortName: "Clinic 8" },
  { id: "c9", name: "عيادة 9", shortName: "Clinic 9" },
  { id: "c10", name: "عيادة 10", shortName: "Clinic 10" },
  { id: "c11", name: "عيادة 11", shortName: "Clinic 11" },
  { id: "c12", name: "عيادة 12", shortName: "Clinic 12" },
  { id: "c13_15", name: "عيادة 13:15 (غرس وزراعة)", shortName: "Clinic 13:15" },
  { id: "c14_16", name: "عيادة 14:16 (تركيبات)", shortName: "Clinic 14:16" }
];

const MORNING_COLUMNS = [
  { id: "pedo1", name: "عيادة أطفال (Pedo 1)" },
  { id: "pedo2", name: "عيادة أطفال (Pedo 2)" },
  { id: "c1", name: "Clinic 1" },
  { id: "c2", name: "Clinic 2" },
  { id: "c3", name: "Clinic 3" },
  { id: "c4", name: "Clinic 4" },
  { id: "c5", name: "Clinic 5" },
  { id: "pano", name: "بانوراما" },
  { id: "c7", name: "Clinic 7" },
  { id: "c8", name: "Clinic 8" },
  { id: "c9", name: "Clinic 9" },
  { id: "c10", name: "Clinic 10" },
  { id: "c11", name: "Clinic 11" },
  { id: "c13_15", name: "Clinic 12:15" }
];

const DEFAULT_MORNING_SCHEDULE = {
  "السبت": {
    pedo1: "د/ كريم شاهين",
    pedo2: "د/ مريم عبد الرازق",
    c1: "د/ أيمن محمد",
    c2: "د/ محمود هيكل",
    c3: "د/ أحمد البرسي",
    c4: "د/ رامي ربيع",
    c5: "-",
    pano: "بانوراما",
    c7: "د/ محمد حسين (تقويم)",
    c8: "د/ أحمد خالد",
    c9: "د/ أحمد السيد",
    c10: "د/ محمد عادل الرفاعي",
    c11: "د/ محمد طلعت",
    c13_15: "-"
  },
  "الأحد": {
    pedo1: "د/ كريم شاهين",
    pedo2: "د/ سلوى بدير",
    c1: "د/ زينب أحمد",
    c2: "د/ أيمن محمد",
    c3: "د/ مصطفى فتحي",
    c4: "د/ إسلام ناجي",
    c5: "د/ غادة علاء الدين",
    pano: "بانوراما",
    c7: "د/ رامي ربيع",
    c8: "د/ أحمد خالد",
    c9: "د/ محمود حسن",
    c10: "د/ محمود عباس",
    c11: "د/ محمد مسعود",
    c13_15: "د/ خالد عبد النبي"
  },
  "الإثنين": {
    pedo1: "د/ منار محي الدين",
    pedo2: "د/ نسمة طارق",
    c1: "د/ عادل فتحي",
    c2: "د/ محمود هيكل",
    c3: "د/ أحمد البرسي",
    c4: "د/ رامي ربيع",
    c5: "-",
    pano: "بانوراما",
    c7: "د/ آية علم الدين",
    c8: "د/ أحمد خالد",
    c9: "د/ أحمد السيد",
    c10: "د/ أحمد عبد العظيم",
    c11: "د/ عمر علي كامل",
    c13_15: "د/ أحمد عصام"
  },
  "الثلاثاء": {
    pedo1: "د/ كريم شاهين",
    pedo2: "د/ عمر أشرف",
    c1: "د/ زينب أحمد",
    c2: "د/ أيمن محمد",
    c3: "د/ مصطفى فتحي",
    c4: "د/ ندى عبد الرازق",
    c5: "د/ غادة علاء الدين",
    pano: "بانوراما",
    c7: "د/ محمد بلال",
    c8: "د/ أحمد خالد",
    c9: "د/ محمود حسن",
    c10: "د/ محمود عباس",
    c11: "د/ محمد طلعت",
    c13_15: "د/ خالد عبد النبي"
  },
  "الأربعاء": {
    pedo1: "د/ مي نبيل",
    pedo2: "د/ مريم عبد الرازق",
    c1: "د/ عادل فتحي",
    c2: "د/ محمد الكيناني",
    c3: "د/ أحمد البرسي",
    c4: "د/ آية علم الدين",
    c5: "-",
    pano: "بانوراما",
    c7: "د/ محمد بلال",
    c8: "د/ مينا رجائي",
    c9: "د/ أحمد السيد",
    c10: "د/ أحمد سامي",
    c11: "د/ أحمد عصام",
    c13_15: "-"
  },
  "الخميس": {
    pedo1: "د/ منة الله أشرف",
    pedo2: "د/ نسمة طارق",
    c1: "د/ زينب أحمد",
    c2: "د/ أيمن محمد",
    c3: "د/ حازم غراب",
    c4: "د/ ندى عبد الرازق",
    c5: "د/ غادة علاء الدين",
    pano: "بانوراما",
    c7: "د/ أحمد السكري",
    c8: "د/ أحمد خالد",
    c9: "د/ محمود حسن",
    c10: "د/ أحمد عبد العظيم",
    c11: "د/ محمد مسعود",
    c13_15: "د/ خالد عبد النبي"
  },
  "الجمعة": {
    _isHoliday: true
  }
};

const EVENING_COLUMNS = [
  { id: "pedo1", name: "عيادة أطفال (Pedo 1)" },
  { id: "pedo2", name: "عيادة أطفال (Pedo 2)" },
  { id: "c1", name: "Clinic 1" },
  { id: "c2", name: "Clinic 2" },
  { id: "c3", name: "Clinic 3" },
  { id: "c4", name: "Clinic 4" },
  { id: "c5", name: "Clinic 5" },
  { id: "pano", name: "بانوراما" },
  { id: "c7", name: "Clinic 7" },
  { id: "c8", name: "Clinic 8" },
  { id: "c9", name: "Clinic 9" },
  { id: "c10", name: "Clinic 10" },
  { id: "c11", name: "Clinic 11" },
  { id: "c12", name: "Clinic 12" },
  { id: "c13_15", name: "Clinic 13:15" },
  { id: "c14_16", name: "Clinic 14:16" }
];

const DEFAULT_EVENING_SCHEDULE = {
  "السبت": {
    pedo1: "د/ روان عادل",
    pedo2: "د/ أميرة رمضان",
    c1: "د/ أحمد البدراوي",
    c2: "د/ مينا رجائي",
    c3: "د/ شعبان عبد الباري",
    c4: "د/ أحمد عبد الحميد",
    c5: "د/ شادي علي (جراحه)",
    pano: "بانوراما",
    c7: "د/ عبد العزيز (تقويم)",
    c8: "د/ محمد خليل",
    c9: "د/ أحمد السيد",
    c10: "د/ عمرو خليل",
    c11: "د/ إسلام طلعت",
    c12: "-",
    c13_15: "-",
    c14_16: "-"
  },
  "الأحد": {
    pedo1: "د/ مصطفى عيد",
    pedo2: "د/ روان عادل",
    c1: "د/ مصطفى السنباطي (تركيبات متحركه)",
    c2: "د/ أحمد السكري",
    c3: "د/ أحمد سامي",
    c4: "د/ محمد بلال",
    c5: "د/ محمد حموده (جراحه)",
    pano: "بانوراما",
    c7: "د/ أحمد الشاذلي",
    c8: "د/ محمد كامل",
    c9: "د/ شعبان عبد الباري",
    c10: "د/ حازم غراب",
    c11: "-",
    c12: "-",
    c13_15: "د/ خالد عبد النبي (غرس الأسنان)",
    c14_16: "د/ عبد الرحمن (تركيبات متحركه)"
  },
  "الإثنين": {
    pedo1: "د/ كريم شاهين",
    pedo2: "د/ عمر أشرف",
    c1: "د/ إسلام ناجي",
    c2: "د/ محمد عادل",
    c3: "د/ مصطفى فتحي (تركيبات متحركه)",
    c4: "د/ أحمد عبد الحميد",
    c5: "د/ شادي علي (جراحه)",
    pano: "بانوراما",
    c7: "د/ أحمد سامي",
    c8: "د/ محمد كامل",
    c9: "د/ أحمد السيد",
    c10: "د/ عمرو خليل",
    c11: "د/ إسلام طلعت",
    c12: "-",
    c13_15: "-",
    c14_16: "-"
  },
  "الثلاثاء": {
    pedo1: "د/ أميرة رمضان",
    pedo2: "د/ آمنة الله",
    c1: "د/ مصطفى السنباطي (تركيبات متحركه)",
    c2: "د/ محمد مراد",
    c3: "د/ محمد غلاب",
    c4: "د/ أحمد عبد الحميد",
    c5: "د/ محمد حموده (جراحه)",
    pano: "بانوراما",
    c7: "د/ شريف أحمد",
    c8: "د/ محمد كامل",
    c9: "د/ محمد خليل",
    c10: "د/ عمرو خليل",
    c11: "-",
    c12: "-",
    c13_15: "د/ خالد عبد النبي (غرس الأسنان)",
    c14_16: "د/ عبد الرحمن (تركيبات متحركه)"
  },
  "الأربعاء": {
    pedo1: "د/ مصطفى عيد",
    pedo2: "د/ هبه ماضي",
    c1: "د/ أحمد البدراوي",
    c2: "د/ محمد عادل",
    c3: "د/ مصطفى فتحي (تركيبات متحركه)",
    c4: "د/ إسلام طلعت",
    c5: "د/ أحمد قاسم (جراحه)",
    pano: "بانوراما",
    c7: "د/ عبد العزيز (تقويم)",
    c8: "د/ شريف أحمد",
    c9: "د/ أحمد السيد",
    c10: "د/ أحمد الشاذلي",
    c11: "د/ محمود هيكل",
    c12: "-",
    c13_15: "-",
    c14_16: "-"
  },
  "الخميس": {
    pedo1: "د/ مي نبيل",
    pedo2: "د/ هبه ماضي",
    c1: "د/ مصطفى السنباطي (تركيبات متحركه)",
    c2: "د/ محمد مراد",
    c3: "د/ محمد غلاب",
    c4: "د/ عمر علي كامل",
    c5: "د/ محمد حموده (جراحه)",
    pano: "بانوراما",
    c7: "د/ شريف أحمد",
    c8: "د/ محمد كامل",
    c9: "د/ شعبان عبد الباري",
    c10: "د/ إسلام ناجي",
    c11: "-",
    c12: "-",
    c13_15: "د/ خالد عبد النبي (غرس الأسنان)",
    c14_16: "د/ عبد الرحمن (تركيبات متحركه)"
  },
  "الجمعة": {
    pedo1: "د/ كريم شاهين",
    pedo2: "د/ عمر أشرف",
    c1: "د/ أحمد البدراوي",
    c2: "د/ محمد مراد",
    c3: "د/ محمد غلاب",
    c4: "د/ محمد الكيناني",
    c5: "د/ أحمد قاسم (جراحه)",
    pano: "بانوراما",
    c7: "د/ شريف حسين (تقويم)",
    c8: "د/ شريف أحمد",
    c9: "د/ شعبان عبد الباري",
    c10: "د/ إسلام ناجي",
    c11: "د/ أحمد السكري",
    c12: "-",
    c13_15: "-",
    c14_16: "-"
  }
};

// Mutable active schedules loaded from localStorage or default baseline
let MORNING_SCHEDULE = (function() {
  const s = localStorage.getItem('elgawhara_morning_schedule');
  if (s) { try { return JSON.parse(s); } catch (e) {} }
  return JSON.parse(JSON.stringify(DEFAULT_MORNING_SCHEDULE));
})();

let EVENING_SCHEDULE = (function() {
  const s = localStorage.getItem('elgawhara_evening_schedule');
  if (s) { try { return JSON.parse(s); } catch (e) {} }
  return JSON.parse(JSON.stringify(DEFAULT_EVENING_SCHEDULE));
})();

let CUSTOM_DOCTORS = (function() {
  const s = localStorage.getItem('elgawhara_custom_doctors');
  if (s) { try { return JSON.parse(s); } catch (e) {} }
  return [];
})();

// ============================================================
// 3. Arabic Normalization Engine (Fuzzy & Flexible Search)
// ============================================================
function normalizeArabic(text) {
  if (!text) return "";
  return text
    .toString()
    .replace(/[\u064B-\u065F\u0670]/g, "") // Tashkeel
    .replace(/\u0640/g, "") // Tatweel
    .replace(/[أإآٱ]/g, "ا")
    .replace(/[ىي]/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ء/g, "")
    .replace(/^(د\/|د\.|دكتور\s*)/gi, "")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isArabicMatch(targetText, query) {
  if (!query) return true;
  if (!targetText) return false;

  const normTarget = normalizeArabic(targetText);
  const normQuery = normalizeArabic(query);
  if (!normQuery) return true;

  if (normTarget.includes(normQuery)) return true;

  const noSpaceTarget = normTarget.replace(/\s+/g, "");
  const noSpaceQuery = normQuery.replace(/\s+/g, "");
  if (noSpaceTarget.includes(noSpaceQuery)) return true;

  const queryTokens = normQuery.split(" ").filter(Boolean);
  if (queryTokens.length > 1) {
    const allTokensMatch = queryTokens.every(token => 
      normTarget.includes(token) || noSpaceTarget.includes(token)
    );
    if (allTokensMatch) return true;
  }

  return false;
}

// ============================================================
// 4. Aggregating Doctor Profiles & Schedule
// ============================================================
function buildDoctorsDatabase() {
  const doctorMap = {};

  function cleanName(raw) {
    if (!raw || raw === "-" || raw === "بانوراما") return null;
    return raw.trim();
  }

  function extractSpecialty(raw) {
    if (!raw) return "طبيب أسنان عام";
    if (raw.includes("جراحه") || raw.includes("جراحة")) return "جراحة الفم والأسنان";
    if (raw.includes("تقويم")) return "تقويم الأسنان";
    if (raw.includes("غرس") || raw.includes("زراعة")) return "غرس وزراعة الأسنان";
    if (raw.includes("تركيبات")) return "تركيبات متحركة وثابتة";
    return null;
  }

  function getBaseDoctorName(raw) {
    if (!raw) return "";
    return raw.replace(/\(.*?\)/g, "").trim();
  }

  // Scan Morning
  Object.keys(MORNING_SCHEDULE).forEach(day => {
    const dayData = MORNING_SCHEDULE[day];
    if (dayData._isHoliday) return;

    MORNING_COLUMNS.forEach(col => {
      const val = cleanName(dayData[col.id]);
      if (!val) return;

      const baseName = getBaseDoctorName(val);
      const isPedo = col.id.startsWith("pedo");
      const spec = extractSpecialty(val) || (isPedo ? "طب أسنان أطفال (Pedo)" : "طبيب أسنان عام");

      if (!doctorMap[baseName]) {
        doctorMap[baseName] = {
          name: baseName,
          specialty: spec,
          isPedo: isPedo,
          schedule: []
        };
      } else if (spec !== "طبيب أسنان عام" && doctorMap[baseName].specialty === "طبيب أسنان عام") {
        doctorMap[baseName].specialty = spec;
      }

      doctorMap[baseName].schedule.push({
        day: day,
        shift: "morning",
        shiftLabel: "صباحي",
        time: "9:00 ص - 3:30 م",
        clinic: col.name,
        clinicId: col.id
      });
    });
  });

  // Scan Evening
  Object.keys(EVENING_SCHEDULE).forEach(day => {
    const dayData = EVENING_SCHEDULE[day];
    EVENING_COLUMNS.forEach(col => {
      const val = cleanName(dayData[col.id]);
      if (!val) return;

      const baseName = getBaseDoctorName(val);
      const isPedo = col.id.startsWith("pedo");
      const spec = extractSpecialty(val) || (isPedo ? "طب أسنان أطفال (Pedo)" : "طبيب أسنان عام");

      if (!doctorMap[baseName]) {
        doctorMap[baseName] = {
          name: baseName,
          specialty: spec,
          isPedo: isPedo,
          schedule: []
        };
      } else if (spec !== "طبيب أسنان عام" && doctorMap[baseName].specialty === "طبيب أسنان عام") {
        doctorMap[baseName].specialty = spec;
      }

      doctorMap[baseName].schedule.push({
        day: day,
        shift: "evening",
        shiftLabel: "مسائي",
        time: "4:00 م - 11:00 م",
        clinic: col.name,
        clinicId: col.id
      });
    });
  });

  // Merge any custom doctors who might not have active clinic slots yet
  CUSTOM_DOCTORS.forEach(cd => {
    if (!doctorMap[cd.name]) {
      doctorMap[cd.name] = {
        name: cd.name,
        specialty: cd.specialty || "طبيب أسنان عام",
        isPedo: !!cd.isPedo,
        schedule: cd.schedule || []
      };
    } else if (cd.specialty) {
      doctorMap[cd.name].specialty = cd.specialty;
    }
  });

  const docs = Object.values(doctorMap).sort((a, b) => a.name.localeCompare(b.name, 'ar'));
  docs.forEach(d => {
    d._normName = normalizeArabic(d.name);
    d._normSpec = normalizeArabic(d.specialty);
    d._normSchedule = (d.schedule || []).map(s => normalizeArabic(s.clinic) + ' ' + normalizeArabic(s.day)).join(' ');
  });
  return docs;
}

let DOCTORS = buildDoctorsDatabase();

// ============================================================
// 5. Official Miami Branch Dental Services & Price Database (171 Procedures)
// ============================================================
const DEFAULT_SERVICES = [
  // 1. كشوفات وبنج (Examinations & Anesthesia)
  { id: 1, name: "كشف وفحص عيادة (أخصائي)", category: "كشوفات وبنج", specialistPrice: 200, consultantPrice: 200, price: 200, duration: "20 دقيقة", notes: "فحص شامل وتشخيص مبدئي" },
  { id: 2, name: "كشف وفحص عيادة (استشاري)", category: "كشوفات وبنج", specialistPrice: 250, consultantPrice: 250, price: 250, duration: "25 دقيقة", notes: "فحص استشاري متخصص ووضع خطة علاج متكاملة" },
  { id: 3, name: "بنج كلي وعمليات خارجية بالمستشفى", category: "كشوفات وبنج", specialistPrice: 0, consultantPrice: 0, price: 0, duration: "حسب العملية", notes: "تحدد التكلفة بناءً على المستشفى وطبيعة الجراحة" },

  // 2. جراحة الفم والأسنان (Oral Surgery #1-29)
  { id: 4, name: "خلع عادي", category: "جراحة الفم والأسنان", specialistPrice: 400, consultantPrice: 400, price: 400, duration: "20 دقيقة", notes: "خلع سن أو ضرس بسيط مع تخدير موضعي" },
  { id: 5, name: "خلع جراحي", category: "جراحة الفم والأسنان", specialistPrice: 500, consultantPrice: 500, price: 500, duration: "30 دقيقة", notes: "خلع جراحي مع شق لثوي بسيط" },
  { id: 6, name: "خلع بتقسيم الضرس", category: "جراحة الفم والأسنان", specialistPrice: 600, consultantPrice: 600, price: 600, duration: "35 دقيقة", notes: "فصل الجذور جراحياً للحفاظ على عظام الفك" },
  { id: 7, name: "خلع بروافع وغرز", category: "جراحة الفم والأسنان", specialistPrice: 700, consultantPrice: 700, price: 700, duration: "40 دقيقة", notes: "يشمل استخدام روافع خاصة وخياطة جراحية" },
  { id: 8, name: "خلع ضرس عقل عادي", category: "جراحة الفم والأسنان", specialistPrice: 600, consultantPrice: 600, price: 600, duration: "30 دقيقة", notes: "ضرس عقل بزوغ كامل دون انحشار" },
  { id: 9, name: "خلع ضرس عقل جراحي", category: "جراحة الفم والأسنان", specialistPrice: 800, consultantPrice: 800, price: 800, duration: "45 دقيقة", notes: "تدخل جراحي لإزالة ضرس العقل" },
  { id: 10, name: "خلع ضرس عقل جراحي مدفون باللثة", category: "جراحة الفم والأسنان", specialistPrice: 1500, consultantPrice: 1500, price: 1500, duration: "45 دقيقة", notes: "انحشار أنسجة رخوة (Soft tissue impaction)" },
  { id: 11, name: "خلع ضرس عقل جراحي مدفون بالعظام جزئياً", category: "جراحة الفم والأسنان", specialistPrice: 1800, consultantPrice: 1800, price: 1800, duration: "50 دقيقة", notes: "انحشار عظمي جزئي (Partial bony impaction)" },
  { id: 12, name: "خلع ضرس عقل جراحي مدفون بالعظام كلياً", category: "جراحة الفم والأسنان", specialistPrice: 2000, consultantPrice: 2000, price: 2000, duration: "60 دقيقة", notes: "انحشار عظمي كامل (Complete bony impaction)" },
  { id: 13, name: "خلع ضرس عقل مدفون Distoangular", category: "جراحة الفم والأسنان", specialistPrice: 2500, consultantPrice: 2500, price: 2500, duration: "60 دقيقة", notes: "انحشار مائل للخلف معقد" },
  { id: 14, name: "خلع ضرس عقل مدفون أفقي Horizontal", category: "جراحة الفم والأسنان", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "60 دقيقة", notes: "انحشار أفقي تام داخل عظم الفك" },
  { id: 15, name: "خلع ضرس عقل مدفون قريب من العصب", category: "جراحة الفم والأسنان", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "60 دقيقة", notes: "جراحة دقيقة لحماية العصب الفكي السفلي" },
  { id: 16, name: "إطالة اللثة للفك الواحد Crown Lengthening", category: "جراحة الفم والأسنان", specialistPrice: 2500, consultantPrice: 2500, price: 2500, duration: "45 دقيقة", notes: "جراحة تجميلية للثة للفك الواحد" },
  { id: 17, name: "إزالة جزء من اللثة جراحياً للفك Gingivectomy", category: "جراحة الفم والأسنان", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "45 دقيقة", notes: "قص لثة جراحي لعلاج التضخم أو الابتسامة اللثوية" },
  { id: 18, name: "إزالة جزء من اللثة والعظم جراحياً للفك", category: "جراحة الفم والأسنان", specialistPrice: 5000, consultantPrice: 5000, price: 5000, duration: "60 دقيقة", notes: "إعادة تشكيل عظام ولثة الفك جراحياً" },
  { id: 19, name: "إزالة لحمية نامية لـ 6 أسنان", category: "جراحة الفم والأسنان", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "40 دقيقة", notes: "استئصال الأنسجة الزائدة حول 6 أسنان" },
  { id: 20, name: "استئصال وكحت كيس متحوصل بعظام الفك Cyst Enucleation", category: "جراحة الفم والأسنان", specialistPrice: 5000, consultantPrice: 5000, price: 5000, duration: "60 دقيقة", notes: "إزالة كاملة للكيس مع تنظيف التجويف العظمي" },
  { id: 21, name: "غلق ناسور بسقف الفم والجيب الأنفي Oroantral Fistula", category: "جراحة الفم والأسنان", specialistPrice: 4000, consultantPrice: 4000, price: 4000, duration: "60 دقيقة", notes: "غلق جراحي متقدم لناسور الجيب الفكي" },
  { id: 22, name: "تثبيت أسنان Dentoalveolar Fracture", category: "جراحة الفم والأسنان", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "45 دقيقة", notes: "جبيرة وتثبيت للأسنان المخلخلة أو بعد الصدمات" },
  { id: 23, name: "فتح خراج وتنظيف صديدي", category: "جراحة الفم والأسنان", specialistPrice: 250, consultantPrice: 250, price: 250, duration: "20 دقيقة", notes: "تصريف الخراج ووضع شاش علاجي" },
  { id: 24, name: "فتح خراج كبير وتصفية كيس صديدي", category: "جراحة الفم والأسنان", specialistPrice: 1500, consultantPrice: 1500, price: 1500, duration: "40 دقيقة", notes: "تصريف جراحي عميق لخراجات الوجه والفكين" },
  { id: 25, name: "غيار على الجرح ومتابعة بعد الجراحة", category: "جراحة الفم والأسنان", specialistPrice: 650, consultantPrice: 650, price: 650, duration: "15 دقيقة", notes: "تنظيف وتغيير الضمادات ومتابعة الالتئام" },
  { id: 26, name: "كشف ناب أو أسنان مدفونة بعظام الفك Surgical Exposure", category: "جراحة الفم والأسنان", specialistPrice: 2500, consultantPrice: 2500, price: 2500, duration: "45 دقيقة", notes: "كشف السن المدفون لتركيب زر تقويمي" },
  { id: 27, name: "وضع عظام صناعية وغشاء حيوي Bone Graft & Membrane", category: "جراحة الفم والأسنان", specialistPrice: 5000, consultantPrice: 5000, price: 5000, duration: "45 دقيقة", notes: "بناء وتكثيف عظام الفك استعداداً للزراعة" },
  { id: 28, name: "غرز تجميلية لجروح متعددة بالوجه والشفة", category: "جراحة الفم والأسنان", specialistPrice: 1500, consultantPrice: 1500, price: 1500, duration: "30 دقيقة", notes: "خياطة تجميلية دقيقة لا تترك ندبات" },
  { id: 29, name: "رفع الجيب الأنفي للسنة Sinus Lift", category: "جراحة الفم والأسنان", specialistPrice: 0, consultantPrice: 0, price: 0, duration: "60 دقيقة", notes: "حسب الاتفاق ونوع الرفع (مفتوح / مغلق)" },
  { id: 30, name: "حقن بلازما غنية بالصفائح للسنة الواحدة PRP", category: "جراحة الفم والأسنان", specialistPrice: 500, consultantPrice: 500, price: 500, duration: "25 دقيقة", notes: "تحفيز التئام الأنسجة والعظام" },
  { id: 31, name: "استئصال قمة الجذر Apicoectomy", category: "جراحة الفم والأسنان", specialistPrice: 3500, consultantPrice: 3500, price: 3500, duration: "50 دقيقة", notes: "بتر ذروة الجذر وتنظيف التجويف" },
  { id: 32, name: "تسوية حافة عظام الفك Alveoloplasty", category: "جراحة الفم والأسنان", specialistPrice: 1500, consultantPrice: 1500, price: 1500, duration: "30 دقيقة", notes: "تهيئة العظم لاستقبال التركيبات" },

  // 3. تنظيف وتبييض الأسنان (Scaling & Whitening #30-36)
  { id: 33, name: "تنظيف جيب لثوي جزئي", category: "تنظيف وتبييض الأسنان", specialistPrice: 200, consultantPrice: 200, price: 200, duration: "15 دقيقة", notes: "تنظيف عميق لجيب اللثة الملتهب" },
  { id: 34, name: "تنظيف جير وتلميع (جلسة واحدة)", category: "تنظيف وتبييض الأسنان", specialistPrice: 700, consultantPrice: 800, price: 700, duration: "30 دقيقة", notes: "إزالة الجير بالموجات فوق الصوتية وتلميع كامل" },
  { id: 35, name: "تنظيف جير وتلميع (جلستان)", category: "تنظيف وتبييض الأسنان", specialistPrice: 800, consultantPrice: 900, price: 800, duration: "جلستان", notes: "للحالات ذات الترسبات الكثيفة والتهابات اللثة" },
  { id: 36, name: "تلميع أسنان بسيط Polishing", category: "تنظيف وتبييض الأسنان", specialistPrice: 300, consultantPrice: 300, price: 300, duration: "15 دقيقة", notes: "تلميع سطحي لمعجون خاص" },
  { id: 37, name: "تلميع أسنان لصبغات زائدة Heavy Stains", category: "تنظيف وتبييض الأسنان", specialistPrice: 400, consultantPrice: 400, price: 400, duration: "20 دقيقة", notes: "إزالة تصبغات الشاي والقهوة والتدخين" },
  { id: 38, name: "تبييض أسنان ليزر / زووم (يدوم حتى 4 شهور)", category: "تنظيف وتبييض الأسنان", specialistPrice: 6000, consultantPrice: 8000, price: 6000, duration: "45 دقيقة", notes: "جلسة تبييض ضوئي فوري بالعيادة" },
  { id: 39, name: "تبييض أسنان ليزر / زووم (يدوم حتى 8 شهور)", category: "تنظيف وتبييض الأسنان", specialistPrice: 10000, consultantPrice: 12000, price: 10000, duration: "60 دقيقة", notes: "تبييض عميق مركز مع مادة حماية الحساسية" },

  // 4. حشوات الأسنان (Restorations #37-48)
  { id: 40, name: "حشو بلاتين (أملجم) كلاس 1", category: "حشوات الأسنان", specialistPrice: 600, consultantPrice: 700, price: 600, duration: "30 دقيقة", notes: "حشو فضي للسطح الإطباقي" },
  { id: 41, name: "حشو بلاتين (أملجم) كلاس 2", category: "حشوات الأسنان", specialistPrice: 700, consultantPrice: 900, price: 700, duration: "35 دقيقة", notes: "حشو فضي للأسطح الملاصقة" },
  { id: 42, name: "حشو بلاتين مركب لتقفيل العصب", category: "حشوات الأسنان", specialistPrice: 800, consultantPrice: 1000, price: 800, duration: "40 دقيقة", notes: "بناء الضرس بالبلاتين بعد علاج الجذور" },
  { id: 43, name: "حشو بلاتين MOD متعدد الأسطح", category: "حشوات الأسنان", specialistPrice: 800, consultantPrice: 1000, price: 800, duration: "40 دقيقة", notes: "حشو 3 أسطح (ميزيال، وسطي، ديستال)" },
  { id: 44, name: "حشو كمبوزيت لتقفيل العصب", category: "حشوات الأسنان", specialistPrice: 1000, consultantPrice: 1000, price: 1000, duration: "35 دقيقة", notes: "بناء كمبوزيت بعد حشو الجذور مباشرة" },
  { id: 45, name: "حشو كمبوزيت تجميلي خلفي كلاس 1", category: "حشوات الأسنان", specialistPrice: 1000, consultantPrice: 1200, price: 1000, duration: "35 دقيقة", notes: "حشوة ضوئية بلون السن للضروس الخلفية" },
  { id: 46, name: "حشو كمبوزيت تجميلي خلفي كلاس 2", category: "حشوات الأسنان", specialistPrice: 1200, consultantPrice: 1500, price: 1200, duration: "40 دقيقة", notes: "حشوة ضوئية للأسطح الملاصقة الخلفية" },
  { id: 47, name: "حشو كمبوزيت تجميلي أمامي كلاس 3 أو 5", category: "حشوات الأسنان", specialistPrice: 1500, consultantPrice: 1700, price: 1500, duration: "45 دقيقة", notes: "حشوة تجميلية فائقة الدقة للأسنان الأمامية وعنق السن" },
  { id: 48, name: "حشو كمبوزيت بضوء الهالوجين", category: "حشوات الأسنان", specialistPrice: 1000, consultantPrice: 1200, price: 1000, duration: "35 دقيقة", notes: "تقسية ضوئية بجهاز هالوجين طبي" },
  { id: 49, name: "حشو كمبوزيت MOD متعدد الأسطح", category: "حشوات الأسنان", specialistPrice: 1700, consultantPrice: 2000, price: 1700, duration: "45 دقيقة", notes: "بناء تجميلي لـ 3 أسطح بالكمبوزيت" },
  { id: 50, name: "حشو زجاجي كيتاك فل Ketac-Fil", category: "حشوات الأسنان", specialistPrice: 1000, consultantPrice: 1000, price: 1000, duration: "30 دقيقة", notes: "حشوة زجاجية غنية بالفلورايد مقاومة للتسوس" },
  { id: 51, name: "حشو فينير تجميلي مباشر Direct Composite Veneer", category: "حشوات الأسنان", specialistPrice: 1800, consultantPrice: 2000, price: 1800, duration: "50 دقيقة", notes: "تجميل وتغطية واجهة السن الأمامي بالكمبوزيت" },

  // 5. علاج العصب والجذور بدون حشو نهائي (Endodontics #49-62)
  { id: 52, name: "علاج عصب روتاري - قناة واحدة (بدون حشو)", category: "علاج العصب والجذور", specialistPrice: 1000, consultantPrice: 1200, price: 1000, duration: "30 دقيقة", notes: "تنظيف وتوسيع القناة بأجهزة الروتاري الدقيقة" },
  { id: 53, name: "علاج عصب روتاري - قناتين (بدون حشو)", category: "علاج العصب والجذور", specialistPrice: 1200, consultantPrice: 1400, price: 1200, duration: "35 دقيقة", notes: "للضروس ثنائية القنوات" },
  { id: 54, name: "علاج عصب روتاري - 3 قنوات (بدون حشو)", category: "علاج العصب والجذور", specialistPrice: 1400, consultantPrice: 1600, price: 1400, duration: "45 دقيقة", notes: "للضروس الخلفية ثلاثية القنوات" },
  { id: 55, name: "علاج عصب روتاري لضرس به خراج - قناة واحدة", category: "علاج العصب والجذور", specialistPrice: 1400, consultantPrice: 1500, price: 1400, duration: "40 دقيقة", notes: "يشمل تنظيف التعفن والتعقيم الكيميائي" },
  { id: 56, name: "علاج عصب روتاري لضرس به خراج - قناتين", category: "علاج العصب والجذور", specialistPrice: 1600, consultantPrice: 1700, price: 1600, duration: "45 دقيقة", notes: "بروتوكول تعقيم متقدم للخراج" },
  { id: 57, name: "علاج عصب روتاري لضرس به خراج - 3 قنوات", category: "علاج العصب والجذور", specialistPrice: 1800, consultantPrice: 1900, price: 1800, duration: "50 دقيقة", notes: "تطهير عميق وتضميد دوائي للجذور الملتهبة" },
  { id: 58, name: "إعادة علاج عصب روتاري Re-treatment - قناة واحدة", category: "علاج العصب والجذور", specialistPrice: 1200, consultantPrice: 1400, price: 1200, duration: "45 دقيقة", notes: "إزالة الحشو القديم وإعادة التنظيف والتعقيم" },
  { id: 59, name: "إعادة علاج عصب روتاري Re-treatment - قناتين", category: "علاج العصب والجذور", specialistPrice: 1300, consultantPrice: 1500, price: 1300, duration: "50 دقيقة", notes: "إعادة علاج جذور دقيقة" },
  { id: 60, name: "إعادة علاج عصب روتاري Re-treatment - 3 قنوات", category: "علاج العصب والجذور", specialistPrice: 1600, consultantPrice: 1800, price: 1600, duration: "60 دقيقة", notes: "إعادة علاج للضروس المعقدة" },
  { id: 61, name: "دعامة فايبر بوست Fiber Post", category: "علاج العصب والجذور", specialistPrice: 300, consultantPrice: 300, price: 300, duration: "25 دقيقة", notes: "دعامة ضوئية مرنة لتقوية السن المعالج عصبه" },
  { id: 62, name: "دعامة بوست معدني Metal Post", category: "علاج العصب والجذور", specialistPrice: 200, consultantPrice: 200, price: 200, duration: "20 دقيقة", notes: "دعامة معدنية داخل قناة السن" },
  { id: 63, name: "علاج عصب بالميكروسكوب - حالة خفيفة Mild", category: "علاج العصب والجذور", specialistPrice: 4000, consultantPrice: 4000, price: 4000, duration: "60 دقيقة", notes: "بالميكروسكوب الجراحي شامل التقفيل النهائي" },
  { id: 64, name: "علاج عصب بالميكروسكوب - حالة متوسطة Moderate", category: "علاج العصب والجذور", specialistPrice: 5000, consultantPrice: 5000, price: 5000, duration: "60 دقيقة", notes: "للقنوات المنحنية أو الضيقة شامل التقفيل النهائي" },
  { id: 65, name: "علاج عصب بالميكروسكوب - حالة شديدة Severe", category: "علاج العصب والجذور", specialistPrice: 6000, consultantPrice: 6000, price: 6000, duration: "75 دقيقة", notes: "للقنوات المسدودة أو الأدوات المكسورة شامل التقفيل" },

  // 6. علاج العصب بالتقفيل النهائي (Endodontics with Obturation #161-166)
  { id: 66, name: "علاج عصب روتاري بالحشو النهائي - قناة واحدة", category: "علاج العصب بالتقفيل", specialistPrice: 2200, consultantPrice: 2400, price: 2200, duration: "45 دقيقة", notes: "يشمل تحضير القناة وحشو العصب بالجوتا بركا" },
  { id: 67, name: "علاج عصب روتاري بالحشو النهائي - قناتين", category: "علاج العصب بالتقفيل", specialistPrice: 2400, consultantPrice: 2600, price: 2400, duration: "50 دقيقة", notes: "تنظيف وتقفيل حراري محكم" },
  { id: 68, name: "علاج عصب روتاري بالحشو النهائي - 3 قنوات", category: "علاج العصب بالتقفيل", specialistPrice: 2600, consultantPrice: 2800, price: 2600, duration: "60 دقيقة", notes: "بروتوكول روتاري كامل مع التقفيل النهائي ثلاثي الأبعاد" },
  { id: 69, name: "إعادة علاج عصب بالحشو النهائي - قناة واحدة", category: "علاج العصب بالتقفيل", specialistPrice: 2400, consultantPrice: 2600, price: 2400, duration: "50 دقيقة", notes: "إزالة الحشو السابق وإعادة التقفيل النهائي" },
  { id: 70, name: "إعادة علاج عصب بالحشو النهائي - قناتين", category: "علاج العصب بالتقفيل", specialistPrice: 2500, consultantPrice: 2700, price: 2500, duration: "60 دقيقة", notes: "إعادة علاج متكامل مع التقفيل" },
  { id: 71, name: "إعادة علاج عصب بالحشو النهائي - 3 قنوات", category: "علاج العصب بالتقفيل", specialistPrice: 2800, consultantPrice: 3000, price: 2800, duration: "70 دقيقة", notes: "إعادة علاج الجذور المعقدة مع الحشو النهائي" },

  // 7. أسنان الأطفال (Pediatric Dentistry #63-85)
  { id: 72, name: "خلع سن لبني للأطفال برش بنج موضعي", category: "أسنان الأطفال", specialistPrice: 150, consultantPrice: 200, price: 150, duration: "15 دقيقة", notes: "للأسنان شديدة الحركة دون ألم أو إبرة" },
  { id: 73, name: "خلع سن لبني للأطفال بحقنة بنج لطيف", category: "أسنان الأطفال", specialistPrice: 200, consultantPrice: 250, price: 200, duration: "20 دقيقة", notes: "تخدير لطيف مخصص لراحة الأطفال" },
  { id: 74, name: "فتح خراج أطفال وتنظيف لثوي", category: "أسنان الأطفال", specialistPrice: 250, consultantPrice: 250, price: 250, duration: "20 دقيقة", notes: "تخفيف الضغط الصديدي وعلاج فوري للألم" },
  { id: 75, name: "متابعة دورية لحافظ المكان Space Maintainer Check", category: "أسنان الأطفال", specialistPrice: 150, consultantPrice: 150, price: 150, duration: "15 دقيقة", notes: "فحص ثبات الجهاز وتوجيه بزوغ السن الدائم" },
  { id: 76, name: "علاج عصب بالبتومي أطفال بالحشو Pulpotomy", category: "أسنان الأطفال", specialistPrice: 1200, consultantPrice: 1300, price: 1200, duration: "30 دقيقة", notes: "استئصال لب التاج وحفظ لب الجذر بالحشو" },
  { id: 77, name: "علاج عصب بالبكتومي أطفال بالحشو Pulpectomy", category: "أسنان الأطفال", specialistPrice: 1300, consultantPrice: 1500, price: 1300, duration: "35 دقيقة", notes: "علاج جذور كامل للسن اللبني بالحشو الممتص" },
  { id: 78, name: "علاج عصب لضرس دائم أطفال (جذور غير مكتملة)", category: "أسنان الأطفال", specialistPrice: 1400, consultantPrice: 1600, price: 1400, duration: "40 دقيقة", notes: "علاج تحفظي لتحفيز انغلاق ذروة الجذر Apexification" },
  { id: 79, name: "حشو جلاس آيونمر أطفال كلاس 1", category: "أسنان الأطفال", specialistPrice: 800, consultantPrice: 800, price: 800, duration: "25 دقيقة", notes: "حشوة زجاجية مانحة للفلورايد" },
  { id: 80, name: "حشو جلاس آيونمر أطفال كلاس 2", category: "أسنان الأطفال", specialistPrice: 1000, consultantPrice: 1000, price: 1000, duration: "30 دقيقة", notes: "حشوة للأسطح الملاصقة لأسنان الأطفال" },
  { id: 81, name: "حشو كمبوزيت لسن لبني أطفال", category: "أسنان الأطفال", specialistPrice: 800, consultantPrice: 800, price: 800, duration: "25 دقيقة", notes: "حشوة تجميلية ملونة أو بيضاء" },
  { id: 82, name: "حشو عصب MTA حيوي للأطفال", category: "أسنان الأطفال", specialistPrice: 1200, consultantPrice: 1300, price: 1200, duration: "30 دقيقة", notes: "مادة MTA الحيوية لترميم وتغطية اللب" },
  { id: 83, name: "حافظ مكان صغير أحادي Side/Single Loop", category: "أسنان الأطفال", specialistPrice: 1100, consultantPrice: 1300, price: 1100, duration: "جلسة مقاس + تركيب", notes: "يحافظ على الفراغ للسن الدائم بعد الخلع المبكر" },
  { id: 84, name: "حافظ مكان كبير ثنائي Nance / Lingual Arch", category: "أسنان الأطفال", specialistPrice: 1300, consultantPrice: 1500, price: 1300, duration: "جلسة مقاس + تركيب", notes: "جهاز مثبت للفكين لحفظ المسافات المتعددة" },
  { id: 85, name: "جلسة فلورايد موضعي واقي للأسنان Topical Fluoride", category: "أسنان الأطفال", specialistPrice: 700, consultantPrice: 800, price: 700, duration: "20 دقيقة", notes: "حماية وتقوية مينا أسنان الأطفال ضد التسوس" },
  { id: 86, name: "جلسة سيلفر ديامين فلورايد SDF لوقف التسوس", category: "أسنان الأطفال", specialistPrice: 700, consultantPrice: 700, price: 700, duration: "20 دقيقة", notes: "تقنية حديثة لإيقاف التسوس دون حفر للأطفال الصغار" },
  { id: 87, name: "سد الشقوق والحفر الواقية Fissure Sealant (للسن)", category: "أسنان الأطفال", specialistPrice: 700, consultantPrice: 700, price: 700, duration: "20 دقيقة", notes: "طبقة عازلة تحمي الضروس الدائمة الجديدة من التسوّس" },
  { id: 88, name: "إزالة التصبغات والاصفرار لأسنان الأطفال", category: "أسنان الأطفال", specialistPrice: 500, consultantPrice: 500, price: 500, duration: "20 دقيقة", notes: "تنظيف لطيف وتلميع بنكهات محببة للطفل" },
  { id: 89, name: "علاج التصبغات بالايكون Icon (حالة خفيفة)", category: "أسنان الأطفال", specialistPrice: 10000, consultantPrice: 10000, price: 10000, duration: "45 دقيقة", notes: "علاج البقع البيضاء بدون حفر Resin Infiltration" },
  { id: 90, name: "علاج التصبغات بالايكون Icon (حالة متوسطة)", category: "أسنان الأطفال", specialistPrice: 12000, consultantPrice: 12000, price: 12000, duration: "50 دقيقة", notes: "إزالة البقع العميقة واستعادة مظهر المينا الطبيعي" },
  { id: 91, name: "علاج التصبغات بالايكون Icon (حالة شديدة)", category: "أسنان الأطفال", specialistPrice: 15000, consultantPrice: 15000, price: 15000, duration: "60 دقيقة", notes: "حالات التصبغ الواسعة المعقدة" },
  { id: 92, name: "علاج تصبغات الفلور Fluorosis MIH - I.Mate", category: "أسنان الأطفال", specialistPrice: 2000, consultantPrice: 2000, price: 2000, duration: "35 دقيقة", notes: "علاج نقص تكلس المينا ونقص تمعدن القواطع والرحى" },
  { id: 93, name: "تلبيسة أطفال معدنية لسن لبني Stainless Steel Crown", category: "أسنان الأطفال", specialistPrice: 1200, consultantPrice: 1200, price: 1200, duration: "30 دقيقة", notes: "طربوش متين يحمي الضرس اللبني حتى موعد سقوطه الطبيعي" },
  { id: 94, name: "تلبيسة أطفال معدنية لضرس دائم SSC", category: "أسنان الأطفال", specialistPrice: 1300, consultantPrice: 1400, price: 1300, duration: "35 دقيقة", notes: "حماية مؤقتة متينة للضروس الدائمة لدى اليافعين" },
  { id: 95, name: "تلبيسة زيركون بيضاء للأطفال Zirconia Crown", category: "أسنان الأطفال", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "35 دقيقة", notes: "طربوش سيراميك زيركون فائق الجمال بلون السن للأطفال" },
  { id: 96, name: "تلبيسة ريزن تجميلية للأسنان الأمامية Strip Crown", category: "أسنان الأطفال", specialistPrice: 2000, consultantPrice: 2000, price: 2000, duration: "30 دقيقة", notes: "استعادة المظهر الطبيعي لأسنان الطفل الأمامية المتسوسة" },

  // 8. التركيبات الثابتة والمتحركة (Prosthodontics #86-128)
  { id: 97, name: "طربوش بورسلين يدوي PFM Manual", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1800, consultantPrice: 2000, price: 1800, duration: "معملي (جلستان)", notes: "خزف مدمج بمعدن متين" },
  { id: 98, name: "طربوش بورسلين كمبيوتر PFM CAD/CAM", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1800, consultantPrice: 2000, price: 1800, duration: "معملي (جلستان)", notes: "تصميم رقمي عالي الدقة" },
  { id: 99, name: "طربوش زيركون يدوي Zirconia Manual", category: "التركيبات الثابتة والمتحركة", specialistPrice: 3800, consultantPrice: 4000, price: 3800, duration: "معملي (جلستان)", notes: "زيركون خالص فائق القوة خالٍ من المعادن" },
  { id: 100, name: "طربوش زيركون كمبيوتر Zirconia CAD/CAM", category: "التركيبات الثابتة والمتحركة", specialistPrice: 4000, consultantPrice: 4200, price: 4000, duration: "معملي (جلستان)", notes: "خراطة رقمية ثلاثية الأبعاد بأعلى معايير الدقة" },
  { id: 101, name: "طربوش إيماكس زيركون فائق الجمال E-MAX Zircon", category: "التركيبات الثابتة والمتحركة", specialistPrice: 5000, consultantPrice: 5300, price: 5000, duration: "معملي (جلستان)", notes: "أعلى درجات الشفافية والجمال للأسنان الأمامية" },
  { id: 102, name: "واقي أسنان ليلي مرن Night Guard Soft", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1500, consultantPrice: 1500, price: 1500, duration: "معملي (جلستان)", notes: "لحماية الأسنان ومفصل الفك من الجز أثناء النوم" },
  { id: 103, name: "واقي أسنان ليلي صلب Night Guard Hard", category: "التركيبات الثابتة والمتحركة", specialistPrice: 2500, consultantPrice: 2500, price: 2500, duration: "معملي (جلستان)", notes: "معتمد لحالات الضغط الشديد على الأسنان ومشاكل الـ TMJ" },
  { id: 104, name: "سن أكريل متحرك (سن واحد)", category: "التركيبات الثابتة والمتحركة", specialistPrice: 800, consultantPrice: 800, price: 800, duration: "معملي", notes: "تعويض متحرك لسن واحد بمشبك" },
  { id: 105, name: "سنين أكريل متحرك (2 سن)", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1450, consultantPrice: 1450, price: 1450, duration: "معملي", notes: "تعويض متحرك لسنين" },
  { id: 106, name: "3 أسنان أكريل متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1900, consultantPrice: 1900, price: 1900, duration: "معملي", notes: "تعويض متحرك لثلاثة أسنان" },
  { id: 107, name: "4 أسنان أكريل متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 2500, consultantPrice: 2500, price: 2500, duration: "معملي", notes: "تعويض متحرك لأربعة أسنان" },
  { id: 108, name: "5 أسنان أكريل متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 3500, consultantPrice: 3500, price: 3500, duration: "معملي", notes: "تعويض جزئي متحرك لخمسة أسنان" },
  { id: 109, name: "نصف طقم أكريل متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 6000, consultantPrice: 6000, price: 6000, duration: "معملي (3 جلسات)", notes: "طقم جزئي أكريلي لفك واحد" },
  { id: 110, name: "طقم أكريل كامل للفكين Full Acrylic Denture", category: "التركيبات الثابتة والمتحركة", specialistPrice: 11000, consultantPrice: 11000, price: 11000, duration: "معملي (4 جلسات)", notes: "طقم كامل علوي وسفلي مع أسنان متطابقة" },
  { id: 111, name: "سن مرن متحرك (سن واحد)", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1000, consultantPrice: 1000, price: 1000, duration: "معملي", notes: "قاعدة مرنة مريحة غير قابلة للكسر" },
  { id: 112, name: "سنين مرن متحرك (2 سن)", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1800, consultantPrice: 1800, price: 1800, duration: "معملي", notes: "تعويض مرن بدون مشابك معدنية ظاهرة" },
  { id: 113, name: "3 أسنان مرن متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 2400, consultantPrice: 2400, price: 2400, duration: "معملي", notes: "تعويض مرن خفيف الوزن" },
  { id: 114, name: "4 أسنان مرن متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 3500, consultantPrice: 3500, price: 3500, duration: "معملي", notes: "مظهر جمالي فائق وتطابق مع لون اللثة" },
  { id: 115, name: "5 أسنان مرن متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 4400, consultantPrice: 4400, price: 4400, duration: "معملي", notes: "تعويض مرن لخمسة أسنان" },
  { id: 116, name: "نصف طقم مرن متحرك", category: "التركيبات الثابتة والمتحركة", specialistPrice: 8000, consultantPrice: 8000, price: 8000, duration: "معملي", notes: "طقم جزئي مرن فائق الراحة لفك واحد" },
  { id: 117, name: "طقم مرن كامل للفكين Flexible Denture", category: "التركيبات الثابتة والمتحركة", specialistPrice: 15000, consultantPrice: 15000, price: 15000, duration: "معملي", notes: "طقم كامل مرن للفكين عالي الجودة" },
  { id: 118, name: "عدسة فينير كمبيوتر CAD/CAM للسن الواحد", category: "التركيبات الثابتة والمتحركة", specialistPrice: 6000, consultantPrice: 6500, price: 6000, duration: "معملي (جلستان)", notes: "عدسة خزفية فائقة الرقة لابتسامة هوليوود الدائمة" },
  { id: 119, name: "فليكسيبول سن واحد", category: "التركيبات الثابتة والمتحركة", specialistPrice: 1400, consultantPrice: 1400, price: 1400, duration: "معملي", notes: "خامة فليكسيبول عالية المرونة" },
  { id: 120, name: "فليكسيبول سنين", category: "التركيبات الثابتة والمتحركة", specialistPrice: 2250, consultantPrice: 2250, price: 2250, duration: "معملي", notes: "تعويض فليكسيبول لسنين" },
  { id: 121, name: "فليكسيبول 3 أسنان", category: "التركيبات الثابتة والمتحركة", specialistPrice: 3350, consultantPrice: 3350, price: 3350, duration: "معملي", notes: "تعويض فليكسيبول لثلاثة أسنان" },
  { id: 122, name: "فليكسيبول 4 أسنان", category: "التركيبات الثابتة والمتحركة", specialistPrice: 4500, consultantPrice: 4500, price: 4500, duration: "معملي", notes: "تعويض فليكسيبول لأربعة أسنان" },
  { id: 123, name: "فليكسيبول 5 أسنان", category: "التركيبات الثابتة والمتحركة", specialistPrice: 5500, consultantPrice: 5500, price: 5500, duration: "معملي", notes: "تعويض فليكسيبول لخمسة أسنان" },
  { id: 124, name: "نصف طقم فليكسيبول", category: "التركيبات الثابتة والمتحركة", specialistPrice: 12000, consultantPrice: 12000, price: 12000, duration: "معملي", notes: "طقم فليكسيبول نصفي لفك واحد" },
  { id: 125, name: "طقم فليكسيبول كامل للفكين", category: "التركيبات الثابتة والمتحركة", specialistPrice: 20000, consultantPrice: 20000, price: 20000, duration: "معملي", notes: "طقم كامل فليكسيبول للفكين" },
  { id: 126, name: "نصف طقم كاست فيتاليوم معدني Vitallium", category: "التركيبات الثابتة والمتحركة", specialistPrice: 13000, consultantPrice: 13000, price: 13000, duration: "معملي", notes: "سبيكة فيتاليوم طبية خفيفة وقوية جداً" },
  { id: 127, name: "طقم كاست فيتاليوم كامل Vitallium", category: "التركيبات الثابتة والمتحركة", specialistPrice: 25000, consultantPrice: 25000, price: 25000, duration: "معملي", notes: "طقم معدني كامل للفكين بأعلى مواصفات القوة" },
  { id: 128, name: "إعادة تبطين طقم أكريل Relining", category: "التركيبات الثابتة والمتحركة", specialistPrice: 2000, consultantPrice: 2000, price: 2000, duration: "معملي (24 ساعة)", notes: "تعديل قاعدة الطقم الأكريلي ليلائم انكماش اللثة" },
  { id: 129, name: "إعادة تبطين طقم مرن Relining", category: "التركيبات الثابتة والمتحركة", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "معملي (24 ساعة)", notes: "إعادة ضبط وتثبيت الطقم المرن" },
  { id: 130, name: "إعادة تثبيت ولصق جسر قديم (حتى سنين)", category: "التركيبات الثابتة والمتحركة", specialistPrice: 100, consultantPrice: 150, price: 100, duration: "15 دقيقة", notes: "لصق بإسمنت طبي دائم" },
  { id: 131, name: "إعادة تثبيت ولصق جسر قديم (أكثر من 3 أسنان)", category: "التركيبات الثابتة والمتحركة", specialistPrice: 150, consultantPrice: 200, price: 150, duration: "20 دقيقة", notes: "إعادة تثبيت الجسور الطويلة بإسمنت خاص" },
  { id: 132, name: "تصليح تركيبة مكسورة بالمقاس", category: "التركيبات الثابتة والمتحركة", specialistPrice: 400, consultantPrice: 500, price: 400, duration: "معملي (24 ساعة)", notes: "لحام الطقم المكسور وأخذ مقاس جديد" },
  { id: 133, name: "إضافة مشبك كلاسبي لتركيبة متحركة Clasp Addition", category: "التركيبات الثابتة والمتحركة", specialistPrice: 500, consultantPrice: 500, price: 500, duration: "معملي", notes: "إضافة مشبك تثبيت إضافي لزيادة ثبات الطقم" },
  { id: 134, name: "طربوش مؤقت معملي Temp Crown Lab", category: "التركيبات الثابتة والمتحركة", specialistPrice: 650, consultantPrice: 700, price: 650, duration: "معملي", notes: "طربوش مؤقت مسبق الصنع من المعمل لحماية السن" },
  { id: 135, name: "طربوش مؤقت عيادة Chairside Temp Crown", category: "التركيبات الثابتة والمتحركة", specialistPrice: 250, consultantPrice: 300, price: 250, duration: "20 دقيقة", notes: "صناعة وتركيب فوري بنفس الجلسة بالعيادة" },
  { id: 136, name: "تاج بورسلين فوق غرسة Implant Crown PFM", category: "التركيبات الثابتة والمتحركة", specialistPrice: 2250, consultantPrice: 2250, price: 2250, duration: "معملي", notes: "تاج خزفي مثبت على دعامة الزرعة" },
  { id: 137, name: "تاج زيركون فوق غرسة Implant Crown Zirconia", category: "التركيبات الثابتة والمتحركة", specialistPrice: 4500, consultantPrice: 4500, price: 4500, duration: "معملي", notes: "تاج زيركون مخرط رقمياً بأعلى جمال وثبات فوق الزرعة" },
  { id: 138, name: "ابتسامة هوليوود سناب أون فك واحد Snap-On Smile", category: "التركيبات الثابتة والمتحركة", specialistPrice: 4000, consultantPrice: 4000, price: 4000, duration: "معملي (جلستان)", notes: "ابتسامة تجميلية متحركة وسريعة بدون برد للأسنان" },
  { id: 139, name: "ابتسامة هوليوود سناب أون فكين Snap-On Smile", category: "التركيبات الثابتة والمتحركة", specialistPrice: 8000, consultantPrice: 8000, price: 8000, duration: "معملي (جلستان)", notes: "ابتسامة هوليوود كاملة للفكين العلوي والسفلي" },

  // 9. الغرسات وزراعة الأسنان (Dental Implants #129-145)
  { id: 140, name: "غرسة سن مصري تيتانيوم معتمدة", category: "الغرسات والزراعة", specialistPrice: 5000, consultantPrice: 5000, price: 5000, duration: "جلسة جراحة", notes: "زراعة أسنان اقتصادية معتمدة محلياً" },
  { id: 141, name: "غرسة سن تركي تيتانيوم عالية الدقة", category: "الغرسات والزراعة", specialistPrice: 6000, consultantPrice: 6000, price: 6000, duration: "جلسة جراحة", notes: "زراعة تركية ذات جودة عالية وتكامل عظمي سريع" },
  { id: 142, name: "غرسة سن كوري معتمد عالمياً Dentium / Osstem", category: "الغرسات والزراعة", specialistPrice: 7500, consultantPrice: 7500, price: 7500, duration: "جلسة جراحة", notes: "الأكثر انتشاراً وثقة عالمياً بنسب نجاح تتجاوز 98%" },
  { id: 143, name: "غرسة سن كوري ألماني بريميوم", category: "الغرسات والزراعة", specialistPrice: 9000, consultantPrice: 9000, price: 9000, duration: "جلسة جراحة", notes: "هندسة تصنيع ألمانية متقدمة مع سبائك تيتانيوم كورية" },
  { id: 144, name: "غرسة سن سويسري قطعة واحدة One-Piece Implant", category: "الغرسات والزراعة", specialistPrice: 11000, consultantPrice: 11000, price: 11000, duration: "جلسة جراحة", notes: "مناسبة للتحميل الفوري وحالات العظم الضيق" },
  { id: 145, name: "غرسة سن سويسري قطعتين Two-Piece Straumann-Style", category: "الغرسات والزراعة", specialistPrice: 13000, consultantPrice: 13000, price: 13000, duration: "جلسة جراحة", notes: "تقنية سويسرية رائدة تضمن أعلى ثبات طويل الأمد" },
  { id: 146, name: "غرسة سن إيطالي متميز C-Tech / B&B", category: "الغرسات والزراعة", specialistPrice: 15000, consultantPrice: 15000, price: 15000, duration: "جلسة جراحة", notes: "تصميم إيطالي متطور لامتصاص وتوزيع قوى المضغ" },
  { id: 147, name: "غرسة سن إيطالي ذهبي بريميوم Gold Edition", category: "الغرسات والزراعة", specialistPrice: 17000, consultantPrice: 17000, price: 17000, duration: "جلسة جراحة", notes: "معالجة سطحية نانوية بالذهب الخامل لمقاومة البكتيريا" },
  { id: 148, name: "غرسة سن أمريكي عالي الدقة Zimmer / BioHorizons", category: "الغرسات والزراعة", specialistPrice: 19000, consultantPrice: 19000, price: 19000, duration: "جلسة جراحة", notes: "أعلى معايير إدارة الغذاء والدواء الأمريكية FDA" },
  { id: 149, name: "غرسة سن ألماني فائق الجودة والتحمل Ankylos / Bicon", category: "الغرسات والزراعة", specialistPrice: 21000, consultantPrice: 21000, price: 21000, duration: "جلسة جراحة", notes: "قمة الصناعة الألمانية في طب وزراعة الأسنان مع ضمان مدى الحياة" },
  { id: 150, name: "دليل جراحي بالكمبيوتر - الفتحة الأولى Surgical Guide", category: "الغرسات والزراعة", specialistPrice: 600, consultantPrice: 600, price: 600, duration: "تخطيط رقمي", notes: "تخطيط ثلاثي الأبعاد وطباعة دليل جراحي لأول غرسة" },
  { id: 151, name: "دليل جراحي بالكمبيوتر - لكل فتحة إضافية", category: "الغرسات والزراعة", specialistPrice: 750, consultantPrice: 750, price: 750, duration: "تخطيط رقمي", notes: "لكل فتحة زرع إضافية بنفس الدليل الجراحي" },
  { id: 152, name: "بار تيتانيوم بدون لثة - ربع فك Titanium Bar", category: "الغرسات والزراعة", specialistPrice: 2400, consultantPrice: 2400, price: 2400, duration: "معملي", notes: "جسر ربط تيتانيوم لتثبيت التركيبات فوق الغرسات" },
  { id: 153, name: "بار تيتانيوم بدون لثة - نصف فك", category: "الغرسات والزراعة", specialistPrice: 4800, consultantPrice: 4800, price: 4800, duration: "معملي", notes: "تثبيت نصف فكي على الغرسات" },
  { id: 154, name: "بار تيتانيوم بدون لثة - فك كامل", category: "الغرسات والزراعة", specialistPrice: 9600, consultantPrice: 9600, price: 9600, duration: "معملي", notes: "ربط كامل لغرسات الفك الواحد" },
  { id: 155, name: "فرام تيتانيوم مع لثة صناعية - ربع فك", category: "الغرسات والزراعة", specialistPrice: 3000, consultantPrice: 3000, price: 3000, duration: "معملي", notes: "هيكل تيتانيوم مع لثة وردية تجميلية" },
  { id: 156, name: "فرام تيتانيوم مع لثة صناعية - فك كامل All-on-4 / All-on-6", category: "الغرسات والزراعة", specialistPrice: 12000, consultantPrice: 12000, price: 12000, duration: "معملي", notes: "إعادة بناء كاملة لأسنان ولثة الفك على الغرسات" },

  // 10. تقويم الأسنان (Orthodontics #146-148)
  { id: 157, name: "تقويم سيراميك شفاف تجميلي فك واحد Ceramic Braces", category: "تقويم الأسنان", specialistPrice: 0, consultantPrice: 0, price: 0, duration: "جلسة تركيب", notes: "حسب خطة العلاج المعتمدة مع استشاري التقويم" },
  { id: 158, name: "جهاز تثبيت تقويم Retainer فك واحد (متحرك أو ثابت)", category: "تقويم الأسنان", specialistPrice: 800, consultantPrice: 850, price: 800, duration: "معملي (جلستان)", notes: "لتثبيت نتائج التقويم ومنع انتكاس الأسنان" },
  { id: 159, name: "جهاز تثبيت تقويم Retainer فكين كاملين", category: "تقويم الأسنان", specialistPrice: 1550, consultantPrice: 1700, price: 1550, duration: "معملي (جلستان)", notes: "ريتينر شفاف أو سلكي علوي وسفلي" },
  { id: 160, name: "قسط متابعة تقويم وشد شهري Monthly Activation", category: "تقويم الأسنان", specialistPrice: 500, consultantPrice: 500, price: 500, duration: "20 دقيقة", notes: "جلسة متابعة وتغيير الأسلاك والمطاط الشهري" },

  // 11. الأشعة الرقمية والتشخيص (Digital Imaging #150-160)
  { id: 161, name: "أشعة بانوراما رقمية كاملة مع طباعة فيلم عالية الدقة", category: "الأشعة الرقمية", specialistPrice: 250, consultantPrice: 250, price: 250, duration: "10 دقائق", notes: "تشمل الفكين ومفصل الفك والجيوب الأنفية بفيلم مطبوع" },
  { id: 162, name: "أشعة بانوراما رقمية كاملة (فيلم مطبوع + أسطوانة CD)", category: "الأشعة الرقمية", specialistPrice: 300, consultantPrice: 300, price: 300, duration: "10 دقائق", notes: "نسخة فيلم عالي الجودة مع ملفات DICOM رقمية" },
  { id: 163, name: "أشعة بانوراما رقمية بدون طباعة (عرض شاشة العيادة)", category: "الأشعة الرقمية", specialistPrice: 150, consultantPrice: 150, price: 150, duration: "10 دقائق", notes: "تصوير وعرض فوري على كمبيوتر الطبيب" },
  { id: 164, name: "أشعة بانوراما رقمية على أسطوانة CD فقط", category: "الأشعة الرقمية", specialistPrice: 200, consultantPrice: 200, price: 200, duration: "10 دقائق", notes: "تسليم ملف الأشعة الرقمي على CD بجودة كاملة" },
  { id: 165, name: "أشعة سيفالوميتريك لقياسات التقويم Cephalometric", category: "الأشعة الرقمية", specialistPrice: 300, consultantPrice: 300, price: 300, duration: "10 دقائق", notes: "أشعة جانبية للجمجمة والفكين لتحليل التقويم" },
  { id: 166, name: "أشعة مقطعية ثلاثية الأبعاد CBCT على سن واحد", category: "الأشعة الرقمية", specialistPrice: 300, consultantPrice: 300, price: 300, duration: "10 دقائق", notes: "فحص ثلاثي الأبعاد للجذور والعظام المحيطة بسن محدد" },
  { id: 167, name: "أشعة مقطعية ثلاثية الأبعاد CBCT ربع فك", category: "الأشعة الرقمية", specialistPrice: 450, consultantPrice: 450, price: 450, duration: "10 دقائق", notes: "تخطيط دقيق لزراعة الأسنان في ربع فك" },
  { id: 168, name: "أشعة مقطعية ثلاثية الأبعاد CBCT نصف فك", category: "الأشعة الرقمية", specialistPrice: 500, consultantPrice: 500, price: 500, duration: "10 دقائق", notes: "فحص مقطعي لنصف الفك العلوي أو السفلي" },
  { id: 169, name: "أشعة مقطعية ثلاثية الأبعاد CBCT فك كامل", category: "الأشعة الرقمية", specialistPrice: 550, consultantPrice: 550, price: 550, duration: "10 دقائق", notes: "مسح ثلاثي الأبعاد شامل لفك كامل للزراعة والجراحة" },
  { id: 170, name: "أشعة مقطعية ثلاثية الأبعاد CBCT فكين كاملين", category: "الأشعة الرقمية", specialistPrice: 800, consultantPrice: 800, price: 800, duration: "15 دقيقة", notes: "فحص شامل ثلاثي الأبعاد للجمجمة والفكين والجيوب الأنفية" },
  { id: 171, name: "فيلم أشعة سينية صغير Periapical داخل العيادة", category: "الأشعة الرقمية", specialistPrice: 100, consultantPrice: 100, price: 100, duration: "5 دقائق", notes: "أشعة ديجيتال فورية لمتابعة حشو العصب والخلع" }
];

// Active Services list loaded from localStorage or baseline
let SERVICES = (function() {
  const ver = localStorage.getItem('elgawhara_services_ver');
  const saved = localStorage.getItem('elgawhara_services_data');
  if (ver === 'miami_full_v2' && saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= 100) return parsed;
    } catch (e) {
      console.warn("Could not parse saved services", e);
    }
  }
  // Upgrade to full 171 Miami branch services list
  localStorage.setItem('elgawhara_services_ver', 'miami_full_v2');
  localStorage.setItem('elgawhara_services_data', JSON.stringify(DEFAULT_SERVICES));
  return JSON.parse(JSON.stringify(DEFAULT_SERVICES));
})();

function enrichServicesCache(list) {
  if (!Array.isArray(list)) return;
  list.forEach(s => {
    s._normName = normalizeArabic(s.name);
    s._normCat = normalizeArabic(s.category);
    s._normNotes = normalizeArabic(s.notes || '');
  });
}
enrichServicesCache(SERVICES);

// ============================================================
// 6. Application State
// ============================================================
let currentTab = 'doctors';
let currentShiftFilter = 'morning';
let currentFloorShift = 'morning';
let currentFloorDay = 'السبت';
let currentSpecialtyFilter = '';
let currentServiceCategoryFilter = '';
let currentDoctorSearchTerm = '';
let currentServiceSearchTerm = '';
let isTodayOnlyFilterActive = false;

// Absence & Treatment Cart State
let ABSENT_DOCTORS = JSON.parse(localStorage.getItem('elgawhara_absent_doctors') || '[]');
let CALCULATOR_CART = [];

// ============================================================
// Daily Notices State (سبورة ملاحظات وتعليمات اليوم)
// ============================================================
const DEFAULT_DAILY_NOTICES = [];

let DAILY_NOTICES = (function() {
  const saved = localStorage.getItem('elgawhara_daily_notices');
  if (saved !== null) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}
  }
  return [];
})();
let isNoticeBoardCollapsed = localStorage.getItem('elgawhara_notices_collapsed') === 'true';

// ============================================================
// 7. Lifecycle Initialization
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPWA();
  updateLiveShiftBadge();
  setInterval(updateLiveShiftBadge, 60000);

  // Set today for Floor view
  const todayArabic = getTodayArabicName();
  currentFloorDay = todayArabic;
  const floorSelect = document.getElementById('floorDaySelect');
  if (floorSelect) floorSelect.value = todayArabic;

  // Determine current active shift for Floor view
  const currentHourDec = new Date().getHours() + (new Date().getMinutes() / 60);
  if (currentHourDec >= 16 && currentHourDec < 23) {
    currentFloorShift = 'evening';
  } else {
    currentFloorShift = 'morning';
  }
  updateFloorShiftButtons();

  // Populate absent doctor select in admin modal
  populateAbsentDoctorSelect();
  renderAbsentDoctorsList();

  // Initial renders
  renderDailyNotices();
  renderDoctorsGrid();
  renderClinicsTable();
  renderFloorMap();
  renderServicesGrid();
  renderCalcServicePicker('');
  calculateTotal();

  // Supabase init
  initSupabaseClient();
  if (typeof loadAbsencesFromSupabase === 'function') {
    loadAbsencesFromSupabase();
  }
  if (typeof loadNoticesFromSupabase === 'function') {
    loadNoticesFromSupabase();
  }

  lucide.createIcons();
});

// Helper: Get Arabic Day Name
function getTodayArabicName() {
  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  return days[new Date().getDay()];
}

// Dark Mode Toggle (Default for first entrance is Light mode)
function initTheme() {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    if (!localStorage.theme) {
      localStorage.theme = 'light';
    }
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  lucide.createIcons();
}

// PWA Offline Support
function initPWA() {
  if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW reg error:', err));
  }

  function updateNetworkState() {
    const badge = document.getElementById('networkStatusBadge');
    const text = document.getElementById('networkStatusText');
    if (!badge || !text) return;

    if (navigator.onLine) {
      badge.className = "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold border border-emerald-200/50 dark:border-emerald-800/40";
      text.innerText = "متصل";
    } else {
      badge.className = "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-[10px] font-semibold border border-amber-200/50 dark:border-amber-800/40";
      text.innerText = "وضع عدم الاتصال";
    }
  }

  window.addEventListener('online', updateNetworkState);
  window.addEventListener('offline', updateNetworkState);
  updateNetworkState();
}

// Update Live Shift Badge
function updateLiveShiftBadge() {
  const now = new Date();
  const currentHourDec = now.getHours() + (now.getMinutes() / 60);
  const currentDayName = getTodayArabicName();

  const badge = document.getElementById('currentShiftBadge');
  const text = document.getElementById('shiftText');
  if (!badge || !text) return;

  if (currentHourDec >= 9 && currentHourDec < 15.5) {
    if (currentDayName === "الجمعة") {
      text.innerHTML = `اليوم ${currentDayName}: <strong>الشيفت الصباحي إجازة</strong>`;
      badge.className = "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 text-[11px] font-semibold text-amber-800 dark:text-amber-300";
    } else {
      text.innerHTML = `الآن: <strong>الشيفت الصباحي</strong> (حتى 3:30 م)`;
      badge.className = "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-50/80 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-800/40 text-[11px] font-semibold text-brand-800 dark:text-brand-300";
    }
  } else if (currentHourDec >= 16 && currentHourDec < 23) {
    text.innerHTML = `الآن: <strong>الشيفت المسائي</strong> (حتى 11:00 م)`;
    badge.className = "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-800/40 text-[11px] font-semibold text-indigo-800 dark:text-indigo-300";
  } else {
    text.innerHTML = `الآن: <strong>خارج أوقات الشيفتات الرسمية</strong>`;
    badge.className = "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-800 border border-surface-200/60 dark:border-surface-700/60 text-[11px] font-semibold text-surface-600 dark:text-surface-400";
  }
}

// Tab Switching
function switchTab(tab) {
  currentTab = tab;
  
  const tabs = ['tabDoctors', 'tabLiveClinics', 'tabClinics', 'tabServices', 'tabCalculator'];
  const btns = ['tabBtnDoctors', 'tabBtnLiveClinics', 'tabBtnClinics', 'tabBtnServices', 'tabBtnCalculator'];

  tabs.forEach(id => document.getElementById(id)?.classList.add('hidden'));

  const btnClassInactive = "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 whitespace-nowrap flex-shrink-0 transition-all";
  const btnClassActive = "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-600 via-teal-700 to-[#113238] dark:from-teal-500 dark:to-emerald-600 text-white shadow-md shadow-teal-700/20 whitespace-nowrap flex-shrink-0 transition-all";

  btns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = btnClassInactive;
  });

  let activeBtnId = null;

  if (tab === 'doctors') {
    activeBtnId = 'tabBtnDoctors';
    document.getElementById('tabDoctors')?.classList.remove('hidden');
    document.getElementById('tabBtnDoctors').className = btnClassActive;
    if (window.innerWidth >= 768) document.getElementById('doctorSearchInput')?.focus();
  } else if (tab === 'live-clinics') {
    activeBtnId = 'tabBtnLiveClinics';
    document.getElementById('tabLiveClinics')?.classList.remove('hidden');
    document.getElementById('tabBtnLiveClinics').className = btnClassActive;
    renderFloorMap();
  } else if (tab === 'clinics') {
    activeBtnId = 'tabBtnClinics';
    document.getElementById('tabClinics')?.classList.remove('hidden');
    document.getElementById('tabBtnClinics').className = btnClassActive;
    renderClinicsTable();
  } else if (tab === 'services') {
    activeBtnId = 'tabBtnServices';
    document.getElementById('tabServices')?.classList.remove('hidden');
    document.getElementById('tabBtnServices').className = btnClassActive;
    if (window.innerWidth >= 768) document.getElementById('serviceSearchInput')?.focus();
  } else if (tab === 'calculator') {
    activeBtnId = 'tabBtnCalculator';
    document.getElementById('tabCalculator')?.classList.remove('hidden');
    document.getElementById('tabBtnCalculator').className = btnClassActive;
    renderCalcServicePicker('');
  }

  if (activeBtnId) {
    const activeBtn = document.getElementById(activeBtnId);
    if (activeBtn && typeof activeBtn.scrollIntoView === 'function') {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  lucide.createIcons();
}

// ============================================================
// 8. Doctors Tab Logic & Search
// ============================================================
let doctorSearchDebounce = null;
function handleDoctorSearch(val) {
  currentDoctorSearchTerm = val.trim();
  const clearBtn = document.getElementById('clearDoctorSearchBtn');
  if (currentDoctorSearchTerm) {
    clearBtn?.classList.remove('hidden');
  } else {
    clearBtn?.classList.add('hidden');
  }
  clearTimeout(doctorSearchDebounce);
  doctorSearchDebounce = setTimeout(() => {
    requestAnimationFrame(renderDoctorsGrid);
  }, 40);
}

function clearDoctorSearch() {
  document.getElementById('doctorSearchInput').value = '';
  currentDoctorSearchTerm = '';
  document.getElementById('clearDoctorSearchBtn')?.classList.add('hidden');
  renderDoctorsGrid();
  document.getElementById('doctorSearchInput')?.focus();
}

function filterBySpecialty(spec) {
  currentSpecialtyFilter = spec;

  const selectElem = document.getElementById('specialtySelect');
  if (selectElem && selectElem.value !== spec) {
    selectElem.value = spec;
  }

  document.querySelectorAll('.spec-btn').forEach(btn => {
    const s = btn.getAttribute('data-spec');
    if (s === spec) {
      btn.className = "spec-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#113238] to-teal-800 text-white font-black transition flex items-center gap-1.5 shadow-sm border border-teal-700";
    } else {
      btn.className = "spec-btn px-3 py-1.5 rounded-xl bg-white dark:bg-[#0E262B] text-slate-700 dark:text-teal-100 hover:bg-teal-50 dark:hover:bg-teal-950/60 font-bold border border-teal-200/80 dark:border-teal-800/70 transition flex items-center gap-1.5 shadow-2xs";
    }
  });

  renderDoctorsGrid();
}

function toggleFilterTodayOnly() {
  isTodayOnlyFilterActive = !isTodayOnlyFilterActive;
  const btn = document.getElementById('btnTodayOnlyFilter');
  const text = document.getElementById('todayFilterText');
  const todayArabic = getTodayArabicName();

  if (isTodayOnlyFilterActive) {
    btn.className = "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-bold transition shadow-sm";
    text.innerText = `أطباء اليوم (${todayArabic}) فقط`;
  } else {
    btn.className = "flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-teal-300 dark:border-teal-700/80 bg-white dark:bg-[#0E262B] text-teal-800 dark:text-teal-200 hover:bg-teal-50 text-xs font-bold transition shadow-xs";
    text.innerText = "أطباء اليوم فقط";
  }

  renderDoctorsGrid();
}

function renderDoctorsGrid() {
  const grid = document.getElementById('doctorsGrid');
  const noFound = document.getElementById('noDoctorFound');
  const todayArabic = getTodayArabicName();

  const normQuery = currentDoctorSearchTerm ? normalizeArabic(currentDoctorSearchTerm) : "";

  const filtered = DOCTORS.filter(doc => {
    let matchesSearch = true;
    if (normQuery) {
      matchesSearch = (doc._normName && doc._normName.includes(normQuery)) ||
                      (doc._normSpec && doc._normSpec.includes(normQuery)) ||
                      (doc._normSchedule && doc._normSchedule.includes(normQuery));
    }

    let matchesFilter = true;
    if (currentSpecialtyFilter) {
      if (currentSpecialtyFilter === "أطفال") {
        matchesFilter = doc.isPedo || doc.specialty.includes("أطفال");
      } else if (currentSpecialtyFilter === "جراحة") {
        matchesFilter = doc.specialty.includes("جراحة");
      } else if (currentSpecialtyFilter === "تقويم") {
        matchesFilter = doc.specialty.includes("تقويم");
      } else if (currentSpecialtyFilter === "غرس") {
        matchesFilter = doc.specialty.includes("غرس") || doc.specialty.includes("زراعة");
      } else if (currentSpecialtyFilter === "تركيبات") {
        matchesFilter = doc.specialty.includes("تركيبات");
      } else if (currentSpecialtyFilter === "عام") {
        matchesFilter = doc.specialty.includes("عام");
      }
    }

    let matchesToday = true;
    if (isTodayOnlyFilterActive) {
      matchesToday = doc.schedule.some(s => s.day === todayArabic);
    }

    return matchesSearch && matchesFilter && matchesToday;
  });

  const countBadge = document.getElementById('doctorsCountBadge');
  if (countBadge) countBadge.innerText = `${filtered.length} طبيب ظاهر`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noFound?.classList.remove('hidden');
    return;
  }

  noFound?.classList.add('hidden');

  grid.innerHTML = filtered.map(doc => {
    const isAbsent = ABSENT_DOCTORS.some(a => a.doctor_name === doc.name);

    // Group slots by Day
    const dayGroups = {};
    doc.schedule.forEach(slot => {
      if (!dayGroups[slot.day]) {
        dayGroups[slot.day] = [];
      }
      dayGroups[slot.day].push(slot);
    });

    const sortedDays = Object.keys(dayGroups).sort((a, b) => {
      return WEEKDAYS.indexOf(a) - WEEKDAYS.indexOf(b);
    });

    const isSupervisor = doc.name.includes("خالد عبد النبي");
    const totalDaysCount = sortedDays.length;
    const totalSlotsCount = doc.schedule.length;

    // Executive Medical Avatar (Unified Brand Identity: Soft Mint surface + Deep Slate Teal Icon)
    let avatarBg = "bg-teal-50/80 dark:bg-[#0E282E] text-[#113238] dark:text-teal-200 border-2 border-teal-200/90 dark:border-teal-700/60 shadow-xs";
    let iconClass = "w-6 h-6 text-[#113238] dark:text-teal-200 group-hover:text-teal-600 transition-colors";
    let miniIconClass = "w-3.5 h-3.5 text-teal-700 dark:text-teal-400";
    
    // For Dr. Khaled Abdel Nabi: Dignified Executive Supervisor styling
    if (isSupervisor) {
      avatarBg = "bg-gradient-to-br from-[#113238] to-[#0A2226] text-teal-200 border-2 border-teal-500/40 shadow-sm";
      iconClass = "w-6 h-6 text-teal-100";
      miniIconClass = "w-3.5 h-3.5 text-teal-700 dark:text-teal-300";
    }

    let specSvg = DENTAL_ICONS.molar(iconClass);
    let miniSpecSvg = DENTAL_ICONS.molar(miniIconClass);

    if (doc.specialty.includes("غرس") || doc.specialty.includes("زراعة") || isSupervisor) {
      specSvg = DENTAL_ICONS.implant(iconClass);
      miniSpecSvg = DENTAL_ICONS.implant(miniIconClass);
    } else if (doc.specialty.includes("تركيبات")) {
      specSvg = DENTAL_ICONS.crown(iconClass);
      miniSpecSvg = DENTAL_ICONS.crown(miniIconClass);
    } else if (doc.specialty.includes("تقويم")) {
      specSvg = DENTAL_ICONS.braces(iconClass);
      miniSpecSvg = DENTAL_ICONS.braces(miniIconClass);
    } else if (doc.specialty.includes("جراحة")) {
      specSvg = DENTAL_ICONS.surgery(iconClass);
      miniSpecSvg = DENTAL_ICONS.surgery(miniIconClass);
    } else if (doc.isPedo || doc.specialty.includes("أطفال")) {
      specSvg = DENTAL_ICONS.pediatric(iconClass);
      miniSpecSvg = DENTAL_ICONS.pediatric(miniIconClass);
    }

    return `
      <div class="glass-panel rounded-3xl p-5 border-2 ${isAbsent ? 'border-rose-400 dark:border-rose-800 bg-rose-50/20' : 'border-teal-100/90 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-500'} shadow-card modern-card flex flex-col justify-between group">
        <div>
          <!-- Doctor Header Info -->
          <div class="flex items-start justify-between gap-3 pb-3.5 border-b border-teal-100/80 dark:border-teal-900/40">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl ${avatarBg} flex items-center justify-center font-bold transition group-hover:scale-105 flex-shrink-0">
                ${specSvg}
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="font-extrabold text-[#113238] dark:text-teal-100 text-base leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-300 transition">${doc.name}</h3>
                  ${isSupervisor ? '<span class="px-2 py-0.5 rounded-full text-[10px] bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold shadow-xs">المشرف العام</span>' : ''}
                  ${isAbsent ? '<span class="px-2 py-0.5 rounded-full text-[10px] bg-rose-600 text-white font-extrabold animate-pulse">معتذر اليوم</span>' : ''}
                </div>
                <p class="text-xs font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1.5 mt-1">
                  <span class="inline-flex">${miniSpecSvg}</span>
                  <span>${doc.specialty}</span>
                </p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-xl text-xs font-extrabold bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 border border-teal-200/80 dark:border-teal-800/60 shadow-xs flex-shrink-0">
              ${totalDaysCount} ${totalDaysCount === 1 ? 'يوم' : 'أيام'}${totalSlotsCount > totalDaysCount ? ` (${totalSlotsCount} فترات)` : ''}
            </span>
          </div>

          <!-- Weekly Schedule Slots -->
          <div class="mt-3.5 space-y-2">
            ${sortedDays.map(day => {
              const slots = dayGroups[day].sort((a, b) => (a.shift === 'morning' ? -1 : 1));
              const isDual = slots.length > 1;

              if (isDual) {
                const morningSlot = slots.find(s => s.shift === 'morning');
                const eveningSlot = slots.find(s => s.shift === 'evening');

                return `
                  <div class="p-3 rounded-2xl bg-white dark:bg-[#0A2024]/60 border border-teal-200/80 dark:border-teal-800/60 shadow-2xs transition hover:border-teal-400">
                    <div class="flex items-center justify-between pb-2 mb-2 border-b border-teal-100/70 dark:border-teal-900/40">
                      <span class="font-extrabold text-[#113238] dark:text-teal-200 text-xs">${day}</span>
                      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-teal-50 dark:bg-teal-950 text-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-800 shadow-2xs">
                        ${CORE_SVGS.layers}
                        <span>شيفت كامل (صباحي + مسائي)</span>
                      </span>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      ${morningSlot ? `
                        <div class="flex items-center justify-between p-2 rounded-xl badge-morning shadow-2xs">
                          <div class="flex items-center gap-1 font-extrabold text-[11px]">
                            ${CORE_SVGS.sun}
                            <span>صباحي</span>
                          </div>
                          <span class="font-bold text-teal-950 dark:text-teal-100 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg text-xs shadow-2xs">
                            ${morningSlot.clinic}
                          </span>
                        </div>
                      ` : ''}
                      ${eveningSlot ? `
                        <div class="flex items-center justify-between p-2 rounded-xl badge-evening shadow-2xs">
                          <div class="flex items-center gap-1 font-extrabold text-[11px]">
                            ${CORE_SVGS.moon}
                            <span>مسائي</span>
                          </div>
                          <span class="font-bold text-teal-950 dark:text-teal-100 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg text-xs shadow-2xs">
                            ${eveningSlot.clinic}
                          </span>
                        </div>
                      ` : ''}
                    </div>
                  </div>
                `;
              } else {
                const slot = slots[0];
                const isMorning = slot.shift === 'morning';
                const badgeClass = isMorning ? 'badge-morning' : 'badge-evening';
                const slotSvg = isMorning ? CORE_SVGS.sun : CORE_SVGS.moon;

                return `
                  <div class="flex items-center justify-between p-2.5 rounded-2xl bg-white dark:bg-[#081E22]/60 hover:bg-teal-50/50 dark:hover:bg-[#0E262B] border border-teal-100/70 dark:border-teal-900/40 text-xs transition">
                    <div class="flex items-center gap-2">
                      <span class="font-extrabold text-[#113238] dark:text-teal-100 w-16">${day}</span>
                      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold ${badgeClass}">
                        ${slotSvg}
                        <span>${slot.shiftLabel}</span>
                      </span>
                    </div>
                    <div class="font-bold text-teal-950 dark:text-teal-100 bg-teal-50/70 dark:bg-[#0E262B] px-3 py-1 rounded-xl border border-teal-200/80 dark:border-teal-800 text-xs shadow-2xs">
                      ${slot.clinic}
                    </div>
                  </div>
                `;
              }
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// 9. Live Clinics Floor Map View (Tab 2)
// ============================================================
function setFloorShift(shift) {
  currentFloorShift = shift;
  updateFloorShiftButtons();
  renderFloorMap();
}

function updateFloorShiftButtons() {
  const btnMorning = document.getElementById('btnFloorMorning');
  const btnEvening = document.getElementById('btnFloorEvening');
  if (!btnMorning || !btnEvening) return;

  if (currentFloorShift === 'morning') {
    btnMorning.className = "px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs shadow-xs transition";
    btnEvening.className = "px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-teal-700 font-bold text-xs transition";
  } else {
    btnEvening.className = "px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold text-xs shadow-xs transition";
    btnMorning.className = "px-3.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-teal-700 font-bold text-xs transition";
  }
}

function renderFloorMap() {
  const grid = document.getElementById('floorClinicsGrid');
  const daySelect = document.getElementById('floorDaySelect');
  if (!grid || !daySelect) return;

  const day = daySelect.value;
  const isMorning = currentFloorShift === 'morning';
  const scheduleData = isMorning ? MORNING_SCHEDULE : EVENING_SCHEDULE;
  const dayData = scheduleData[day] || {};
  const isHoliday = dayData._isHoliday;

  let occupiedCount = 0;

  if (isHoliday) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center glass-panel rounded-3xl border-2 border-dashed border-amber-300 dark:border-amber-800">
        <i data-lucide="coffee" class="w-12 h-12 text-amber-500 mx-auto mb-3"></i>
        <h3 class="text-base font-bold text-slate-800 dark:text-slate-100">الشيفت الصباحي إجازة رسمية يوم ${day}</h3>
        <p class="text-xs text-slate-400 mt-1">يمكنك التبديل إلى الشيفت المسائي لمشاهدة توزيع العيادات العاملة</p>
      </div>
    `;
    document.getElementById('floorOccupancyStat').innerText = "المركز مغلق (إجازة صباحية)";
    lucide.createIcons();
    return;
  }

  const cardsHtml = CLINICS_LIST.map(clinic => {
    let rawVal = dayData[clinic.id];
    if (clinic.id === "pano") rawVal = "غرفة أشعة البانوراما (متاحة)";
    const hasDoctor = rawVal && rawVal !== "-";

    let docObj = null;
    let isAbsent = false;

    if (hasDoctor && clinic.id !== "pano") {
      occupiedCount++;
      const baseName = rawVal.replace(/\(.*?\)/g, "").trim();
      docObj = DOCTORS.find(d => d.name === baseName || d.name.includes(baseName));
      isAbsent = ABSENT_DOCTORS.some(a => a.doctor_name === baseName || (docObj && a.doctor_name === docObj.name));
    }

    const clinicIconClass = "w-4 h-4 text-teal-700 dark:text-teal-400";
    let clinicIcon = DENTAL_ICONS.molar(clinicIconClass);
    if (clinic.id === "pano") {
      clinicIcon = DENTAL_ICONS.panorama(clinicIconClass);
    } else if (clinic.isPedo) {
      clinicIcon = DENTAL_ICONS.pediatric(clinicIconClass);
    } else if (clinic.id === "c13_15") {
      clinicIcon = DENTAL_ICONS.implant(clinicIconClass);
    } else if (clinic.id === "c14_16") {
      clinicIcon = DENTAL_ICONS.crown(clinicIconClass);
    } else if (clinic.isSurgery) {
      clinicIcon = DENTAL_ICONS.surgery(clinicIconClass);
    }

    let statusBadge = '';
    let borderClass = 'border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D2429]';

    if (clinic.id === "pano") {
      borderClass = 'border-2 border-cyan-400 dark:border-cyan-600 bg-gradient-to-br from-cyan-50/80 via-white to-teal-50/40 dark:from-[#0E262B] dark:to-[#081E22] shadow-sm';
      statusBadge = '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-cyan-600 text-white shadow-xs">متاحة للأشعة</span>';
    } else if (isAbsent) {
      borderClass = 'border-2 border-rose-400 dark:border-rose-600 bg-gradient-to-br from-rose-50/80 via-white to-red-50/40 dark:from-[#0E262B] dark:to-[#081E22] shadow-sm';
      statusBadge = '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-rose-600 text-white animate-pulse shadow-xs">معتذر اليوم</span>';
    } else if (hasDoctor) {
      borderClass = 'border-2 border-emerald-400 dark:border-emerald-600 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 dark:from-[#0E262B] dark:to-[#081E22] shadow-sm';
      statusBadge = '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white shadow-xs">طبيب متواجد</span>';
    } else {
      borderClass = 'border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 opacity-75';
      statusBadge = '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-500">شاغرة</span>';
    }

    return `
      <div class="rounded-2xl p-4.5 ${borderClass} modern-card shadow-card flex flex-col justify-between transition-all">
        <div>
          <div class="flex items-center justify-between pb-2.5 mb-2.5 border-b border-teal-100/70 dark:border-teal-900/40">
            <span class="font-extrabold text-[#113238] dark:text-teal-200 text-xs flex items-center gap-1.5">
              ${clinicIcon}
              <span>${clinic.name}</span>
            </span>
            ${statusBadge}
          </div>

          ${hasDoctor ? `
            <div class="pt-1 space-y-1">
              <h4 class="font-extrabold text-slate-900 dark:text-slate-100 text-sm leading-tight">${rawVal}</h4>
              <p class="text-xs font-bold text-teal-700 dark:text-teal-300">
                ${docObj ? docObj.specialty : (clinic.isPedo ? 'طب أسنان أطفال' : 'طبيب أسنان')}
              </p>
            </div>
          ` : `
            <div class="py-3 text-center text-xs text-slate-400 font-medium">لا يوجد طبيب مسكن في هذه العيادة</div>
          `}
        </div>

        ${docObj ? `
          <button onclick="inspectDoctorFromFloor('${docObj.name}')" class="mt-3.5 w-full py-2 rounded-xl bg-gradient-to-r from-teal-50 to-white dark:from-teal-950/60 dark:to-[#0E262B] hover:from-teal-600 hover:to-emerald-600 hover:text-white border border-teal-200 dark:border-teal-800 text-xs font-bold text-teal-900 dark:text-teal-200 shadow-xs transition-all">
            عرض جدول الطبيب بالكامل
          </button>
        ` : ''}
      </div>
    `;
  }).join('');

  grid.innerHTML = cardsHtml;
  document.getElementById('floorOccupancyStat').innerText = `${occupiedCount} عيادة مشغولة الآن`;
  lucide.createIcons();
}

function inspectDoctorFromFloor(name) {
  switchTab('doctors');
  document.getElementById('doctorSearchInput').value = name;
  handleDoctorSearch(name);
}

// ============================================================
// 10. Clinics Weekly Matrix View (Tab 3)
// ============================================================
function setShiftFilter(shift) {
  currentShiftFilter = shift;
  const btnMorning = document.getElementById('btnShiftMorning');
  const btnEvening = document.getElementById('btnShiftEvening');

  if (shift === 'morning') {
    btnMorning.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-white dark:bg-[#0E262B] text-teal-900 dark:text-teal-200 shadow-sm transition";
    btnEvening.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition";
    document.getElementById('currentMatrixTitle').innerText = "جدول الشيفت الصباحي - جميع العيادات (9:00 ص - 3:30 م)";
  } else {
    btnEvening.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-white dark:bg-[#0E262B] text-indigo-900 dark:text-indigo-200 shadow-sm transition";
    btnMorning.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-teal-600 transition";
    document.getElementById('currentMatrixTitle').innerText = "جدول الشيفت المسائي - جميع العيادات (4:00 م - 11:00 م)";
  }

  renderClinicsTable();
}

function renderClinicsTable() {
  const thead = document.getElementById('clinicsTableHead');
  const tbody = document.getElementById('clinicsTableBody');
  const selectedDay = document.getElementById('dayFilterSelect')?.value || 'all';

  const isMorning = currentShiftFilter === 'morning';
  const columns = isMorning ? MORNING_COLUMNS : EVENING_COLUMNS;
  const scheduleData = isMorning ? MORNING_SCHEDULE : EVENING_SCHEDULE;

  let headHtml = `<tr>
    <th class="p-3.5 text-right font-black text-white sticky right-0 table-sticky-col bg-[#0C252A] z-20 w-24 border-l border-teal-800 text-xs">اليوم</th>`;
  columns.forEach(col => {
    headHtml += `<th class="p-3 text-center font-bold text-teal-100 whitespace-nowrap border-l border-teal-800 last:border-0 text-xs">${col.name}</th>`;
  });
  headHtml += `</tr>`;
  thead.innerHTML = headHtml;

  let bodyHtml = '';
  WEEKDAYS.forEach(day => {
    if (selectedDay !== 'all' && selectedDay !== day) return;

    const dayData = scheduleData[day];
    const isHoliday = dayData && dayData._isHoliday;

    bodyHtml += `<tr class="hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition">
      <td class="p-3.5 font-extrabold text-[#113238] dark:text-teal-200 sticky right-0 table-sticky-col bg-teal-50/95 dark:bg-[#0D2429] border-l border-teal-200 dark:border-teal-900 z-10 whitespace-nowrap text-xs">
        ${day}
      </td>`;

    if (isHoliday) {
      bodyHtml += `<td colspan="${columns.length}" class="p-4 text-center text-slate-400 font-bold bg-slate-50/70 dark:bg-slate-900/60">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200 text-xs font-bold border border-amber-200">
          <i data-lucide="coffee" class="w-3.5 h-3.5 text-amber-600"></i>
          <span>إجازة رسمية للشيفت الصباحي</span>
        </span>
      </td>`;
    } else {
      columns.forEach(col => {
        const val = dayData ? dayData[col.id] : "-";
        const hasDoctor = val && val !== "-";
        const isPano = col.id === "pano";

        let cellContent = val || "-";
        let cellClass = "p-2.5 text-center border-l border-teal-100/60 dark:border-teal-900/40 last:border-0 whitespace-nowrap";

        if (isPano) {
          cellContent = `<span class="px-2.5 py-1 rounded-lg bg-cyan-100 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-200 font-black text-xs border border-cyan-200 dark:border-cyan-800">بانوراما</span>`;
        } else if (hasDoctor) {
          const isDocPedo = col.id.startsWith("pedo");
          const bgBadge = isDocPedo 
            ? "bg-amber-100/90 text-amber-950 dark:bg-amber-950/60 dark:text-amber-200 border border-amber-300 dark:border-amber-800" 
            : "bg-teal-50 text-teal-950 dark:bg-[#0E262B] dark:text-teal-100 border border-teal-200 dark:border-teal-800";
          cellContent = `
            <div class="inline-block px-2.5 py-1.5 rounded-xl font-bold text-xs ${bgBadge} shadow-xs hover:scale-105 transition">
              ${val}
            </div>
          `;
        } else {
          cellContent = `<span class="text-slate-300 dark:text-slate-600 font-bold">-</span>`;
        }

        bodyHtml += `<td class="${cellClass}">${cellContent}</td>`;
      });
    }

    bodyHtml += `</tr>`;
  });

  tbody.innerHTML = bodyHtml;
  lucide.createIcons();
}

// ============================================================
// 11. Services & Prices View (Tab 4)
// ============================================================
let serviceSearchDebounceTimer = null;
function handleServiceSearch(val) {
  currentServiceSearchTerm = val.trim();
  const clearBtn = document.getElementById('clearServiceSearchBtn');
  if (currentServiceSearchTerm) {
    clearBtn?.classList.remove('hidden');
  } else {
    clearBtn?.classList.add('hidden');
  }
  if (serviceSearchDebounceTimer) clearTimeout(serviceSearchDebounceTimer);
  serviceSearchDebounceTimer = setTimeout(() => {
    requestAnimationFrame(renderServicesGrid);
  }, 40);
}

function clearServiceSearch() {
  if (serviceSearchDebounceTimer) clearTimeout(serviceSearchDebounceTimer);
  document.getElementById('serviceSearchInput').value = '';
  currentServiceSearchTerm = '';
  document.getElementById('clearServiceSearchBtn')?.classList.add('hidden');
  renderServicesGrid();
  document.getElementById('serviceSearchInput')?.focus();
}

function filterServiceCategory(cat) {
  currentServiceCategoryFilter = cat;
  document.querySelectorAll('.service-cat-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) {
      btn.className = "service-cat-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#113238] to-teal-800 text-white font-black transition shadow-sm border border-teal-700 flex items-center gap-1.5";
    } else {
      btn.className = "service-cat-btn px-3 py-1.5 rounded-xl bg-white dark:bg-[#0E262B] text-slate-700 dark:text-teal-100 hover:bg-teal-50 dark:hover:bg-teal-950/60 font-bold border border-teal-200/80 dark:border-teal-800/70 transition flex items-center gap-1.5 shadow-2xs";
    }
  });
  renderServicesGrid();
}

function renderServicesGrid() {
  const grid = document.getElementById('servicesGrid');
  const noFound = document.getElementById('noServiceFound');
  if (!grid) return;

  const normQuery = currentServiceSearchTerm ? normalizeArabic(currentServiceSearchTerm) : '';

  const filtered = SERVICES.filter(item => {
    const matchesSearch = !normQuery || 
      (item._normName && item._normName.includes(normQuery)) || 
      (item._normCat && item._normCat.includes(normQuery)) ||
      (item._normNotes && item._normNotes.includes(normQuery));
    const matchesCat = !currentServiceCategoryFilter || item.category === currentServiceCategoryFilter;
    return matchesSearch && matchesCat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noFound?.classList.remove('hidden');
    return;
  }

  noFound?.classList.add('hidden');

  grid.innerHTML = filtered.map(s => {
    const sIconClass = "w-5 h-5 text-teal-700 dark:text-teal-300";
    let sIcon = DENTAL_ICONS.molar(sIconClass);

    if (s.name.includes("غرس") || s.name.includes("زراعة") || s.category.includes("الغرسات")) {
      sIcon = DENTAL_ICONS.implant(sIconClass);
    } else if (s.name.includes("طربوش") || s.name.includes("زيركون") || s.name.includes("بورسلين") || s.name.includes("طقم") || s.category.includes("تركيبات")) {
      sIcon = DENTAL_ICONS.crown(sIconClass);
    } else if (s.category.includes("تقويم")) {
      sIcon = DENTAL_ICONS.braces(sIconClass);
    } else if (s.category.includes("أطفال")) {
      sIcon = DENTAL_ICONS.pediatric(sIconClass);
    } else if (s.category.includes("جراحة") || s.name.includes("خلع")) {
      sIcon = DENTAL_ICONS.surgery(sIconClass);
    } else if (s.category.includes("تبييض") || s.name.includes("تنظيف")) {
      sIcon = DENTAL_ICONS.whitening(sIconClass);
    } else if (s.category.includes("كشوفات") || s.name.includes("كشف")) {
      sIcon = DENTAL_ICONS.mirror(sIconClass);
    } else if (s.category.includes("أشعة") || s.name.includes("بانوراما")) {
      sIcon = DENTAL_ICONS.panorama(sIconClass);
    }

    const specP = s.specialistPrice !== undefined ? s.specialistPrice : s.price;
    const consP = s.consultantPrice !== undefined ? s.consultantPrice : s.price;
    const hasDualPrice = specP !== consP && consP > 0 && specP > 0;

    let priceBadgeHtml = '';
    if (specP === 0 && consP === 0) {
      priceBadgeHtml = `
        <span class="px-2.5 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-xs font-black text-teal-800 dark:text-teal-200">
          حسب خطة العلاج
        </span>
      `;
    } else if (hasDualPrice) {
      priceBadgeHtml = `
        <div class="flex flex-col items-end gap-1">
          <div class="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-[11px] font-bold text-teal-900 dark:text-teal-100">
            <span class="text-slate-500 dark:text-slate-400">أخصائي:</span>
            <span class="font-black text-xs text-teal-700 dark:text-teal-300">${specP}</span>
            <span class="text-[10px]">ج.م</span>
          </div>
          <div class="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-[11px] font-bold text-amber-900 dark:text-amber-100">
            <span class="text-slate-500 dark:text-slate-400">استشاري:</span>
            <span class="font-black text-xs text-amber-700 dark:text-amber-300">${consP}</span>
            <span class="text-[10px]">ج.م</span>
          </div>
        </div>
      `;
    } else {
      priceBadgeHtml = `
        <div class="px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-950 dark:text-teal-100 border border-teal-200 dark:border-teal-800 font-black shadow-2xs flex items-center gap-1">
          <span class="text-base md:text-lg font-black">${specP || consP}</span>
          <span class="text-xs font-bold text-teal-700 dark:text-teal-300">ج.م</span>
        </div>
      `;
    }

    return `
      <div class="glass-panel rounded-3xl p-5 border-2 border-teal-100/90 dark:border-teal-900/40 hover:border-teal-400 dark:hover:border-teal-500 shadow-card modern-card flex flex-col justify-between group">
        <div>
          <div class="flex items-start justify-between gap-3 mb-2.5">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-xl bg-teal-50/80 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800/60 flex items-center justify-center flex-shrink-0 shadow-2xs">
                ${sIcon}
              </div>
              <span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-teal-50 dark:bg-teal-950/70 text-teal-900 dark:text-teal-200 border border-teal-200/80 dark:border-teal-800/60 shadow-xs">
                ${s.category}
              </span>
            </div>
            ${priceBadgeHtml}
          </div>

          <h3 class="font-extrabold text-[#113238] dark:text-teal-100 text-sm md:text-base mb-1.5 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-300 transition">${s.name}</h3>
          ${s.notes ? `<p class="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">${s.notes}</p>` : ''}
        </div>

        <div class="pt-3.5 mt-3.5 border-t border-teal-100/80 dark:border-teal-900/40 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span class="flex items-center gap-1.5 font-bold text-teal-800 dark:text-teal-300">
            ${CORE_SVGS.clock}
            <span>${s.duration || 'حسب الحالة'}</span>
          </span>
          <div class="flex items-center gap-1.5">
            ${hasDualPrice ? `
              <button onclick="addToCalculator(${s.id}, 'specialist'); switchTab('calculator');" title="إضافة بسعر الأخصائي" class="text-teal-900 dark:text-teal-100 font-bold text-xs px-2.5 py-1.5 rounded-xl bg-teal-100/80 hover:bg-teal-600 hover:text-white dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 transition">
                + أخصائي
              </button>
              <button onclick="addToCalculator(${s.id}, 'consultant'); switchTab('calculator');" title="إضافة بسعر الاستشاري" class="text-amber-900 dark:text-amber-100 font-bold text-xs px-2.5 py-1.5 rounded-xl bg-amber-100/80 hover:bg-amber-600 hover:text-white dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 transition">
                + استشاري
              </button>
            ` : `
              <button onclick="addToCalculator(${s.id}, 'standard'); switchTab('calculator');" class="text-teal-900 dark:text-teal-100 font-extrabold flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-teal-100/80 hover:bg-teal-600 hover:text-white dark:bg-teal-950/80 dark:hover:bg-teal-600 dark:hover:text-white border border-teal-200 dark:border-teal-800 transition shadow-xs">
                ${CORE_SVGS.plus}
                <span>إضافة للحاسبة</span>
              </button>
            `}
            <button onclick="copyServicePrice('${s.name}', '${hasDualPrice ? `أخصائي: ${specP} ج.م | استشاري: ${consP} ج.م` : `${specP || consP} ج.م`}')" title="نسخ السعر" class="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 font-bold p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              ${CORE_SVGS.copy}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function copyServicePrice(name, price) {
  navigator.clipboard.writeText(`${name}: ${price}`);
  alert(`تم نسخ السعر بنجاح:\n${name}\n${price}`);
}

// ============================================================
// 12. Treatment Cost Calculator (Tab 5)
// ============================================================
function renderCalcServicePicker(term = '') {
  const list = document.getElementById('calcServicePickerList');
  if (!list) return;

  const normTerm = term ? normalizeArabic(term.trim()) : '';

  const filtered = !normTerm
    ? SERVICES
    : SERVICES.filter(s => (s._normName && s._normName.includes(normTerm)) || (s._normCat && s._normCat.includes(normTerm)));

  list.innerHTML = filtered.map(s => {
    const sIconClass = "w-4 h-4 text-teal-700 dark:text-teal-400";
    let sIcon = DENTAL_ICONS.molar(sIconClass);
    if (s.name.includes("غرس") || s.name.includes("زراعة")) sIcon = DENTAL_ICONS.implant(sIconClass);
    else if (s.name.includes("طربوش") || s.name.includes("زيركون") || s.category.includes("تركيبات")) sIcon = DENTAL_ICONS.crown(sIconClass);
    else if (s.category.includes("تقويم")) sIcon = DENTAL_ICONS.braces(sIconClass);
    else if (s.category.includes("أطفال")) sIcon = DENTAL_ICONS.pediatric(sIconClass);
    else if (s.category.includes("جراحة") || s.name.includes("خلع")) sIcon = DENTAL_ICONS.surgery(sIconClass);
    else if (s.category.includes("تبييض") || s.name.includes("تنظيف")) sIcon = DENTAL_ICONS.whitening(sIconClass);
    else if (s.category.includes("أشعة") || s.name.includes("بانوراما")) sIcon = DENTAL_ICONS.panorama(sIconClass);

    const specP = s.specialistPrice !== undefined ? s.specialistPrice : s.price;
    const consP = s.consultantPrice !== undefined ? s.consultantPrice : s.price;
    const hasDualPrice = specP !== consP && consP > 0 && specP > 0;

    return `
      <div class="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-[#0E262B] border-2 border-teal-100/90 dark:border-teal-900/40 text-xs shadow-xs hover:border-teal-300 transition">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-100 dark:border-teal-900 flex items-center justify-center flex-shrink-0">
            ${sIcon}
          </div>
          <div>
            <span class="font-bold text-slate-800 dark:text-slate-100 block">${s.name}</span>
            <span class="text-[10px] text-teal-700 dark:text-teal-400 font-extrabold">${s.category}</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          ${hasDualPrice ? `
            <button onclick="addToCalculator(${s.id}, 'specialist')" class="px-2.5 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950 hover:bg-teal-600 hover:text-white border border-teal-300 dark:border-teal-700 text-teal-900 dark:text-teal-100 font-bold text-xs flex items-center gap-1 transition shadow-xs">
              <span>أخصائي: ${specP} ج.م</span>
            </button>
            <button onclick="addToCalculator(${s.id}, 'consultant')" class="px-2.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950 hover:bg-amber-600 hover:text-white border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100 font-bold text-xs flex items-center gap-1 transition shadow-xs">
              <span>استشاري: ${consP} ج.م</span>
            </button>
          ` : `
            <span class="font-black text-teal-800 dark:text-teal-300 text-sm ml-2">${specP || consP} ج.م</span>
            <button onclick="addToCalculator(${s.id}, 'standard')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition shadow-xs">
              ${CORE_SVGS.plus}
              <span>إضافة</span>
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function addToCalculator(serviceId, tier = 'standard') {
  const service = SERVICES.find(s => s.id === serviceId);
  if (!service) return;

  let unitPrice = service.price || 0;
  let tierLabel = '';

  if (tier === 'consultant') {
    unitPrice = service.consultantPrice || service.price || 0;
    tierLabel = ' (استشاري)';
  } else if (tier === 'specialist') {
    unitPrice = service.specialistPrice || service.price || 0;
    tierLabel = ' (أخصائي)';
  } else {
    unitPrice = service.specialistPrice || service.price || 0;
  }

  const cartId = `${serviceId}_${tier}`;
  const existing = CALCULATOR_CART.find(item => item.cartId === cartId);
  if (existing) {
    existing.qty += 1;
  } else {
    CALCULATOR_CART.push({
      cartId: cartId,
      id: service.id,
      name: `${service.name}${tierLabel}`,
      price: unitPrice,
      qty: 1
    });
  }

  renderCalculatorCart();
  calculateTotal();
}

function updateCartItemQty(cartId, delta) {
  const item = CALCULATOR_CART.find(i => i.cartId === cartId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    CALCULATOR_CART = CALCULATOR_CART.filter(i => i.cartId !== cartId);
  }

  renderCalculatorCart();
  calculateTotal();
}

function removeCartItem(cartId) {
  CALCULATOR_CART = CALCULATOR_CART.filter(i => i.cartId !== cartId);
  renderCalculatorCart();
  calculateTotal();
}

function clearCalculator() {
  CALCULATOR_CART = [];
  const discountInput = document.getElementById('calcDiscountInput');
  if (discountInput) discountInput.value = 0;
  renderCalculatorCart();
  calculateTotal();
}

function renderCalculatorCart() {
  const container = document.getElementById('calcCartItems');
  const countBadge = document.getElementById('calcItemsCountBadge');
  if (!container) return;

  const totalItems = CALCULATOR_CART.reduce((sum, item) => sum + item.qty, 0);
  if (countBadge) countBadge.innerText = `${totalItems} خدمات`;

  if (CALCULATOR_CART.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 text-center py-8 font-medium">لم يتم اختيار أي خدمات بعد، انقر على زر "إضافة +" بجوار أي خدمة</p>`;
    return;
  }

  container.innerHTML = CALCULATOR_CART.map(item => {
    const itemTotal = item.price * item.qty;
    return `
      <div class="flex items-center justify-between p-2.5 rounded-2xl bg-white dark:bg-[#081E22] border border-teal-200 dark:border-teal-800/80 text-xs shadow-xs">
        <div class="flex-1 pl-2">
          <span class="font-bold text-slate-800 dark:text-slate-100 block truncate">${item.name}</span>
          <span class="text-[10px] text-teal-700 dark:text-teal-400 font-bold">${item.price} ج.م للخدمة</span>
        </div>
        <div class="flex items-center gap-2">
          <!-- Qty controls -->
          <div class="flex items-center border border-teal-200 dark:border-teal-800 rounded-xl bg-teal-50 dark:bg-[#0E262B]">
            <button onclick="updateCartItemQty('${item.cartId}', -1)" class="px-2.5 py-0.5 text-teal-900 dark:text-teal-200 font-bold hover:bg-teal-200/50 rounded-r transition">-</button>
            <span class="px-2 font-black text-teal-950 dark:text-teal-100 text-xs">${item.qty}</span>
            <button onclick="updateCartItemQty('${item.cartId}', 1)" class="px-2.5 py-0.5 text-teal-900 dark:text-teal-200 font-bold hover:bg-teal-200/50 rounded-l transition">+</button>
          </div>
          <span class="font-black text-teal-950 dark:text-teal-100 w-16 text-left">${itemTotal} ج.م</span>
          <button onclick="removeCartItem('${item.cartId}')" class="text-rose-500 hover:text-rose-700 p-1.5 rounded-lg hover:bg-rose-50 transition" title="حذف">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function calculateTotal() {
  const subtotal = CALCULATOR_CART.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountInput = document.getElementById('calcDiscountInput');
  const discountPercent = Number(discountInput?.value) || 0;

  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const subText = document.getElementById('calcSubtotalText');
  const finalVal = document.getElementById('calcFinalTotalText');
  if (subText) subText.innerText = `${subtotal.toLocaleString()} ج.م`;
  if (finalVal) finalVal.innerText = `${finalTotal.toLocaleString()} ج.م`;
}

function copyQuotationText() {
  if (CALCULATOR_CART.length === 0) {
    alert("يرجى اختيار خدمات أولاً في الحاسبة قبل النسخ");
    return;
  }

  const subtotal = CALCULATOR_CART.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountPercent = Number(document.getElementById('calcDiscountInput')?.value) || 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  let message = `🏥 *مجموعة الجوهرة لطب الأسنان - فرع ميامي*\n`;
  message += `📄 *كشف خطة العلاج والتكلفة التقديرية*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  CALCULATOR_CART.forEach((item, idx) => {
    message += `${idx + 1}. ${item.name} (عدد: ${item.qty}) ← ${item.price * item.qty} ج.م\n`;
  });
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `▫️ المجموع: ${subtotal} ج.م\n`;
  if (discountPercent > 0) {
    message += `▫️ خصم المركز (${discountPercent}%): -${discountAmount} ج.م\n`;
  }
  message += `⭐ *الإجمالي الصافي النهائي: ${finalTotal} ج.م*\n\n`;
  message += `📍 العنوان: ميامي - شارع إسكندر إبراهيم - الإسكندرية\n`;
  message += `📞 للحجز والاستفسار: 01023335315`;

  navigator.clipboard.writeText(message);
  alert("تم نسخ خطة العلاج والتكلفة بنجاح جاهزة للإرسال على الواتساب!");
}

// ============================================================
// 13. Protected Doctor Absence Management
// ============================================================
function populateAbsentDoctorSelect() {
  const select = document.getElementById('absentDoctorSelect');
  if (!select) return;

  select.innerHTML = DOCTORS.map(d => `<option value="${d.name}">${d.name} (${d.specialty})</option>`).join('');
}

async function markDoctorAbsent() {
  const select = document.getElementById('absentDoctorSelect');
  const reasonInput = document.getElementById('absentReasonInput');
  const doctorName = select?.value;
  const reason = reasonInput?.value.trim() || 'اعتذار طارئ';

  if (!doctorName) return;

  const todayIso = new Date().toISOString().split('T')[0];

  const absenceRecord = {
    doctor_name: doctorName,
    absence_date: todayIso,
    reason: reason
  };

  ABSENT_DOCTORS = ABSENT_DOCTORS.filter(a => a.doctor_name !== doctorName);
  ABSENT_DOCTORS.push(absenceRecord);
  localStorage.setItem('elgawhara_absent_doctors', JSON.stringify(ABSENT_DOCTORS));

  if (supabaseClient) {
    try {
      await supabaseClient.from('doctor_absences').upsert([absenceRecord]);
    } catch (e) {
      console.log('Error syncing absence to supabase:', e);
    }
  }

  reasonInput.value = '';
  renderAbsentDoctorsList();
  renderDoctorsGrid();
  renderFloorMap();
  const countBadge = document.getElementById('adminAbsencesCount');
  if (countBadge) countBadge.innerText = ABSENT_DOCTORS.length;
  alert(`تم تسجيل اعتذار الطبيب (${doctorName}) لليوم بنجاح.`);
}

async function removeDoctorAbsent(doctorName) {
  ABSENT_DOCTORS = ABSENT_DOCTORS.filter(a => a.doctor_name !== doctorName);
  localStorage.setItem('elgawhara_absent_doctors', JSON.stringify(ABSENT_DOCTORS));

  if (supabaseClient) {
    try {
      await supabaseClient.from('doctor_absences').delete().eq('doctor_name', doctorName);
    } catch (e) {
      console.log('Error deleting absence from supabase:', e);
    }
  }

  renderAbsentDoctorsList();
  renderDoctorsGrid();
  renderFloorMap();
  const countBadge = document.getElementById('adminAbsencesCount');
  if (countBadge) countBadge.innerText = ABSENT_DOCTORS.length;
  alert(`تم إلغاء اعتذار (${doctorName}) وعودته للجدول الطبيعي.`);
}

function renderAbsentDoctorsList() {
  const container = document.getElementById('absentDoctorsList');
  const countBadge = document.getElementById('adminAbsencesCount');
  if (countBadge) countBadge.innerText = ABSENT_DOCTORS.length;
  if (!container) return;

  if (ABSENT_DOCTORS.length === 0) {
    container.innerHTML = `<p class="text-[10px] text-slate-400">لا يوجد أطباء معتذرون مسجلون اليوم</p>`;
    return;
  }

  container.innerHTML = ABSENT_DOCTORS.map(a => {
    return `
      <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#0E262B] border border-rose-200/80 dark:border-rose-900/60 text-xs shadow-2xs">
        <div>
          <span class="font-extrabold text-rose-800 dark:text-rose-300">${a.doctor_name}</span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 mr-1.5">(${a.reason})</span>
        </div>
        <button onclick="removeDoctorAbsent('${a.doctor_name}')" class="px-2.5 py-1 rounded-lg text-xs bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 font-bold transition">
          إلغاء الاعتذار
        </button>
      </div>
    `;
  }).join('');
}

// ============================================================
// 13.5 Daily Notices & Instructions Board Logic (سبورة الملاحظات)
// ============================================================
function formatNoticeTime(isoStr) {
  if (!isoStr) return 'اليوم';
  try {
    const d = new Date(isoStr);
    const hours = d.getHours();
    const mins = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'م' : 'ص';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${mins} ${ampm}`;
  } catch (e) {
    return 'اليوم';
  }
}

function toggleNoticeBoardCollapse() {
  isNoticeBoardCollapsed = !isNoticeBoardCollapsed;
  localStorage.setItem('elgawhara_notices_collapsed', isNoticeBoardCollapsed);
  renderDailyNotices();
}

function toggleAdminAddNoticeForm() {
  const form = document.getElementById('adminAddNoticeForm');
  if (form) {
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
      setTimeout(() => {
        document.getElementById('adminNewNoticeTitle')?.focus();
      }, 50);
    }
  }
}

function adminSaveNewNoticeInline() {
  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  if (!isAuth) {
    alert("عذراً، نشر التعليمات متاح لمدير المركز فقط عبر لوحة الإدارة.");
    openConfigModal();
    return;
  }

  const title = document.getElementById('adminNewNoticeTitle')?.value.trim();
  const type = document.getElementById('adminNewNoticeType')?.value || 'warning';
  const author = document.getElementById('adminNewNoticeAuthor')?.value.trim() || 'إدارة المركز';
  const content = document.getElementById('adminNewNoticeContent')?.value.trim();
  const pinned = document.getElementById('adminNewNoticePinned')?.checked || false;

  if (!title || !content) {
    alert("يرجى كتابة عنوان الملاحظة وتفاصيل التعليمات أولاً.");
    return;
  }

  const typeLabels = {
    urgent: "تنبيه عاجل",
    warning: "صيانة وتعديل مواعيد",
    info: "مواعيد أطباء وشفتات",
    success: "توجيه إداري"
  };

  const newNoticeId = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : ("notice_" + Date.now());
  const newNotice = {
    id: newNoticeId,
    title,
    content,
    type,
    type_label: typeLabels[type] || "توجيه عام",
    author,
    pinned,
    created_at: new Date().toISOString()
  };

  if (pinned) {
    DAILY_NOTICES.unshift(newNotice);
  } else {
    DAILY_NOTICES.push(newNotice);
  }

  localStorage.setItem('elgawhara_daily_notices', JSON.stringify(DAILY_NOTICES));
  renderDailyNotices();

  const titleInput = document.getElementById('adminNewNoticeTitle');
  const contentInput = document.getElementById('adminNewNoticeContent');
  const pinnedInput = document.getElementById('adminNewNoticePinned');
  if (titleInput) titleInput.value = '';
  if (contentInput) contentInput.value = '';
  if (pinnedInput) pinnedInput.checked = false;
  toggleAdminAddNoticeForm();

  if (supabaseClient) {
    try {
      supabaseClient.from('daily_notices').insert([{
        id: newNotice.id,
        title: newNotice.title,
        content: newNotice.content,
        type: newNotice.type,
        type_label: newNotice.type_label,
        author: newNotice.author,
        pinned: newNotice.pinned
      }]).then(() => {});
    } catch (err) {
      console.log("Supabase notice insert error:", err);
    }
  }
}

function openAddNoticeModal() {
  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  if (!isAuth) {
    alert("عذراً، إضافة وتعديل التعليمات متاح للمدير فقط عبر لوحة الإدارة.");
    openConfigModal();
    return;
  }
  const modal = document.getElementById('addNoticeModal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('newNoticeTitle')?.focus();
    }, 50);
  }
}

function closeAddNoticeModal() {
  const modal = document.getElementById('addNoticeModal');
  if (modal) {
    modal.classList.add('hidden');
    const titleInput = document.getElementById('newNoticeTitle');
    const contentInput = document.getElementById('newNoticeContent');
    const pinnedInput = document.getElementById('newNoticePinned');
    if (titleInput) titleInput.value = '';
    if (contentInput) contentInput.value = '';
    if (pinnedInput) pinnedInput.checked = false;
  }
}

function saveNewNotice() {
  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  if (!isAuth) {
    alert("عذراً، نشر التعليمات متاح لمدير المركز فقط عبر لوحة الإدارة.");
    openConfigModal();
    return;
  }

  const title = document.getElementById('newNoticeTitle')?.value.trim();
  const type = document.getElementById('newNoticeType')?.value || 'warning';
  const author = document.getElementById('newNoticeAuthor')?.value.trim() || 'إدارة المركز';
  const content = document.getElementById('newNoticeContent')?.value.trim();
  const pinned = document.getElementById('newNoticePinned')?.checked || false;

  if (!title || !content) {
    alert("يرجى كتابة عنوان الملاحظة وتفاصيل التعليمات أولاً.");
    return;
  }

  const typeLabels = {
    urgent: "تنبيه عاجل",
    warning: "صيانة وتعديل مواعيد",
    info: "مواعيد أطباء وشفتات",
    success: "توجيه إداري"
  };

  const newNoticeId = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : ("notice_" + Date.now());
  const newNotice = {
    id: newNoticeId,
    title,
    content,
    type,
    type_label: typeLabels[type] || "توجيه عام",
    author,
    pinned,
    created_at: new Date().toISOString()
  };

  if (pinned) {
    DAILY_NOTICES.unshift(newNotice);
  } else {
    DAILY_NOTICES.push(newNotice);
  }

  localStorage.setItem('elgawhara_daily_notices', JSON.stringify(DAILY_NOTICES));
  renderDailyNotices();
  closeAddNoticeModal();

  if (supabaseClient) {
    try {
      supabaseClient.from('daily_notices').insert([{
        id: newNotice.id,
        title: newNotice.title,
        content: newNotice.content,
        type: newNotice.type,
        type_label: newNotice.type_label,
        author: newNotice.author,
        pinned: newNotice.pinned
      }]).then(() => {});
    } catch (err) {
      console.log("Supabase notice insert error:", err);
    }
  }
}

function deleteNotice(id) {
  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  if (!isAuth) {
    alert("عذراً، حذف التعليمات متاح للمدير فقط عبر لوحة الإدارة.");
    openConfigModal();
    return;
  }

  if (!confirm("هل أنت متأكد من حذف هذه الملاحظة من السبورة؟")) return;
  DAILY_NOTICES = DAILY_NOTICES.filter(n => n.id !== id);
  localStorage.setItem('elgawhara_daily_notices', JSON.stringify(DAILY_NOTICES));
  renderDailyNotices();

  if (supabaseClient) {
    try {
      supabaseClient.from('daily_notices').delete().eq('id', id).then(() => {});
    } catch(err) {}
  }
}

function clearAllNotices() {
  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  if (!isAuth) {
    alert("عذراً، مسح التعليمات متاح لمدير المركز فقط عبر لوحة الإدارة.");
    openConfigModal();
    return;
  }
  if (!confirm("هل أنت متأكد من مسح جميع ملاحظات وتعليمات اليوم من السبورة؟")) return;
  DAILY_NOTICES = [];
  localStorage.setItem('elgawhara_daily_notices', JSON.stringify(DAILY_NOTICES));
  renderDailyNotices();

  if (supabaseClient) {
    try {
      supabaseClient.from('daily_notices').delete().not('id', 'is', null).then(() => {});
    } catch(err) {}
  }
}

function togglePinNotice(id) {
  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  if (!isAuth) {
    alert("عذراً، تثبيت التعليمات متاح للمدير فقط عبر لوحة الإدارة.");
    openConfigModal();
    return;
  }

  const notice = DAILY_NOTICES.find(n => n.id === id);
  if (notice) {
    notice.pinned = !notice.pinned;
    DAILY_NOTICES.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
    localStorage.setItem('elgawhara_daily_notices', JSON.stringify(DAILY_NOTICES));
    renderDailyNotices();

    if (supabaseClient) {
      try {
        supabaseClient.from('daily_notices').update({ pinned: notice.pinned }).eq('id', id).then(() => {});
      } catch(err) {}
    }
  }
}

function copyNoticeText(id) {
  const notice = DAILY_NOTICES.find(n => n.id === id);
  if (!notice) return;
  const text = `📢 *[${notice.type_label || 'تنبيه الجوهرة - فرع ميامي'}]*\n*${notice.title}*\n${notice.content}\n_المصدر: ${notice.author || 'الاستقبال'}_`;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert("تم نسخ نص التنبيه بنجاح لمشاركته في محادثات الواتساب أو جروب العمل!");
    }).catch(() => {
      fallbackCopyText(text);
    });
  } else {
    fallbackCopyText(text);
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  alert("تم نسخ نص التنبيه بنجاح!");
}

function renderDailyNotices() {
  const grid = document.getElementById('noticesCardsGrid');
  const collapsedBar = document.getElementById('noticeBoardCollapsedBar');
  const toggleBtnText = document.getElementById('toggleNoticeBoardText');
  const toggleBtnIcon = document.getElementById('toggleNoticeBoardIcon');
  const activeCountBadge = document.getElementById('noticesActiveCountBadge');
  const adminCountBadge = document.getElementById('adminNoticesCount');
  const collapsedHighlight = document.getElementById('noticeCollapsedHighlight');
  const collapsedCount = document.getElementById('noticesCollapsedCount');

  const count = DAILY_NOTICES.length;
  if (activeCountBadge) activeCountBadge.innerText = `${count} تعليمات`;
  if (adminCountBadge) adminCountBadge.innerText = count;
  if (collapsedCount) collapsedCount.innerText = count;

  if (isNoticeBoardCollapsed) {
    grid?.classList.add('hidden');
    collapsedBar?.classList.remove('hidden');
    if (toggleBtnText) toggleBtnText.innerText = "توسيع";
    if (toggleBtnIcon) toggleBtnIcon.setAttribute('data-lucide', 'chevron-down');
    if (collapsedHighlight) {
      const topNotice = DAILY_NOTICES.find(n => n.pinned) || DAILY_NOTICES[0];
      collapsedHighlight.innerText = topNotice ? `${topNotice.title}: ${topNotice.content}` : "لا توجد ملاحظات أو تعليمات نشطة حالياً";
    }
  } else {
    grid?.classList.remove('hidden');
    collapsedBar?.classList.add('hidden');
    if (toggleBtnText) toggleBtnText.innerText = "طي";
    if (toggleBtnIcon) toggleBtnIcon.setAttribute('data-lucide', 'chevron-up');
  }

  if (!grid) return;

  if (DAILY_NOTICES.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-5 text-center text-slate-500 dark:text-slate-400 bg-white/60 dark:bg-[#081E22]/60 rounded-2xl border border-dashed border-amber-300 dark:border-amber-800">
        <i data-lucide="check-circle" class="w-7 h-7 text-emerald-500 mx-auto mb-1.5"></i>
        <p class="font-bold text-xs text-slate-700 dark:text-slate-300">لا توجد ملاحظات أو تعليمات خاصة لليوم</p>
        <p class="text-[11px] text-slate-400 mt-0.5">سير العمل منتظم بفرع ميامي. (التعليمات والملاحظات تصدر وتُعدل حصرياً من قِبل إدارة المركز عبر لوحة التحكم 🛡️).</p>
      </div>
    `;
    renderAdminNoticesList();
    lucide.createIcons();
    return;
  }

  const sortedNotices = [...DAILY_NOTICES].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  grid.innerHTML = sortedNotices.map(n => {
    let typeConfig = {
      urgent: {
        border: 'border-rose-300 dark:border-rose-900',
        bg: 'bg-rose-50/70 dark:bg-rose-950/40',
        badge: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-900/60 dark:text-rose-200 dark:border-rose-800',
        icon: 'alert-triangle',
        iconColor: 'text-rose-600 dark:text-rose-400',
        titleColor: 'text-rose-950 dark:text-rose-100'
      },
      warning: {
        border: 'border-amber-300 dark:border-amber-900',
        bg: 'bg-amber-50/70 dark:bg-amber-950/40',
        badge: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/60 dark:text-amber-200 dark:border-amber-800',
        icon: 'wrench',
        iconColor: 'text-amber-600 dark:text-amber-400',
        titleColor: 'text-amber-950 dark:text-amber-100'
      },
      info: {
        border: 'border-sky-300 dark:border-sky-900',
        bg: 'bg-sky-50/70 dark:bg-sky-950/40',
        badge: 'bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-900/60 dark:text-sky-200 dark:border-sky-800',
        icon: 'clock',
        iconColor: 'text-sky-600 dark:text-sky-400',
        titleColor: 'text-sky-950 dark:text-sky-100'
      },
      success: {
        border: 'border-emerald-300 dark:border-emerald-900',
        bg: 'bg-emerald-50/70 dark:bg-emerald-950/40',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900/60 dark:text-emerald-200 dark:border-emerald-800',
        icon: 'check-circle-2',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        titleColor: 'text-emerald-950 dark:text-emerald-100'
      }
    }[n.type] || {
      border: 'border-teal-300 dark:border-teal-900',
      bg: 'bg-teal-50/70 dark:bg-teal-950/40',
      badge: 'bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-900/60 dark:text-teal-200 dark:border-teal-800',
      icon: 'info',
      iconColor: 'text-teal-600 dark:text-teal-400',
      titleColor: 'text-teal-950 dark:text-teal-100'
    };

    return `
      <div class="flex flex-col justify-between p-3.5 rounded-2xl ${typeConfig.bg} border-2 ${typeConfig.border} shadow-2xs hover:shadow-md transition relative group">
        <div>
          <!-- Top Row: Badge, Pin, Actions -->
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-extrabold border ${typeConfig.badge}">
                <i data-lucide="${typeConfig.icon}" class="w-3 h-3 ${typeConfig.iconColor}"></i>
                <span>${n.type_label || 'تنبيه'}</span>
              </span>
              ${n.pinned ? `
                <span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800" title="تنبيه مثبت">
                  <i data-lucide="pin" class="w-2.5 h-2.5"></i>
                  <span>مثبت</span>
                </span>
              ` : ''}
            </div>

            <!-- Card Actions: Copy Only (Protected) -->
            <div class="flex items-center gap-1">
              <button onclick="copyNoticeText('${n.id}')" title="نسخ نص الملاحظة لمشاركته على واتساب" class="w-6 h-6 rounded-lg bg-white/80 dark:bg-[#081E22]/80 hover:bg-white dark:hover:bg-[#081E22] text-slate-500 hover:text-teal-700 dark:hover:text-teal-300 flex items-center justify-center transition border border-slate-200 dark:border-slate-800">
                <i data-lucide="copy" class="w-3 h-3"></i>
              </button>
            </div>
          </div>

          <!-- Title & Content -->
          <h4 class="font-extrabold text-xs md:text-sm ${typeConfig.titleColor} mb-1.5 leading-snug">${n.title}</h4>
          <p class="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-3">${n.content}</p>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 pt-2 mt-auto">
          <span class="flex items-center gap-1 font-semibold truncate">
            <i data-lucide="shield" class="w-3 h-3 text-teal-600 dark:text-teal-400 flex-shrink-0"></i>
            <span>${n.author || 'إدارة المركز'}</span>
          </span>
          <span class="font-bold flex-shrink-0 mr-2 text-[10px] text-slate-400">${formatNoticeTime(n.created_at)}</span>
        </div>
      </div>
    `;
  }).join('');

  renderAdminNoticesList();
  lucide.createIcons();
}

function renderAdminNoticesList() {
  const container = document.getElementById('adminNoticesList');
  if (!container) return;

  if (DAILY_NOTICES.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 text-xs text-slate-400">
        لا توجد تعليمات نشطة حالياً. يمكنك إضافة تعليمات جديدة من الزر أعلاه.
      </div>
    `;
    return;
  }

  const sortedNotices = [...DAILY_NOTICES].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  container.innerHTML = sortedNotices.map(n => {
    return `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#0E262B] border border-amber-200/80 dark:border-amber-900/60 text-xs shadow-2xs gap-3">
        <div class="min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="font-extrabold text-[#113238] dark:text-amber-200 truncate">${n.title}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-bold">${n.type_label || 'تعليمات'}</span>
            ${n.pinned ? '<span class="text-[10px] text-amber-600 dark:text-amber-400 font-bold">📌 مثبت</span>' : ''}
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${n.content}</p>
        </div>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          <button onclick="togglePinNotice('${n.id}')" title="${n.pinned ? 'إلغاء التثبيت' : 'تثبيت في البداية'}" class="px-2 py-1 rounded-lg text-xs font-bold border transition ${n.pinned ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}">
            📌
          </button>
          <button onclick="deleteNotice('${n.id}')" class="px-2.5 py-1 rounded-lg text-xs bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 font-bold transition">
            حذف
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// 14. Comprehensive Admin Control Panel & Data Management
// ============================================================
const DEVELOPER_PIN = "1122";
let logoClickCount = 0;
let logoClickTimer = null;

function handleSecretLogoClick() {
  logoClickCount++;
  clearTimeout(logoClickTimer);
  logoClickTimer = setTimeout(() => {
    logoClickCount = 0;
  }, 2000);

  if (logoClickCount >= 5) {
    logoClickCount = 0;
    openConfigModal();
  }
}

window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) ||
      (e.ctrlKey && e.altKey && (e.key === 'S' || e.key === 's'))) {
    e.preventDefault();
    openConfigModal();
  }
});

function openConfigModal() {
  const modal = document.getElementById('configModal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  const pinScreen = document.getElementById('devPinScreen');
  const settingsScreen = document.getElementById('devSettingsContent');
  const pinInput = document.getElementById('devPinInput');
  const pinError = document.getElementById('pinErrorMsg');

  if (isAuth) {
    pinScreen?.classList.add('hidden');
    settingsScreen?.classList.remove('hidden');
    switchAdminTab('doctors');
  } else {
    pinScreen?.classList.remove('hidden');
    settingsScreen?.classList.add('hidden');
    if (pinInput) pinInput.value = '';
    pinError?.classList.add('hidden');
    setTimeout(() => pinInput?.focus(), 100);
  }

  lucide.createIcons();
}

function verifyDevPin() {
  const pinInput = document.getElementById('devPinInput');
  const pinError = document.getElementById('pinErrorMsg');
  const pinScreen = document.getElementById('devPinScreen');
  const settingsScreen = document.getElementById('devSettingsContent');

  if (pinInput && pinInput.value.trim() === DEVELOPER_PIN) {
    sessionStorage.setItem('elgawhara_admin_auth', 'true');
    pinError?.classList.add('hidden');
    pinScreen?.classList.add('hidden');
    settingsScreen?.classList.remove('hidden');

    switchAdminTab('doctors');
    lucide.createIcons();
  } else {
    pinError?.classList.remove('hidden');
    if (pinInput) {
      pinInput.value = '';
      pinInput.focus();
    }
  }
}

function resetDevPinPrompt() {
  sessionStorage.removeItem('elgawhara_admin_auth');
  document.getElementById('devSettingsContent')?.classList.add('hidden');
  document.getElementById('devPinScreen')?.classList.remove('hidden');
  const input = document.getElementById('devPinInput');
  if (input) {
    input.value = '';
    input.focus();
  }
}

function closeConfigModal() {
  document.getElementById('configModal')?.classList.add('hidden');
  resetDevPinPrompt();
}

function switchAdminTab(tab) {
  const tabs = ['doctors', 'services', 'absences', 'notices', 'backup'];
  tabs.forEach(t => {
    const panel = document.getElementById(`adminPanel${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const btn = document.getElementById(`adminTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (panel) {
      if (t === tab) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    }
    if (btn) {
      if (t === tab) {
        btn.className = "px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-teal-700 to-[#113238] text-white shadow-xs flex-shrink-0 whitespace-nowrap";
        if (typeof btn.scrollIntoView === 'function') {
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      } else {
        btn.className = "px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 flex-shrink-0 whitespace-nowrap";
      }
    }
  });

  if (tab === 'doctors') renderAdminDoctorsList();
  if (tab === 'services') renderAdminServicesList();
  if (tab === 'absences') renderAbsentDoctorsList();
  if (tab === 'notices') renderAdminNoticesList();
  lucide.createIcons();
}

function toggleAdminAddDoctorForm() {
  const form = document.getElementById('adminAddDoctorForm');
  form?.classList.toggle('hidden');
  if (!form?.classList.contains('hidden')) {
    document.getElementById('newDoctorName')?.focus();
  }
}

function toggleAdminAddServiceForm() {
  const form = document.getElementById('adminAddServiceForm');
  form?.classList.toggle('hidden');
  if (!form?.classList.contains('hidden')) {
    document.getElementById('newServiceName')?.focus();
  }
}

function toggleBulkAdjustPriceForm() {
  const form = document.getElementById('adminBulkAdjustForm');
  form?.classList.toggle('hidden');
  if (!form?.classList.contains('hidden')) {
    document.getElementById('bulkPercentInput')?.focus();
  }
}

function openAddServiceModal() {
  openConfigModal();
  switchAdminTab('services');
  toggleAdminAddServiceForm();
}

// --- DOCTOR SCHEDULE & PROFILE ADMIN CRUD ---
function persistDoctorSchedules() {
  localStorage.setItem('elgawhara_morning_schedule', JSON.stringify(MORNING_SCHEDULE));
  localStorage.setItem('elgawhara_evening_schedule', JSON.stringify(EVENING_SCHEDULE));
  localStorage.setItem('elgawhara_custom_doctors', JSON.stringify(CUSTOM_DOCTORS));
  DOCTORS = buildDoctorsDatabase();
  localStorage.setItem('elgawhara_doctors_data', JSON.stringify(DOCTORS));

  renderDoctorsGrid();
  renderFloorMap();
  renderClinicsTable();
  renderAdminDoctorsList();
  populateAbsentDoctorSelect();
  updateDoctorCountBadge();
}

function adminAddDoctorScheduleSlot(doctorName, day, shift, clinicKey) {
  if (!doctorName || !day || !shift || !clinicKey) return;
  const sched = shift === 'morning' ? MORNING_SCHEDULE : EVENING_SCHEDULE;
  if (!sched[day]) sched[day] = {};
  sched[day][clinicKey] = doctorName;
  persistDoctorSchedules();
}

function adminRemoveDoctorScheduleSlot(day, shift, clinicKey) {
  const sched = shift === 'morning' ? MORNING_SCHEDULE : EVENING_SCHEDULE;
  if (sched[day] && sched[day][clinicKey]) {
    sched[day][clinicKey] = "-";
    persistDoctorSchedules();
  }
}

function adminAddSlotForDoctor(docName, docSafeId) {
  const day = document.getElementById(`slotDay_${docSafeId}`)?.value;
  const shift = document.getElementById(`slotShift_${docSafeId}`)?.value;
  const clinicId = document.getElementById(`slotClinic_${docSafeId}`)?.value;

  if (!day || !shift || !clinicId) return;
  adminAddDoctorScheduleSlot(docName, day, shift, clinicId);
}

function adminSaveNewDoctor() {
  const nameInput = document.getElementById('newDoctorName');
  const specInput = document.getElementById('newDoctorSpecialty');
  const pedoInput = document.getElementById('newDoctorIsPedo');

  const name = nameInput.value.trim();
  const specialty = specInput.value;
  const isPedo = pedoInput.checked;

  if (!name) {
    alert("يرجى إدخال اسم الطبيب");
    return;
  }

  const formattedName = name.startsWith("د/") || name.startsWith("د. ") ? name : `د/ ${name}`;

  if (DOCTORS.some(d => d.name === formattedName)) {
    alert("هذا الطبيب مسجل بالفعل بالمركز!");
    return;
  }

  CUSTOM_DOCTORS.push({
    name: formattedName,
    specialty: specialty,
    isPedo: isPedo,
    schedule: []
  });

  nameInput.value = "";
  pedoInput.checked = false;
  document.getElementById('adminAddDoctorForm').classList.add('hidden');

  persistDoctorSchedules();
  alert(`تمت إضافة ${formattedName} بنجاح! يمكنك الآن إضافة المواعيد والعيادات له.`);
}

function adminEditDoctor(oldName) {
  const doc = DOCTORS.find(d => d.name === oldName);
  if (!doc) return;

  const newName = prompt("أدخل اسم الطبيب الجديد:", doc.name);
  if (!newName || !newName.trim()) return;
  const newSpec = prompt("أدخل تخصص الطبيب (مثال: جراحة الفم، تقويم، أطفال، عام):", doc.specialty);
  if (!newSpec || !newSpec.trim()) return;

  const trimmedNewName = newName.trim();
  const trimmedNewSpec = newSpec.trim();

  function replaceInSched(sched) {
    Object.keys(sched).forEach(day => {
      Object.keys(sched[day]).forEach(k => {
        if (sched[day][k] && sched[day][k].includes(oldName)) {
          sched[day][k] = trimmedNewName;
        }
      });
    });
  }
  replaceInSched(MORNING_SCHEDULE);
  replaceInSched(EVENING_SCHEDULE);

  const cIndex = CUSTOM_DOCTORS.findIndex(c => c.name === oldName);
  if (cIndex >= 0) {
    CUSTOM_DOCTORS[cIndex].name = trimmedNewName;
    CUSTOM_DOCTORS[cIndex].specialty = trimmedNewSpec;
  } else {
    CUSTOM_DOCTORS.push({ name: trimmedNewName, specialty: trimmedNewSpec, isPedo: doc.isPedo });
  }

  persistDoctorSchedules();
  alert("تم تحديث بيانات الطبيب بنجاح في جميع الشاشات!");
}

function adminDeleteDoctor(doctorName) {
  if (!confirm(`هل أنت متأكد من حذف الطبيب (${doctorName}) وإلغاء جميع عياداته؟`)) return;

  function clearInSched(sched) {
    Object.keys(sched).forEach(day => {
      Object.keys(sched[day]).forEach(k => {
        if (sched[day][k] && sched[day][k].includes(doctorName)) {
          sched[day][k] = "-";
        }
      });
    });
  }
  clearInSched(MORNING_SCHEDULE);
  clearInSched(EVENING_SCHEDULE);

  CUSTOM_DOCTORS = CUSTOM_DOCTORS.filter(c => c.name !== doctorName);
  persistDoctorSchedules();
  alert(`تم حذف الطبيب (${doctorName}) بنجاح.`);
}

function renderAdminDoctorsList() {
  const container = document.getElementById('adminDoctorsListContainer');
  if (!container) return;

  const searchTerm = (document.getElementById('adminDoctorSearchInput')?.value || '').trim();
  const countSpan = document.getElementById('adminDoctorsCount');
  if (countSpan) countSpan.innerText = DOCTORS.length;

  const filtered = DOCTORS.filter(d => isArabicMatch(d.name, searchTerm) || isArabicMatch(d.specialty, searchTerm));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-xs text-slate-400 font-bold border border-dashed rounded-2xl">لا يوجد أي طبيب يطابق هذا البحث</div>`;
    return;
  }

  container.innerHTML = filtered.map(doc => {
    const docSafeId = doc.name.replace(/[^\w\u0621-\u064A]/g, '_');
    
    const slotsHtml = doc.schedule && doc.schedule.length > 0 ? doc.schedule.map(slot => `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-teal-50 dark:bg-teal-950 text-[11px] font-bold text-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-800 shadow-2xs">
        <span>${slot.day}</span>
        <span class="text-teal-600 dark:text-teal-400">(${slot.shiftLabel})</span>
        <span class="text-slate-600 dark:text-slate-400">${slot.clinic}</span>
        <button onclick="adminRemoveDoctorScheduleSlot('${slot.day}', '${slot.shift}', '${slot.clinicId}')" title="إلغاء هذا الموعد" class="hover:text-rose-600 font-black ml-1 text-xs">✕</button>
      </span>
    `).join('') : `<span class="text-slate-400 text-xs italic">لا توجد مواعيد مسجلة حالياً</span>`;

    return `
      <div class="p-4 rounded-2xl bg-white dark:bg-[#0E262B] border-2 border-teal-100 dark:border-teal-900/60 shadow-xs space-y-3">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <h4 class="font-black text-sm text-[#113238] dark:text-teal-200">${doc.name}</h4>
            <span class="px-2 py-0.5 rounded-lg text-[10px] font-extrabold bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-200">${doc.specialty}</span>
            ${doc.isPedo ? `<span class="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">Pedo</span>` : ''}
            <span class="text-[10px] text-slate-400 font-bold">(${doc.schedule.length} مواعيد)</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="adminEditDoctor('${doc.name}')" title="تعديل اسم أو تخصص الطبيب" class="px-2.5 py-1 rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-950 dark:hover:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-bold transition flex items-center gap-1 border border-teal-200 dark:border-teal-800">
              <i data-lucide="edit-2" class="w-3 h-3"></i>
              <span>تعديل</span>
            </button>
            <button onclick="adminDeleteDoctor('${doc.name}')" title="حذف الطبيب بالكامل" class="px-2.5 py-1 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300 text-xs font-bold transition flex items-center gap-1 border border-rose-200 dark:border-rose-900">
              <i data-lucide="trash-2" class="w-3 h-3"></i>
              <span>حذف</span>
            </button>
          </div>
        </div>

        <div class="space-y-1.5">
          <span class="text-[11px] font-extrabold text-slate-500 block">المواعيد والعيادات المسجلة:</span>
          <div class="flex flex-wrap gap-1.5">
            ${slotsHtml}
          </div>
        </div>

        <!-- Inline Add Slot for this doctor -->
        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-teal-100/70 dark:border-teal-900/40 text-xs">
          <span class="text-[11px] font-extrabold text-teal-800 dark:text-teal-300">+ تخصيص موعد جديد:</span>
          <select id="slotDay_${docSafeId}" class="px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold dark:bg-[#081E22] outline-none">
            <option value="السبت">السبت</option>
            <option value="الأحد">الأحد</option>
            <option value="الإثنين">الإثنين</option>
            <option value="الثلاثاء">الثلاثاء</option>
            <option value="الأربعاء">الأربعاء</option>
            <option value="الخميس">الخميس</option>
            <option value="الجمعة">الجمعة</option>
          </select>
          <select id="slotShift_${docSafeId}" class="px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold dark:bg-[#081E22] outline-none">
            <option value="morning">صباحي (10ص - 4م)</option>
            <option value="evening">مسائي (4م - 10م)</option>
          </select>
          <select id="slotClinic_${docSafeId}" class="px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold dark:bg-[#081E22] outline-none">
            <option value="c1">عيادة 1</option>
            <option value="c2">عيادة 2</option>
            <option value="c3">عيادة 3</option>
            <option value="c4">عيادة 4</option>
            <option value="c5">عيادة 5</option>
            <option value="c7">عيادة 7</option>
            <option value="c8">عيادة 8</option>
            <option value="c9">عيادة 9</option>
            <option value="c10">عيادة 10</option>
            <option value="c11">عيادة 11</option>
            <option value="c12">عيادة 12</option>
            <option value="c13_15">عيادة 13 - 15</option>
            <option value="c14_16">عيادة 14 - 16</option>
            <option value="pedo1">عيادة Pedo 1</option>
            <option value="pedo2">عيادة Pedo 2</option>
          </select>
          <button onclick="adminAddSlotForDoctor('${doc.name}', '${docSafeId}')" class="px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition">
            حفظ الموعد
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// --- SERVICES & PRICING ADMIN CRUD ---
function persistServicesData() {
  enrichServicesCache(SERVICES);
  localStorage.setItem('elgawhara_services_data', JSON.stringify(SERVICES));
  renderServicesGrid();
  renderCalcServicePicker(document.getElementById('calcSearchInput')?.value || '');
  renderAdminServicesList();
  updateServiceCountBadge();

  if (supabaseClient) {
    try {
      const payload = SERVICES.map(s => ({
        id: s.id,
        name: s.name,
        category: s.category,
        price: Number(s.price) || 0,
        specialist_price: s.specialistPrice !== undefined ? Number(s.specialistPrice) : Number(s.price),
        consultant_price: s.consultantPrice !== undefined ? Number(s.consultantPrice) : Number(s.price),
        duration: s.duration || 'حسب الحالة',
        notes: s.notes || '',
        is_active: s.is_active !== undefined ? s.is_active : true
      }));
      supabaseClient.from('services').upsert(payload).then(() => {});
    } catch(err) {
      console.log("Supabase services sync error:", err);
    }
  }
}

function adminSaveNewService() {
  const name = document.getElementById('newServiceName').value.trim();
  const cat = document.getElementById('newServiceCategory').value;
  const specPrice = Number(document.getElementById('newServiceSpecPrice').value) || 0;
  const consPrice = Number(document.getElementById('newServiceConsPrice').value) || specPrice;
  const duration = document.getElementById('newServiceDuration').value.trim() || 'حسب الحالة';
  const notes = document.getElementById('newServiceNotes').value.trim() || '';

  if (!name) {
    alert("يرجى إدخال اسم الخدمة الطبية");
    return;
  }

  const newService = {
    id: Date.now(),
    name: name,
    category: cat,
    specialistPrice: specPrice,
    consultantPrice: consPrice,
    price: specPrice,
    duration: duration,
    notes: notes
  };

  SERVICES.unshift(newService);
  persistServicesData();

  document.getElementById('newServiceName').value = '';
  document.getElementById('newServiceSpecPrice').value = '';
  document.getElementById('newServiceConsPrice').value = '';
  document.getElementById('newServiceDuration').value = '';
  document.getElementById('newServiceNotes').value = '';
  document.getElementById('adminAddServiceForm').classList.add('hidden');

  alert("تمت إضافة الخدمة بنجاح إلى قائمة أسعار ميامي!");
}

function openEditServiceModal(id) {
  const service = SERVICES.find(s => s.id === id);
  if (!service) return;

  document.getElementById('editServiceId').value = service.id;
  document.getElementById('editServiceName').value = service.name;
  document.getElementById('editServiceCategory').value = service.category;
  document.getElementById('editServiceSpecPrice').value = service.specialistPrice !== undefined ? service.specialistPrice : service.price;
  document.getElementById('editServiceConsPrice').value = service.consultantPrice !== undefined ? service.consultantPrice : service.price;
  document.getElementById('editServiceNotes').value = service.notes || service.duration || '';

  document.getElementById('editServiceModal').classList.remove('hidden');
}

function closeEditServiceModal() {
  document.getElementById('editServiceModal').classList.add('hidden');
}

function saveEditService() {
  const id = Number(document.getElementById('editServiceId').value);
  const service = SERVICES.find(s => s.id === id);
  if (!service) return;

  const name = document.getElementById('editServiceName').value.trim();
  const category = document.getElementById('editServiceCategory').value;
  const specPrice = Number(document.getElementById('editServiceSpecPrice').value) || 0;
  const consPrice = Number(document.getElementById('editServiceConsPrice').value) || specPrice;
  const notes = document.getElementById('editServiceNotes').value.trim();

  if (!name) {
    alert("يرجى إدخال اسم الخدمة");
    return;
  }

  service.name = name;
  service.category = category;
  service.specialistPrice = specPrice;
  service.consultantPrice = consPrice;
  service.price = specPrice;
  service.notes = notes;

  persistServicesData();
  closeEditServiceModal();
  alert("تم حفظ تعديلات الخدمة بنجاح!");
}

function adminDeleteService(id) {
  const service = SERVICES.find(s => s.id === id);
  if (!service) return;
  if (!confirm(`هل أنت متأكد من حذف الخدمة (${service.name}) من قائمة الأسعار؟`)) return;

  SERVICES = SERVICES.filter(s => s.id !== id);
  persistServicesData();

  if (supabaseClient) {
    try {
      supabaseClient.from('services').delete().eq('id', id).then(() => {});
    } catch (err) {}
  }
  alert("تم حذف الخدمة بنجاح.");
}

function applyBulkPriceAdjustment() {
  const percent = Number(document.getElementById('bulkPercentInput').value);
  if (!percent || isNaN(percent)) {
    alert("يرجى إدخال نسبة مئوية صحيحة (مثلاً: 10 أو -5)");
    return;
  }

  const factor = 1 + (percent / 100);
  SERVICES.forEach(s => {
    if (s.specialistPrice > 0) s.specialistPrice = Math.round(s.specialistPrice * factor);
    if (s.consultantPrice > 0) s.consultantPrice = Math.round(s.consultantPrice * factor);
    if (s.price > 0) s.price = Math.round(s.price * factor);
  });

  persistServicesData();
  document.getElementById('adminBulkAdjustForm').classList.add('hidden');
  alert(`تم تطبيق نسبة ${percent}% بنجاح على جميع أسعار المركز!`);
}

function renderAdminServicesList() {
  const tbody = document.getElementById('adminServicesTableBody');
  if (!tbody) return;

  const searchTerm = (document.getElementById('adminServiceSearchInput')?.value || '').trim();
  const categoryFilter = document.getElementById('adminServiceCategoryFilter')?.value || '';
  const countSpan = document.getElementById('adminServicesCount');
  if (countSpan) countSpan.innerText = SERVICES.length;

  const filtered = SERVICES.filter(s => {
    const matchName = isArabicMatch(s.name, searchTerm);
    const matchCat = !categoryFilter || s.category === categoryFilter;
    return matchName && matchCat;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-xs text-slate-400 font-bold">لا توجد خدمات مطابقة للبحث أو القسم المحدد</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(s => {
    const specP = s.specialistPrice !== undefined ? s.specialistPrice : s.price;
    const consP = s.consultantPrice !== undefined ? s.consultantPrice : s.price;

    return `
      <tr class="hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition">
        <td class="p-3 font-bold text-slate-900 dark:text-slate-100">${s.name}</td>
        <td class="p-3 font-semibold text-teal-800 dark:text-teal-300">${s.category}</td>
        <td class="p-3 text-center font-black text-slate-900 dark:text-slate-100">${specP > 0 ? `${specP} ج.م` : 'بالاتفاق'}</td>
        <td class="p-3 text-center font-black text-amber-800 dark:text-amber-300">${consP > 0 ? `${consP} ج.م` : 'بالاتفاق'}</td>
        <td class="p-3 text-center">
          <div class="flex items-center justify-center gap-1.5">
            <button onclick="openEditServiceModal(${s.id})" title="تعديل السعر والخدمة" class="p-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 transition">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="adminDeleteService(${s.id})" title="حذف الخدمة" class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-300 transition">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

// --- BACKUP & RESTORE ---
function exportBackupJSON() {
  const data = {
    version: "2.0",
    center: "مجموعة الجوهرة لطب الأسنان - فرع ميامي",
    exportDate: new Date().toISOString(),
    morningSchedule: MORNING_SCHEDULE,
    eveningSchedule: EVENING_SCHEDULE,
    customDoctors: CUSTOM_DOCTORS,
    doctors: DOCTORS,
    services: SERVICES,
    absences: ABSENT_DOCTORS,
    dailyNotices: DAILY_NOTICES
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `elgawhara_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function handleBackupFileImport(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.services && Array.isArray(data.services)) {
        SERVICES = data.services;
        enrichServicesCache(SERVICES);
      localStorage.setItem('elgawhara_services_data', JSON.stringify(SERVICES));
      }
      if (data.morningSchedule) {
        MORNING_SCHEDULE = data.morningSchedule;
        localStorage.setItem('elgawhara_morning_schedule', JSON.stringify(MORNING_SCHEDULE));
      }
      if (data.eveningSchedule) {
        EVENING_SCHEDULE = data.eveningSchedule;
        localStorage.setItem('elgawhara_evening_schedule', JSON.stringify(EVENING_SCHEDULE));
      }
      if (data.customDoctors) {
        CUSTOM_DOCTORS = data.customDoctors;
        localStorage.setItem('elgawhara_custom_doctors', JSON.stringify(CUSTOM_DOCTORS));
      }
      if (data.dailyNotices && Array.isArray(data.dailyNotices)) {
        DAILY_NOTICES = data.dailyNotices;
        localStorage.setItem('elgawhara_daily_notices', JSON.stringify(DAILY_NOTICES));
        renderDailyNotices();
      }
      persistDoctorSchedules();
      persistServicesData();
      alert("تم استيراد واستعادة النسخة الاحتياطية بنجاح بكامل الأطباء والمواعيد والأسعار والتعليمات!");
    } catch (err) {
      alert("تعذر قراءة ملف النسخة الاحتياطية: " + err.message);
    }
  };
  reader.readAsText(file);
}

function resetToDefaultData() {
  const isAuth = sessionStorage.getItem('elgawhara_admin_auth') === 'true';
  if (!isAuth) {
    alert("عذراً، هذا الإجراء الحساس متاح لمدير المركز فقط عبر لوحة الإدارة.");
    openConfigModal();
    return;
  }

  // 1. Initial Confirmation with Severe Warning
  const firstConfirm = confirm(
    "⚠️ تحذير أمني وإداري مشدد!\n\n" +
    "أنت على وشك استعادة البيانات الافتراضية الأصلية لمركز الجوهرة (فرع ميامي).\n" +
    "هذا الإجراء سيقوم بحذف جميع التعديلات الحديثة على الأطباء، والمواعيد، والأسعار، والملاحظات والعودة للنظام الأصلي.\n\n" +
    "هل أنت متأكد تماماً وترغب في المتابعة؟"
  );
  if (!firstConfirm) return;

  // 2. First PIN Verification
  const pin1 = prompt("🔒 [الخطوة 1 من 2]: يرجى إدخال الرمز السري للإدارة للتحقق من هويتك:");
  if (pin1 === null) return;
  if (pin1.trim() !== DEVELOPER_PIN) {
    alert("❌ رمز المرور غير صحيح! تم إلغاء عملية الاستعادة فوراً للحفاظ على أمان البيانات.");
    return;
  }

  // 3. Second PIN Verification (Double Confirmation)
  const pin2 = prompt("🔒 [الخطوة 2 من 2]: يرجى إعادة إدخال الرمز السري مرة ثانية للتأكيد النهائي:");
  if (pin2 === null) return;
  if (pin2.trim() !== DEVELOPER_PIN) {
    alert("❌ لم يتطابق رمز المرور في التأكيد الثاني! تم إلغاء العملية فوراً كإجراء حماية أمني.");
    return;
  }

  // 4. Execute Full Reset
  localStorage.removeItem('elgawhara_morning_schedule');
  localStorage.removeItem('elgawhara_evening_schedule');
  localStorage.removeItem('elgawhara_custom_doctors');
  localStorage.removeItem('elgawhara_doctors_data');
  localStorage.removeItem('elgawhara_services_data');
  localStorage.removeItem('elgawhara_absent_doctors');
  localStorage.removeItem('elgawhara_daily_notices');

  MORNING_SCHEDULE = JSON.parse(JSON.stringify(DEFAULT_MORNING_SCHEDULE));
  EVENING_SCHEDULE = JSON.parse(JSON.stringify(DEFAULT_EVENING_SCHEDULE));
  CUSTOM_DOCTORS = [];
  DOCTORS = buildDoctorsDatabase();
  SERVICES = JSON.parse(JSON.stringify(DEFAULT_SERVICES));
  ABSENT_DOCTORS = [];
  DAILY_NOTICES = JSON.parse(JSON.stringify(DEFAULT_DAILY_NOTICES));

  persistDoctorSchedules();
  persistServicesData();
  renderDailyNotices();
  renderFloorMap();
  renderClinicsTable();
  renderWeeklySchedule();
  renderAdminDoctorsList();
  renderAdminServicesList();
  populateAbsentDoctorSelect();
  alert("✅ تم تأكيد الهوية بنجاح، واستعادة البيانات الافتراضية الأصلية لمركز الجوهرة (فرع ميامي).");
}

function updateDoctorCountBadge() {
  const badge = document.getElementById('doctorsCountBadge');
  if (badge) badge.innerText = `${DOCTORS.length} طبيب مسجل`;
  const adminBadge = document.getElementById('adminDoctorsCount');
  if (adminBadge) adminBadge.innerText = DOCTORS.length;
}

function updateServiceCountBadge() {
  const adminBadge = document.getElementById('adminServicesCount');
  if (adminBadge) adminBadge.innerText = SERVICES.length;
}

// Supabase Integration Config
const DEFAULT_SUPABASE_URL = "https://ogedxooazvlatzvfdgbc.supabase.co";
const DEFAULT_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nZWR4b29henZsYXR6dmZkZ2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ1ODA0MDAsImV4cCI6MjExMDE1NjQwMH0.5FFORBJePP8FBn58wls4aUuHo7XwItGj4Uyg9I7UyAM";

let supabaseClient = null;

async function initSupabaseClient() {
  const url = localStorage.getItem('elgawhara_sb_url') || DEFAULT_SUPABASE_URL;
  const key = localStorage.getItem('elgawhara_sb_key') || DEFAULT_SUPABASE_KEY;

  if (url && key && window.supabase) {
    try {
      supabaseClient = window.supabase.createClient(url, key);

      // Initial load from Supabase for all dynamic tables
      loadServicesFromSupabase();
      loadAbsencesFromSupabase();
      loadNoticesFromSupabase();

      // Realtime subscriptions
      supabaseClient
        .channel('public:services')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'services' }, () => {
          loadServicesFromSupabase();
        })
        .subscribe();

      supabaseClient
        .channel('public:daily_notices')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'daily_notices' }, () => {
          loadNoticesFromSupabase();
        })
        .subscribe();

      supabaseClient
        .channel('public:doctor_absences')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'doctor_absences' }, () => {
          loadAbsencesFromSupabase();
        })
        .subscribe();

    } catch (e) {
      console.error("Failed to init Supabase", e);
    }
  }
}

async function loadServicesFromSupabase() {
  if (!supabaseClient) return;
  try {
    const { data } = await supabaseClient
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('id', { ascending: true });

    if (data && data.length > 0) {
      SERVICES = data.map(s => ({
        id: s.id,
        name: s.name,
        category: s.category,
        price: Number(s.price) || 0,
        specialistPrice: s.specialist_price !== null && s.specialist_price !== undefined ? Number(s.specialist_price) : Number(s.price),
        consultantPrice: s.consultant_price !== null && s.consultant_price !== undefined ? Number(s.consultant_price) : Number(s.price),
        duration: s.duration || 'حسب الحالة',
        notes: s.notes || '',
        is_active: s.is_active
      }));
      enrichServicesCache(SERVICES);
      localStorage.setItem('elgawhara_services_data', JSON.stringify(SERVICES));
      renderServicesGrid();
      renderCalcServicePicker('');
      renderAdminServicesList();
      updateServiceCountBadge();
    }
  } catch (err) {
    console.error("Error loading services:", err);
  }
}

async function loadAbsencesFromSupabase() {
  if (!supabaseClient) return;
  try {
    const todayIso = new Date().toISOString().split('T')[0];
    const { data, error } = await supabaseClient
      .from('doctor_absences')
      .select('*')
      .eq('absence_date', todayIso);
    if (!error && Array.isArray(data)) {
      ABSENT_DOCTORS = data;
      localStorage.setItem('elgawhara_absent_doctors', JSON.stringify(ABSENT_DOCTORS));
      renderAbsentDoctorsList();
      renderDoctorsGrid();
      renderFloorMap();
    }
  } catch (err) {
    console.log("Error loading absences:", err);
  }
}

async function loadNoticesFromSupabase() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient
      .from('daily_notices')
      .select('*')
      .eq('is_active', true)
      .order('pinned', { ascending: false })
      .order('created_at', { ascending: false });
    if (!error && Array.isArray(data)) {
      DAILY_NOTICES = data;
      localStorage.setItem('elgawhara_daily_notices', JSON.stringify(DAILY_NOTICES));
      renderDailyNotices();
    }
  } catch (err) {
    console.log("Error loading daily notices from Supabase:", err);
  }
}

async function saveSupabaseConfig() {
  const url = document.getElementById('supabaseUrlInput').value.trim();
  const key = document.getElementById('supabaseKeyInput').value.trim();
  const alertBox = document.getElementById('supabaseStatusAlert');

  if (!url || !key) {
    alertBox.className = "p-2.5 rounded-lg text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/40";
    alertBox.innerText = "يرجى إدخال عنوان المشروع ومفتاح الوصول Anon Key.";
    alertBox.classList.remove('hidden');
    return;
  }

  try {
    alertBox.className = "p-2.5 rounded-lg text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/40";
    alertBox.innerText = "جاري اختبار الاتصال بقاعدة بيانات Supabase...";
    alertBox.classList.remove('hidden');

    const testClient = window.supabase.createClient(url, key);
    const { count, error } = await testClient.from('services').select('*', { count: 'exact', head: true });

    if (error) throw error;

    localStorage.setItem('elgawhara_sb_url', url);
    localStorage.setItem('elgawhara_sb_key', key);
    supabaseClient = testClient;
    loadServicesFromSupabase();

    alertBox.className = "p-2.5 rounded-lg text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40";
    alertBox.innerText = `تم الاتصال بنجاح بمشروع Supabase! (${count || 0} خدمة متوفرة)`;
    setTimeout(() => {
      closeConfigModal();
    }, 1500);
  } catch (err) {
    localStorage.setItem('elgawhara_sb_url', url);
    localStorage.setItem('elgawhara_sb_key', key);
    alertBox.className = "p-2.5 rounded-lg text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40";
    alertBox.innerText = "تم حفظ المفاتيح بنجاح!";
    setTimeout(() => {
      closeConfigModal();
    }, 1200);
  }
}
