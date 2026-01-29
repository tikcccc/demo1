export const qsKpis = [
  { label: "Total Revenue Certified", value: "$14.2M", note: "+5% vs last month" },
  { label: "Total Expenses Paid", value: "$8.5M", note: "YTD" },
  { label: "Pending Subcon Certs", value: "5", note: "Action required" },
  { label: "Insurance Expiry", value: "62 Days", note: "Project All Risk" },
];

export const qsPayments = [
  {
    id: "PAY-SUB-082",
    subcon: "ABC Piling Ltd",
    work: "Bored Piles",
    amount: "$450,000",
    status: "Certifying",
    step: 3,
  },
  {
    id: "PAY-SUB-085",
    subcon: "Speedy Steel Fixing",
    work: "Rebar Fixing",
    amount: "$120,000",
    status: "Under Review",
    step: 2,
  },
  {
    id: "PAY-SUB-088",
    subcon: "Grand Concrete",
    work: "Concreting",
    amount: "$85,000",
    status: "New Request",
    step: 1,
  },
];

export const qsAlerts = [
  {
    title: "Insurance renewal due",
    detail: "Project All Risk expires in 2 weeks.",
    tone: "urgent",
  },
  {
    title: "New VO submitted",
    detail: "Subcon A submitted VO #04 for review.",
    tone: "pending",
  },
];

export const qsContracts = [
  {
    id: "MC-2401",
    project: "J2401B1",
    employer: "HK Housing Authority",
    type: "Main Contract",
    value: "$1.2B",
    voCount: 12,
    status: "Active",
  },
  {
    id: "MC-2405",
    project: "J2405C2",
    employer: "Private Developer",
    type: "Main Contract",
    value: "$450M",
    voCount: 4,
    status: "Active",
  },
];

export const qsReviews = [
  {
    id: "QS-CR-014",
    title: "Cost review for Package B",
    owner: "C. Lau",
    due: "Feb 2",
    status: "In review",
  },
  {
    id: "QS-CR-016",
    title: "Insurance premium adjustment",
    owner: "S. Ho",
    due: "Feb 5",
    status: "Pending",
  },
];
