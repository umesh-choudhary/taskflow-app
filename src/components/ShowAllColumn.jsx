import { Droppable } from "react-beautiful-dnd";
import ColumnTask from "./ColumnTask";

const ShowAllColumn = ({ tasks, onSelect, onDragStart, onDropTask }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
      <ColumnTask
        title="todo"
        tasks={tasks.filter((t) => t.status === "todo")}
        onSelect={onSelect}
        onDragStart={onDragStart}
        onDropTask={onDropTask}
      />

      <ColumnTask
        title="in-progress"
        tasks={tasks.filter((t) => t.status === "in-progress")}
        onSelect={onSelect}
        onDragStart={onDragStart}
        onDropTask={onDropTask}
      />

      <ColumnTask
        title="completed"
        tasks={tasks.filter((t) => t.status === "completed")}
        onSelect={onSelect}
        onDragStart={onDragStart}
        onDropTask={onDropTask}
      />
    </div>
  );
};

export default ShowAllColumn;
