import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  // Any component-specific logic can go here

  return (
    <div className="page">
     <Navbar/>
     <div>
       
        <div className="hero-wrap ftco-degree-bg" style={{backgroundImage: 'url("images/bg_1.png")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text justify-content-center align-items-center">
              <div className="col-lg-8 col-md-6  d-flex align-items-end">
                <div className="text text-center">
                  <h1 className="mb-4">The Simplest <br />Way to Find Property</h1>
                  <p style={{fontSize: '18px'}}>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease</p>
                  <form action="#" className="search-location mt-md-5">
                    <div className="row justify-content-center">
                      <div className="col-lg-10 align-items-end">
                        <div className="form-group">
                          <div className="form-field">
                            <input type="text" className="form-control" placeholder="Search location" />
                            <button><span className="ion-ios-search" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mouse">
            <a href="#" className="mouse-icon">
              <div className="mouse-wheel"><span className="ion-ios-arrow-round-down" /></div>
            </a>
          </div>
        </div>
        <section className="ftco-section ftco-no-pb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center mb-5">
                <span className="subheading">Our Services</span>
                <h2 className="mb-2">The smartest way to buy a home</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-3 d-flex align-self-stretch">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-piggy-bank" /></div>
                  <div className="media-body py-md-4">
                    <h3>No Downpayment</h3>
                    <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-wallet" /></div>
                  <div className="media-body py-md-4">
                    <h3>All Cash Offer</h3>
                    <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-file" /></div>
                  <div className="media-body py-md-4">
                    <h3>Experts in Your Corner</h3>
                    <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-locked" /></div>
                  <div className="media-body py-md-4">
                    <h3>Lokced in Pricing</h3>
                    <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease.</p>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section goto-here">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center  mb-5">
                <span className="subheading">What we offer</span>
                <h2 className="mb-2">Exclusive Offer For You</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="property-wrap">
                  <a href="#" className="img" style={{backgroundImage: 'url(images/work-1.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="#">The Blue Sky Home</a></h3>
                    <span className="location">Paranaque City</span>
                    <a href="#" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="#" className="img" style={{backgroundImage: 'url(images/work-2.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="#">The Blue Sky Home</a></h3>
                    <span className="location">Quezon City</span>
                    <a href="#" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="property-wrap ">
                  <a href="#" className="img" style={{backgroundImage: 'url(images/work-3.jpg)'}} />
                  <div className="text">
                    <p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
                    <ul className="property_list">
                      <li><span className="flaticon-bed" />3</li>
                      <li><span className="flaticon-bathtub" />2</li>
                      <li><span className="flaticon-floor-plan" />1,878 sqft</li>
                    </ul>
                    <h3><a href="#">The Blue Sky Home</a></h3>
                    <span className="location">Manila City</span>
                    <a href="#" className="d-flex align-items-center justify-content-center btn-custom">
                      <span className="ion-ios-link" />
                    </a>
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
                        <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>02</span></div>
                        <h3>Meet Your Agent</h3>
                        <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>03</span></div>
                        <h3>Close the Deal</h3>
                        <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                    <div className="media block-6 services services-2">
                      <div className="media-body py-md-4 text-center">
                        <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>04</span></div>
                        <h3>Have Your Property</h3>
                        <p>Discover Residential, Commercial, and Industrial Real Estate with Ease Discover Residential, Commercial, and Industrial Real Estate with Ease.</p>
                      </div>
                    </div>      
                  </div>
                </div>
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
                <div className="carousel-testimony owl-carousel ">
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Discover Residential, Commercial, and Industrial Real Estate with Ease</p>
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
                        <p className="mb-4">Discover Residential, Commercial, and Industrial Real Estate with Ease</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Jilliane Elloso</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Discover Residential, Commercial, and Industrial Real Estate with Ease.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_3.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Jilliane Elloso</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">Discover Residential, Commercial, and Industrial Real Estate with Ease</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Jilliane Elloso</p>
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
                            <p className="name">Jilliane Elloso</p>
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
        <section className="ftco-section ftco-agent ftco-no-pt">
        
        </section>
        <section className="ftco-section ftco-no-pt">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 heading-section text-center ">
                <span className="subheading">Blog</span>
                <h2>Recent Blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-3 d-flex ">
                <div className="blog-entry justify-content-end">
                  <div className="text">
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">July. 24, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                    <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                    </a>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ">
                <div className="blog-entry justify-content-end">
                  <div className="text">
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">July. 24, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                    <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                    </a>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ">
                <div className="blog-entry justify-content-end">
                  <div className="text">
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">July. 24, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                    <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                    </a>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ">
                <div className="blog-entry justify-content-end">
                  <div className="text">
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">July. 24, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                    <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_4.jpg")'}}>
                    </a>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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

export default Home;
