import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If we're on the home page, scroll to section
    if (location.pathname === '/') {
      e.preventDefault();
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
    }
    // Otherwise, navigate to home page with hash
    else {
      e.preventDefault();
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="header-area">
      <div className="header-top">
        <div className="container rr-container-1350">
          <div className="header-top-inner">
            <div className="header-note">
              <span className="title">Update:</span>
              <p className="text">Sign Up and Receive upto 20% bonus discount on checkout</p>
            </div>
            <div className="header-social">
              <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i>Facebook</a>
              <a href="https://x.com/?lang=en"><i className="fa-brands fa-twitter"></i>Twitter</a>
              <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i>Linkedin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main rr-bg-gray">
        <div className="container rr-container-1350">
          <div className="header-main-inner">
            <div className="header-main-bg">
              <img src="/assets/imgs/shape/shape-1.webp" alt="image" />
            </div>
            <div className="header-logo">
              <Link to="/">
                <img src="/assets/imgs/logo/logo-2-light.png" className="normal-logo" alt="Site Logo" />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="main-menu">
                <ul>
                  <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                  <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
                  <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Our Services</a></li>
                  <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
                  <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
                </ul>
              </nav>
            </div>
            <div className="header-cta">
              <span className="call-box">Call us: <a href="tel:+94760759204" style={{ color: '#FFFFFF', textDecoration: 'none' }}>+94760759204</a> </span>
            </div>
            <div className="header-offfcanvas">
              <button className="side-toggle rr-bg-white">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

