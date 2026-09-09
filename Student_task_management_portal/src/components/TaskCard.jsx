function TaskCard({title,values,status}) {
    return (
        <div className="task-card">
            <h3>{title}</h3>

            <p>{values}</p>

            <p>{status}</p>
        </div>
    );
}

export default TaskCard;