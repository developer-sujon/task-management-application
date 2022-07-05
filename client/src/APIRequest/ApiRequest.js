//external lib import
import axios from "axios";

axios.defaults.baseURL = "https://mern-project-server-api.herokuapp.com/api/v1";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("token");

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

class ApiRequest {
  static getRequest(url) {
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }

  static postRequest(url, postJson) {
    axios
      .post(url, postJson)
      .then((response) => {
        if (response.status === 201) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }

  static updateRequest(url, postJson) {
    axios
      .update(url, postJson)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }

  static deleteRequest(url) {
    axios
      .delete(url)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
}

export default ApiRequest;
