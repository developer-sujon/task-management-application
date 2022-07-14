//external import
import cogoToast from "cogo-toast";

class ToastMessage {
  static successMessage(msg) {
    return cogoToast.success(msg, {
      position: "bottom-center",
    });
  }
  static errorMessage(msg) {
    return cogoToast.error(msg, {
      position: "bottom-center",
    });
  }
}

export default ToastMessage;
