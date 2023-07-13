import { useReducer, useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.task];
    case "remove":
      return state.filter((task) => task.id !== action.taskId);
    case "edit":
      return state.map((todo) =>
        todo.id === action.taskId ? { ...todo, task: action.description } : todo
      );
    default:
      return state;
  }
};

function App() {
  const [editTaskId, setEditTaskId] = useState(null);
  const [tasks, dispatch] = useReducer(reducer, initialState);

  function handleEditTask(taskId) {
    setEditTaskId(taskId);
  }

  function handleAddTask(task) {
    dispatch({
      type: "add",
      task,
    });
  }

  function handleRemoveTask(taskId) {
    dispatch({
      type: "remove",
      taskId,
    });
  }

  function submitEditTask(taskId, description) {
    dispatch({
      type: "edit",
      taskId,
      description,
    });
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
