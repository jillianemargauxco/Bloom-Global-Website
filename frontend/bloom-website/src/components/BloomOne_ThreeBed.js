import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const BloomOneThreeBed = () => {
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
                <h1 className="mb-3 bread" style={{fontFamily:"Ogg", color:'#243E5E', fontSize:'5rem'}}>Bloom One : Three Bedroom Unit</h1> 
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
                  <div className="img" style={{backgroundImage: 'url(images/work-1.jpg)'}} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="img" style={{backgroundImage: 'url(images/work-1.jpg)'}} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="img" style={{backgroundImage: 'url(images/work-1.jpg)'}} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="img" style={{backgroundImage: 'url(images/work-1.jpg)'}} />
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
                    <span className="subheading">Quezon City</span>
                    <h2 style={{ color: '#CDA375' }}><strong>Bloom One : Three Bedroom Unit</strong></h2>
                  </div>

            <div className="row">
              <div className="col-md-12 pills">
                <div className="bd-example bd-example-tabs">
                  <div className="d-flex justify-content-center">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ color: '#CDA375' }}>
                      <li className="nav-item" style={{ color: '#CDA375' }}>
                        <a className="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true" style={{ color: '#CDA375' }}>Features</a>
                      </li>
                      <li className="nav-item" style={{ color: '#CDA375' }}> 
                        <a className="nav-link" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true" style={{ color: '#CDA375' }}>Description</a>
                      </li>
                      <li className="nav-item" style={{ color: '#CDA375' }}>
                        <a className="nav-link" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true" style={{ color: '#CDA375' }}>Construction Updates</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                      <div className="row">
                        <div className="col-md-4">
                          <ul className="features">
                            <li><strong>Property Details</strong></li>
                            <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/>Lot Area: 20 sqm</li>
                            <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/>Bed Rooms: 1</li>
                            <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/>Bath Rooms: 1</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="features">
                          <li><strong>Amenities</strong></li>
                          <li className="check" ><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Parking</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Built-in Kitchen, sink, and stove</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/>Toilet and bath</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Balcony</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Dry Clothing area</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Rooftop Lounge area</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Mail room</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Gym</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Lobby</li>
                          <li className="check"><span className="ion-ios-checkmark" style={{ color: '#CDA375' }}/> Security</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="features">
                            <li className="check"><span className="ion-ios-time" style={{ color: '#CDA375' }} />Target Completion: February 2025</li>
                            <li className="check"><span className="ion-ios-pin" style={{ color: '#CDA375' }} />Complete Address: Congressional Avenue, Quezon City</li>

                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                      <p>Introducing our modern and affordable townhouses for sale, promising a harmonious blend of style, functionality, and value.</p>
                      <p>Located in a vibrant community,
                          these townhouses are
                          thoughtfully designed to cater to
                          the dynamic lifestyles of today's
                          urban dwellers. With sleek and
                          contemporary architecture, these
                          homes boast clean lines, ample
                          natural light, and efficient use of
                          space, creating a modern living
                          environment that is both inviting
                          and practical.</p>
                          <p>Each townhouse features a versatile
                              layout, offering flexible living spaces
                              that can be customized to suit
                              individual needs. The open-plan
                              design seamlessly integrates the
                              living, dining, and kitchen areas,
                              providing a sense of connectivity
                              and fluidity throughout the home.</p>
                    </div>
                    <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                      <div className="row">
                        <div className="col-md-7">
               
                          <div className="review d-flex">
                            <div className="desc">
                              <h4>
                                <span className="text-left">Site Preparation</span>
                                <span className="text-right">June 2024</span>
                              </h4>
                              <p>The construction team has successfully completed site clearing and grading. This crucial step ensures that the ground is properly leveled and ready for foundation work.
                              Initial excavation work has been completed to prepare for the foundation pouring.</p>
                            </div>
                          </div>
                          
                      
                        </div>
                        <div className="col-md-5">
                          <div className="image-container">
                            <h3 className="head">Photo Gallery</h3>
                            <div className="photo-gallery">
                            <div className="column">
                                <div className="photo grid-item"><img src="images/site-1.JPG" alt="Bloom One Studio Type"/></div>
                                <div className="photo grid-item"><img src="images/site-2.JPG" alt="Bloom One Studio Type"/></div>
                                <div className="photo grid-item"><img src="images/site-3.JPG" alt="Bloom One Studio Type"/></div>
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

export default BloomOneThreeBed;
