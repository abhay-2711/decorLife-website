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
        <nav class="navbar navbar-expand-lg navbar-dark">
      <a href="/" class="navbar-brand">DecorLife</a>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
       {/* Collection of nav links, forms, and other content for toggling  */}
      <div
        id="navbarCollapse"
        class="collapse navbar-collapse justify-content-start"
      >
        <div class="navbar-nav">
          <a href="/" class="nav-item nav-link">Home</a>
          <a href="/" class="nav-item nav-link">About</a>
          <div class="nav-item dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              class="nav-item nav-link dropdown-toggle"
              >Services</a
            >
            <div class="dropdown-menu">
              <a href="/" class="dropdown-item">Service 1</a>
              <a href="/" class="dropdown-item">Service 2</a>
              <a href="/" class="dropdown-item">Service 3</a>
              <a href="/" class="dropdown-item">Service 4</a>
            </div>
          </div>
          <a href="/" class="nav-item nav-link">Pricing</a>
          <a href="/" class="nav-item nav-link">Blog</a>
          <a href="/" class="nav-item nav-link">Contact</a>
        </div>
        <form class="navbar-form form-inline">
          <div class="input-group search-box">
            <input
              type="text"
              id="search"
              class="form-control"
              placeholder="Search here..."
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="material-icons">&#xE8B6;</i>
              </span>
            </div>
          </div>
        </form>
        <div class="navbar-nav ml-auto action-buttons">
          <div class="nav-item dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              class="btn btn-primary dropdown-toggle log-in-btn"
              >Login</a
            >
             {/* <a
              href="#"
              data-toggle="dropdown"
              class="nav-link dropdown-toggle mr-4"
              >Login</a
            >  */}
            <div class="dropdown-menu action-form">
              <form action="/" method="post">
                <p class="hint-text">Sign in with Google</p>
                <div class="form-group social-btn clearfix">
                  <a href="/" class="btn btn-outline-light btn-secondary google-btn"
                    >
                    <img style={imgstyle} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                     {/* <i class="fa fa-google"></i>  */}
                     Google</a
                  >
                  {/* <div class="row">
                    <div class="col-md-3">
                      <a class="btn btn-outline-light" href="/users/googleauth" role="button" style="text-transform:none">
                        <img width="30px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                        Login with Google
                      </a>
                    </div>
                  </div>  */}
                   {/* <a href="#" class="btn btn-secondary twitter-btn float-right"
                    ><i class="fa fa-twitter"></i> Twitter</a
                  >  */}
                </div>
                <div class="or-seperator"><b>or</b></div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-block"
                  value="Login"
                />
                <div class="text-center mt-2">
                  <a href="/">Forgot Your password?</a>
                </div>
              </form>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              class="btn btn-primary dropdown-toggle sign-up-btn"
              >Sign up</a
            >
            <div class="dropdown-menu action-form">
              <form action="/" method="post">
                <p class="hint-text">
                  Fill in this form to create your account!
                </p>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label class="form-check-label"
                    ><input type="checkbox" required="required" /> I accept the
                    <a href="/">Terms &amp; Conditions</a></label
                  >
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-block"
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