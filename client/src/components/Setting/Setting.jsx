import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../../APIRequest/ApiRequest";
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const Setting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ApiRequest.ProfileSelectRequest();
  }, []);

  const userProfile = useSelector((state) => state.profile.value);

  let previousPasswordRef,
    newPasswordRef,
    confirmNewPasswordRef = useRef();

  const updatePassword = () => {
    if (FormValidation.isEmpty(previousPasswordRef.value)) {
      ToastMessage.errorMessage("Previous Password is Required");
    } else if (FormValidation.isEmpty(newPasswordRef.value)) {
      ToastMessage.errorMessage("New Password is Required");
    } else if (FormValidation.isEmpty(confirmNewPasswordRef.value)) {
      ToastMessage.errorMessage("Confirm Password is Required");
    } else if (newPasswordRef.value !== confirmNewPasswordRef.value) {
      ToastMessage.errorMessage("New & Confirm Password Not Match");
    } else {
      ApiRequest.ChangePasswordRequest(
        previousPasswordRef.value,
        newPasswordRef.value,
        userProfile.email,
      ).then((result) => {
        if (result) {
          navigate("/profile");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="p-2">
                <label>Previous Password</label>
                <input
                  key={Date.now()}
                  ref={(input) => (previousPasswordRef = input)}
                  placeholder="Previous Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
              </div>
              <div className="p-2">
                <label>New Password</label>
                <input
                  key={Date.now()}
                  ref={(input) => (newPasswordRef = input)}
                  placeholder="New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
              </div>
              <div className="p-2">
                <label>Confirm New Password</label>
                <input
                  key={Date.now()}
                  ref={(input) => (confirmNewPasswordRef = input)}
                  placeholder="Confirm New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
              </div>
              <div className="p-2">
                <button
                  onClick={updatePassword}
                  className="btn w-100 float-end btn-primary animated fadeInUp"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
