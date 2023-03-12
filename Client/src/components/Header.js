import "../css/header.css";
import React, { Fragment, useEffect } from "react";
import Search from "./Search";
import LoginAndSignUp from "./User/LoginAndSignUp";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, login, register } from "../actions/userAction";
import { useAlert } from "react-alert";
import { clearErrors } from "../actions/userAction";
// const { user, isAuthenticated } = useSelector((state) => state.user);

// import home from "../images/home.png";
// import info from "../images/info.png";
// import phone from "../images/phone.png";

const Header = () => {
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      // return alert.error(error);
      dispatch(clearErrors());
    }

    // return () => {}
  }, [dispatch, alert, error, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a href="/" className="navbar-brand">
                DecorLife
              </a>
              {/* <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                class="icn menuicn"
                id="menuicn"
                alt="menu-icon"
              ></img> */}
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
                  <a href="/" className="nav-item nav-link">
                    Home
                  </a>
                  <a href="#about" className="nav-item nav-link">
                    About
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="/"
                      data-toggle="dropdown"
                      className="nav-item nav-link dropdown-toggle"
                    >
                      Services
                    </a>
                    <div className="dropdown-menu">
                      <a href="/" className="dropdown-item">
                        Service 1
                      </a>
                      <a href="/" className="dropdown-item">
                        Service 2
                      </a>
                      <a href="/" className="dropdown-item">
                        Service 3
                      </a>
                      <a href="/" className="dropdown-item">
                        Service 4
                      </a>
                    </div>
                  </div>
                  <a href="/products" className="nav-item nav-link">
                    Products
                  </a>
                  <a href="/" className="nav-item nav-link">
                    Blog
                  </a>
                  <a href="#contact" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <Search />
                {!isAuthenticated && <LoginAndSignUp />}
              </div>
            </nav>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Header;
