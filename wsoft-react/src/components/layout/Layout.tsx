import { type ReactNode } from 'react';
import Loader from './Loader';
import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { useTemplateScripts } from '../../hooks/useTemplateScripts';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Initialize template scripts after React renders
  useTemplateScripts();

  return (
    <>
      <Loader />
      <ScrollToTop />
      <Sidebar />
      
      <div className="has-smooth" id="has_smooth"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

