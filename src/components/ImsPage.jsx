import { useState } from "react";
import {
  imsQualityKpis,
  imsComplaints,
  imsPermits,
  imsTraining,
  imsInspections,
} from "../data/ims.js";

export default function ImsPage() {
  const [activeTab, setActiveTab] = useState("quality");

  return (
    <section className="module-page ims-page" aria-label="IMS">
      <div className="ims-toggle" role="tablist" aria-label="IMS sections">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "quality"}
          className={activeTab === "quality" ? "active" : ""}
          onClick={() => setActiveTab("quality")}
        >
          IMS - Quality
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "environmental"}
          className={activeTab === "environmental" ? "active" : ""}
          onClick={() => setActiveTab("environmental")}
        >
          IMS - Environmental
        </button>
      </div>

      {activeTab === "quality" ? (
        <div className="module-layout">
          <div className="module-main">
            <div className="module-kpis">
              {imsQualityKpis.map((kpi) => (
                <article key={kpi.label} className="kpi-card">
                  <p className="overview-label">{kpi.label}</p>
                  <h3 className="overview-value neutral">{kpi.value}</h3>
                </article>
              ))}
            </div>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">Client complaint record</p>
                  <h3>Quality management workflow</h3>
                </div>
                <button className="ghost-button" type="button">
                  New complaint
                </button>
              </div>
              <div className="ims-record-grid">
                {imsComplaints.map((row) => (
                  <article key={row.id} className="ims-record-card">
                    <div className="ims-record-head">
                      <div>
                        <p className="ims-record-title">{row.id}</p>
                        <p className="ims-record-meta">
                          {row.client} · {row.date}
                        </p>
                      </div>
                      <span
                        className={`status ${row.status
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                      >
                        {row.status}
                      </span>
                    </div>
                    <p className="ims-record-body">{row.subject}</p>
                    <div className="ims-record-foot">
                      <span className="data-link">{row.car}</span>
                      <span className="data-link">
                        {row.signature ? "Signed" : "Sign now"}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="panel-footer">
                <button className="ghost-button" type="button">
                  Generate monthly summary
                </button>
              </div>
            </section>
          </div>

          <aside className="module-rail">
            <section className="rail-card">
              <div>
                <p className="panel-label">Quality control</p>
                <h3>CAR follow-up</h3>
              </div>
              <div className="list-stack">
                {imsComplaints.map((row) => (
                  <div key={row.id} className="list-row compact">
                    <div>
                      <p className="list-title">{row.subject}</p>
                      <p className="list-meta">{row.car}</p>
                    </div>
                    <span
                      className={`status ${row.status
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      ) : null}

      {activeTab === "environmental" ? (
        <div className="module-layout">
          <div className="module-main">
            <div className="module-grid-layout">
              <section className="panel span-7">
                <div className="panel-header">
                  <div>
                    <p className="panel-label">Permit & license</p>
                    <h3>Expiration tracking</h3>
                  </div>
                  <button className="ghost-button" type="button">
                    Renewal log
                  </button>
                </div>
                <div className="permit-list">
                  {imsPermits.map((permit) => (
                    <div key={permit.id} className="permit-item">
                      <div>
                        <p className="permit-title">{permit.type}</p>
                        <p className="permit-meta">
                          {permit.id} · {permit.authority}
                        </p>
                      </div>
                      <div className="permit-status">
                        <span
                          className={`status ${permit.status
                            .toLowerCase()
                            .replace(/\s/g, "-")}`}
                        >
                          {permit.status}
                        </span>
                        <span className="permit-expiry">Exp: {permit.expiry}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="panel span-5">
                <div className="panel-header">
                  <div>
                    <p className="panel-label">Env training</p>
                    <h3>Recent sessions</h3>
                  </div>
                  <button className="ghost-button" type="button">
                    View roster
                  </button>
                </div>
                <div className="list-stack">
                  {imsTraining.map((item) => (
                    <div key={item.title} className="list-row">
                      <div>
                        <p className="list-title">{item.title}</p>
                        <p className="list-meta">{item.date}</p>
                      </div>
                      <span className="data-link">{item.action}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">Monthly inspection</p>
                  <h3>Environmental inspection records</h3>
                </div>
                <button className="ghost-button" type="button">
                  Start inspection
                </button>
              </div>
              <div className="ims-record-grid ims-record-grid--wide">
                {imsInspections.map((ins) => (
                  <article key={ins.id} className="ims-record-card">
                    <div className="ims-record-head">
                      <div>
                        <p className="ims-record-title">{ins.id}</p>
                        <p className="ims-record-meta">
                          {ins.date} · {ins.location}
                        </p>
                      </div>
                      <span
                        className={`status ${ins.status
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                      >
                        {ins.status}
                      </span>
                    </div>
                    <p className="ims-record-meta">Inspector: {ins.inspector}</p>
                    <div className="ims-record-split">
                      <div>
                        <p className="ims-record-caption">Findings</p>
                        {ins.issues > 0 ? (
                          <span className="thumbs">
                            {Array.from({ length: ins.issues }).map((_, idx) => (
                              <span key={idx} className="thumb" />
                            ))}
                          </span>
                        ) : (
                          <span className="data-sub">No issues</span>
                        )}
                      </div>
                      <div>
                        <p className="ims-record-caption">Rectified</p>
                        {ins.rectified > 0 ? (
                          <span className="thumbs">
                            {Array.from({ length: ins.rectified }).map((_, idx) => (
                              <span key={idx} className="thumb resolved" />
                            ))}
                            {ins.issues > ins.rectified ? (
                              <span className="thumb upload">+</span>
                            ) : null}
                          </span>
                        ) : (
                          <span className="data-link">Upload proof</span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="module-rail">
            <section className="rail-card">
              <div>
                <p className="panel-label">Environmental alerts</p>
                <h3>Expiring permits</h3>
              </div>
              <div className="list-stack">
                {imsPermits.map((permit) => (
                  <div key={permit.id} className="list-row compact">
                    <div>
                      <p className="list-title">{permit.type}</p>
                      <p className="list-meta">{permit.expiry}</p>
                    </div>
                    <span
                      className={`status ${permit.status
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      {permit.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      ) : null}
    </section>
  );
}
