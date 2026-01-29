import { approvals } from "../data/modules.js";

export default function ApprovalQueue() {
  return (
    <section className="panel span-8" aria-labelledby="approval-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">Approval Queue</p>
          <h2 id="approval-title">Items waiting for action</h2>
        </div>
        <button className="ghost-button" type="button">
          View all approvals
        </button>
      </div>
      <div className="table">
        <div className="table-head">
          <span>ID</span>
          <span>Item</span>
          <span>Module</span>
          <span>Owner</span>
          <span>Due</span>
          <span>Status</span>
        </div>
        {approvals.map((item) => (
          <div className="table-row" key={item.id}>
            <span className="mono">{item.id}</span>
            <span>{item.title}</span>
            <span>{item.module}</span>
            <span>{item.owner}</span>
            <span>{item.due}</span>
            <span className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
