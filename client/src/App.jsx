//external imports
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

//enternel imports
import CancledTaskPage from "./pages/CancledTaskPage";
import ComplatedTaskPage from "./pages/ComplatedTaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import DashboardPage from "./pages/DashboardPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewTaskPage from "./pages/NewTaskPage";
import NotFoundPage from "./pages/NotFound";
import PendingTaskPage from "./pages/PendingTaskPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import TaskPage from "./pages/TaskPage";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-blog" element={<CreateTaskPage />} />
        <Route path="/all-blog" element={<TaskPage />} />
        <Route path="/pending-blog" element={<PendingTaskPage />} />
        <Route path="/cancled-blog" element={<CancledTaskPage />} />
        <Route path="/new-blog" element={<NewTaskPage />} />
        <Route path="/complate-page" element={<ComplatedTaskPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default App;
