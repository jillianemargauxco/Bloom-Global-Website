import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


const BloomOne_TwoBed = () => {
  return (
    <div>

<div>
       <Navbar/>
        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9 ftco-animate pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Properties <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread">Properties Single</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-property-details">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="property-details">
                  <div className="img" style={{backgroundImage: 'url(images/work-1.jpg)'}} />
                  <div className="text text-center">
                    <span className="subheading">Oakland</span>
                    <h2>The Blue Sky Home</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pills">
                <div className="bd-example bd-example-tabs">
                  <div className="d-flex justify-content-center">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Description</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true">Review</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                      <div className="row">
                        <div className="col-md-4">
                          <ul className="features">
                            <li className="check"><span className="ion-ios-checkmark" />Lot Area: 1,250 SQ FT</li>
                            <li className="check"><span className="ion-ios-checkmark" />Bed Rooms: 4</li>
                            <li className="check"><span className="ion-ios-checkmark" />Bath Rooms: 4</li>
                            <li className="check"><span className="ion-ios-checkmark" />Luggage</li>
                            <li className="check"><span className="ion-ios-checkmark" />Garage: 2</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="features">
                            <li className="check"><span className="ion-ios-checkmark" />Floor Area: 1,300 SQ FT</li>
                            <li className="check"><span className="ion-ios-checkmark" />Year Build:: 2019</li>
                            <li className="check"><span className="ion-ios-checkmark" />Water</li>
                            <li className="check"><span className="ion-ios-checkmark" />Stories: 2</li>
                            <li className="check"><span className="ion-ios-checkmark" />Roofing: New</li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="features">
                            <li className="check"><span className="ion-ios-checkmark" />Floor Area: 1,300 SQ FT</li>
                            <li className="check"><span className="ion-ios-checkmark" />Year Build:: 2019</li>
                            <li className="check"><span className="ion-ios-checkmark" />Water</li>
                            <li className="check"><span className="ion-ios-checkmark" />Stories: 2</li>
                            <li className="check"><span className="ion-ios-checkmark" />Roofing: New</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    </div>
                    <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                      <div className="row">
                        <div className="col-md-7">
                          <h3 className="head">23 Reviews</h3>
                          <div className="review d-flex">
                            <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                            <div className="desc">
                              <h4>
                                <span className="text-left">Jacob Webb</span>
                                <span className="text-right">14 March 2018</span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                </span>
                                <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                              </p>
                              <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                            </div>
                          </div>
                          <div className="review d-flex">
                            <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                            <div className="desc">
                              <h4>
                                <span className="text-left">Jacob Webb</span>
                                <span className="text-right">14 March 2018</span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                </span>
                                <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                              </p>
                              <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                            </div>
                          </div>
                          <div className="review d-flex">
                            <div className="user-img" style={{backgroundImage: 'url(images/person_3.jpg)'}} />
                            <div className="desc">
                              <h4>
                                <span className="text-left">Jacob Webb</span>
                                <span className="text-right">14 March 2018</span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                </span>
                                <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                              </p>
                              <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="rating-wrap">
                            <h3 className="head">Give a Review</h3>
                            <div className="wrap">
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  (98%)
                                </span>
                                <span>20 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  (85%)
                                </span>
                                <span>10 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  (70%)
                                </span>
                                <span>5 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  (10%)
                                </span>
                                <span>0 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  <i className="ion-ios-star" />
                                  (0%)
                                </span>
                                <span>0 Reviews</span>
                              </p>
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
                  <h2 className="ftco-heading-2">Bloom</h2>
                  <p>Far far away, behind the word mountains, far from the countries.</p>
                  <ul className="ftco-footer-social list-unstyled mt-5">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
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
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope pr-4" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
       
      </div>



    </div>
  );
};

export default BloomOne_TwoBed;
