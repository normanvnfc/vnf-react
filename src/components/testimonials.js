import React, { Component } from "react";
import Slider from "react-slick";
// import Image from 'next/image'


export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} className="testimonial-slider">
          <article className="single-testimonial">
            <div className="row">
              <div className="col-lg-5">
                <div className="testi-img">
                  <figure className="img-wrapper">
                    <img src="/img/testimonial/ophelia.jpeg" alt="Venuerific makes the impossible possible!"  />
                  </figure>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testi-content">
                  <div className="text-wrapper">
                    <h3 className="title"> Venuerific makes the impossible possible!</h3>
                    <h4 className="text">
                      I would definitely recommend anyone to sign up with Venuerific especially new venue owners who are
                      just starting out.In fact, I referred a friend to sign up with Venuerific.Overall, I am very
                      glad that we decided to sign up with Venuerific as it has brought us more inquiries, more revenue
                      and more exposure.So, thank you Venuerific!
                    </h4>
                  </div>
                  <div className="testi-data">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text-wrapper">
                          <h5 className="title"> Ophelia Ong</h5>
                          <h5 className="text"> Events Executive, Luna</h5>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="button-wrapper">
                          <a href="https://www.youtube.com/watch?v=UMJJ-sjXvuU&ab_channel=Venuerific" target="_blank" rel="noreferrer">
                            <button className="btn btn-primary">
                              Hear from Ophelia
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="single-testimonial">
            <div className="row">
              <div className="col-lg-5">
                <div className="testi-img">
                  <figure className="img-wrapper">
                    <img src="/img/testimonial/aliff.jpeg" alt="Venuerific is a terrific platform for gaining more exposure" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testi-content">
                  <div className="text-wrapper">
                    <h3 className="title"> Venuerific is a terrific platform for gaining more exposure</h3>
                    <h4 className="text">
                      We are not easy to find.It’s difficult because[customers] will walk past us and then end up
                      being in some other restaurant.But Venuerific has helped a lot with the exposure that we needed
                      and with being listed on Venuerific, which is the top venue platform in Singapore, people would
                      trust the credibility of KOMYUNITI.
                    </h4>
                  </div>
                  <div className="testi-data">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text-wrapper">
                          <h5 className="title"> Aliff Ajis</h5>
                          <h5 className="text"> Marketing Executive, KOMYUNITI Bar & Restaurant</h5>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="button-wrapper">
                          <button className="btn btn-primary">
                            Hear from Aliff
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="single-testimonial">
            <div className="row">
              <div className="col-lg-5">
                <div className="testi-img">
                  <figure className="img-wrapper">
                    <img src="/img/testimonial/chen.jpeg" alt="With Venuerific, we gained a 200 % increase in bookings" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testi-content">
                  <div className="text-wrapper">
                    <h3 className="title"> With Venuerific, we gained a 200 % increase in bookings</h3>
                    <h4 className="text">
                      We started our business during COVID - 19, which was a tough time and with Venuerific’s help we
                      are
                      able to get through this difficult period.We’ve seen more bookings of our space with each passing
                      month.Venuerific’s large member base and seamless booking system allowed our business to grow and
                      we’ve seen a 200 % increase in our customers since we signed up with Venuerific!
                    </h4>
                  </div>
                  <div className="testi-data">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text-wrapper">
                          <h5 className="title"> Chen Lin</h5>
                          <h5 className="text"> Manager of Royal Eternity Tea House</h5>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="button-wrapper">
                          <button className="btn btn-primary">
                            Hear from Chen
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Slider>
      </div>
    );
  }
}