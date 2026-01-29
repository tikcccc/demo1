export const procurementKpis = [
  { label: "Pending Approvals", value: "8", note: "3 high priority" },
  { label: "Active Orders", value: "42", note: "This month" },
  { label: "Delivery Pending", value: "12", note: "4 overdue" },
];

export const procurementOrders = [
  {
    id: "PO-25-8821",
    vendor: "Steel Master Ltd",
    item: "Reinforcement Bar T40",
    amount: "$1,200,000",
    status: "QS Handover",
    step: 5,
    requester: "Alan Yeung",
    project: "J2401B1",
  },
  {
    id: "PO-25-8822",
    vendor: "SafeGear Inc",
    item: "Safety Helmets (Type B)",
    amount: "$45,000",
    status: "Delivery Pending",
    step: 4,
    requester: "Kent Wong",
    project: "J2401B1",
  },
  {
    id: "PO-25-8825",
    vendor: "Tool Pro",
    item: "Power Drills",
    amount: "$12,500",
    status: "Approval Pending",
    step: 2,
    requester: "WF Li",
    project: "J2405C2",
  },
];

export const procurementRates = [
  {
    id: "AR-25-001",
    category: "Transportation (A1)",
    vendor: "Speedy Logistics",
    item: "Flatbed Trucks",
    rate: "$2,500/trip",
    status: "Active",
    expiry: "2025-12-31",
  },
  {
    id: "AR-25-002",
    category: "Supply (A2)",
    vendor: "Pure Water Co",
    item: "Distilled Water",
    rate: "$45/bottle",
    status: "Active",
    expiry: "2026-06-30",
  },
  {
    id: "AR-25-003",
    category: "Scrap (A3)",
    vendor: "Recycle HK",
    item: "Waste Steel",
    rate: "Floating",
    status: "Under Review",
    expiry: "2025-11-30",
  },
];

export const procurementVendors = [
  {
    name: "Speedy Logistics",
    category: "Transportation",
    rating: "A",
    compliance: "Active",
  },
  {
    name: "SafeGear Inc",
    category: "Safety Supplies",
    rating: "B+",
    compliance: "Audit due",
  },
  {
    name: "Steel Master Ltd",
    category: "Steel",
    rating: "A-",
    compliance: "Active",
  },
];
