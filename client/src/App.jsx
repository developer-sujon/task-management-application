//external imports
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader";

//enternel imports
import CancledTaskPage from "./pages/CancledTaskPage";
import ComplatedTaskPage from "./pages/ComplatedTaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import DashboardPage from "./pages/DashboardPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import LoginPage from "./pages/LoginPage";
import NewTaskPage from "./pages/NewTaskPage";
import NotFoundPage from "./pages/NotFound";
import PendingTaskPage from "./pages/PendingTaskPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import AllTaskPage from "./pages/AllTaskPage";
import SessionHelper from "./helper/SessionHelper";

const App = () => {
  const token = SessionHelper.getToken();

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/all-task" element={<AllTaskPage />} />
            <Route path="/create-task" element={<CreateTaskPage />} />
            <Route path="/new-task" element={<NewTaskPage />} />
            <Route path="/pending-task" element={<PendingTaskPage />} />
            <Route path="/cancled-task" element={<CancledTaskPage />} />
            <Route path="/complate-task" element={<ComplatedTaskPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </>
        )}
      </Routes>
      <FullScreenLoader />
    </BrowserRouter>
  );
};

export default App;
