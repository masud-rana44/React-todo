import { useState, useContext } from "react";
import { taskContext } from "../App";

function Form() {
  const { handleAddTask } = useContext(taskContext);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newTask = { task, id: Date.now() };

    handleAddTask(newTask);
    setTask("");
  }

  return (
    <form className="w-full flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="what is the task today?"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="outline-none border border-violet-700  px-4 py-2 bg-transparent text-base text-violet-200"
      />
      <button
        type="submit"
        className="outline-none px-4 py-2 font-medium text-violet-200 bg-violet-700"
      >
        Add task
      </button>
    </form>
  );
}

export default Form;
