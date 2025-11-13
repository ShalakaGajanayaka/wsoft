import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('Name');
    const email = formData.get('Email');
    const category = formData.get('category');

    // Here you can add your form submission logic
    // For now, just show an alert
    alert(`Thank you for your request!\n\nName: ${name}\nEmail: ${email}\nService: ${category}\n\nWe will contact you soon.`);
    
    // Reset form
    form.reset();
  };

  // Handle link clicks to scroll to sections
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    if (sectionId) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle scroll to top
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the #
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100; // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500); // Wait for page to render
    }
  }, []);

  // Reinitialize project slider when tab changes
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).Swiper !== 'undefined') {
      // Wait a bit for the DOM to update after tab change
      const timer = setTimeout(() => {
        // Find the active tab pane and its slider
        const activeTabPane = document.querySelector('.tab-pane.show.active');
        if (activeTabPane) {
          const projectSlider = activeTabPane.querySelector('.project-active') as HTMLElement;
          if (projectSlider) {
            // Destroy existing swiper if it exists
            if ((projectSlider as any).swiper) {
              try {
                (projectSlider as any).swiper.destroy(true, true);
              } catch (e) {
                // Ignore destroy errors
              }
            }
            // Initialize new swiper
            try {
              new (window as any).Swiper(projectSlider, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 28,
                speed: 2000,
                watchSlidesProgress: true,
                breakpoints: {
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1201: {
                    slidesPerView: 2,
                  },
                  1367: {
                    slidesPerView: 2,
                  },
                },
              });
            } catch (e) {
              console.warn('Project slider initialization error:', e);
            }
          }
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  return (
    <>
      {/* hero area start */}
      <section id="home" className="hero-area">
        <div className="hero-area-inner">
          <div className="slide-button-bg">
            <img className="left-btn-bg" src="/assets/imgs/shape/shape-26.webp" alt="image" />
            <img className="right-btn-bg" src="/assets/imgs/shape/shape-27.webp" alt="image" />
          </div>
          <div className="swiper slider-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hero-slide">
                  <div className="hero-slide-bg">
                    <img src="/assets/imgs/gallery/gallery-1.webp" alt="image" />
                  </div>
                  <span className="hero-slide-tag">Software Development</span>
                  <div className="container rr-container-1410">
                    <div className="hero-content">
                      <div className="hero-title-wrapper">
                        <div className="subtitle-wrapper" data-animation="fadeInUp" data-delay=".3s">
                          <span className="hero-subtitle">Innovative Software Solutions for Your Business</span>
                        </div>
                        <div className="title-wrapper" data-animation="fadeInUp" data-delay=".6s">
                          <h1 className="hero-title">Building Digital Excellence Through <span>Custom Software Development</span></h1>
                        </div>
                      </div>
                      <div className="text-wrapper" data-animation="fadeInUp" data-delay=".9s">
                        <p className="text">We transform your business challenges into powerful software solutions. From web applications to mobile apps, we deliver cutting-edge technology that drives growth.</p>
                      </div>
                      <div className="btn-wrapper" data-animation="fadeInUp" data-delay="1.2s">
                        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">Start Your Project</span>
                            <span className="text-two">Start Your Project</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hero-slide">
                  <div className="hero-slide-bg">
                    <img src="/assets/imgs/gallery/gallery-50.webp" alt="image" />
                  </div>
                  <span className="hero-slide-tag">Software Development</span>
                  <div className="container rr-container-1410">
                    <div className="hero-content">
                      <div className="hero-title-wrapper">
                        <div className="subtitle-wrapper" data-animation="fadeInUp" data-delay=".3s">
                          <span className="hero-subtitle">Expert Software Development Team</span>
                        </div>
                        <div className="title-wrapper" data-animation="fadeInUp" data-delay=".6s">
                          <h1 className="hero-title">Scaling Your Business With <span>Premium Software Solutions</span></h1>
                        </div>
                      </div>
                      <div className="text-wrapper" data-animation="fadeInUp" data-delay=".9s">
                        <p className="text">Our experienced developers craft scalable, secure, and user-friendly software that propels your business forward. Partner with us to turn your vision into reality.</p>
                      </div>
                      <div className="btn-wrapper" data-animation="fadeInUp" data-delay="1.2s">
                        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">Start Your Project</span>
                            <span className="text-two">Start Your Project</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-nav">
            <div className="slider-button-prev hero-nav-btn">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="slider-button-next hero-nav-btn">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
      {/* hero area end */}

      {/* about area start */}
      <section id="about" className="about-area">
        <div className="container rr-container-1410">
          <div className="about-area-inner section-spacing">
            <div className="about-thumb-wrappper fade-anim" data-direction="left">
              <div className="about-thumb-1 img-reveal-anim">
                <img src="/assets/imgs/gallery/gallery-2.webp" alt="image" />
              </div>
              <div className="about-thumb-content-wrapper">
                <div className="about-thumb-2" data-speed="0.9">
                  <img src="/assets/imgs/gallery/gallery-3.webp" alt="image" />
                </div>
              </div>
            </div>
            <div className="about-content fade-anim" data-direction="right">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">About Our Company</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Delivering Software Solutions That Drive Business Growth</h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text">We are a leading software development company specializing in creating innovative digital solutions. Our team of skilled developers builds custom software, web applications, and mobile apps that help businesses thrive in the digital age.</p>
              </div>
              <div className="features-wrapper-box">
                <div className="features-wrapper">
                  <div className="feature-box">
                    <div className="thumb">
                      <img src="/assets/imgs/icon/icon-22.webp" alt="image" />
                    </div>
                    <div className="content">
                      <h3 className="title">Custom Software Development</h3>
                      <p className="text">We design and develop tailored software solutions that perfectly fit your business requirements and workflows.</p>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="thumb">
                      <img src="/assets/imgs/icon/icon-23.webp" alt="image" />
                    </div>
                    <div className="content">
                      <h3 className="title">Agile Development Process</h3>
                      <p className="text">Our agile methodology ensures rapid delivery, continuous improvement, and seamless collaboration throughout the development lifecycle.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="rr-btn">
                  <span className="btn-wrap">
                    <span className="text-one">View Our Services <i className="fa-solid fa-arrow-right"></i></span>
                    <span className="text-two">View Our Services <i className="fa-solid fa-arrow-right"></i></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about area end */}

      {/* service area start */}
      <section id="services" className="service-area">
        <div className="service-area-bg">
          <img src="/assets/imgs/gallery/gallery-4.webp" alt="image" />
        </div>
        <div className="container rr-container-1410">
          <div className="service-area-inner section-spacing">
            <div className="service-header fade-anim">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">Our Services</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Comprehensive Software Development Services</h2>
                </div>
              </div>
            </div>
            <div className="services-wrapper-box">
              <div className="services-wrapper">
                <div className="service-box fade-anim">
                  <div className="thumb">
                    <div className="service-logo">
                      <img src="/assets/imgs/icon/icon-1.webp" alt="image" />
                    </div>
                    <Link className="service-btn" to="/service-details">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                    <Link to="/service-details">
                      <img className="main-img" src="/assets/imgs/service/service-1.webp" alt="image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h3 className="title"><Link to="/service-details">Web Application Development</Link></h3>
                    <p className="text">Build powerful, scalable web applications using modern frameworks and technologies to enhance your online presence.</p>
                  </div>
                </div>
                <div className="service-box fade-anim">
                  <div className="thumb">
                    <div className="service-logo">
                      <img src="/assets/imgs/icon/icon-2.webp" alt="image" />
                    </div>
                    <Link className="service-btn" to="/service-details">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                    <Link to="/service-details">
                      <img className="main-img" src="/assets/imgs/service/service-2.webp" alt="image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h3 className="title"><Link to="/service-details">Mobile App Development</Link></h3>
                    <p className="text">Create native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.</p>
                  </div>
                </div>
                <div className="service-box fade-anim">
                  <div className="thumb">
                    <div className="service-logo">
                      <img src="/assets/imgs/icon/icon-3.webp" alt="image" />
                    </div>
                    <Link className="service-btn" to="/service-details">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                    <Link to="/service-details">
                      <img className="main-img" src="/assets/imgs/service/service-3.webp" alt="image" />
                    </Link>
                  </div>
                  <div className="content">
                    <h3 className="title"><Link to="/service-details">Enterprise Software Solutions</Link></h3>
                    <p className="text">Develop robust enterprise-level software systems that streamline operations and boost productivity across your organization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service area end */}

      {/* project area start */}
      <section id="projects" className="project-area">
        <div className="container rr-container-1410">
          <div className="project-area-inner section-spacing-top">
            <div className="project-header fade-anim">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">Our Projects</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Showcase Of Our Recognized Work</h2>
                </div>
              </div>
            </div>
            <div className="project-wrapper-box fade-anim">
              <div className="project-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveTab('all')}
                    >
                      <span className="tab-btn">All Cases <span className="number">(15)</span></span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'business' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveTab('business')}
                    >
                      <span className="tab-btn">Business <span className="number">(4)</span></span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'solution' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveTab('solution')}
                    >
                      <span className="tab-btn">Software Solutions <span className="number">(7)</span></span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'startup' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveTab('startup')}
                    >
                      <span className="tab-btn">Startup <span className="number">(5)</span></span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'marketing' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveTab('marketing')}
                    >
                      <span className="tab-btn">Marketing <span className="number">(9)</span></span>
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* All Cases Tab */}
                  <div className={`tab-pane fade ${activeTab === 'all' ? 'show active' : ''}`} role="tabpanel">
                    <div className="project-wrapper">
                      <div className="swiper project-active">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-1.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Enterprise Web Application</Link></h3>
                                  <p className="text">A comprehensive enterprise web application built with modern technologies, featuring scalable architecture, real-time updates, and seamless user experience for large-scale business operations.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-2.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Mobile App Development</Link></h3>
                                  <p className="text">A cross-platform mobile application developed for iOS and Android, delivering native performance with modern UI/UX design and robust backend integration.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-3.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Custom Software Solution</Link></h3>
                                  <p className="text">A tailored software solution designed to meet specific business requirements, featuring custom workflows, advanced analytics, and seamless integration with existing systems.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-4.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Cloud-Based Platform</Link></h3>
                                  <p className="text">A scalable cloud-based platform built with microservices architecture, providing high availability, automatic scaling, and seamless deployment across multiple cloud providers.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Tab */}
                  <div className={`tab-pane fade ${activeTab === 'business' ? 'show active' : ''}`} role="tabpanel">
                    <div className="project-wrapper">
                      <div className="swiper project-active">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-2.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Business Management System</Link></h3>
                                  <p className="text">A comprehensive business management system that streamlines operations, automates workflows, and provides real-time insights for better decision-making and improved productivity.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-3.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">E-Commerce Platform</Link></h3>
                                  <p className="text">A robust e-commerce platform with advanced features including inventory management, payment processing, order tracking, and customer relationship management.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-1.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">CRM Software Solution</Link></h3>
                                  <p className="text">A powerful CRM software solution that helps businesses manage customer relationships, track sales pipelines, and improve customer satisfaction through data-driven insights.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-4.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Financial Management System</Link></h3>
                                  <p className="text">An integrated financial management system that automates accounting processes, generates financial reports, and provides comprehensive financial analytics for better business planning.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Software Solutions Tab */}
                  <div className={`tab-pane fade ${activeTab === 'solution' ? 'show active' : ''}`} role="tabpanel">
                    <div className="project-wrapper">
                      <div className="swiper project-active">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-1.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Enterprise Software Solution</Link></h3>
                                  <p className="text">A scalable enterprise software solution designed to handle complex business operations, with advanced security features, high performance, and seamless integration capabilities.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-2.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">API Integration Platform</Link></h3>
                                  <p className="text">A comprehensive API integration platform that enables seamless connectivity between different software systems, facilitating data exchange and workflow automation.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-3.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Database Management System</Link></h3>
                                  <p className="text">An advanced database management system that ensures data integrity, provides efficient data storage and retrieval, and supports complex queries for large-scale applications.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-4.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Cloud Migration Solution</Link></h3>
                                  <p className="text">A comprehensive cloud migration solution that helps organizations seamlessly move their applications and data to the cloud, ensuring minimal downtime and improved scalability.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Startup Tab */}
                  <div className={`tab-pane fade ${activeTab === 'startup' ? 'show active' : ''}`} role="tabpanel">
                    <div className="project-wrapper">
                      <div className="swiper project-active">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-3.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Startup MVP Development</Link></h3>
                                  <p className="text">A minimum viable product (MVP) developed for startups, featuring essential features, rapid deployment, and scalable architecture to validate business ideas and attract investors.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-4.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">SaaS Platform</Link></h3>
                                  <p className="text">A software-as-a-service (SaaS) platform built for startups, offering subscription-based services, multi-tenant architecture, and automated billing systems.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-1.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Startup Analytics Dashboard</Link></h3>
                                  <p className="text">An analytics dashboard designed for startups to track key performance indicators, user engagement metrics, and business growth insights for data-driven decision making.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-2.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Mobile Startup App</Link></h3>
                                  <p className="text">A mobile application developed for startups, featuring user-friendly interface, real-time notifications, and social features to engage users and drive growth.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Tab */}
                  <div className={`tab-pane fade ${activeTab === 'marketing' ? 'show active' : ''}`} role="tabpanel">
                    <div className="project-wrapper">
                      <div className="swiper project-active">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-4.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Marketing Automation Platform</Link></h3>
                                  <p className="text">A comprehensive marketing automation platform that enables businesses to automate marketing campaigns, track customer behavior, and optimize marketing strategies for better ROI.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-1.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Content Management System</Link></h3>
                                  <p className="text">A powerful content management system that allows marketers to create, manage, and publish content across multiple channels, with SEO optimization and analytics features.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-2.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Social Media Management Tool</Link></h3>
                                  <p className="text">A social media management tool that helps businesses manage multiple social media accounts, schedule posts, track engagement, and analyze social media performance.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-box">
                              <div className="thumb">
                                <Link to="/project-details"><img src="/assets/imgs/project/project-3.webp" alt="image" /></Link>
                              </div>
                              <div className="content-wrapper">
                                <div className="content">
                                  <h3 className="title"><Link to="/project-details">Email Marketing Platform</Link></h3>
                                  <p className="text">An email marketing platform that enables businesses to create, send, and track email campaigns, with advanced segmentation, A/B testing, and analytics features.</p>
                                  <a href="#" onClick={handleScrollToTop} className="rr-btn">
                                    <span className="btn-wrap">
                                      <span className="text-one">Read More</span>
                                      <span className="text-two">Read More</span>
                                    </span>
                                  </a>
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
        </div>
      </section>
      {/* project area end */}

      {/* progress area start */}
      <section className="progress-area">
        <div className="container rr-container-1350">
          <div className="progress-area-inner section-spacing">
            <div className="progress-thumb-wrappper fade-anim" data-direction="left">
              <div className="progress-thumb-1 img-reveal-anim">
                <img src="/assets/imgs/gallery/gallery-5.webp" alt="image" />
              </div>
              <div className="progress-thumb-2 img-reveal-anim">
                <img src="/assets/imgs/gallery/gallery-6.webp" alt="image" />
              </div>
              <div className="progress-thumb-3">
                <img className="img-reveal-anim" src="/assets/imgs/gallery/gallery-7.webp" alt="image" />
              </div>
            </div>
            <div className="progress-content fade-anim" data-direction="right">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">Business Growth</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Connecting People And <br />Build Technology</h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text">Energistically evisculate an expanded array of meta-services after cross-media strategic theme areas. Interactively simplify interactive customer service before fully tested relationship parallel task high standards...</p>
              </div>
              <div className="progress-wrapper-box">
                <div className="progress-wrapper">
                  <div className="progress-box">
                    <div className="progress-title">
                      <h3 className="progress-category">Business Security</h3>
                      <span>65%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                  <div className="progress-box">
                    <div className="progress-title">
                      <h3 className="progress-category">Career Development</h3>
                      <span>88%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                  <div className="progress-box">
                    <div className="progress-title">
                      <h3 className="progress-category">Business Innovation</h3>
                      <span>90%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* progress area end */}

      {/* process area start */}
      <section className="process-area">
        <div className="container rr-container-1410">
          <div className="process-area-inner section-spacing">
            <div className="process-header fade-anim">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">Our Work Process</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Building Innovative Software Solutions <br /> Together, Step by Step</h2>
                </div>
              </div>
            </div>
            <div className="process-wrapper-box fade-anim">
              <div className="process-wrapper">
                <div className="process-box">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-5.webp" alt="image" />
                  </div>
                  <div className="content">
                    <h3 className="title">Requirement Analysis</h3>
                    <p className="text">We conduct a comprehensive analysis of your business requirements, identifying key features, user needs, and technical specifications for your software solution.</p>
                  </div>
                </div>
                <div className="process-box">
                  <img className="shape-start" src="/assets/imgs/shape/shape-2.webp" alt="image" />
                  <img className="shape-end" src="/assets/imgs/shape/shape-2.webp" alt="image" />
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-6.webp" alt="image" />
                  </div>
                  <div className="content">
                    <h3 className="title">Development & Testing</h3>
                    <p className="text">Our experienced developers build your software using agile methodology, followed by rigorous testing to ensure quality, performance, and reliability.</p>
                  </div>
                </div>
                <div className="process-box">
                  <div className="thumb">
                    <img src="/assets/imgs/icon/icon-7.webp" alt="image" />
                  </div>
                  <div className="content">
                    <h3 className="title">Deployment & Support</h3>
                    <p className="text">We deploy your software solution and provide ongoing maintenance and support to ensure optimal performance and continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* process area end */}

        {/* appointment area start */}
        <section id="contact" className="appointment-area">
        <div className="appointment-area-bg">
          <img src="/assets/imgs/shape/shape-5.webp" alt="image" />
        </div>
        <div className="container rr-container-1410">
          <div className="appointment-area-inner">
            <div className="appointment-content section-spacing fade-anim" data-direction="left">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">Book Appointment Here</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Empower Your Business <br />With WSOFT Solutions</h2>
                </div>
              </div>
              <div className="appointment-contact-wrap">
                <form onSubmit={handleFormSubmit}>
                  <div className="appointment-formwrap">
                    <div className="appointment-formfield">
                      <input type="text" name="Name" id="Name" placeholder="Your Name" />
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="appointment-formfield">
                      <input type="email" name="Email" id="Email" placeholder="Email Address" />
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="appointment-formfield span-2">
                      <select name="category" id="category" defaultValue="">
                        <option value="" disabled>Select Service Category</option>
                        <option value="Web Application Development">Web Application Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Enterprise Software Solutions">Enterprise Software Solutions</option>
                        <option value="Software Consulting">Software Consulting</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                      </select>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button type="submit" className="rr-btn">
                      <span className="btn-wrap">
                        <span className="text-one">Request a Call Back</span>
                        <span className="text-two">Request a Call Back</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="appointment-thumb-wrappper fade-anim" data-direction="right">
              <div className="appointment-thumb-1">
              </div>
              <div className="appointment-thumb-2">
                <img src="/assets/imgs/shape/shape-3.webp" alt="image" />
              </div>
              <div className="appointment-thumb-3 img-reveal-anim">
                <img src="/assets/imgs/gallery/gallery-8.webp" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* appointment area end */}

      {/* testimonial area start */}
      <section className="testimonial-area">
        <div className="testimonial-area-bg">
          <img src="/assets/imgs/shape/shape-4.webp" alt="image" />
        </div>
        <div className="container rr-container-1410">
          <div className="testimonial-area-inner section-spacing-top">
            <div className="testimonial-header fade-anim">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">Customer Feedbacks</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Hear from Our Happy Customers</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-wrapper-box section-spacing-bottom fade-anim">
          <div className="testimonial-wrapper">
            <div className="swiper testimonial-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="content">
                      <div className="author">
                        <div className="avatar">
                          <img src="/assets/imgs/client/client-1.webp" alt="image" />
                        </div>
                        <div className="meta">
                          <h3 className="name">Thomas Whitaker</h3>
                          <span className="post">CEO, Innovate Software Solutions</span>
                        </div>
                      </div>
                      <div className="text-wrapper">
                        <p className="text">"WSOFT developed a custom software solution that revolutionized our workflow. Their expertise in software development and attention to detail exceeded our expectations. Highly recommended!"</p>
                      </div>
                      <div className="icon-n-rating">
                        <div className="rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="icon">
                          <img className="quote-icon" src="/assets/imgs/icon/icon-4.webp" alt="Quote Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="content">
                      <div className="author">
                        <div className="avatar">
                          <img src="/assets/imgs/client/client-2.webp" alt="image" />
                        </div>
                        <div className="meta">
                          <h3 className="name">William Prescott</h3>
                          <span className="post">CTO, Tech Innovations Inc.</span>
                        </div>
                      </div>
                      <div className="text-wrapper">
                        <p className="text">"The mobile app WSOFT built for us has transformed our customer engagement. Their team's technical expertise and commitment to quality made the entire development process smooth and efficient."</p>
                      </div>
                      <div className="icon-n-rating">
                        <div className="rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="icon">
                          <img className="quote-icon" src="/assets/imgs/icon/icon-4.webp" alt="Quote Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="content">
                      <div className="author">
                        <div className="avatar">
                          <img src="/assets/imgs/client/client-3.webp" alt="image" />
                        </div>
                        <div className="meta">
                          <h3 className="name">Benjamin Clarke</h3>
                          <span className="post">Founder, Digital Solutions Group</span>
                        </div>
                      </div>
                      <div className="text-wrapper">
                        <p className="text">"Working with WSOFT was a game-changer for our business. Their enterprise software solution streamlined our operations and increased productivity by 40%. Excellent service and support!"</p>
                      </div>
                      <div className="icon-n-rating">
                        <div className="rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="icon">
                          <img className="quote-icon" src="/assets/imgs/icon/icon-4.webp" alt="Quote Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-pagination"></div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end */}

    
      
      {/* blog area start */}
      <section className="blog-area">
        <div className="container rr-container-1410">
          <div className="blog-area-inner section-spacing">
            <div className="blog-header fade-anim">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle"><span className="start-shape"></span><span className="text">Latest Blog Insights</span><span className="end-shape"></span></span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Latest Software Development Insights</h2>
                </div>
              </div>
            </div>
            <div className="blog-wrapper-box fade-anim">
              <article className="blog-featured">
                <div className="thumb">
                  <Link to="/blog-details"><img src="/assets/imgs/blog/blog-1.webp" alt="blog image" /></Link>
                </div>
                <div className="content">
                  <div className="meta">
                    <span className="tag">Technology</span>
                    <span className="date">Dec 15, 2024</span>
                  </div>
                  <h2 className="title"><Link to="/blog-details">Best Practices for Modern Software Development</Link></h2>
                  <p className="text">Discover the latest trends, methodologies, and best practices in software development that can help your projects succeed.</p>
                  <Link to="/blog-details" className="blog-btn">Read Details <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </article>
              <div className="blog-wrapper">
                <article className="blog">
                  <div className="thumb">
                    <Link to="/blog-details"><img src="/assets/imgs/blog/blog-2.webp" alt="blog image" /></Link>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="tag">Technology</span>
                      <span className="date">Dec 15, 2024</span>
                    </div>
                    <h2 className="title"><Link to="/blog-details">Agile Development: Accelerating Software Delivery</Link></h2>
                    <p className="text">Learn how Agile methodologies can help you deliver software faster while maintaining high quality and meeting customer needs.</p>
                    <Link to="/blog-details" className="blog-btn">Read Details <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </article>
                <article className="blog">
                  <div className="thumb">
                    <Link to="/blog-details"><img src="/assets/imgs/blog/blog-3.webp" alt="blog image" /></Link>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="tag">Technology</span>
                      <span className="date">Dec 15, 2024</span>
                    </div>
                    <h2 className="title"><Link to="/blog-details">Exploring Modern Development Tools and Frameworks</Link></h2>
                    <p className="text">Stay updated with the latest development tools, frameworks, and technologies that are shaping the future of software development.</p>
                    <Link to="/blog-details" className="blog-btn">Read Details <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </article>
                <article className="blog">
                  <div className="thumb">
                    <Link to="/blog-details"><img src="/assets/imgs/blog/blog-4.webp" alt="blog image" /></Link>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="tag">Technology</span>
                      <span className="date">Dec 15, 2024</span>
                    </div>
                    <h2 className="title"><Link to="/blog-details">DevOps: Streamlining Development and Operations</Link></h2>
                    <p className="text">Understand how DevOps practices can improve collaboration, accelerate deployment, and enhance the reliability of your software products.</p>
                    <Link to="/blog-details" className="blog-btn">Read Details <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog area end */}
    </>
  );
};

export default Home;

