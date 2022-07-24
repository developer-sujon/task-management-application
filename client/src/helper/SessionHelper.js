class SessionHelper {
  static setToken(accessToken) {
    sessionStorage.setItem("accessToken", accessToken);
  }
  static getToken() {
    return sessionStorage.getItem("accessToken");
  }
  static removeToken() {
    return sessionStorage.removeItem("accessToken");
  }
  static setUserDetails(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  static getUserDetails() {
    return JSON.parse(sessionStorage.getItem("user"));
  }
  static removeUserDetails() {
    return sessionStorage.removeItem("user");
  }
  static setOtp(otp) {
    sessionStorage.setItem("otp", JSON.stringify(otp));
  }
  static getOtp() {
    return JSON.parse(sessionStorage.getItem("otp"));
  }
  static setOtpEmail(email) {
    sessionStorage.setItem("otpEmail", JSON.stringify(email));
  }
  static getOtpEmail() {
    return JSON.parse(sessionStorage.getItem("otpEmail"));
  }
}

export default SessionHelper;
