import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiRequest from "../../APIRequest/ApiRequest";
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const RegistrationUser = () => {
  const navigator = useNavigate();

  let emailRef,
    userNameRef,
    nameRef,
    phoneRef,
    passwordRef = useRef();

  const onRegistration = (e) => {
    e.preventDefault();
    const newUser = {
      email: emailRef.value,
      userName: userNameRef.value,
      name: nameRef.value,
      phone: phoneRef.value,
      password: passwordRef.value,
    };

    if (!FormValidation.isEmail(newUser.email)) {
      ToastMessage.errorMessage("Invalid Email Address");
    } else if (FormValidation.isEmpty(newUser.userName)) {
      ToastMessage.errorMessage("Username is Required");
    } else if (FormValidation.isEmpty(newUser.name)) {
      ToastMessage.errorMessage("Name is Required");
    } else if (!FormValidation.isMobile(newUser.phone)) {
      ToastMessage.errorMessage("Invalid Phone Number");
    } else if (FormValidation.isEmpty(newUser.password)) {
      ToastMessage.errorMessage("Password is Required");
    } else {
      ApiRequest.RegistrationUserRequest(newUser).then((result) => {
        if (result) {
          ToastMessage.successMessage("User Registration Successful");
          navigator("/login");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div
          className="col-md-7 col-lg-6 center-screen"
          style={{ marginTop: "100px" }}
        >
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h5>Sign Up</h5>
              <br />
              <form onSubmit={onRegistration}>
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <input
                  ref={(input) => (userNameRef = input)}
                  placeholder="User Name"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <input
                  ref={(input) => (nameRef = input)}
                  placeholder="Name"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <input
                  ref={(input) => (phoneRef = input)}
                  placeholder="Mobile"
                  className="form-control animated fadeInUp"
                  type="number"
                />
                <br />
                <input
                  ref={(input) => (passwordRef = input)}
                  placeholder="User Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button className="btn w-100 float-end btn-primary animated fadeInUp">
                  Next
                </button>
              </form>
              <div className="text-center w-100">
                <Link className="text-center" to="/login">
                  Sign In
                </Link>
                <br />
                <Link className="text-center" to="/send-otp">
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

export default RegistrationUser;
