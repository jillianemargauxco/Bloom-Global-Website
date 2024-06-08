import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  // Any component-specific logic can go here

  return (
    <div className="page">
      <Navbar/>
      
        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9  pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread">About Us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/about.jpg)'}}>
              </div>
              <div className="col-md-6 wrap-about py-md-5 ">
                <div className="heading-section p-md-5">
                  <h2 className="mb-4">We Put People First.</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-counter img" id="section-counter">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18 py-4 mb-4">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number={305}>0</strong>
                    <span>Area <br />Population</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18 py-4 mb-4">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number={1090}>0</strong>
                    <span>Total <br />Properties</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18 py-4 mb-4">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number={209}>0</strong>
                    <span>Average <br />House</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
                <div className="block-18 py-4 mb-4">
                  <div className="text d-flex align-items-center">
                    <strong className="number" data-number={67}>0</strong>
                    <span>Total <br />Branches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ">
                <span className="subheading">Testimonial</span>
                <h2 className="mb-3">Happy Clients</h2>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_3.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
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
  );
};

export default AboutUs;
