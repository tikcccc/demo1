import { tasks } from "../data/modules.js";

export default function TaskBoard() {
  return (
    <section className="panel span-4" aria-labelledby="task-title">
      <div className="panel-header">
        <div>
          <p className="panel-label">My Tasks</p>
          <h2 id="task-title">Today & upcoming</h2>
        </div>
        <button className="ghost-button" type="button">
          Add task
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-item" key={task.title}>
            <div>
              <p className="task-title">{task.title}</p>
              <p className="task-meta">
                {task.module} - Due {task.due}
              </p>
            </div>
            <span className={`pill ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
