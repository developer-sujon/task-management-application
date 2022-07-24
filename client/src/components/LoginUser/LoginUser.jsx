import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiRequest from "../../APIRequest/ApiRequest";
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const LoginUser = () => {
  const navigate = useNavigate();

  let passRef,
    emailRef = useRef();

  const SubmitLogin = (e) => {
    e.preventDefault();
    const email = emailRef.value;
    const phone = emailRef.value;
    const password = passRef.value;

    //TODO !FormValidation.isEmail(email) || !FormValidation.isMobile(phone)

    if (!FormValidation.isEmail(email)) {
      ToastMessage.errorMessage("Invalid Email Or Mobile");
    } else if (FormValidation.isEmpty(password)) {
      ToastMessage.errorMessage("Password Is Required");
    } else {
      ApiRequest.LoginUserRequest({ email, phone, password }).then((result) => {
        if (result) {
          ToastMessage.successMessage("User Login Successful");
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div
          className="col-md-7 col-lg-6 center-screen"
          style={{ marginTop: "100px" }}
        >
          <div className="card w-90  p-4">
            <div className="card-body">
              <h5>Sign In</h5>
              <br />

              <form onSubmit={SubmitLogin}>
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email Or Phone"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <input
                  ref={(input) => (passRef = input)}
                  placeholder="User Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button className="btn w-100 animated fadeInUp float-end btn-primary">
                  Next
                </button>
              </form>

              <div className="text-center w-100">
                <Link
                  className="text-center animated fadeInUp"
                  to="/registration"
                >
                  Sign Up
                </Link>
                <br />
                <Link className="text-center animated fadeInUp" to="/send-otp">
                  Forget Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
