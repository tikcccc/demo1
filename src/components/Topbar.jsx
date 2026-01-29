const viewMeta = {
  home: {
    eyebrow: "Home",
    title: "ePortal",
    subtitle:
      "Central workspace for approvals, notifications, and shared documents.",
  },
  webmail: {
    eyebrow: "Webmail",
    title: "Email Center",
    subtitle: "Send, receive, and audit emails with security controls.",
  },
  dms: {
    eyebrow: "Documents",
    title: "Document Management",
    subtitle: "Project and safety records in one controlled workspace.",
  },
  safety: {
    eyebrow: "Safety",
    title: "Safety Management",
    subtitle: "Inspections, incidents, training, and access control.",
  },
};

export default function Topbar({ activeView = "home" }) {
  const meta = viewMeta[activeView] || viewMeta.home;

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">{meta.eyebrow}</p>
        <h1>{meta.title}</h1>
        <p className="topbar-sub">{meta.subtitle}</p>
      </div>
      <div className="topbar-actions">
        <div className="search">
          <span className="search-icon">Search</span>
          <input
            type="search"
            placeholder="Search workflows, docs, vendors"
            aria-label="Search workflows, documents, and vendors"
          />
        </div>
        <button className="ghost-button" type="button">
          New Workflow
        </button>
        <button className="primary-button" type="button">
          Create Request
        </button>
        <div className="user-chip">
          <span className="user-avatar">LK</span>
          <div>
            <p className="user-name">Lisa Ko</p>
            <p className="user-role">Approver</p>
          </div>
        </div>
      </div>
    </header>
  );
}
