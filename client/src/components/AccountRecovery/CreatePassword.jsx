import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../../APIRequest/ApiRequest";
import FormValidation from "../../helper/FormValidation";
import SessionHelper from "../../helper/SessionHelper";
import ToastMessage from "../../helper/ToastMessage";

const CreatePassword = () => {
  let passwordRef,
    confirmPasswordRef = useRef();

  const navigate = useNavigate();

  let email = SessionHelper.getOtpEmail();
  let otp = SessionHelper.getOtp();

  const resetPass = () => {
    if (FormValidation.isEmpty(passwordRef.value)) {
      ToastMessage.errorMessage("Password is Required");
    } else if (FormValidation.isEmpty(confirmPasswordRef.value)) {
      ToastMessage.errorMessage("Confirm Password is Required");
    } else if (confirmPasswordRef.value !== passwordRef.value) {
      ToastMessage.errorMessage("Password & Confirm Password Not Match");
    } else {
      ApiRequest.PasswordRecovery(email, otp, passwordRef.value).then(
        (response) => {
          if (response) {
            ToastMessage.successMessage(response.data.message);
            navigate("/login");
          }
        },
      );
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-md-7 col-lg-6 center-screen"
          style={{ marginTop: "100px" }}
        >
          <div className="card w-90 p-4">
            <div className="card-body">
              <h5>Set New Password</h5>
              <br />
              <label>Your email address</label>
              <input
                readOnly={true}
                value={email}
                placeholder="User Email"
                className="form-control animated fadeInUp"
                type="email"
              />
              <br />
              <label>New Password</label>
              <input
                ref={(input) => (passwordRef = input)}
                placeholder="New Password"
                className="form-control animated fadeInUp"
                type="password"
              />
              <br />
              <label>Confirm Password</label>
              <input
                ref={(input) => (confirmPasswordRef = input)}
                placeholder="Confirm Password"
                className="form-control animated fadeInUp"
                type="password"
              />
              <br />
              <button
                onClick={resetPass}
                className="btn w-100 animated fadeInUp float-end btn-primary"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
