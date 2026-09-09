import StatCard from "./StatCard";
import TaskCard from "./TaskCard";

function Dashboard() {
    const tasks = [{title:"DSA",values:"all concepts",
        status:"DONE"},
    {title:"JAVA",values:"all concepts",
        status:"DONE"},{title:"DATABASE",values:"alla concepts",
        status:"PENDING"}]
    return (
        <main>

            <div className="stats-container">
                <StatCard title={"Total Tasks"}
                value ={"10"}/>
                <StatCard title={"Completed"}
                value={"6"} />
                <StatCard title={"Pending"}
                value={"4"} />
                <StatCard title={"Time Taken"}
                value={"1hr"}/>
            </div>

            <h2>Recent Tasks</h2>

           <div className="task-container">
                {tasks.map((task) => (
                  <TaskCard title={task.title} description={task.values} status={task.status} />
                ))}
            </div>

        </main>
    );
}

export default Dashboard;