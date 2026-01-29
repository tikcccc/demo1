import { kpis } from "../data/modules.js";

export default function KpiBar() {
  return (
    <section className="kpi-bar" aria-label="Key metrics">
      {kpis.map((kpi, index) => (
        <article
          key={kpi.label}
          className="kpi-card"
          style={{ "--delay": `${0.05 + index * 0.06}s` }}
        >
          <p className="kpi-label">{kpi.label}</p>
          <div className="kpi-value">
            <h3>{kpi.value}</h3>
            <span className="kpi-delta">{kpi.delta}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
