import { compliance } from "../data/modules.js";

const infra = [
  "On-premises or hybrid deployment",
  "Linux web servers + Windows file servers",
  "Dedicated database & application layer",
  "Intranet with secure web access",
];

export default function Compliance() {
  return (
    <section className="compliance" aria-labelledby="compliance-title">
      <div className="section-header">
        <p className="eyebrow">Security & Governance</p>
        <h2 id="compliance-title">Built for regulated workflows.</h2>
        <p className="section-lead">
          Align infrastructure, access control, and retention policies with
          engineering and compliance requirements.
        </p>
      </div>
      <div className="compliance-grid">
        <div className="compliance-card">
          <h3>Security Standards</h3>
          <div className="chip-grid">
            {compliance.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="compliance-card">
          <h3>Infrastructure Snapshot</h3>
          <ul>
            {infra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="ghost-button" type="button">
            View RPO/RTO Targets
          </button>
        </div>
      </div>
    </section>
  );
}
