import { alerts, quickLinks } from "../data/modules.js";

export default function AlertsPanel() {
  return (
    <section className="panel span-5" aria-labelledby="alerts-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">Notifications</p>
          <h2 id="alerts-title">Operational alerts</h2>
        </div>
        <button className="ghost-button" type="button">
          Open inbox
        </button>
      </div>
      <div className="alerts-list">
        {alerts.map((alert) => (
          <div className="alert-row" key={alert.title}>
            <div>
              <p className="alert-title">{alert.title}</p>
              <p className="alert-meta">{alert.meta}</p>
            </div>
            <span className={`status ${alert.status.toLowerCase()}`}>
              {alert.status}
            </span>
          </div>
        ))}
      </div>
      <div className="link-section">
        <p className="panel-label">External Links</p>
        <div className="link-grid">
          {quickLinks.map((link) => (
            <button key={link} className="link-card" type="button">
              {link}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
