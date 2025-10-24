import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const ContactSent = () => {
  

  return (
    <div className="page">
      <Navbar/>
      <div>
      
        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.png")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9 pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward" /></Link></span> <span>Contact <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread" data-aos="fade-up" style={{fontFamily:"Ogg", color:'#243E5E', fontSize:'5rem'}}>Contact us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section contact-section">
          <div className="container">
            <div className="row d-flex mb-5 contact-info justify-content-center">
              <div className="col-md-8">
                <div className="row mb-5">
                  <div className="col-md-4 text-center py-4">
                    <div className="icon">
                      <span className="icon-map-o" />
                    </div>
                    <p><span>Address:</span> 5th Floor Coastal Luxury Residences, Parañaque City, Philippines, 1700</p>
                  </div>
                  <div className="col-md-4 text-center border-height py-4">
                    <div className="icon">
                      <span className="icon-mobile-phone" />
                    </div>
                    <p><span>Phone:</span> <a href="tel:+63917 542 5666">+63917 542 5666</a></p>
                  </div>
                  <div className="col-md-4 text-center py-4">
                    <div className="icon">
                      <span className="icon-envelope-o" />
                    </div>
                    <p><span>Email:</span> <a href="mailto:ask@bloomglobalestate.com">ask@bloomglobalestate.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row block-9 justify-content-center mb-5">
              <div className="col-md-8 mb-md-5">
              <h1 className="text-center" style={{fontFamily:"Ogg", fontSize:"72px"}}>Thank you.</h1>
                <h2 className="text-center" style={{color:"#213E5F"}}>We’ve received your query/request. Please give us some time and <br /> we’ll be in touch with you as soon as we can.</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div id="map" className="bg-white" />
              </div>
            </div>
          </div>
        </section>
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
                      <li><span className="icon icon-map-marker" /><span className="text">5th Floor Coastal Luxury Residences, Parañaque City, Philippines, 1700</span></li>
                      <li><a href="tel:+639175425666"><span className="icon icon-phone" /><span className="text">+63917 542 5666</span></a></li>
                      <li><a href="mailto:ask@bloomglobalestate.com"><span className="icon icon-envelope pr-4" /><span className="text">ask@bloomglobalestate.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
       
      </div>
    </div>
  );
};

export default ContactSent;
