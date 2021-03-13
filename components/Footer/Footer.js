import React from 'react'

export default function Footer() {
    return <footer className="footer footer_bg_1">
    <div className="circle_ball d-none d-lg-block">
      <img src="img/banner/footer_ball.png" alt />
    </div>
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-4 col-lg-4">
            <div className="footer_widget">
              <h3 className="footer_title">Follow Us</h3>
              <ul>
                <li>
                  <a target="_blank" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-lg-4">
            <div className="footer_widget">
              <h3 className="footer_title">Links</h3>
              <ul>
                <li>
                  <a target="_blank" href="schedule-2.html">
                    Schedule
                  </a>
                </li>
                <li>
                  <a target="_blank" href="speakers-2.html">
                    Speakers
                  </a>
                </li>
                <li>
                  <a target="_blank" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-lg-4">
            <div className="footer_widget">
              <h3 className="footer_title">Venue</h3>
              <p>
                200, D-block, Green lane USA <br />
                <a
                  href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="aecbcadbc3cfdcc5eecdc1c0dacfcdda80cdc1c3"
                >
                  [email&nbsp;protected]
                </a>{" "}
                <br />
                +10 367 467 8934
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right_text">
      <div className="container">
        <div className="footer_border" />
        <div className="row">
          <div className="col-xl-12">
            <p className="copy_right text-center">
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com/" target="_blank">
                GLUG
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
}