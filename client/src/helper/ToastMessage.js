//external import
import cogoToast from "cogo-toast";
class ToastMessage {
  static successMessage(msg) {
    return cogoToast.success(msg);
  }
  static errorMessage(msg) {
    return cogoToast.error(msg);
  }
}

export default ToastMessage;
