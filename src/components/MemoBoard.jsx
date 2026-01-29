import { memos } from "../data/modules.js";

export default function MemoBoard() {
  return (
    <section className="panel span-6" aria-labelledby="memo-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">What's New</p>
          <h2 id="memo-title">Latest company memos</h2>
        </div>
        <button className="ghost-button" type="button">
          View all memos
        </button>
      </div>
      <div className="memo-list">
        {memos.map((memo) => (
          <article className="memo-item" key={memo.title}>
            <div>
              <p className="memo-title">{memo.title}</p>
              <p className="memo-detail">{memo.detail}</p>
            </div>
            <button className="ghost-button" type="button">
              Open
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
