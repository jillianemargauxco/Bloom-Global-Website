import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const BloomOneTwoBed = () => {
  return (
    <div>

<div>
       <Navbar/>
        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.png")'}} data-stellar-background-ratio="0.5">
                  <div className="overlay" />
                  <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                      <div className="col-md-9 pb-5 text-center">
                        <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward" /></Link></span> <span>Properties <i className="ion-ios-arrow-forward" /></span></p>
                        <h1 className="mb-3 bread" style={{fontFamily:"Ogg", color:'#243E5E', fontSize:'5rem'}}>Coastal Luxury Residences: Two Bedroom Unit (1st Unit)</h1> 
                      </div>
                    </div>
                  </div>
                </section>
                <section className="ftco-section ftco-property-details">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="property-details">
                        <div className="swiper_container">
                          <Swiper effect={'coverflow'}
                                  grabCursor={true}
                                  centeredSlides={true}
                                  loop={true}
                                  slidesPerView={"auto"}
                                  coverflowEffect={{
                                    rotate:0,
                                    stretch:0,
                                    depth:100,
                                    modifier:2.5,
                                  }}
                                pagination={{el:'.swiper-pagination',clickable:true}}
                                navigation={{
        
                                  nextEl:'.swiper-button-next',
                                  prevEl:'.swiper-button-prev',
                                  clickable:true,
        
                                }}
                                modules={[EffectCoverflow,Pagination,Navigation]}
                                className='.swiper_container'
                                  >
                            <SwiperSlide>
                          <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-1.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-2.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-3.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-4.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-5.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-6.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-7.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-8.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-9.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-10.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-11.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-12.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-13.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-14.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-15.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-16.JPG)'}} />
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-17.JPG)'}} />
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/2BR-Units/1/coastal-2br-18.JPG)'}} />
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-2.jpg)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-3.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-4.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-5.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-6.png)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-7.png)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-8.png)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-9.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-10.JPG)'}} />
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="img" style={{backgroundImage: 'url(images/coastal/coastal-1.jpg)'}} />
                            </SwiperSlide>

                            </Swiper>

                            



                            <div className='slider-controller'>
                              <div className='swiper-button-prev slider-arrow ml-5' style={{ color: 'white', fontSize: '200px' }}> </div>
                              <div className='swiper-button-next slider-arrow mr-5' style={{ color: 'white', fontSize: '200px' }}> </div>
                                <div className='swiper-pagination'>   
                              </div>
                            </div>
                          </div>
        
                       
                        </div>
                      </div>
                    </div>
                    
                    <div className="text text-center">
                            <span className="subheading">Paranaque City</span>
                            <h2 style={{ color: '#CDA375' }}><strong>Coastal Luxury Residences : Two Bedroom Unit</strong></h2>
                          </div>
        
                    <div className="row">
          <div className="col-md-12 pills">
            <div className="bd-example bd-example-tabs">
              <div className="d-flex justify-content-center">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                  style={{ color: '#CDA375' }}
                >
                  <li className="nav-item" style={{ color: '#CDA375' }}>
                    <a
                      className="nav-link active"
                      id="pills-description-tab"
                      data-toggle="pill"
                      href="#pills-description"
                      role="tab"
                      aria-controls="pills-description"
                      aria-expanded="true"
                      style={{ color: '#CDA375' }}
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item" style={{ color: '#CDA375' }}>
                    <a
                      className="nav-link"
                      id="pills-manufacturer-tab"
                      data-toggle="pill"
                      href="#pills-manufacturer"
                      role="tab"
                      aria-controls="pills-manufacturer"
                      aria-expanded="true"
                      style={{ color: '#CDA375' }}
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item" style={{ color: '#CDA375' }}>
                    <a
                      className="nav-link"
                      id="pills-review-tab"
                      data-toggle="pill"
                      href="#pills-review"
                      role="tab"
                      aria-controls="pills-review"
                      aria-expanded="true"
                      style={{ color: '#CDA375' }}
                    >
                      Amenities
                    </a>
                  </li>
                </ul>
              </div>
        
              <div className="tab-content" id="pills-tabContent">
                {/* FEATURES TAB */}
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                >
                  <div className="row">
                    <div className="col-md-4">
                      <ul className="features">
                        <li><strong>Property Details</strong></li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Location: Coastal Luxury Residences, Parañaque City
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Unit Type: 2-Bedroom Condominium
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Floor Area: 93.48 sqm
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Bedrooms: 2
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Bathrooms: 1
                        </li>
                      </ul>
                    </div>
        
                    <div className="col-md-4">
                      <ul className="features">
                        <li><strong>Amenities</strong></li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Free use of Swimming Pool 🏊‍♀️
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Fully-equipped Gym 💪
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Lobby & Lounge area
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          24/7 Security & CCTV
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Parking (subject to availability)
                        </li>
                      </ul>
                    </div>
        
                    <div className="col-md-4">
                      <ul className="features">
                        <li><strong>Rates</strong></li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          ₱10,200 / night (short stay)
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          ₱52,000 / month (long-term)
                        </li>
                        <li className="check">
                          <span className="ion-ios-checkmark" style={{ color: '#CDA375' }} />
                          Inclusive: use of pool & gym
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
        
                {/* DESCRIPTION TAB */}
                <div
                  className="tab-pane fade"
                  id="pills-manufacturer"
                  role="tabpanel"
                  aria-labelledby="pills-manufacturer-tab"
                >
                  <p>
                    Experience elevated city living at <strong>Coastal Luxury Residences</strong> — your modern sanctuary in
                    Parañaque City. Perfectly situated across <strong>PITX</strong> and minutes away from <strong>Okada Manila</strong>,
                    <strong> Ayala Malls Manila Bay</strong>, <strong>NAIA Airport</strong>, and <strong>Mall of Asia</strong>.
                  </p>
                  <p>
                    Our spacious <strong>2-Bedroom units</strong> (93.48 sqm) are designed for comfort and convenience — ideal for
                    short-term stays, business trips, or long-term rentals. Each unit features a well-lit living area, modern
                    interiors, and a relaxing atmosphere complemented by access to resort-style amenities.
                  </p>
                  <p>
                    Residents enjoy complimentary access to the <strong>swimming pool</strong> and <strong>gym</strong>, ensuring
                    a balanced lifestyle that blends leisure and productivity.
                  </p>
                </div>
        
                {/* Amenities TAB */}
                <div
                  className="tab-pane fade"
                  id="pills-review"
                  role="tabpanel"
                  aria-labelledby="pills-review-tab"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div className="review d-flex">
                        <div className="desc">
                          <h4>
                            <span className="text-left">Now Leasing & Move-In Ready</span>
                            <span className="text-right">October 2025</span>
                          </h4>
                          <p>
                            The 2-Bedroom units at Coastal Luxury Residences are fully finished and move-in ready.
                            The development continues to enhance shared amenities — including upgraded poolside lounges,
                            landscaped walkways, and newly outfitted gym equipment. Reservation and viewing schedules
                            are now open for short and long-term lease clients.
                          </p>
                        </div>
                      </div>
                    </div>
        
                    <div className="col-md-5">
                      <div className="image-container">
                        <h3 className="head">Photo Gallery</h3>
                        <div className="photo-gallery">
                          <div className="column">
                            <div className="photo grid-item">
                              <img src="images/coastal/coastal-1.jpg" alt="1BR Living Area" />
                            </div>
                            <div className="photo grid-item">
                              <img src="images/coastal/coastal-2.jpg" alt="Bedroom Interior" />
                            </div>
                            <div className="photo grid-item">
                              <img src="images/coastal/coastal-3.png" alt="Swimming Pool" />
                            </div>
                          </div>
                        </div>
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

export default BloomOneTwoBed;
