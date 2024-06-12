import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Contact = () => {
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
              <div className="col-md-9 pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward" /></Link></span> <span>Contact <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread">Contact us</h1>
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
                    <p><span>Address:</span> Sunrise Drive, Pasay City, Philippines, 1700</p>
                  </div>
                  <div className="col-md-4 text-center border-height py-4">
                    <div className="icon">
                      <span className="icon-mobile-phone" />
                    </div>
                    <p><span>Phone:</span> <a href="tel://1234567920">+63917 542 5666</a></p>
                  </div>
                  <div className="col-md-4 text-center py-4">
                    <div className="icon">
                      <span className="icon-envelope-o" />
                    </div>
                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">ask@bloomglobalestate.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row block-9 justify-content-center mb-5">
              <div className="col-md-8 mb-md-5">
                <h2 className="text-center">If you got any questions <br />please do not hesitate to send us a message</h2>
                <form action="#" className="bg-light p-5 contact-form">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                  </div>
                </form>
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
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Search Properties</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />FAQs</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">About Us</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Services</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Vision & Mission</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Core Values</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Company</h2>
                  <ul className="list-unstyled">
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />About Us</a></li>
                    <li><a href="#"><span className="icon-long-arrow-right mr-2" />Contact</a></li>
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
      </div>
    </div>
  );
};

export default Contact;
