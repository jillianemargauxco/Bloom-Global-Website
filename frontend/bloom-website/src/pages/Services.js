import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Services = () => {
  // Any component-specific logic can go here

  return (
    <div className="page">
      <Navbar/>
      <div>
        
        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.png")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9  pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward" /></Link></span> <span>Services <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread" data-aos="fade-up" style={{fontFamily:"Ogg", color:'#243E5E', fontSize:'5rem'}}>Services</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb">
          <div className="container mb-10">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center mb-5">
                <span className="subheading" data-aos="fade-up">Our Services</span>
                <h2 className="mb-2" data-aos="fade-up">What do we offer?</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex align-self-stretch">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center" data-aos="fade-up"><span className="flaticon-piggy-bank" /></div>
                  <div className="media-body py-md-4" >
                    <h3 data-aos="fade-up" >Property Development</h3>
                    <p className="text-left" data-aos="fade-up">
                      <ul>
                        <li data-aos="fade-left">Land acquisition and site selection</li>
                        <li data-aos="fade-left">Feasibility studies and market analysis</li>
                        <li data-aos="fade-left">Property design and development planning</li>
                        <li data-aos="fade-left" >Obtaining permits and approvals</li>
                        <li  data-aos="fade-left">Construction management</li>
                      </ul>
                    </p>
                  </div>
                </div>      
              </div>
              <div className="col-md-4 d-flex align-self-stretch">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center" data-aos="fade-up"><span className="flaticon-file" /></div>
                  <div className="media-body py-md-4">
                    <h3 data-aos="fade-up">Property Management</h3>
                    <p className="text-left">
                      <ul>
                        <li data-aos="fade-left">Tenant screening and leasing</li>
                        <li data-aos="fade-left">Rent collection and financial reporting</li>
                        <li data-aos="fade-left">Maintenance and repairs</li>
                        <li data-aos="fade-left">Property marketing and tenant retention</li>
                      </ul>
                    </p>
                  </div>
                </div>      
              </div>
              <div className="col-md-4 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center" data-aos="fade-up"><span className="flaticon-locked" /></div>
                  <div className="media-body py-md-4">
                    <h3 data-aos="fade-up">Brokerage Advisory & Support Services</h3>
                    <p className="text-left">
                      <ul>
                        <li data-aos="fade-left">Property listing and marketing support</li>
                        <li data-aos="fade-left">Buyer and seller consultation</li>
                        <li data-aos="fade-left">Lease negotiation assistance</li>
                      </ul>
                      </p>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </section >

        {/*
        <section className="ftco-section ftco-degree-bg services-section img mx-md-5" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
          <div className="overlay" />
          <div className="container ml-5">
            <div className="row justify-content-start mb-5">
              <div className="col-md-7 text-center heading-section heading-section-white ">
                <span className="subheading">Work flow</span>
                <h2 className="mb-3">How it works</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>01</span></div>
                        <h3>Evaluate Property</h3>
                        <p>Whether you're looking to buy or sell, our expert team conducts a comprehensive assessment to determine its market value and potential. We consider all relevant factors, including location, condition, and market trends, ensuring you get the best possible advice and valuation.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>02</span></div>
                        <h3>Meet Your Agent</h3>
                        <p>Once your property evaluation is complete, you'll be introduced to one of our experienced agents. They will guide you through the process, addressing all your questions and concerns. Your agent will be your dedicated point of contact.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>03</span></div>
                        <h3>Close the Deal</h3>
                        <p>With the evaluation and consultation done, we move to the negotiation phase. Your agent will leverage their expertise to secure the best deal for you, whether you're buying or selling. We handle all the paperwork, negotiations, and legalities, ensuring a smooth and stress-free transaction.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>04</span></div>
                        <h3>Have Your Property</h3>
                        <p>Congratulations! The final step is handing over the keys to your new property or successfully selling your existing one. Our support doesn’t end here; we remain available for any post-deal assistance you may need. Enjoy the peace of mind that comes with knowing you made the right choice with our comprehensive real estate services.</p>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         */}
  
        <footer className="ftco-footer ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Bloom Global Estate & Development</h2>
                  <p>Bloom Global Estate and Development Corp. is
                      dedicated to acquiring valuable assets through
                      various means such as purchase, lease, and
                      ownership. </p>
                  <ul className="ftco-footer-social list-unstyled mt-5">
                    <li className="ftco-animate"><a href="https://www.facebook.com/profile.php?id=61555958554608&mibextid=LQQJ4d"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="https://www.instagram.com/bloomglobalestate?igsh=Z2pidjh6dnYza3Q2"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Community</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/properties"><span className="icon-long-arrow-right mr-2" />Search Properties</Link></li>
                    <li><Link to="/services"><span className="icon-long-arrow-right mr-2" />FAQs</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">About Us</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/services"><span className="icon-long-arrow-right mr-2" />Services</Link></li>
                    <li><Link to="/about-us"><span className="icon-long-arrow-right mr-2" />Vision & Mission</Link></li>
                    <li><Link to="/about-us"><span className="icon-long-arrow-right mr-2" />Core Values</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Company</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/about-us"><span className="icon-long-arrow-right mr-2" />About Us</Link></li>
                    <li><Link to="/contact"><span className="icon-long-arrow-right mr-2" />Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">Sunrise Drive, Pasay City, Philippines, 1700</span></li>
                      <li><a href="tel:+639175425666"><span className="icon icon-phone" /><span className="text">+63917 542 5666</span></a></li>
                      <li><a href="mailto:ask@bloomglobalestate.com"><span className="icon icon-envelope pr-4" /><span className="text">ask@bloomglobalestate.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="container-fluid bg-dark text-white-50 py-4">
          <div className="container">
              <div className="col-md-12 text-center text-md-start">
              <span><p style={{ color: "white" }}>&copy;{" "} 2025 Bloom Global Estate and Development Corp. All Rights Reserved.</p><p style={{ color: "gray" }}> “Bloom Global Estate” and the Bloom logo are registered trademarks of Bloom Global Estate and Development Corp.</p> </span>
              </div>
          </div>
        </div>
       
      </div>
     
    </div>
  );
};

export default Services;
