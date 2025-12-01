import { useState } from "react";
import Modal from "./Modal";

function TaskFormModal({ onClose, isOpen, onSave }) {
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    tags: "",
    status: "todo",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const submitTask = {
      ...taskForm,
      id: Date.now(),
      tags: [taskForm.tags] 
    };
    onSave(submitTask);
    onClose();
  };

  return (
    <>
      <Modal onClose={onClose}>
        <h2>Create Task</h2>

        <input
          type="text"
          placeholder="Title"
          name="title"
          className="border p-2 w-full rounded mb-3"
          onChange={handleChange}
          value={taskForm.title}
        />

        <textarea
          name="description"
          placeholder="Decription"
          className="border p-2 w-full rounded mb-3"
          onChange={handleChange}
          value={taskForm.description}
        ></textarea>

        <select
          name="priority"
          className="border p-2 w-full rounded mb-3"
          onChange={handleChange}
          value={taskForm.priority}
        >
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          name="dueDate"
          className="border p-2 w-full rounded mb-3"
          onChange={handleChange}
          value={taskForm.dueDate}
        />

        <select
          name="tags"
          className="border p-2 w-full rounded mb-3"
          onChange={handleChange}
          value={taskForm.tags}
        >
          <option value="">Select Tags</option>
          <option value="frontend">Fronted</option>
          <option value="backend">Backend</option>
          <option value="docs">Docs</option>
        </select>

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 border rounded" onClick={onClose}>
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
      </Modal>
    </>
  );
}

export default TaskFormModal;
