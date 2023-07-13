function Tasks() {
  return (
    <ul className="mt-5 text-white">
      <li className="w-full bg-violet-700 mb-2 px-4 py-2 flex items-center justify-between">
        <span>Go to university</span>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-base cursor-pointer">
            edit
          </span>
          <span className="material-symbols-outlined text-base cursor-pointer">
            delete
          </span>
        </div>
      </li>
      <li className="w-full bg-violet-700 mb-2 px-4 py-2 flex items-center justify-between">
        <span>Buy some bread</span>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-base cursor-pointer">
            edit
          </span>
          <span className="material-symbols-outlined text-base cursor-pointer">
            delete
          </span>
        </div>
      </li>
    </ul>
  );
}

export default Tasks;
