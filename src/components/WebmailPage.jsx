import {
  folders,
  messages,
  selectedMessage,
  mailFilters,
} from "../data/webmail.js";

export default function WebmailPage() {
  return (
    <section className="webmail">
      <div className="panel webmail-shell">
        <div className="webmail-header">
          <div className="mailbox-meta">
            <p className="mailbox-name">lisa.ko@tysan.local</p>
            <p className="mailbox-status">Mailbox usage: 2.1 GB of 5 GB</p>
          </div>
          <div className="webmail-actions">
            <button className="primary-button" type="button">
              Compose
            </button>
            <button className="secondary-button" type="button">
              Open Webmail
            </button>
            <button className="ghost-button" type="button">
              Redirect Settings
            </button>
          </div>
        </div>
        <div className="webmail-layout">
          <aside className="mail-folders">
            <p className="panel-label">Mailboxes</p>
            <div className="folder-list">
              {folders.map((folder) => (
                <button
                  key={folder.name}
                  className={`folder-item ${folder.active ? "active" : ""}`}
                  type="button"
                >
                  <span>{folder.name}</span>
                  {folder.count ? <span>{folder.count}</span> : null}
                </button>
              ))}
            </div>
            <button className="ghost-button" type="button">
              Manage filters
            </button>
          </aside>

          <div className="mail-list">
            <div className="mail-list-header">
              <div>
                <p className="panel-label">Inbox</p>
                <p className="mail-count">24 messages - 6 unread</p>
              </div>
              <button className="ghost-button" type="button">
                View all
              </button>
            </div>
            <div className="mail-toolbar">
              <label className="mail-check">
                <input type="checkbox" />
                <span>Select</span>
              </label>
              <select className="mail-filter" defaultValue={mailFilters[0]}>
                {mailFilters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
              <div className="mail-search">
                <span className="search-icon">Search</span>
                <input type="search" placeholder="Search inbox" />
              </div>
              <button className="ghost-button" type="button">
                Mark read
              </button>
              <button className="ghost-button" type="button">
                Move
              </button>
              <button className="ghost-button" type="button">
                Delete
              </button>
            </div>
            {messages.map((message) => (
              <button
                key={message.id}
                className={`mail-item ${message.unread ? "unread" : ""}`}
                type="button"
              >
                <div className="mail-item-main">
                  <input type="checkbox" aria-label="Select message" />
                  <div>
                    <p className="mail-from">{message.from}</p>
                    <p className="mail-subject">{message.subject}</p>
                    <p className="mail-preview">{message.preview}</p>
                  </div>
                </div>
                <div className="mail-meta">
                  <span className="mail-time">{message.time}</span>
                  <span className={`pill ${message.tag.toLowerCase()}`}>
                    {message.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <article className="mail-view">
            <div className="mail-view-header">
              <div>
                <p className="panel-label">Message</p>
                <h3>{selectedMessage.subject}</h3>
              </div>
              <div className="mail-actions">
                <button className="ghost-button" type="button">
                  Reply
                </button>
                <button className="ghost-button" type="button">
                  Forward
                </button>
                <button className="ghost-button" type="button">
                  Archive
                </button>
              </div>
            </div>
            <div className="mail-details">
              <p>
                <strong>From:</strong> {selectedMessage.from}
              </p>
              <p>
                <strong>To:</strong> {selectedMessage.to}
              </p>
              <p>
                <strong>Time:</strong> {selectedMessage.time}
              </p>
            </div>
            <div className="mail-body">
              {selectedMessage.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mail-reply">
              <p className="panel-label">Quick Reply</p>
              <textarea
                placeholder="Type a reply..."
                rows={4}
                aria-label="Quick reply"
              />
              <div className="mail-actions">
                <button className="primary-button" type="button">
                  Send reply
                </button>
                <button className="ghost-button" type="button">
                  Save draft
                </button>
              </div>
            </div>
            <div className="mail-attachments">
              <p className="panel-label">Attachments</p>
              <div className="attachment-list">
                {selectedMessage.attachments.map((file) => (
                  <button key={file} className="attachment" type="button">
                    {file}
                  </button>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
