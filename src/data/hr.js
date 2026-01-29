export const hrKpis = [
  { label: "Total Headcount", value: "1,240", note: "Monthly 340 · Daily 900" },
  { label: "Attendance Today", value: "96%", note: "42 staff on leave" },
  { label: "Expiring Cards (30d)", value: "12", note: "Green Card / Visa" },
  { label: "Pending Approvals", value: "5", note: "Leave & requisitions" },
];

export const hrEmployees = [
  {
    id: "EMP-1029",
    name: "Kenneth Hong",
    role: "Digital Leader",
    type: "Monthly",
    site: "Head Office",
    greenCard: "Valid (2026)",
    status: "Active",
  },
  {
    id: "EMP-2044",
    name: "Alan Yeung",
    role: "Project Manager",
    type: "Monthly",
    site: "Site J2401B1",
    greenCard: "Valid (2025)",
    status: "Active",
  },
  {
    id: "EMP-D-882",
    name: "Chan Tai Man",
    role: "Rigger",
    type: "Daily",
    site: "Site J2405C2",
    greenCard: "Expiring Soon",
    status: "Active",
  },
];

export const hrLeaves = [
  {
    id: "L-2025-081",
    employee: "Alan Yeung",
    type: "Annual Leave",
    dates: "Nov 1 - Nov 3",
    days: 3,
    status: "Pending",
  },
  {
    id: "L-2025-082",
    employee: "WF Li",
    type: "Sick Leave",
    dates: "Oct 25",
    days: 1,
    status: "Approved",
  },
];

export const hrAlerts = [
  {
    title: "Confined Space Safety expiring",
    detail: "Chan Tai Man · Exp: 2025-10-01",
    tone: "urgent",
  },
  {
    title: "Visa expiry warning",
    detail: "Employee ID: EMP-D-882",
    tone: "review",
  },
];

export const hrMemos = [
  {
    title: "New performance appraisal system",
    detail: "Self-assessment phase begins next week.",
    date: "Oct 20, 2025",
  },
  {
    title: "Flu vaccination drive",
    detail: "On-site vaccination available at Site A & B.",
    date: "Oct 15, 2025",
  },
];

export const hrTraining = [
  {
    id: "TR-001",
    course: "Confined Space Safety",
    employee: "Chan Tai Man",
    expiry: "2028-09-10",
    status: "Valid",
  },
  {
    id: "TR-002",
    course: "First Aid",
    employee: "Lee Siu",
    expiry: "2025-10-01",
    status: "Expiring",
  },
];

export const hrInjuries = [
  {
    id: "EC-002",
    title: "Work injury case",
    detail: "2 active cases requiring EC submission.",
    status: "Open",
  },
];
