import { useState } from "react";
import {
  plantKpis,
  plantFleet,
  plantJobs,
  plantInspections,
  plantTransfers,
  plantDisposals,
} from "../data/plant.js";

const plantTabs = [
  { id: "fleet", label: "Fleet Control" },
  { id: "maintenance", label: "Maintenance & Logistics" },
];

export default function PlantPage() {
  const [activeTab, setActiveTab] = useState("fleet");

  return (
    <section className="module-page plant-page" aria-label="Plant management">
      <div className="module-tabs" role="tablist" aria-label="Plant sections">
        {plantTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`module-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "fleet" ? (
        <div className="module-layout">
          <div className="module-main">
            <div className="module-kpis">
              {plantKpis.map((kpi) => (
                <article key={kpi.label} className="kpi-card">
                  <p className="overview-label">{kpi.label}</p>
                  <h3 className="overview-value neutral">{kpi.value}</h3>
                  <p className="kpi-delta">{kpi.note}</p>
                </article>
              ))}
            </div>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">Plant inventory</p>
                  <h3>Fleet status by site</h3>
                </div>
                <button className="ghost-button" type="button">
                  Export RCD report
                </button>
              </div>
              <div className="data-table plant-inventory-table">
                <div className="data-head">
                  <span>Plant ID</span>
                  <span>Description / Brand</span>
                  <span>Location</span>
                  <span>Status</span>
                  <span>Last Check</span>
                </div>
                {plantFleet.map((plant) => (
                  <div key={plant.id} className="data-row">
                    <span className="mono">{plant.id}</span>
                    <span>
                      <strong>{plant.name}</strong>
                      <span className="data-sub">{plant.brand}</span>
                    </span>
                    <span>{plant.location}</span>
                    <span className={`status ${plant.status === "Operational" ? "approved" : "urgent"}`}>
                      {plant.status}
                    </span>
                    <span>{plant.lastCheck}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">Inspections</p>
                  <h3>Upcoming permits</h3>
                </div>
                <button className="ghost-button" type="button">
                  Schedule
                </button>
              </div>
              <div className="list-stack">
                {plantInspections.map((ins) => (
                  <div key={ins.id} className="list-row">
                    <div>
                      <p className="list-title">
                        {ins.plantId} · {ins.type} inspection
                      </p>
                      <p className="list-meta">{ins.date}</p>
                    </div>
                    <span className="status review">{ins.result}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="module-rail">
            <section className="rail-card">
              <div>
                <p className="panel-label">Maintenance alerts</p>
                <h3>Jobs in progress</h3>
              </div>
              <div className="list-stack">
                {plantJobs.map((job) => (
                  <div key={job.id} className="list-row compact">
                    <div>
                      <p className="list-title">{job.plantId}</p>
                      <p className="list-meta">{job.desc}</p>
                    </div>
                    <span className="status pending">{job.status}</span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      ) : null}

      {activeTab === "maintenance" ? (
        <div className="module-layout">
          <div className="module-main">
            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">Job sheets</p>
                  <h3>Repair & maintenance</h3>
                </div>
                <button className="ghost-button" type="button">
                  New job sheet
                </button>
              </div>
              <div className="data-table plant-jobs-table">
                <div className="data-head">
                  <span>Job ID</span>
                  <span>Plant</span>
                  <span>Description</span>
                  <span>Status</span>
                  <span>Cost</span>
                </div>
                {plantJobs.map((job) => (
                  <div key={job.id} className="data-row">
                    <span className="mono">{job.id}</span>
                    <span>{job.plantId}</span>
                    <span>{job.desc}</span>
                    <span className="status review">{job.status}</span>
                    <span>{job.cost}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">Transfer & disposal</p>
                  <h3>Logistics workflow</h3>
                </div>
                <button className="ghost-button" type="button">
                  Create transfer
                </button>
              </div>
              <div className="module-grid-layout">
                <div className="panel span-6 nested">
                  <h4>Recent transfers</h4>
                  <div className="list-stack">
                    {plantTransfers.map((item) => (
                      <div key={item.id} className="list-row compact">
                        <div>
                          <p className="list-title">{item.detail}</p>
                          <p className="list-meta">{item.id}</p>
                        </div>
                        <span className="status pending">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="panel span-6 nested">
                  <h4>Material disposal</h4>
                  <div className="list-stack">
                    {plantDisposals.map((item) => (
                      <div key={item.id} className="list-row compact">
                        <div>
                          <p className="list-title">{item.detail}</p>
                          <p className="list-meta">{item.id}</p>
                        </div>
                        <span className="status review">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="module-rail">
            <section className="rail-card">
              <div>
                <p className="panel-label">Logistics tools</p>
                <h3>Quick actions</h3>
              </div>
              <div className="rail-actions">
                <button className="primary-button" type="button">
                  Transfer request
                </button>
                <button className="ghost-button" type="button">
                  Disposal log
                </button>
                <button className="ghost-button" type="button">
                  Permit register
                </button>
              </div>
            </section>
          </aside>
        </div>
      ) : null}
    </section>
  );
}
