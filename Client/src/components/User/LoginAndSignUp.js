import React, { Fragment, useState, useEffect } from "react";
import Loader from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const LoginAndSignUp = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const imgstyle = {
    marginRight: "5px",
    marginBottom: "3px",
    width: "20px",
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    myForm.set("avatar", avatar);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const navigate = useNavigate(); 


  
  const [flag,setFlag]=useState(false);

    useEffect(() => {

    if (error) {
      // return alert.error(error);
      dispatch(clearErrors());
    }

    if(isAuthenticated && flag){
        navigate("/account");
        setFlag(false);
    }

    // return () => {}

  }, [dispatch, alert, error,isAuthenticated,navigate]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="navbar-nav ml-auto action-buttons">
            <div className="nav-item dropdown">
              <a
                href="/"
                data-toggle="dropdown"
                className="btn btn-primary dropdown-toggle log-in-btn"
              >
                Login
              </a>
              {/* <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle mr-4"
              >Login</a
            >  */}
              <div className="dropdown-menu action-form">
                <form onSubmit={loginSubmit}>
                  <p className="hint-text">Sign in with Google</p>
                  <div className="form-group social-btn clearfix">
                    <a
                      href="/"
                      className="btn btn-outline-light btn-secondary google-btn"
                    >
                      <img
                        style={imgstyle}
                        alt="Google sign-in"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      />
                      {/* <i className="fa fa-google"></i>  */}
                      Google
                    </a>
                    {/* <div className="row">
                    <div className="col-md-3">
                      <a className="btn btn-outline-light" href="/users/googleauth" role="button" style="text-transform:none">
                        <img width="30px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                        Login with Google
                      </a>
                    </div>
                  </div>  */}
                    {/* <a href="#" className="btn btn-secondary twitter-btn float-right"
                    ><i className="fa fa-twitter"></i> Twitter</a
                  >  */}
                  </div>
                  <div className="or-seperator">
                    <b>or</b>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Login"
                  />
                  <div className="text-center mt-2">
                    <a href="/password/forgot">Forget password?</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="/"
                data-toggle="dropdown"
                className="btn btn-primary dropdown-toggle sign-up-btn"
              >
                Sign up
              </a>
              <div className="dropdown-menu action-form">
                <form
                  encType="multipart/form-data"
                  onSubmit={registerSubmit}
                >
                  <p className="hint-text">
                    Fill in this form to create your account!
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                      name="password"
                      value={password}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required="required"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="form-group" id="registerImage">
                    <img src={avatarPreview} alt="Avatar Preview" />
                    <input
                      type="file"
                      className="form-control"
                      //   placeholder="Choose Profile"
                      name="avatar"
                      accept="image/*"
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-check-label">
                      <input type="checkbox" required="required" /> I accept the
                      <a href="/">Terms &amp; Conditions</a>
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Register"
                  />
                </form>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginAndSignUp;
