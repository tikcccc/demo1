import { compliance, infra } from "../data/modules.js";

export default function CompliancePanel() {
  return (
    <section className="panel span-7" aria-labelledby="compliance-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">Security & Compliance</p>
          <h2 id="compliance-title">Governance snapshot</h2>
        </div>
        <button className="ghost-button" type="button">
          View audit logs
        </button>
      </div>
      <div className="compliance-grid">
        <div className="compliance-card">
          <h3>Controls</h3>
          <div className="chip-grid">
            {compliance.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="compliance-card">
          <h3>Infrastructure</h3>
          <ul>
            {infra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="ghost-button" type="button">
            View RPO/RTO targets
          </button>
        </div>
      </div>
    </section>
  );
}
