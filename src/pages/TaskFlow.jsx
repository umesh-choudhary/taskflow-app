import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import PriorityFilter from "../components/PriorityFilter";
import TagFilter from "../components/TagFilter";
import AddTaskButton from "../components/AddTaskButton";
import ShowAllColumn from "../components/ShowAllColumn";
import TaskFormModal from "../components/TaskForm";
import { DragDropContext } from "react-beautiful-dnd";
import Modal from "../components/Modal";
import TaskDetails from "../components/TaskDetails";

function TaskFlow() {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [tag, setTag] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);

  const [showTask, setShowTask] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  //   const [showTask, setShowTask] = useState([]);

  const handleCreateTask = (task) => {
    console.log(task);
    setShowTask((prev) => [...prev, task]);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    setShowTask(saved);
    console.log("get task form localstorage", saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(showTask));
    console.log("task added in localstorage", showTask);
  }, [showTask]);

  const filterdata = showTask
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => (priority ? t.priority === priority : true))
    .filter((t) => (tag ? t.tags.includes(tag) : true));

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    const newList = showTask.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    setShowTask(newList);
    closeModal();
  };

  const handleDeleteTask = (id) => {
    const updated = showTask.filter((t) => t.id !== id);
    setShowTask(updated);
    closeModal();
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDropTask = (newStatus) => {
    if (!draggedTask) return;

    const updatedList = showTask.map((t) =>
      t.id === draggedTask.id ? { ...t, status: newStatus } : t
    );

    setShowTask(updatedList);
    setDraggedTask(null);
  };

  return (
    <div className="p-4">
      <Header />

      <div className="flex items-center  justify-between my-4">
        <div className="flex flex-col sm:flex-row sm:items-center items-center gap-4 my-4">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <PriorityFilter
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />

          <TagFilter value={tag} onChange={(e) => setTag(e.target.value)} />
        </div>

        <AddTaskButton onClick={() => setIsModalOpen(true)} />
        <TaskFormModal
          isOpen={isModalOpen}
          onSave={handleCreateTask}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <ShowAllColumn
        tasks={filterdata}
        onSelect={handleTaskClick}
        onDragStart={handleDragStart}
        onDropTask={handleDropTask}
      />

      {selectedTask && (
        <Modal onClose={() => setSelectedTask(null)}>
          <TaskDetails
            task={selectedTask}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
            onClose={() => setSelectedTask(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default TaskFlow;
