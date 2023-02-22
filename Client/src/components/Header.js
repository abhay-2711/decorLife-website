import '../css/header.css';
import React from 'react';
// import home from "../images/home.png";
// import info from "../images/info.png";
// import phone from "../images/phone.png";

const Header = (props) => {

    const imgstyle={
        marginRight:"5px",
        marginBottom:"3px",
        width:"20px"
    };

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
      <a href="/" className="navbar-brand">DecorLife</a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
       {/* Collection of nav links, forms, and other content for toggling  */}
      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <div className="navbar-nav">
          <a href="/" className="nav-item nav-link">Home</a>
          <a href="/" className="nav-item nav-link">About</a>
          <div className="nav-item dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              className="nav-item nav-link dropdown-toggle"
              >Services</a>
            <div className="dropdown-menu">
              <a href="/" className="dropdown-item">Service 1</a>
              <a href="/" className="dropdown-item">Service 2</a>
              <a href="/" className="dropdown-item">Service 3</a>
              <a href="/" className="dropdown-item">Service 4</a>
            </div>
          </div>
          <a href="/" className="nav-item nav-link">Pricing</a>
          <a href="/" className="nav-item nav-link">Blog</a>
          <a href="/" className="nav-item nav-link">Contact</a>
        </div>
        <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search here..."
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="material-icons">&#xE8B6;</i>
              </span>
            </div>
          </div>
        </form>
        <div className="navbar-nav ml-auto action-buttons">
          <div className="nav-item dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              className="btn btn-primary dropdown-toggle log-in-btn"
              >Login</a>
             {/* <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle mr-4"
              >Login</a
            >  */}
            <div className="dropdown-menu action-form">
              <form action="/" method="post">
                <p className="hint-text">Sign in with Google</p>
                <div className="form-group social-btn clearfix">
                  <a href="/" className="btn btn-outline-light btn-secondary google-btn"
                    >
                    <img style={imgstyle} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                     {/* <i className="fa fa-google"></i>  */}
                     Google</a>
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
                <div className="or-seperator"><b>or</b></div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  value="Login"
                />
                <div className="text-center mt-2">
                  <a href="/">Forgot Your password?</a>
                </div>
              </form>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              className="btn btn-primary dropdown-toggle sign-up-btn"
              >Sign up</a>
            <div className="dropdown-menu action-form">
              <form action="/" method="post">
                <p className="hint-text">
                  Fill in this form to create your account!
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <label className="form-check-label"
                    ><input type="checkbox" required="required" /> I accept the
                    <a href="/">Terms &amp; Conditions</a></label
                  >
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  value="Sign up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
    );
}

export default Header;