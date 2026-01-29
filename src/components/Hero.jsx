import { roles } from "../data/modules.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Tysan Group - Private Deployment</p>
        <h1>One portal for every project, approval, and compliance touchpoint.</h1>
        <p className="lead">
          e-Tysan unifies engineering, procurement, safety, and quality workflows
          into a secure, auditable platform. Track decisions, automate handoffs,
          and deliver real-time visibility across the organization.
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button">
            Launch Dashboard
          </button>
          <button className="secondary-button" type="button">
            View Audit Trails
          </button>
        </div>
        <div className="role-chips" aria-label="Role-based access">
          {roles.map((role, index) => (
            <span
              key={role}
              className="chip"
              style={{ "--delay": `${0.1 + index * 0.05}s` }}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-panel">
        <div className="panel-card">
          <div>
            <p className="panel-label">Today</p>
            <h2>Approval Pulse</h2>
            <p className="panel-note">13 items awaiting director review.</p>
          </div>
          <div className="panel-metric">
            <span className="metric-value">86%</span>
            <span className="metric-label">On-time approvals</span>
          </div>
        </div>
        <div className="panel-card accent">
          <div>
            <p className="panel-label">Safety</p>
            <h3>Inspection Coverage</h3>
            <p className="panel-note">96% of monthly patrols completed.</p>
          </div>
          <div className="progress">
            <span style={{ width: "96%" }} />
          </div>
        </div>
        <div className="panel-card">
          <p className="panel-label">OCR Index</p>
          <h3>1.8M pages searchable</h3>
          <p className="panel-note">Across Project & Safety DMS.</p>
        </div>
      </div>
    </section>
  );
}
