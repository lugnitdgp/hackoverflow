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
                  <a href="#" style={{ display: "flex"}}>
                   <img src="img/aarohan-logo.png" style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                      float: "left",
                    }} />&nbsp;&nbsp;<img src="img/logo.png" style={{ float: "left", }} alt />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a className="active" href="#">
                          home
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="Schedule.html">Schedule</a>
                      </li>
                      <li>
                        <a target="_blank" href="#">Discord</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <div className="buy_ticket">
                  <a href="#" className="boxed-btn-white">
                    Register!
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
