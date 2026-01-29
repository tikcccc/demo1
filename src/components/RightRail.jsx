import { usefulLinks, chatContacts } from "../data/modules.js";

export default function RightRail() {
  return (
    <aside className="dashboard-rail">
      <div className="rail-card">
        <p className="panel-label">Useful Links / App</p>
        <div className="link-grid">
          {usefulLinks.map((link) => (
            <button key={link} className="link-card" type="button">
              {link}
            </button>
          ))}
        </div>
      </div>
      <div className="rail-card">
        <p className="panel-label">Chat Box</p>
        <p className="rail-sub">Connect to departments</p>
        <div className="chat-list">
          {chatContacts.map((contact) => (
            <button key={contact} className="chat-item" type="button">
              <span className="chat-dot" />
              <span>{contact}</span>
            </button>
          ))}
        </div>
        <button className="ghost-button" type="button">
          Open chat console
        </button>
      </div>
      <div className="rail-card">
        <p className="panel-label">Future Plug-ins</p>
        <p className="rail-sub">
          Reserve slots for upcoming workflow apps and integrations.
        </p>
        <button className="secondary-button" type="button">
          Request integration
        </button>
      </div>
    </aside>
  );
}
