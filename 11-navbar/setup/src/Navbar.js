import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [linkData, setLinkData] = useState(links);
  const [linkSocial, setLinkSocial] = useState(social);
  const [showLink, setShowLink] = useState(true);
  const linkCOntainer = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    if (showLink) {
      const getHeight = linkRef.current.getBoundingClientRect().height;
      linkCOntainer.current.style.height = `${getHeight}px`;
    } else {
      linkCOntainer.current.style.height = "0px";
    }
  }, [showLink]);

  const linkElement = linkData.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url}>{link.text}</a>
      </li>
    );
  });

  const socialElement = linkSocial.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url}>{link.icon}</a>
      </li>
    );
  });
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button
            className="nav-toggle"
            onClick={() => {
              setShowLink(!showLink);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkCOntainer}>
          <ul ref={linkRef} className="links">
            {linkElement}
          </ul>
        </div>
        <ul className="social-icons">{socialElement}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
