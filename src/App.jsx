import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

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
    <div className="font-sans bg-violet-700 w-full min-h-screen flex flex-col items-center justify-center">
      <div className=" bg-indigo-950 px-6 py-10 min-w-[350px] rounded-sm">
        <h1 className="text-white  text-2xl font-medium text-center mb-5">
          Get things done!
        </h1>
        <Form onAddTask={handleAddTask} />
        <Tasks
          tasks={tasks}
          onRemoveTask={handleRemoveTask}
          onEditTask={handleEditTask}
          submitEditTask={submitEditTask}
          editTaskId={editTaskId}
        />
      </div>
    </div>
  );
}

export default App;
