import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-auto">
      <div className="footer text-base-content max-w-8xl mx-auto flex justify-around py-10">
        <nav>
          <h6 className="footer-title">SERVICES</h6>
          <NavLink
            to="/destinations"
            className="link link-hover"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Destinations
          </NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">COMPANY</h6>
          <NavLink to="/about" className="link link-hover">
            About
          </NavLink>
          <NavLink to="/contact" className="link link-hover">
            Contact
          </NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">LEGAL</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
