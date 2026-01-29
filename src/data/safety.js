export const overviewCards = [
  { label: "Days Without Incident", value: "142 Days", tone: "positive" },
  { label: "Active Workers on Site", value: "348", tone: "info" },
  { label: "Pending Rectifications", value: "5", tone: "warning" },
  { label: "Training Compliance", value: "98.2%", tone: "neutral" },
];

export const trainingAlerts = [
  {
    worker: "Lee Siu Lung",
    course: "CWRA Safety Induction",
    expiry: "2026-02-12",
    status: "Due soon",
  },
  {
    worker: "Cheung Wai",
    course: "Site Supervisor Briefing",
    expiry: "2026-02-05",
    status: "Overdue",
  },
];

export const workers = [
  {
    id: "W-0922",
    name: "Chan Tai Man",
    trade: "Rigger",
    hkid: "HKID: ****123(4)",
    greenCard: "Green Card: 2026-05-12",
    ocrVerified: true,
    safetyScore: 92,
    accessStatus: "Granted",
    location: "Zone B",
  },
  {
    id: "W-0925",
    name: "Lee Siu Lung",
    trade: "Welder",
    hkid: "HKID: ****567(8)",
    greenCard: "Green Card: 2025-11-01",
    ocrVerified: true,
    safetyScore: 88,
    accessStatus: "Granted",
    location: "Zone A",
  },
  {
    id: "W-0930",
    name: "Cheung Wai",
    trade: "General Labor",
    hkid: "HKID: ****999(0)",
    greenCard: "Green Card: 2025-10-01",
    ocrVerified: true,
    safetyScore: 54,
    accessStatus: "Denied",
    location: "Gate 1",
  },
];

export const incidents = [
  {
    ref: "INC-2026-001",
    title: "Near Miss at Site A - Zone 3",
    date: "2026-10-26",
    stage: 1,
  },
  {
    ref: "INC-2026-002",
    title: "Minor Injury at Site B - Workshop",
    date: "2026-10-20",
    stage: 2,
  },
];

export const inspectionForms = [
  {
    name: "Daily Crane Inspection",
    id: "F-001",
    updated: "2025-10-01",
    submissions: 142,
  },
  {
    name: "Hot Work Permit",
    id: "F-002",
    updated: "2025-09-15",
    submissions: 56,
  },
  {
    name: "Site Induction Checklist",
    id: "F-003",
    updated: "2025-01-20",
    submissions: 890,
  },
];
