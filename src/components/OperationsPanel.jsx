import { alerts, externalLinks } from "../data/modules.js";

export default function OperationsPanel() {
  return (
    <section className="operations" aria-labelledby="operations-title">
      <div className="section-header">
        <p className="eyebrow">Unified Operations</p>
        <h2 id="operations-title">Always-on visibility for every site.</h2>
        <p className="section-lead">
          Notifications consolidate approvals, inspections, and compliance
          deadlines across departments.
        </p>
      </div>
      <div className="operations-grid">
        <div className="alerts">
          <h3>Priority Alerts</h3>
          <ul>
            {alerts.map((alert) => (
              <li key={alert.title}>
                <div>
                  <p className="alert-title">{alert.title}</p>
                  <p className="alert-meta">{alert.meta}</p>
                </div>
                <span className={`status ${alert.status.toLowerCase()}`}>
                  {alert.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="links">
          <h3>External Links</h3>
          <div className="link-grid">
            {externalLinks.map((link) => (
              <button key={link} className="link-card" type="button">
                <span>{link}</span>
                <span className="link-arrow">></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
