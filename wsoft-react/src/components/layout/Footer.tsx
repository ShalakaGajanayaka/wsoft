const Footer = () => {
  // Handle scroll to top
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle newsletter form submission
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') || (form.querySelector('input[type="email"]') as HTMLInputElement)?.value;
    
    if (email) {
      alert(`Thank you for subscribing!\n\nEmail: ${email}\n\nYou will receive our latest updates.`);
      form.reset();
    }
  };

  return (
    <footer className="footer-area">
      <div className="footer-widget-wrapper-box">
        <div className="container rr-container-1410">
          <div className="footer-widget-wrapper">
            <div className="footer-widget-box">
              <div className="footer-logo">
                <a href="#" onClick={handleScrollToTop}><img src="/assets/imgs/logo/logo-light.png" alt="image" /></a>
              </div>
              <div className="footer-text">
                <p className="text">we are passionate about empowering businesses through innovative and reliable technology solutions.</p>
              </div>
              <div className="footer-social">
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://x.com/?lang=en"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-widget-box">
              <h2 className="footer-widget-title">Address Company</h2>
              <ul className="footer-meta-list">
                <li>
                  <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                  <span className="text">One Galle Face Mall at 1A Centre Road, Colombo 02, Sri Lanka</span>
                </li>
                <li>
                  <span className="icon"><i className="fa-solid fa-phone"></i></span>
                  <span className="text">Call Us : <a href="tel:+94760759204">+94760759204</a></span>
                </li>
                <li>
                  <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                  <span className="text">Mail: <a href="mailto:info@wsoftglobal.com">info@wsoftglobal.com</a></span>
                </li>
                <li>
                  <span className="icon"><i className="fa-solid fa-clock"></i></span>
                  <span className="text">Office : 8:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="footer-widget-title">Our Services</h2>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={handleScrollToTop}><i className="fa-solid fa-chevron-right"></i>Database Solution</a></li>
                <li><a href="#" onClick={handleScrollToTop}><i className="fa-solid fa-chevron-right"></i>Data Protection</a></li>
                <li><a href="#" onClick={handleScrollToTop}><i className="fa-solid fa-chevron-right"></i>App Development</a></li>
                <li><a href="#" onClick={handleScrollToTop}><i className="fa-solid fa-chevron-right"></i>Machine Learning</a></li>
                <li><a href="#" onClick={handleScrollToTop}><i className="fa-solid fa-chevron-right"></i>Helpdesk Services</a></li>
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="footer-widget-title">Latest Posts</h2>
              <div className="footer-blog-wrapper-box">
                <div className="footer-blog-wrapper">
                  <article className="footer-blog">
                    <div className="thumb">
                      <a href="#" onClick={handleScrollToTop}><img src="/assets/imgs/blog/blog-9.webp" alt="blog image" /></a>
                    </div>
                    <div className="content">
                      <div className="meta">
                        <span className="date"><i className="fa-regular fa-clock"></i>15th Oct, 2025</span>
                      </div>
                      <h2 className="title"><a href="#" onClick={handleScrollToTop}>Why Your Business Needs</a></h2>
                      <a href="#" onClick={handleScrollToTop} className="blog-btn">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                  </article>
                  <article className="footer-blog">
                    <div className="thumb">
                      <a href="#" onClick={handleScrollToTop}><img src="/assets/imgs/blog/blog-10.webp" alt="blog image" /></a>
                    </div>
                    <div className="content">
                      <div className="meta">
                        <span className="date"><i className="fa-regular fa-clock"></i>15th Oct, 2025</span>
                      </div>
                      <h2 className="title"><a href="#" onClick={handleScrollToTop}>Small Business Essentials</a></h2>
                      <a href="#" onClick={handleScrollToTop} className="blog-btn">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-newsletter-box">
        <div className="container rr-container-1410">
          <div className="footer-newsletter-wrapper">
            <div className="footer-newsletter-content">
              <div className="icon">
                <img src="/assets/imgs/icon/icon-26.webp" alt="image" />
              </div>
              <div className="content">
                <h3 className="title">Sign Up To Our Newsletters.</h3>
                <p className="text">Subscribe to our Newsletter & Event Right Now to be Updated</p>
              </div>
            </div>
            <div className="footer-newsletter-form">
              <form onSubmit={handleNewsletterSubmit} className="footer-subscribe-form">
                <div className="input-field">
                  <input type="email" name="email" placeholder="Enter Your Email" required />
                  <button type="submit" className="rr-btn">
                    <span className="btn-wrap">
                      <span className="text-one">Subscribe Now</span>
                      <span className="text-two">Subscribe Now</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container rr-container-1410">
          <div className="copyright-area-inner">
            <div className="copyright-text">
              <p className="text">Copyright @ 2025 <a href="#">WSOFTGLOBAL</a>. All Rights Received.</p>
            </div>
            <div className="copyright-link">
              <a href="#" onClick={handleScrollToTop}>Privacy policy</a>
              <a href="#" onClick={handleScrollToTop}>Terms of use</a>
              <a href="#" onClick={handleScrollToTop}>Site map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

