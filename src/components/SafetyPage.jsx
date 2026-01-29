import { useState } from "react";
import {
  overviewCards,
  trainingAlerts,
  workers,
  incidents,
  inspectionForms,
} from "../data/safety.js";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "registry", label: "Worker Registry and Access" },
  { id: "incidents", label: "Incident Reporting" },
  { id: "forms", label: "E-Forms and Inspection" },
];

export default function SafetyPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="safety">
      <div className="safety-tabs" role="tablist" aria-label="Safety sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`safety-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" ? (
        <div className="safety-overview">
          <div className="overview-cards">
            {overviewCards.map((card) => (
              <article key={card.label} className="overview-card">
                <p className="overview-label">{card.label}</p>
                <h3 className={`overview-value ${card.tone}`}>{card.value}</h3>
              </article>
            ))}
          </div>
          <section className="panel">
            <div className="panel-header">
              <div>
                <p className="panel-label">E-Training</p>
                <h3>Training expiry alerts</h3>
              </div>
              <button className="ghost-button" type="button">
                Open training dashboard
              </button>
            </div>
            <div className="training-alerts">
              {trainingAlerts.map((alert) => (
                <div key={alert.worker} className="training-alert">
                  <div>
                    <p className="training-worker">{alert.worker}</p>
                    <p className="training-course">{alert.course}</p>
                  </div>
                  <div className="training-meta">
                    <span>{alert.expiry}</span>
                    <span className={`pill ${alert.status.toLowerCase().replace(/\s/g, "-")}`}>
                      {alert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : null}

      {activeTab === "registry" ? (
        <div className="safety-registry">
          <section className="panel">
            <div className="panel-header">
              <div>
                <p className="panel-label">Unified Worker Registry</p>
                <h3>Register once, work anywhere</h3>
              </div>
              <div className="panel-actions">
                <button className="ghost-button" type="button">
                  OCR Scan ID
                </button>
                <button className="primary-button" type="button">
                  New Worker
                </button>
              </div>
            </div>
            <div className="registry-table">
              <div className="registry-head">
                <span>Worker ID</span>
                <span>Name / Trade</span>
                <span>Documents (OCR verified)</span>
                <span>Safety score</span>
                <span>Access status</span>
                <span>Location</span>
              </div>
              {workers.map((worker) => (
                <div key={worker.id} className="registry-row">
                  <span className="mono">{worker.id}</span>
                  <span>
                    <strong>{worker.name}</strong>
                    <span className="registry-trade">{worker.trade}</span>
                  </span>
                  <span>
                    <span className="doc-line">{worker.hkid}</span>
                    <span className="doc-line">{worker.greenCard}</span>
                  </span>
                  <span>
                    <span className="score-bar">
                      <span style={{ width: `${worker.safetyScore}%` }} />
                    </span>
                    <span className="score-note">KPI: {worker.safetyScore}%</span>
                  </span>
                  <span className={`pill ${worker.accessStatus.toLowerCase()}`}>
                    {worker.accessStatus}
                  </span>
                  <span>{worker.location}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : null}

      {activeTab === "incidents" ? (
        <div className="safety-incidents">
          <section className="panel incident-banner">
            <div>
              <p className="panel-label">Incident Reporting System</p>
              <h3>2-stage process</h3>
              <p className="incident-sub">
                Preliminary report (immediate) to full investigation (RCA).
              </p>
            </div>
            <button className="primary-button" type="button">
              Report new incident
            </button>
          </section>
          <div className="incident-grid">
            {incidents.map((incident) => (
              <article key={incident.ref} className="panel incident-card">
                <div className="incident-card-head">
                  <span className="incident-ref">{incident.ref}</span>
                  <span className="incident-date">{incident.date}</span>
                </div>
                <h3>{incident.title}</h3>
                <div className="incident-progress">
                  <div className="progress-bar">
                    <span style={{ width: `${incident.stage * 33.33}%` }} />
                  </div>
                  <div className="progress-steps">
                    <span className={incident.stage >= 1 ? "active" : ""}>1. Preliminary</span>
                    <span className={incident.stage >= 2 ? "active" : ""}>2. Full investigation</span>
                    <span className={incident.stage >= 3 ? "active" : ""}>3. Closed</span>
                  </div>
                </div>
                <div className="incident-actions">
                  <button className="ghost-button" type="button">
                    View report
                  </button>
                  {incident.stage >= 2 ? (
                    <button className="secondary-button" type="button">
                      Update RCA
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {activeTab === "forms" ? (
        <div className="safety-forms">
          <div className="forms-hero">
            <div className="panel builder-card">
              <h3>No-code form builder</h3>
              <p>Create ad-hoc safety checklists without IT support.</p>
              <button className="primary-button" type="button">
                Create new template
              </button>
            </div>
            <div className="panel mobile-card">
              <h3>Mobile inspection</h3>
              <p>Forms sync to the mobile app for offline use.</p>
              <span className="pill">Offline mode ready</span>
            </div>
          </div>
          <section className="panel">
            <div className="panel-header">
              <div>
                <p className="panel-label">Active inspection forms</p>
                <h3>Recent submissions</h3>
              </div>
              <button className="ghost-button" type="button">
                View all forms
              </button>
            </div>
            <div className="forms-list">
              {inspectionForms.map((form) => (
                <div key={form.id} className="form-item">
                  <div>
                    <p className="form-title">{form.name}</p>
                    <p className="form-meta">
                      ID: {form.id} - Last updated {form.updated}
                    </p>
                  </div>
                  <div className="form-count">
                    <strong>{form.submissions}</strong>
                    <span>Submissions</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </section>
  );
}
