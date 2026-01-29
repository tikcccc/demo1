import {
  dmsPhases,
  dmsCategories,
  dmsDocuments,
  dmsApprovals,
  dmsMeta,
  dmsExternalAccess,
  dmsFolderCards,
} from "../data/dms.js";

const selectedDoc = dmsDocuments[0];
const quickFilters = [
  { label: "My uploads", count: 28 },
  { label: "Needs review", count: 6 },
  { label: "Shared externally", count: 4 },
  { label: "Recently updated", count: 12 },
];
const statusFilters = [
  "All files",
  "In review",
  "Pending",
  "Approved",
  "External",
  "Archived",
];
const viewModes = ["List", "Grid"];
const breadcrumbs = ["Project DMS", selectedDoc.phase, selectedDoc.category];
const detailMeta = [
  { label: "Doc ID", value: selectedDoc.id },
  { label: "Owner", value: selectedDoc.owner },
  { label: "Phase", value: selectedDoc.phase },
  { label: "Library", value: `${selectedDoc.library} DMS` },
  ...dmsMeta,
  { label: "External Access", value: selectedDoc.externalAccess },
];

export default function DmsPage() {
  return (
    <section className="dms dms-browser">
      <div className="dms-command">
        <div>
          <p className="eyebrow">Current location</p>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((crumb, index) => (
                <li
                  key={crumb}
                  className={index === breadcrumbs.length - 1 ? "active" : ""}
                >
                  {crumb}
                </li>
              ))}
            </ol>
          </nav>
          <p className="dms-path-meta">
            128 files | 18 folders | Updated 2 hours ago
          </p>
        </div>
        <div className="dms-command-actions">
          <div className="dms-view-toggle" role="group" aria-label="View mode">
            {viewModes.map((mode, index) => (
              <button
                key={mode}
                type="button"
                className={index === 0 ? "active" : ""}
              >
                {mode}
              </button>
            ))}
          </div>
          <button className="primary-button" type="button">
            Upload
          </button>
          <button className="ghost-button" type="button">
            New folder
          </button>
          <button className="ghost-button" type="button">
            Share
          </button>
        </div>
      </div>

      <div className="dms-browser-layout">
        <aside className="dms-side">
          <div className="dms-panel dms-panel--folders">
            <p className="panel-label">Folder tree</p>
            <div className="folder-tree">
              {dmsCategories.map((category) => (
                <button key={category.code} className="folder-item" type="button">
                  <span className="folder-code">{category.code}</span>
                  <span className="folder-name">{category.name}</span>
                  <span className="folder-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="dms-panel">
            <p className="panel-label">Quick access</p>
            <div className="quick-links">
              <button className="quick-link" type="button">
                Shared with me
              </button>
              <button className="quick-link" type="button">
                Awaiting my approval
              </button>
              <button className="quick-link" type="button">
                Expiring links
              </button>
            </div>
          </div>
        </aside>

        <section className="dms-center">
          <div className="dms-center-toolbar">
            <div className="dms-search">
              <span className="search-icon">Search</span>
              <input
                type="search"
                placeholder="Search by title, ID, owner"
                aria-label="Search documents"
              />
            </div>
            <div className="dms-filter-row">
              {statusFilters.map((filter, index) => (
                <button
                  key={filter}
                  className={`status-filter ${index === 0 ? "active" : ""}`}
                  type="button"
                >
                  {filter}
                </button>
              ))}
              <label className="filter">
                <span>Sort</span>
                <select defaultValue="Updated">
                  <option value="Updated">Last updated</option>
                  <option value="Created">Date created</option>
                  <option value="Owner">Owner</option>
                  <option value="Size">File size</option>
                </select>
              </label>
            </div>
          </div>

          <div className="folder-grid">
            {dmsFolderCards.map((folder) => (
              <button
                key={folder.name}
                className={`folder-card tone-${folder.tone}`}
                type="button"
              >
                <div className="folder-card-head">
                  <p className="folder-title">{folder.name}</p>
                  <span className="folder-count-pill">{folder.count} files</span>
                </div>
                <p className="folder-meta">{folder.subtitle}</p>
                <p className="folder-update">Updated {folder.updated}</p>
              </button>
            ))}
          </div>

          <div className="dms-files">
            <div className="dms-file-head">
              <span>Name</span>
              <span>Owner</span>
              <span>Status</span>
              <span>Updated</span>
              <span>Size</span>
              <span>Actions</span>
            </div>
            {dmsDocuments.map((doc) => (
              <article
                key={doc.id}
                className={`dms-file-row ${doc.id === selectedDoc.id ? "active" : ""}`}
              >
                <div className="file-main">
                  <div className={`file-icon type-${doc.type.toLowerCase()}`}>
                    {doc.type}
                  </div>
                  <div className="file-info">
                    <p className="file-title">{doc.title}</p>
                    <p className="file-sub">
                      {doc.id} | {doc.category}
                    </p>
                    <div className="file-tags">
                      <span className="file-tag">{doc.phase}</span>
                      {doc.ocr ? <span className="file-tag">OCR</span> : null}
                      {doc.encrypted ? (
                        <span className="file-tag">Encrypted</span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <span className="file-owner">{doc.owner}</span>
                <span className={`status-chip ${doc.status.toLowerCase()}`}>
                  {doc.status}
                </span>
                <span className="file-updated">{doc.updated}</span>
                <span className="file-size">{doc.size}</span>
                <span className="file-actions">
                  <button className="file-action" type="button">
                    Open
                  </button>
                  <button className="file-action ghost" type="button">
                    Download
                  </button>
                </span>
              </article>
            ))}
          </div>
        </section>

        <aside className="dms-preview">
          <div className="preview-card">
            <div className="preview-header">
              <div className={`file-icon type-${selectedDoc.type.toLowerCase()}`}>
                {selectedDoc.type}
              </div>
              <div>
                <p className="panel-label">Selected file</p>
                <h3>{selectedDoc.title}</h3>
                <p className="preview-sub">
                  {selectedDoc.id} | {selectedDoc.category}
                </p>
              </div>
            </div>

            <div className="preview-actions">
              <button className="primary-button" type="button">
                Open for review
              </button>
              <button className="ghost-button" type="button">
                Share
              </button>
              <button className="ghost-button" type="button">
                Download
              </button>
            </div>

            <div className="preview-sheet" aria-hidden="true">
              <div className="preview-line wide" />
              <div className="preview-line" />
              <div className="preview-line" />
              <div className="preview-line short" />
            </div>

            <div className="preview-meta">
              {detailMeta.map((item) => (
                <div key={item.label} className="preview-meta-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="preview-section">
              <p className="panel-label">Approval flow</p>
              <div className="approval-list">
                {dmsApprovals.map((step) => (
                  <div key={step.step} className="approval-row">
                    <div>
                      <p className="approval-step">{step.step}</p>
                      <p className="approval-name">{step.name}</p>
                    </div>
                    <span
                      className={`pill ${step.status.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="preview-section">
              <p className="panel-label">External control</p>
              <div className="external-list">
                {dmsExternalAccess.map((item) => (
                  <div key={item.name} className="external-item">
                    <div>
                      <p className="external-name">{item.name}</p>
                      <p className="external-scope">{item.scope}</p>
                    </div>
                    <span className="external-expiry">
                      Expires {item.expiry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
