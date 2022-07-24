import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../../APIRequest/ApiRequest";
import FormValidation from "../../helper/FormValidation";
import SessionHelper from "../../helper/SessionHelper";
import ToastMessage from "../../helper/ToastMessage";

const SendOtp = () => {
  const navigate = useNavigate();
  let emailRef = useRef();

  const sendOtp = () => {
    if (!FormValidation.isEmail(emailRef.value)) {
      ToastMessage.errorMessage("Invalid Email Address");
    } else {
      ApiRequest.SendOpt(emailRef.value).then((response) => {
        if (response) {
          ToastMessage.successMessage(response.data.message);
          SessionHelper.setOtpEmail(emailRef.value);
          navigate("/verify-otp");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-md-7 col-lg-6 center-screen"
          style={{ marginTop: "100px" }}
        >
          <div className="card w-90  p-4">
            <div className="card-body">
              <h5>Email Address</h5>
              <br />
              <label>Your email address</label>
              <input
                ref={(input) => (emailRef = input)}
                placeholder="User Email"
                className="form-control animated fadeInUp"
                type="email"
              />
              <br />
              <button
                onClick={sendOtp}
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

export default SendOtp;
