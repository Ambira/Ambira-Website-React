// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#44f282" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#28dc69" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#0ebe4d" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0daf3c" />
          </g>
        </svg>
      </div>
      <footer style={{ height: "150px" }} className="page-footer font-small unique-color-dark pt-4">
        <div style={{ float: "left", width: "50%", padding: "10px" }}>
          <p>
            <span className="has-text-weight-bold">Ambira</span>
            <br />
            &copy; Copyright {new Date().getFullYear()} Ambira Pradhan.
          </p>
        </div>
        <div style={{ float: "left", width: "50%", padding: "10px" }}>
          {/* Additional footer content or links */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
