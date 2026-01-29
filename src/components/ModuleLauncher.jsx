import { modules } from "../data/modules.js";

export default function ModuleLauncher() {
  return (
    <section className="panel span-7" aria-labelledby="modules-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">Functional Apps B-K</p>
          <h2 id="modules-title">Launch an internal application</h2>
        </div>
        <button className="ghost-button" type="button">
          Manage modules
        </button>
      </div>
      <div className="module-grid">
        {modules.map((module) => (
          <button key={module.code} className="module-tile" type="button">
            <div className="module-header">
              <span className="module-code">{module.code}</span>
              <div>
                <p className="module-name">{module.name}</p>
                <p className="module-summary">{module.summary}</p>
              </div>
            </div>
            <div className="module-tags">
              {module.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
