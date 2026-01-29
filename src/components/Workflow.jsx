import { workflowSteps } from "../data/modules.js";

export default function Workflow() {
  return (
    <section className="workflow" aria-labelledby="workflow-title">
      <div className="section-header">
        <p className="eyebrow">Workflow Logic</p>
        <h2 id="workflow-title">From request to execution, fully traceable.</h2>
        <p className="section-lead">
          Every approval, comment, and signature is captured in the audit trail
          with role-based access and SLA awareness.
        </p>
      </div>
      <div className="workflow-grid">
        {workflowSteps.map((step, index) => (
          <article
            key={step.title}
            className="workflow-card"
            style={{ "--delay": `${0.1 + index * 0.08}s` }}
          >
            <div className="step-index">0{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
