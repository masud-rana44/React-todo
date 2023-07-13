import { useState } from "react";

function Task({ task, onRemoveTask, submitEditTask, onEditTask, editTaskId }) {
  const [description, setDescription] = useState(task.task);

  function handleEditSubmit(e, id) {
    e.preventDefault();
    if (!description) return;

    submitEditTask(id, description);
    setDescription("");
  }

  function handleDeleteTask(id) {
    onRemoveTask(id);
  }

  function handleEditTask(id) {
    onEditTask(id);
  }

  return (
    <>
      {editTaskId !== task.id ? (
        <li className="w-full bg-violet-700 mb-2 px-4 py-2 flex items-center justify-between">
          <span>{task.task}</span>
          <div className="flex items-center gap-1">
            <span
              className="material-symbols-outlined text-base cursor-pointer"
              onClick={() => handleEditTask(task.id)}
            >
              edit
            </span>
            <span
              className="material-symbols-outlined text-base cursor-pointer"
              onClick={() => handleDeleteTask(task.id)}
            >
              delete
            </span>
          </div>
        </li>
      ) : (
        <form
          className="w-full flex mb-2"
          onSubmit={(e) => handleEditSubmit(e, task.id)}
        >
          <input
            type="text"
            placeholder="what is the task today?"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="outline-none border border-violet-700  px-4 py-2 bg-transparent text-base text-violet-200"
          />
          <button
            type="submit"
            className="outline-none px-4 py-2 font-medium text-violet-200 bg-violet-700"
          >
            Add task
          </button>
        </form>
      )}
    </>
  );
}

export default Task;
