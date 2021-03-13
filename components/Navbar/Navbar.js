import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area ">
          <div className="container-fluid p-0">
            <div className="row align-items-center justify-content-between no-gutters">
              <div className="col-xl-2 col-lg-2">
                <div className="logo-img">
                  <a href="index-2.html">
                    <img src="img/logo.png" alt />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a className="active" href="index-2.html">
                          home
                        </a>
                      </li>
                      <li>
                        <a href="Schedule.html">Schedule</a>
                      </li>
                      <li>
                        <a href="#">
                          blog <i className="ti-angle-down" />
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">blog</a>
                          </li>
                          <li>
                            <a href="single-blog.html">single-blog</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          pages <i className="ti-angle-down" />
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="elements.html">elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="Speakers.html">Speakers</a>
                      </li>
                      <li>
                        <a href="Venue.html">Venue</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <div className="buy_ticket">
                  <a href="#" className="boxed-btn-white">
                    Buy Ticket
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
