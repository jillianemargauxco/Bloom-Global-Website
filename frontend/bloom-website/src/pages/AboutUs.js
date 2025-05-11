import React from 'react';
import Navbar from '../components/Navbar';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GoLaw } from "react-icons/go";

const AboutUs = () => {
  // Any component-specific logic can go here

  return (
    <div className="page">
      <Navbar/>
      
        {/* END nav */}
        <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={{backgroundImage: 'url("images/bg_1.png")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-9  pb-5 text-center">
                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward" /></Link></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-3 bread" data-aos="fade-up" style={{fontFamily:"Ogg", color:'#243E5E', fontSize:'5rem'}}>About Us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/about2.png)'}}>
              </div>
              <div className="col-md-6 wrap-about py-md-5 ">
                <div className="heading-section p-md-5">
                  <h2 className="mb-4">About Our Company</h2>
                <p style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>Bloom Global Estate and Development Corp. is a real estate company committed
to acquiring, developing, and managing high-value properties. Through strategic
purchases, leases, and ownership, we enhance property potential and maximize returns
for our clients and partners.</p>
                  <p style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>Bloom offers a comprehensive property management system tailored for condo developers,
property owners, and tenant relationships. Our system simplifies administrative tasks,
facilitates seamless communication, ensures efficient property maintenance, and optimizes
rental and investment management.</p>
                    <p style={{fontFamily:"Montserrat", color:'#243E5E', fontSize: '18px'}}>With a dedicated team focused on real estate development, property management, and
market optimization, we carefully select properties with strong growth potential.
Whether acquiring existing buildings or developing new structures, we are committed to
delivering exceptional value, efficient management, and long-term success in the real
estate industry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-no-pb">
        <div className="container-fluid px-md-0">
          <div className="row no-gutters align-items-stretch room-animate site-section">
            <div className="col-md-7 img-wrap">
              <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/vision.png")' , marginLeft:'8rem'}} />
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-8 py-5">
                  <h3 className="display-4 heading">Our Vision</h3>
                  <div className="room-exerpt" data-aos="fade-up">
                    <p>To provide quality homes to every Juan who
                        dreams about having their own house and
                        offices for people who became bolder with
                        their dreams of starting their own business.
                        We envision making those dreams come true
                        to life.</p>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="container-fluid px-md-0">
          <div className="row no-gutters site-section">
            <div className="col-md-7 order-md-2 img-wrap">
              <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/mission.png")', marginRight:'9rem'}} />
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-8 py-5">
                  <h3 className="display-4 heading">Our Mission</h3>
                  <div className="room-exerpt" data-aos="fade-up">
                    <p>We aim to positively impact the lives of our
                        clients by building better homes for them
                        and their future generations with satisfaction
                        in creating value beyond business</p>
                    <p>We are committed to fostering a fair and
                        transparent environment in all our dealings to
                        create lasting value for our customers.
                        Through our projects, we seek to enhance the
                        quality of life within the communities we serve,
                        connecting individuals with the perfect buyers
                        and sellers for their properties while upholding
                        the highest standards of service and integrity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        </section>      

                   <section className='ftco-section ftco-no-pb'>
                        <div className="container">
                          <div className="container pt-0 pb-5">
                            <div className="row justify-content-center text-center">  
                              <div className="col-lg-6 section-heading" data-aos="fade-up">
                              <div className="row justify-content-center">
                              <div className="col-md-12 heading-section text-center mb-5">
                                <span className="subheading" data-aos="fade-up">Core Values</span>
                                <h2 className="mb-2">What Do We Stand By</h2>
                              </div>
                            </div>
                              </div>
                            </div>
                          </div>
                          <div className="row custom-row-02192 align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                    <GoLaw style={{ color: '#CDA375', fontSize: '48px' }} />
                                </div>
                                <h3>Honor & Fairness</h3>
                                <p>We uphold the values of integrity and fairness in all our
                                    actions, taking responsibility for our decisions and striving
                                    to maintain ethical standards. We believe in conducting
                                    business with honesty and transparency, ensuring
                                    equitable outcomes for all parties involved.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={200}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                    <FaPeopleGroup style={{ color: '#CDA375', fontSize: '48px' }} />
                                </div>
                                <h3>Teamwork, Respect & Mentorship</h3>
                                <p>We foster a culture of collaboration and respect within
                                    our organization, valuing diversity of perspectives and
                                    ideas. We believe in the power of teamwork to drive
                                    innovation and success, while also promoting mentorship
                                    and development opportunities to nurture the talents of
                                    our professionals.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                  <FaHandshake style={{ color: '#CDA375', fontSize: '48px' }} />
                                </div>
                                <h3>Customer and Employee-Centric</h3>
                                <p>We prioritize the needs and satisfaction of our customers,
                                  recognizing them as the cornerstone of our success. By
                                  listening attentively to their feedback and constantly
                                  striving to exceed their expectations, we aim to build
                                  enduring relationships based on trust and mutual benefit.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="ftco-section ftco-no-pb">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-md-12 heading-section text-center mb-5">
                              <span className="subheading" data-aos="fade-up">Product Launch</span>
                              <h2 className="mb-2" data-aos="fade-up" style={{ fontFamily: "Montserrat", color: "#243E5E", fontSize: "40px" }}>
                                Introducing Our Copyrighted Property and Tenant Management Application
                              </h2>
                              <p style={{ fontFamily: "Montserrat", color: "#243E5E", fontSize: "18px" }} data-aos="fade-up">
                                Discover how © Bloom Global Estate & Development's Property and Tenant Management Application simplifies property management and enhances tenant experiences.
                              </p>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-md-10">
                              <div className="video-container" data-aos="fade-up">
                              <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/4n1eHQ1ih8I?si=ESRdZ1_hS9fKkFvs"
                                title="Tenant App Product Launch"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                  borderRadius: "10px",
                                }}
                              ></iframe>
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
  );
};

export default AboutUs;
