import{Link} from "react-router-dom";
function TaskCard(props) {
  return (
    <div className="task-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Status: {props.status}</p>

      <button onClick={props.onToggle}>
        {props.status === "Completed" ? "Mark Pending" : "Mark Completed"}
      </button>
      <button onClick={props.onDelete}>
        Delete
      </button>
      <Link to={`/tasks/${props.id}`}>
      View Details
      </Link>
    </div>
  );
}

export default TaskCard;
