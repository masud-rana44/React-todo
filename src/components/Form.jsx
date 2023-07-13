function Form() {
  return (
    <form className="w-full flex">
      <input
        type="text"
        placeholder="what is the task today?"
        className="outline-none border border-violet-700  px-4 py-2 bg-transparent text-base text-violet-200"
      />
      <button className="outline-none px-4 py-2 font-medium text-violet-200 bg-violet-700">
        Add task
      </button>
    </form>
  );
}

export default Form;
