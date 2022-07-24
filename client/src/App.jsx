//external imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader";

//enternel imports
import CancledTaskPage from "./pages/CancledTaskPage";
import ComplatedTaskPage from "./pages/ComplatedTaskPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NewTaskPage from "./pages/NewTaskPage";
import NotFoundPage from "./pages/NotFound";
import PendingTaskPage from "./pages/PendingTaskPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import AllTaskPage from "./pages/AllTaskPage";
import SessionHelper from "./helper/SessionHelper";
import SettingPage from "./pages/SettingPage";
import SendOptPage from "./pages/SendOptPage";
import VerifyOptPage from "./pages/VerifyOptPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";

const App = () => {
  const token = SessionHelper.getToken();

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/dashboard" element={<DashboardPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/all-task" element={<AllTaskPage />} />
            <Route exact path="/create-task" element={<CreateTaskPage />} />
            <Route exact path="/new-task" element={<NewTaskPage />} />
            <Route exact path="/pending-task" element={<PendingTaskPage />} />
            <Route exact path="/cancled-task" element={<CancledTaskPage />} />
            <Route
              exact
              path="/complate-task"
              element={<ComplatedTaskPage />}
            />
            <Route exact path="/setting" element={<SettingPage />} />
            <Route exact path="*" element={<NotFoundPage />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/send-otp" element={<SendOptPage />} />
            <Route exact path="/verify-otp" element={<VerifyOptPage />} />
            <Route
              exact
              path="/create-password"
              element={<CreatePasswordPage />}
            />
            <Route exact path="*" element={<NotFoundPage />} />
          </>
        )}
      </Routes>
      <FullScreenLoader />
    </BrowserRouter>
  );
};

export default App;
