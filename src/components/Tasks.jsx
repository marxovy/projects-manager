import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete, projectId }) => {
  console.log({ tasks });
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} tasks={tasks} projectId={projectId} />
      {tasks.length <= 0 && <p>This project has no added tasks yet.</p>}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 roudned-md bg-stone-100 pl-10">
          {tasks.map((task) => (
            <li
              key={task.id}
              add
              className="flex justify-between my-4 items-center"
            >
              <p>{task.description}</p>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
