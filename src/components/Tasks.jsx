import Task from "./Task";
import { useContext } from "react";
import { taskContext } from "../App";

function Tasks() {
  const { tasks } = useContext(taskContext);
  return (
    <ul className="mt-5 text-white">
      {tasks
        .slice()
        .reverse()
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </ul>
  );
}

export default Tasks;
