// import Head from 'next/head'
// import Image from 'next/image'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import Header from '../components/Header/Header'
import Footer from '../components/footer'

import Testimonials from '../components/testimonials'

// import "../node_modules/react-slick/dist/react-slick"

export default function Why() {

  // var currentTab = 0;
  // showTab(currentTab);

  // function showTab(n) {
  //   var x = ReactDOM.render(element, document.getElementsByClassName("tab"));
  //   x[n].style.display = "block";

  //   if (n == 1) {
  //     ;
  //     ReactDOM.render(element, document.getElementById("nextBtn").innerHTML = "Yes, i want");
  //     ReactDOM.render(element, document.getElementById("prevBtn").innerHTML = "No, i don’t");
  //   } else if (n == 2) {
  //     ReactDOM.render(element, document.getElementById("nextBtn").innerHTML = "Upload");
  //     ReactDOM.render(element, document.getElementById("prevBtn").innerHTML = "Cancel");
  //   } else if (n == 3) {
  //     // document.getElementById("nextBtn").style.display = "none";
  //     // document.getElementById("prevBtn").style.display = "none";
  //     ReactDOM.render(element, document.getElementById("hideHeader").style.display = "none");
  //     ReactDOM.render(element, document.getElementById("hideFooter").style.display = "none");
  //   }
  // }

  // function nextPrev(n) {
  //   var x = ReactDOM.render(element, document.getElementsByClassName("tab"));
  //   x[currentTab].style.display = "none";
  //   currentTab = currentTab + n;
  //   if (currentTab >= x.length) {
  //     return false;
  //   }
  //   showTab(currentTab);
  // }

  return (
    <div>

      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head> */}

      <Header/>

      <main role="main" className="why">
        <h1 className="d-none"> Why Venuerific</h1>

        <section className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 left">
                <Slide left>
                  <div className="text-wrapper">
                    <h3 className="title"> Make More, Worry Less</h3>
                    <article>
                      <h2 className="text">
                        Join thousands of venue owners on Venuerific from Singapore,
                        Malaysia, Hong Kong, Philippines and Indonesia.
                      </h2>
                      <h2 className="text">
                        On average, venues on Venuerific earn up to
                        <span className="strong"> $30, 000 per month</span>
                      </h2>
                    </article>
                  </div>
                </Slide>
              </div>
              <div className="offset-lg-1 col-lg-5 right">
                <Zoom>
                  <div className="card card-banner">
                    <div className="card-body">

                      {/* <div className="tab">
                        <div className="card-head">
                          <p className="title"> Submit your interest in starting your journey with Venuerific today</p>
                        </div>
                        <div className="text-wrapper mb-3">
                          <p className="title text-left ml-0 mb-0">
                            Your Details
                          </p>
                        </div>
                        <form action="">
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail4">First Name</label>
                              <input type="text" className="form-control" id="inputEmail4" placeholder="Your First Name" />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputPassword4">Last Name</label>
                              <input type="text" className="form-control" id="inputPassword4" placeholder="Your Last Name" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputAddress">Venue Name</label>
                            <input type="text" className="form-control" id="inputAddress"
                              placeholder="Type Your Venue Name" />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail4">Email Address</label>
                              <input type="email" className="form-control" id="inputEmail4"
                                placeholder="Your Email Address" />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputPassword4">Phone Number</label>
                              <input type="text" className="form-control" id="inputPassword4"
                                placeholder="Your Phone Number" />
                            </div>
                          </div>
                        </form>
                        <div className="button-wrapper text-right mt-4 mb-3">
                          <button id="nextBtn" className="btn btn-warning mr-2" onclick="nextPrev(1)"> Next</button>
                        </div>
                      </div> */}

                      <div className="tabs">
                        <div className="card-head">
                          <p className="title"> Set your meeting time</p>
                        </div>
                        <figure className="img-wrapper">
                          <img src="/img/why/setmeeting.png" alt="Set your meeting time" />
                        </figure>
                        <div className="text-wrapper">
                          <p className="title">
                            Woohoo, ready to start a journey with Venuerific ?
                          </p>
                          <p className="text">
                            Hi user name thanks for filling in the details! Choose the
                            time you would like to have a chat with us!
                          </p>
                        </div>
                        <div className="button-wrapper">
                          <a href="https://venuerific.na.chilipiper.com/book/me/ernestine-yam">
                            <button className="btn btn-warning" data-toggle="modal" data-target="#setMeeting"> Set
                              meeting</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </section>

        <section className="benefit">
          <div className="container">
            <h2 className="d-none"> Benefits to Listing on Venuerific</h2>
            <div className="row">
              <Fade bottom>
                <div className="col-lg-4">
                  <div className="card feature-card">
                    <article className="card-body">
                      <figure className="img-wrapper">
                        <img src="/img/why/curated.png" alt="Curated Marketplace" />
                      </figure>
                      <div className="text-wrapper">
                        <h3 className="title"> Curated Marketplace</h3>
                        <h4 className="text">
                          Get access to over 90, 000 event organisers per month visiting
                          Venuerific from around the world since 2013.
                        </h4>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card feature-card">
                    <article className="card-body">
                      <figure className="img-wrapper">
                        <img src="/img/why/venue.png" alt="Venue Management" />
                      </figure>
                      <div className="text-wrapper">
                        <h3 className="title"> Venue Management</h3>
                        <h4 className="text">
                          Improve productivity by taking advantage of our advanced CRM,
                          analytics, invoicing, and scheduling system.
                        </h4>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card feature-card">
                    <article className="card-body">
                      <figure className="img-wrapper">
                        <img src="/img/why/endtoend.png" alt="End-to-End Support" />
                      </figure>
                      <div className="text-wrapper">
                        <h3 className="title"> End - to - End Support</h3>
                        <h4 className="text">
                          Venuerific customer success team will be there to guide you in
                          growing your events business from end - to - end.
                        </h4>
                      </div>
                    </article>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <section className="smart">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 left">
                <Slide left>
                  <figure className="img-wrapper">
                    <img src="/img/why/smartvenue.png" alt="Smart Venue Management CRM by Venuerific" />
                  </figure>
                </Slide>
              </div>
              <div className="col-lg-6 right">
                <Slide right>
                  <div className="text-wrapper">
                    <h2 className="title"> Smart Venue Management by Venuerific</h2>
                    <h4 className="title-description">
                      Pre - approved for PSG by IMDA since 2020
                    </h4>
                    <article>
                      <h3 className="text">
                        Venuerific is proud to be a pre-approved vendor by IMDA SMEs Go
                        Digital Programme to help your venue's digital transformation
                        journey. Receive up to
                        <span className="strong">80% funding support through the Productivity Solutions
                          Grant</span>
                        when you list with us today!
                      </h3>
                    </article>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </section>

        <section className="feature">
          <div className="container">
            <Fade top>
              <h2 className="section-title wow fadeInDown"> Our Features</h2>
            </Fade>
            <div className="row">
              <Fade bottom cascade>
                <div className="col-lg-4">
                  <article className="single-feature">
                    <figure className="img-wrapper">
                      <img src="/img/why/crm.png" alt="CRM"/>
                    </figure>
                    <div className="text-wrapper">
                      <h3 className="title"> CRM</h3>
                      <p className="text">
                        Manage all incoming booking inquiries in one view, even from
                        external sources
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4">
                  <article className="single-feature">
                    <figure className="img-wrapper">
                      <img src="/img/why/reporting.png" alt="Reporting & Statistics"  />
                    </figure>
                    <div className="text-wrapper">
                      <h3 className="title"> Reporting & Statistics</h3>
                      <p className="text">
                        Analyse your venue's performance with an informative smart
                        analytics page
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4">
                  <article className="single-feature">
                    <figure className="img-wrapper">
                      <img src="/img/why/payment.png" alt="Payment" />
                    </figure>
                    <div className="text-wrapper">
                      <h3 className="title"> Payment</h3>
                      <p className="text">
                        Integrate Venuerific Pay to ease your venue's booking process
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4">
                  <article className="single-feature">
                    <figure className="img-wrapper">
                      <img src="/img/why/calendar.png" alt="Calendar" />
                    </figure>
                    <div className="text-wrapper">
                      <h3 className="title"> Calendar</h3>
                      <p className="text">
                        Add your past and upcoming events and block out specific dates
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4">
                  <article className="single-feature">
                    <figure className="img-wrapper">
                      <img src="/img/why/manage.png" alt="Email Management" />
                    </figure>
                    <div className="text-wrapper">
                      <h3 className="title"> Email Management</h3>
                      <p className="text">
                        Customise your email using our builder system for retargetting
                      </p>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4">
                  <article className="single-feature">
                    <figure className="img-wrapper">
                      <img src="/img/why/room.png" alt="Rooms" />
                    </figure>
                    <div className="text-wrapper">
                      <h3 className="title"> Rooms</h3>
                      <p className="text">
                        List different rooms in your venue with different operating
                        hours and pricing
                      </p>
                    </div>
                  </article>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <section className="demo">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="text-wrapper">
                  <h2 className="title"> Request a demo</h2>
                  <article>
                    <h3 className="text">
                      Spend the next 5 minutes to learn about the Venue Management CRM
                      system by Venuerific
                    </h3>
                  </article>
                </div>
                <div className="button-wrapper">
                  <button className="btn btn-outline-primary"> See Demo</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <div className="container">
            <h2 className="section-title"> From Our Venuerific Community</h2>

            <Testimonials />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}