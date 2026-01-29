import { notifications } from "../data/modules.js";

export default function NotificationBoard() {
  return (
    <section className="panel span-6" aria-labelledby="notification-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">Notifications</p>
          <h2 id="notification-title">Updates from other modules</h2>
        </div>
        <button className="ghost-button" type="button">
          Open notification center
        </button>
      </div>
      <div className="notification-grid">
        {notifications.map((note) => (
          <article className="notification-card" key={note.title}>
            <p className="notification-title">{note.title}</p>
            <p className="notification-detail">{note.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
