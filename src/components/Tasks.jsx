import Task from "./Task";

function Tasks({
  tasks,
  onRemoveTask,
  onEditTask,
  submitEditTask,
  editTaskId,
}) {
  return (
    <ul className="mt-5 text-white">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onRemoveTask={onRemoveTask}
          onEditTask={onEditTask}
          submitEditTask={submitEditTask}
          editTaskId={editTaskId}
        />
      ))}
    </ul>
  );
}

export default Tasks;
