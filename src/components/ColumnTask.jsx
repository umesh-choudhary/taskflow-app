const ColumnTask = ({
  onDragStart,
  onDropTask,
  onSelect,
  title,
  tasks = [],
}) => {
  return (
    <div
      className="border rounded-lg p-4 bg-white min-h-[300px]"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDropTask(title)}
    >
      
      <h2 className="font-semibold text-lg mb-3">{title}</h2>
      <div className="flex flex-col gap-3">
        {tasks.length === 0 && (
          <p className="text-gray-400 text-sm">No tasks</p>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onClick={() => onSelect(task)}
            onDragStart={() => onDragStart(task)}
            className="p-4 border rounded-md bg-gray-50 cursor-move"
          >
            <h2>{task.title}</h2>
            <p className="text-gray-400">{task.description}</p>

            <div className=" flex justify-between">
              <p className="bg-gray-200 px-2">{task.priority}</p>
              <p className="text-gray-400">{task.dueDate}</p>
              <p className="bg-gray-200 px-2 text-gray-500">{task.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnTask;
