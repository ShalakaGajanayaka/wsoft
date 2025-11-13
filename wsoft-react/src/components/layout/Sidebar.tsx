import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <aside className="fix">
        <div className="side-info">
          <div className="side-info-content">
            <div className="offset-widget offset-header">
              <div className="offset-logo">
                <Link to="/">
                  <img src="/assets/imgs/logo/logo.png" alt="site logo" />
                </Link>
              </div>
              <button id="side-info-close" className="side-info-close">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu fix"></div>
            <div className="offset-button">
              <Link to="/contact" className="rr-btn">
                <span className="btn-wrap">
                  <span className="text-one">Let's Talk</span>
                  <span className="text-two">Let's Talk</span>
                </span>
              </Link>
            </div>
            <div className="offset-widget-box">
              <h2 className="title">Contact US</h2>
              <div className="contact-meta">
                <div className="contact-item">
                  <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                  <span className="text">One Galle Face Mall at 1A Centre Road, <br />Colombo 02, Sri Lanka </span>
                </div>
                <div className="contact-item">
                  <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                  <span className="text"><a href="mailto:info@wsoft.com">info@wsoftglobal.com</a></span>
                </div>
                <div className="contact-item">
                  <span className="icon"><i className="fa-solid fa-phone"></i></span>
                  <span className="text"><a href="tel:+1(555)123-4567">+94760759204</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="offcanvas-overlay"></div>
    </>
  );
};

export default Sidebar;

