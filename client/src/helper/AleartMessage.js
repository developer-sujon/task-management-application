//external import
import Swal from "sweetalert2";
import ApiRequest from "../APIRequest/ApiRequest";

class AleartMessage {
  static deleteTask(id) {
    return Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return ApiRequest.deleteTaskRequest(id).then((result) => {
          if (result) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  }

  static updateTask(id, status) {
    return Swal.fire({
      title: "Change Status",
      input: "select",
      inputOptions: {
        new: "New",
        complate: "Complate",
        pending: "Pending",
        canceled: "Canceled",
      },
      inputValue: status,
    }).then((result) => {
      if (result) {
        return ApiRequest.updateTaskRequest(id, result.value).then((res) => {
          return res;
        });
      }
    });
  }
}

export default AleartMessage;
