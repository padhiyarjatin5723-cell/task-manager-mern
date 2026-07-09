import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import Tasks from "./pages/tasks/tasks";
import CreateTask from "./pages/createTask/createTask";
import EditTask from "./pages/EditTask/EditTask";
import Analytics from "./pages/analytics/analytics";
import Board from "./pages/board/board";
import Projects from "./pages/projects/projects";
import NotFound from "./pages/notfound/notfound";

import ProtectedRoute from "./components/ProtectedRoute";
import CommandPalette from "./components/commandpalette/CommandPalette";

function App() {
  return (
    <BrowserRouter>
      <CommandPalette />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-task"
          element={
            <ProtectedRoute>
              <CreateTask />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-task/:id"
          element={
            <ProtectedRoute>
              <EditTask />
            </ProtectedRoute>
          }
        />

        <Route
          path="/board"
          element={
            <ProtectedRoute>
              <Board />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;