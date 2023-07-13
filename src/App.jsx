import React, { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

export const taskContext = React.createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleRemoveTask(taskId) {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  function handleEditTask(taskId) {
    setEditTaskId(taskId);
  }

  function submitEditTask(taskId, description) {
    setTasks((tasks) =>
      tasks.map((t) => (t.id == taskId ? { ...t, task: description } : t))
    );
    setEditTaskId(null);
  }

  return (
    <taskContext.Provider
      value={{
        tasks,
        editTaskId,
        handleAddTask,
        handleRemoveTask,
        handleEditTask,
        submitEditTask,
      }}
    >
      <div className="font-sans bg-violet-700 w-full min-h-screen flex flex-col items-center justify-center">
        <div className=" bg-indigo-950 px-6 py-10 min-w-[350px] rounded-sm">
          <h1 className="text-white  text-2xl font-medium text-center mb-5">
            Get things done!
          </h1>
          <Form />
          <Tasks />
        </div>
      </div>
    </taskContext.Provider>
  );
}

export default App;
