export const folders = [
  { name: "Inbox", count: 24, active: true },
  { name: "Sent", count: 8 },
  { name: "Drafts", count: 3 },
  { name: "Approvals", count: 6 },
  { name: "Security Logs", count: 2 },
  { name: "Archive", count: 41 },
  { name: "Spam", count: 4 },
];

export const messages = [
  {
    id: "WM-204",
    from: "Procurement",
    subject: "PO-2026-102 pending approval",
    preview: "Please review and approve the vendor selection and pricing.",
    time: "10:24",
    tag: "Approval",
    unread: true,
  },
  {
    id: "WM-203",
    from: "Safety",
    subject: "Incident follow-up required",
    preview: "Root cause analysis uploaded. Action required by Jan 31.",
    time: "09:10",
    tag: "Urgent",
    unread: true,
  },
  {
    id: "WM-202",
    from: "IMS",
    subject: "Monthly quality summary published",
    preview: "January report is ready for review and acknowledgment.",
    time: "Yesterday",
    tag: "Report",
    unread: false,
  },
  {
    id: "WM-201",
    from: "Project DMS",
    subject: "Drawing set updated",
    preview: "Revision B uploaded to the central repository.",
    time: "Yesterday",
    tag: "Document",
    unread: false,
  },
];

export const selectedMessage = {
  id: "WM-204",
  subject: "PO-2026-102 pending approval",
  from: "Procurement Team",
  to: "Lisa Ko",
  time: "Jan 29, 2026 - 10:24",
  body: [
    "Please review the quotation analysis report for PO-2026-102.",
    "Total amount: HKD 1,280,000. Supplier: East Harbor Materials.",
    "Kindly approve or decline before end of day to meet delivery schedule.",
  ],
  attachments: ["Quotation_Analysis_PO-2026-102.pdf", "Vendor_Comparison.xlsx"],
};

export const mailFilters = [
  "All",
  "Unread",
  "Approvals",
  "Security Logs",
  "Attachments",
];
