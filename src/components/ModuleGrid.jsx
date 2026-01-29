import { modules } from "../data/modules.js";

export default function ModuleGrid() {
  return (
    <section className="modules" aria-labelledby="modules-title">
      <div className="section-header">
        <p className="eyebrow">Modular Architecture</p>
        <h2 id="modules-title">A-K modules, connected by one platform.</h2>
        <p className="section-lead">
          Each module is designed to digitize a core workflow while sharing data
          securely across departments.
        </p>
      </div>
      <div className="module-grid">
        {modules.map((module, index) => (
          <article
            key={module.code}
            className="module-card"
            style={{ "--delay": `${0.05 + index * 0.05}s` }}
          >
            <div className="module-header">
              <span className="module-code">{module.code}</span>
              <h3>{module.name}</h3>
            </div>
            <p className="module-summary">{module.summary}</p>
            <div className="module-tags">
              {module.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
