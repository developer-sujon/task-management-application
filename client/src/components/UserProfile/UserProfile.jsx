import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../../APIRequest/ApiRequest";
import FormValidation from "../../helper/FormValidation";
import GetBase64 from "../../helper/GetBase64";
import ToastMessage from "../../helper/ToastMessage";

const UserProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ApiRequest.ProfileSelectRequest();
  }, []);

  const userProfile = useSelector((state) => state.profile.value);

  let userNameRef,
    userMobileRef,
    userImgRef,
    userImgView = useRef();

  const previewImage = () => {
    const imgFile = userImgRef.files[0];
    GetBase64(imgFile).then((base64Img) => {
      userImgView.src = base64Img;
    });
  };

  const updateProfile = () => {
    if (FormValidation.isEmpty(userNameRef.value)) {
      ToastMessage.errorMessage("Name is Required");
    } else if (!FormValidation.isMobile(userMobileRef.value)) {
      ToastMessage.errorMessage("Invalid Mobile Number");
    } else {
      const name = userNameRef.value;
      const phone = userMobileRef.value;
      const photo = userImgView.src;

      ApiRequest.ProfileUpdateRequest(
        name,
        phone,
        photo,
        userProfile.email,
      ).then((result) => {
        if (result) {
          // navigate("/profile");
          ApiRequest.ProfileSelectRequest();
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <img
                  ref={(input) => (userImgView = input)}
                  className="icon-nav-img-lg"
                  src={userProfile["photo"]}
                  alt={userProfile["userName"]}
                  style={{ maxWidth: "200px" }}
                />
                <hr />
                <div className="row">
                  <div className="col-4 p-2">
                    <label>Profile Picture</label>
                    <input
                      onChange={previewImage}
                      ref={(input) => (userImgRef = input)}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="file"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Email Address</label>
                    <input
                      key={Date.now()}
                      defaultValue={userProfile["email"]}
                      readOnly={true}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>User Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={userProfile["userName"]}
                      readOnly={true}
                      placeholder="User Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={userProfile["name"]}
                      ref={(input) => (userNameRef = input)}
                      placeholder="Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>

                  <div className="col-4 p-2">
                    <label>Mobile</label>
                    <input
                      key={Date.now()}
                      defaultValue={userProfile["phone"]}
                      ref={(input) => (userMobileRef = input)}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="number"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <button
                      onClick={updateProfile}
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
      </div>
    </div>
  );
};

export default UserProfile;
