import { metrics } from "../data/modules.js";

export default function Stats() {
  return (
    <section className="stats" aria-label="Operational metrics">
      {metrics.map((metric, index) => (
        <article
          key={metric.label}
          className="stat-card"
          style={{ "--delay": `${0.1 + index * 0.08}s` }}
        >
          <p className="stat-label">{metric.label}</p>
          <h3>{metric.value}</h3>
          <p className="stat-note">{metric.note}</p>
        </article>
      ))}
    </section>
  );
}
