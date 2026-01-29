import { roles, officeTeams, siteTeams } from "../data/modules.js";

export default function RolesPanel() {
  return (
    <section className="panel span-5" aria-labelledby="roles-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">Approval Roles</p>
          <h2 id="roles-title">Department access matrix</h2>
        </div>
        <button className="ghost-button" type="button">
          Manage permissions
        </button>
      </div>
      <div className="roles-grid">
        {roles.map((role) => (
          <span key={role} className="chip">
            {role}
          </span>
        ))}
      </div>
      <div className="team-grid">
        <div>
          <p className="panel-label">Office</p>
          <div className="team-tags">
            {officeTeams.map((team) => (
              <span key={team} className="tag">
                {team}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="panel-label">Site</p>
          <div className="team-tags">
            {siteTeams.map((team) => (
              <span key={team} className="tag">
                {team}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
