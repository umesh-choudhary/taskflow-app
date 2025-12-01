import { useState } from "react";

const TaskDetails = ({ task, onUpdate, onDelete }) => {
  const [edited, setEdited] = useState(task);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Edit Task</h2>

      <input
        type="text"
        name="title"
        value={edited.title}
        onChange={handleChange}
        className="border w-full p-2 mb-3"
      />

      <textarea
        name="description"
        value={edited.description}
        onChange={handleChange}
        className="border w-full p-2 mb-3"
      />

      <select
        name="priority"
        value={edited.priority}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        name="dueDate"
        type="date"
        value={edited.dueDate}
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />

      <select
        name="tags"
        className="border p-2 w-full rounded mb-3"
        onChange={handleChange}
        value={edited.tags}
      >
        <option value="frontend">Fronted</option>
        <option value="backend">Backend</option>
        <option value="docs">Docs</option>
      </select>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => onUpdate(edited)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>

        <button
          onClick={() => setIsConfirmOpen(true)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>

      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-[300px]">
            <p className="text-center mb-4">
              Are you sure you want to delete this task?
            </p>

            <div className="flex justify-between">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
