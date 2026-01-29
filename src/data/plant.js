export const plantKpis = [
  { label: "Total Fleet Size", value: "142", note: "Cranes, RCDs, Generators" },
  { label: "Operational / On Hire", value: "115", note: "Utilization 81%" },
  { label: "Under Maintenance", value: "8", note: "Open job sheets" },
  { label: "Idling / Off Hire", value: "19", note: "Stored at depot" },
];

export const plantFleet = [
  {
    id: "HBO-50",
    name: "Crawler Crane 50T",
    brand: "Kalicso",
    location: "Site J2401B1",
    status: "Operational",
    lastCheck: "2025-10-20",
  },
  {
    id: "RCD-02",
    name: "Reverse Circulation Drill",
    brand: "Tysan Mech",
    location: "Depot (Ping Che)",
    status: "Repairing",
    lastCheck: "2025-10-15",
  },
  {
    id: "GEN-09",
    name: "Generator 200kVA",
    brand: "Denyo",
    location: "Site J2405C2",
    status: "Operational",
    lastCheck: "2025-10-25",
  },
];

export const plantJobs = [
  {
    id: "JOB-49010",
    plantId: "HBO-50",
    desc: "Welding repair & screw fix",
    requestDate: "2025-10-22",
    status: "In Progress",
    cost: "$4,500",
  },
  {
    id: "JOB-49012",
    plantId: "RCD-02",
    desc: "Hydraulic pump replacement",
    requestDate: "2025-10-18",
    status: "Waiting Parts",
    cost: "$12,000",
  },
];

export const plantInspections = [
  {
    id: "INS-2025-881",
    plantId: "HBO-50",
    type: "Weekly",
    date: "2025-10-20",
    result: "Satisfactory",
  },
  {
    id: "INS-2025-875",
    plantId: "GEN-09",
    type: "Monthly",
    date: "2025-10-15",
    result: "Rectification Required",
  },
];

export const plantTransfers = [
  {
    id: "TR-009",
    detail: "RCD-02: Site A → Depot",
    status: "Completed",
  },
  {
    id: "TR-010",
    detail: "GEN-09: Depot → Site B",
    status: "Pending transport",
  },
];

export const plantDisposals = [
  {
    id: "DP-201",
    detail: "Scrap steel disposal",
    status: "Logged",
  },
  {
    id: "DP-204",
    detail: "Oil waste collection",
    status: "Scheduled",
  },
];
