//external lib import
import axios from "axios";
import SessionHelper from "../helper/SessionHelper";
import ToastMessage from "../helper/ToastMessage";
import { setDashboardSummary } from "../redux/features/dashboardSlice";
import { removeLoading, setLoading } from "../redux/features/loaderSlice";
import { SetProfile } from "../redux/features/profileSlice";
import {
  setAllTask,
  setCancledTask,
  setNewTask,
  setPendingTask,
  setComplateTask,
} from "../redux/features/taskSlice";

import store from "../redux/store/store";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + SessionHelper.getToken();

// axios.defaults.headers = {
//   "Cache-Control": "no-cache",
//   Pragma: "no-cache",
//   Expires: "0",
//   Authorization: "Bearer " + SessionHelper.getToken(),
// };

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

class ApiRequest {
  static RegistrationUserRequest({ name, userName, email, phone, password }) {
    return axios
      .post("/user/registrationUser", {
        name,
        userName,
        email,
        phone,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          return true;
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static LoginUserRequest({ email, phone, password }) {
    store.dispatch(setLoading());
    return axios
      .post("/user/loginUser", {
        email,
        phone,
        password,
      })
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          SessionHelper.setToken(response.data.accessToken);
          return true;
        }
      })
      .catch((err) => {
        store.dispatch(removeLoading());
        if (err.response.status === 404) {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        } else if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static CreateNewTaskRequest(title, body) {
    store.dispatch(setLoading());
    return axios
      .post("/task/createTask", {
        title,
        body,
      })
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 201) {
          return true;
        }
      })
      .catch((err) => {
        console.log(err);

        store.dispatch(removeLoading());
        if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          window.location.href = "/login";
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static SetAllTaskRequest() {
    store.dispatch(setLoading());
    return axios
      .get("/task/selectTask")
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          store.dispatch(setAllTask(response.data));
        }
      })
      .catch((err) => {
        store.dispatch(removeLoading());
        if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          window.location.href = "/login";
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static SetTaskStatusRequest(status) {
    store.dispatch(setLoading());
    return axios
      .get("/task/selectTaskByStatus/" + status)
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          if (status === "new") {
            store.dispatch(setNewTask(response.data));
          } else if (status === "pending") {
            store.dispatch(setPendingTask(response.data));
          } else if (status === "canceled") {
            store.dispatch(setCancledTask(response.data));
          } else if (status === "complate") {
            store.dispatch(setComplateTask(response.data));
          } else {
            ToastMessage.errorMessage("Please Provite Task Status");
          }
        }
      })
      .catch((err) => {
        store.dispatch(removeLoading());
        if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          window.location.href = "/login";
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static deleteTaskRequest(id) {
    store.dispatch(setLoading());
    return axios
      .delete("/task/deleteTask/" + id)
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          return response;
        }
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(removeLoading());
        ToastMessage.errorMessage(err.response.data.message);
        return null;
      });
  }
  static updateTaskRequest(id, status) {
    store.dispatch(setLoading());
    return axios
      .patch("/task/updateTask/" + id, { status: status })
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          return response;
        }
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(removeLoading());
        ToastMessage.errorMessage(err.response.data.message);
        return null;
      });
  }
  static ProfileSelectRequest() {
    store.dispatch(setLoading());
    return axios
      .get("/user/selectUser")
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          store.dispatch(SetProfile(response.data[0]));
        }
      })
      .catch((err) => {
        store.dispatch(removeLoading());
        if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          window.location.href = "/login";
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static ProfileUpdateRequest(name, phone, photo, email) {
    store.dispatch(setLoading());
    return axios
      .patch("/user/updateUser", { name, phone, photo, email })
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          ToastMessage.successMessage("Profile Update Success");
          return true;
        }
      })
      .catch((err) => {
        store.dispatch(removeLoading());
        if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          window.location.href = "/login";
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static ChangePasswordRequest(previousPassword, newPassword, email) {
    store.dispatch(setLoading());
    return axios
      .put("/user/changePassword", { previousPassword, newPassword, email })
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          ToastMessage.successMessage("Password Change Success");
          return true;
        }
      })
      .catch((err) => {
        store.dispatch(removeLoading());
        if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          window.location.href = "/login";
          return false;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return false;
        }
      });
  }
  static SetDashboardSummaryRequest() {
    store.dispatch(setLoading());
    axios
      .get("/task/dashboardSummary")
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          store.dispatch(setDashboardSummary(response.data));
        }
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(removeLoading());
        if (err.response.status === 401) {
          ToastMessage.errorMessage(err.response.data.message);
          SessionHelper.removeToken("accessToken");
          window.location.href = "/login";
        } else {
          ToastMessage.errorMessage(err.response.data.message);
        }
      });
  }
  static SendOpt(email) {
    store.dispatch(setLoading());
    return axios
      .get("/user/sendOpt/" + email)
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 201) {
          return response;
        }
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(removeLoading());
        if (err.response.status === 404) {
          ToastMessage.errorMessage(err.response.data.message);
          return null;
        } else {
          ToastMessage.errorMessage(err.response.data.message);
          return null;
        }
      });
  }
  static VerifyOtpCode(email, otp) {
    store.dispatch(setLoading());
    return axios
      .get("/user/verifyOtp/" + email + "/" + otp)
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          return response;
        }
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(removeLoading());
        ToastMessage.errorMessage(err.response.data.message);
        return null;
      });
  }
  static PasswordRecovery(email, otp, password) {
    store.dispatch(setLoading());
    return axios
      .post("/user/passwordRecovery", { email, otp, password })
      .then((response) => {
        store.dispatch(removeLoading());
        if (response.status === 200) {
          return response;
        }
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(removeLoading());
        ToastMessage.errorMessage(err.response.data.message);
        return null;
      });
  }
}

export default ApiRequest;
