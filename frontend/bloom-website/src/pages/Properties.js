import React from 'react';
import Navbar from '../components/Navbar';
import Property from '../components/Property';
import { Link } from 'react-router-dom';

const Properties = () => {
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
                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Properties <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread">Choose <br />Your Desired Home</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-1.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="property-wrap">
              <Link to="/properties-single" className="img" style={{ backgroundImage: 'url(images/work-2.jpg)' }} />
              <div className="text">
                <p className="price">
                  <span className="old-price">800,000</span>
                  <span className="orig-price">$3,050<small>/mo</small></span>
                </p>
                <ul className="property_list">
                  <li><span className="flaticon-bed" />3</li>
                  <li><span className="flaticon-bathtub" />2</li>
                  <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                </ul>
                <h3><Link to="/properties-single">The Blue Sky Home</Link></h3>
                <span className="location">Oakland</span>
                <Link to="/properties-single" className="d-flex align-items-center justify-content-center btn-custom">
                  <span className="ion-ios-link" />
                </Link>
              </div>
            </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-3.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-4.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-5.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-6.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-4.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-5.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="properties-single.html" className="img" style={{backgroundImage: 'url(images/work-6.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="properties-single.html">The Blue Sky Home</a></h3>
                    <span className="location">Oakland</span>
                    <a href="properties-single.html" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
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

export default Properties;
