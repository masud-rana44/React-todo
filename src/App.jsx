import Form from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="font-sans bg-violet-700 w-full min-h-screen flex flex-col items-center justify-center">
      <div className=" bg-indigo-950 px-6 py-10 min-w-[350px] rounded-sm">
        <h1 className="text-white  text-2xl font-medium text-center mb-5">
          Get things done!
        </h1>
        <Form />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
