import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import Tasks from "./pages/tasks/tasks";
import CreateTask from "./pages/createTask/createTask";
import EditTask from "./pages/EditTask/EditTask";
import NotFound from "./pages/notfound/notfound";

import ProtectedRoute from "./components/ProtectedRoute";
import CommandPalette from "./components/commandpalette/CommandPalette";

function App() {
  return (
    <BrowserRouter>

      <CommandPalette />

      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Auth */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Tasks */}
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        {/* Create Task */}
        <Route
          path="/create-task"
          element={
            <ProtectedRoute>
              <CreateTask />
            </ProtectedRoute>
          }
        />

        {/* Edit Task */}
        <Route
          path="/edit-task/:id"
          element={
            <ProtectedRoute>
              <EditTask />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;