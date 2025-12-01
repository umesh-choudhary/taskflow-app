Project Overview -
TaskFlow is a task management application built using React 19.
Users can create, update, delete and search tasks with category-wise filtering.
The app also includes native Drag & Drop, persistent storage using LocalStorage, and a clean responsive UI.

Features -
Add new tasks
Edit existing tasks
Delete tasks with confirmation
Search tasks
Filter by priority & tags
Task columns: Todo, In-Progress, Completed
Native Drag & Drop support
Fully responsive UI
LocalStorage persistence

Folder Structure -
src/
│── components/
│     ├── AddTaskButton.jsx
|     ├── ColumnTask.jsx
│     ├── Header.jsx
│     ├── Modal.jsx
│     ├── PriorityFilter.jsx
│     ├── SearchBar.jsx
│     ├── ShowAllColumn.jsx
|     ├── TagFilter.jsx
|     ├── TaskDetails.jsx
|     ├── TaskForm.jsx
│── pages/
│     ├── TaskFlow.jsx
│── utils/
│── App.jsx
│── main.jsx

Libraries Used -
Library -	Purpose
React 19 -	UI + State management
Tailwind CSS -	Styling
LocalStorage API -	Data persistence
Native Drag & Drop API -	Moving tasks between columns


How to Run -
Clone repo:
git clone https://github.com/yourusername/taskflow-app.git


Install dependencies:
npm install

Run project:
npm run dev

Open in browser:
http://localhost:5173/

Future Improvements-
Add DnD Kit or React Beautiful DnD (if React 19 support is added)
Dark mode UI
User authentication (Admin, User roles)
Cloud database instead of LocalStorage
Animations for drag & drop
Task analytics dashboard