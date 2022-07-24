import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import ApiRequest from "../../APIRequest/ApiRequest";
import ToastMessage from "../../helper/ToastMessage";
import SessionHelper from "../../helper/SessionHelper";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  let email = SessionHelper.getOtpEmail();

  const navigate = useNavigate();

  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "55px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid lightskyblue",
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "white",
    borderColor: "lightgrey",
    outline: 0,
  };

  const vefifyOtp = () => {
    if (!otp.length > 6) {
      ToastMessage.errorMessage("Invalid OTP Code");
    } else {
      ApiRequest.VerifyOtpCode(email, otp).then((response) => {
        if (response) {
          ToastMessage.successMessage(response.data.message);
          SessionHelper.setOtp(otp);
          navigate("/create-password");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6 center-screen">
          <div className="card w-90  p-4" style={{ marginTop: "100px" }}>
            <div className="card-body">
              <h4>OTP VERIFICATION </h4>
              <p>
                A 6 Digit verification code has been sent to your email address.{" "}
              </p>
              <ReactCodeInput
                onChange={(value) => setOtp(value)}
                inputStyle={defaultInputStyle}
                fields={6}
                type="text"
              />
              <br /> <br />
              <button
                onClick={vefifyOtp}
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

export default VerifyOtp;
