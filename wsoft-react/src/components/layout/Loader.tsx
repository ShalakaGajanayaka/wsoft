import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    // Loader functionality will be handled by main.js
    // This component just renders the HTML structure
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>W</span>
          <span>S</span>
          <span>O</span>
          <span>F</span>
          <span>T</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

