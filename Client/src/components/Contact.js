import React from "react";
import "../css/contact.css";

const Contact = (props) => {

const myStyle = {
    display: "block",
    fontSize: "13px",
    marginTop: "15px"
};

const mystyle1 = {
    textTransform: "uppercase",
    paddingTop: "16px",
    fontWeight: "400"
};

    return (
        <div id="contact">
        <center>
            <h3
              className="box-title"
              style={mystyle1}
            >
              Contact Us
            </h3>
          </center>
            <div className="content-wrap">
    <div
      id="section-contact"
      className="page-section pt-0"
      data-onepage-settings='{"offset":65,"speed":"1250","easing":"easeInOutExpo"}'
      data-scrollto-settings='{"offset":70,"speed":"1250","easing":"easeInOutExpo"}'
    >
      
      <div className="container clearfix">
        <div className="mx-auto topmargin" style={{maxWidth: "850px"}}>
          <div className="form-widget">
            <div className="form-result"></div>
            <form
              className="row mb-0"
              id="template-contactform"
              name="template-contactform"
              action="include/form.php"
              method="post"
              novalidate="novalidate"
              data-scrollto-settings='{"offset":140,"speed":"1250","easing":"easeInOutExpo"}'
            >
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  id="template-contactform-name"
                  name="template-contactform-name"
                  value=""
                  className="sm-form-control border-form-control required valid"
                  placeholder="Name"
                  autocomplete="off"
                />
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="email"
                  id="template-contactform-email"
                  name="template-contactform-email"
                  value=""
                  className="required email sm-form-control border-form-control valid"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-100"></div>
              <div className="col-md-4 mb-4">
                <input
                  type="text"
                  id="template-contactform-phone"
                  name="template-contactform-phone"
                  value=""
                  className="sm-form-control border-form-control valid"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-8 mb-4">
                <input
                  type="text"
                  id="template-contactform-subject"
                  name="subject"
                  value=""
                  className="required sm-form-control border-form-control valid"
                  placeholder="Subject"
                />
              </div>
              <div className="w-100"></div>
              <div className="col-12 mb-4">
                <textarea
                  className="required sm-form-control border-form-control valid"
                  id="template-contactform-message"
                  name="template-contactform-message"
                  rows="7"
                  cols="30"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="col-12 center mb-4">
                <button
                  className="button button-border button-circle fw-medium ms-0 topmargin-sm"
                  type="submit"
                  id="template-contactform-submit"
                  name="template-contactform-submit"
                  value="submit"
                >
                  Send Message
                </button>
                <br />
                <small style={myStyle}
                  >We'll do our best to get back to you within 6-8 working
                  hours.</small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
        </div>
    )
};

export default Contact;