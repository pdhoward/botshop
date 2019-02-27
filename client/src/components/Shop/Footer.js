import React, {Component} from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/pdhoward/botshop"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:patrick.howard@xiollc.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/urban_coder" target="_blank">
          Follow Urban Coder on Twitter
        </a>
        <span> / </span>
        <a href="https://www.linkedin.com/in/patrickhowardusa/" target="_blank">
          Let's Connect
        </a>
      </p>
      <p>
        &copy; 2018 <strong>Strategic Machines</strong> - Conversational Economy
      </p>
    </footer>
  );
};

export default Footer;
