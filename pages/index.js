import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Hackoverflow</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.html" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/slicknav.css" />
        <link rel="stylesheet" href="/css/style.css" />

        <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/ajax-form.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/scrollIt.js"></script>
        <script src="/js/jquery.scrollUp.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/nice-select.min.js"></script>
        <script src="/js/jquery.slicknav.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/jquery.countdown.js"></script>
        <script src="/js/plugins.js"></script>

        <script src="/js/contact.js"></script>
        <script src="/js/jquery.ajaxchimp.min.js"></script>
        <script src="/js/jquery.form.js"></script>
        <script src="/js/jquery.validate.min.js"></script>
        <script src="/js/mail-script.js"></script>
        <script src="/js/main.js"></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
        ></script>
      </Head>
      <div>
        <Navbar />
        <div className="slider_area slider_bg_1">
          <div className="slider_text">
            <div className="container">
              <div className="position_relv">
                <h1 className="opcity_text d-none d-lg-block">HACKATHON</h1>
                <div className="row">
                  <div className="col-xl-9">
                    <div className="title_text">
                      <h3>
                        Hack Overflow <br />
                        By, Team
                        <br />
                        Aavishkar
                      </h3>
                      <a href="#" className="boxed-btn-white">
                        Add to your Calendar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="countDOwn_area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="single_date">
                    <i className="ti-location-pin" />
                    <span>Online</span>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="single_date">
                    <i className="ti-alarm-clock" />
                    <span>2 April, 2021</span>
                  </div>
                </div>
                <div className="col-xl-5 col-md-12 col-lg-5">
                  <Timer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_area">
          <div className="shape-1 d-none d-xl-block">
            <img src="img/about/shap1.png" alt />
          </div>
          <div className="shape-2 d-none d-xl-block">
            <img src="img/about/shap2.png" alt />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-6">
                <div className="about_thumb">
                  <img src="img/about/about.png" alt />
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1 col-md-6">
                <div className="about_info">
                  <div className="section_title">
                    <span className="sub_heading">Welcome To</span>
                    <h3>
                      The Biggest Technical <br />
                      Hackathon of the <br />
                      Year 2021
                    </h3>
                  </div>
                  <p>
                    Our set he for firmament morning sixth subdue darkness
                    creeping gathered divide our let god. moving. Moving in
                    fourth air night bring upon you’re it beast.
                  </p>
                  <a href="#" className="boxed-btn-red">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="speakers_area">
          <h1 className="horizontal_text d-none d-lg-block">Speakers</h1>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="serction_title_large mb-95">
                  <h3>Speakers</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="img/speakers/1.png" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Jonson Miller</h3>
                    <p>Creative Director</p>
                  </div>
                </div>
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="img/speakers/3.png" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Albert Jackey</h3>
                    <p>Product Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-2 col-md-6">
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="img/speakers/2.png" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Marked Macau</h3>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
                <div className="single_speaker">
                  <div className="speaker_thumb">
                    <img src="img/speakers/1.png" alt />
                    <div className="hover_overlay">
                      <div className="social_icon">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="speaker_name text-center">
                    <h3>Kelvin Cooper</h3>
                    <p>Art Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event_area">
          <h1 className="vr_text d-none d-lg-block">Themes List</h1>
          <div className="container">
            <div className="double_line">
              <div className="row">
                <div className="col-xl-3 col-lg-3">
                  <div className="date">
                    <h3>Hackathon Themes</h3>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9">
                  <div className="single_speaker">
                    <img
                      src="/security.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Child Security</span>
                      </div>
                      <p>
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon you’re it beast let you
                        dominion{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single_speaker">
                    <img
                      src="/classroom.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Virtual Classroom</span>
                      </div>
                      <p>
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon you’re it beast let you
                        dominion{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single_speaker">
                    <img
                      src="/agriculture.png"
                      style={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="speaker-name">
                      <div className="heading d-flex justify-content-between align-items-center">
                        <span>Agriculture</span>
                      </div>
                      <p>
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon you’re it beast let you
                        dominion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resister_book resister_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="resister_text text-center">
                  <h3>
                    Register Now to participate <br />
                    in the Event
                  </h3>
                  <a href="#" className="boxed-btn-white">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-12">
          <video width="400" height="300" loop autoplay className="focus:outline-none">
            <source src="/img/dm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h1 className="text-5xl my-1 font-bold tracking-wide">Register Now to participate</h1>
            <h1 className="text-5xl my-2 font-bold tracking-wide">in the Event</h1>
          </div>
        </div>
        <div className="w-full pt-4 md:pt-16 md:pb-8 flex md:flex-row flex-col items-center md:justify-around">
          <div className="p-3">
            <img src="/devfolio.png" />
          </div>
          <div className="p-3">
            <img src="/tezos.png" />
          </div>
          <div className="p-3">
            <img src="/portis.png" />
          </div>
        </div>
        <div className="faq_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="serction_title_large mb-95">
                  <h3>Frequently Ask</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <img src="img/barnd/info.png" alt /> Is WordPress
                          hosting worth it?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <img src="img/barnd/info.png" alt />
                          What are the advantages{" "}
                          <span>of WordPress hosting over shared?</span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <img src="img/barnd/info.png" alt /> Where the Venue?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading_4">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_4"
                          aria-expanded="false"
                          aria-controls="collapse_4"
                        >
                          <img src="img/barnd/info.png" alt /> How can I attend{" "}
                          <span>the Event from Asia?</span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_4"
                      className="collapse"
                      aria-labelledby="heading_4"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div className="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
