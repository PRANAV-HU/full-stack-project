import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from "./addtask"; 

function Dashboard(props) {
  function toggleTask(id) {
    props.setTasks(
      props.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed"
            }
          : task
      )
    );
  }

  function addTask(newTask) {
    props.setTasks([...props.tasks, newTask]);
    console.log("newtask:", newTask);
  }

  function deleteTask(id) {
    props.setTasks(props.tasks.filter((task) => task.id !== id));
    console.log("Deleted task with id:", id);
  }

  return (
    <main>
      <div className="stats-container">
        <StatCard title="Total Tasks" value={props.tasks.length} />
        <StatCard
          title="Completed"
          value={props.tasks.filter((t) => t.status === "Completed").length}
        />
        <StatCard
          title="Pending"
          value={props.tasks.filter((t) => t.status === "Pending").length}
        />
      </div>

      <AddTask onAddTask={addTask} />

      <h2>Recent Tasks</h2>
      <div className="tasks-container">
        {props.tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default Dashboard;
