import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
  // Any component-specific logic can go here

  return (
    <div className="page">
      <Navbar/>
      <div>
        
        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9  pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Services <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread">Services</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center  mb-5">
                <span className="subheading">Our Services</span>
                <h2 className="mb-2">The smartest way to buy a home</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-piggy-bank" /></div>
                  <div className="media-body py-md-4">
                    <h3>No Downpayment</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-wallet" /></div>
                  <div className="media-body py-md-4">
                    <h3>All Cash Offer</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-file" /></div>
                  <div className="media-body py-md-4">
                    <h3>Experts in Your Corner</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-locked" /></div>
                  <div className="media-body py-md-4">
                    <h3>Lokced in Pricing</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-degree-bg services-section img mx-md-5" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-start mb-5">
              <div className="col-md-6 text-center heading-section heading-section-white ">
                <span className="subheading">Work flow</span>
                <h2 className="mb-3">How it works</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>01</span></div>
                        <h3>Evaluate Property</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>02</span></div>
                        <h3>Meet Your Agent</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>03</span></div>
                        <h3>Close the Deal</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>04</span></div>
                        <h3>Have Your Property</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <footer className="ftco-footer ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Bloom</h2>
                  <p>Far far away, behind the word mountains, far from the countries.</p>
                  <ul className="ftco-footer-social list-unstyled mt-5">
                    <li className=""><a href="#"><span className="icon-twitter" /></a></li>
                    <li className=""><a href="#"><span className="icon-facebook" /></a></li>
                    <li className=""><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Community</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Search Properties</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />For Agents</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Reviews</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />FAQs</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">About Us</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Our Story</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Meet the team</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Careers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Company</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />About Us</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Press</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Contact</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Careers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text"> Address</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+12345567</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope pr-4" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
              </div>
            </div>
          </div>
        </footer>
       
      </div>
     
    </div>
  );
};

export default Services;
