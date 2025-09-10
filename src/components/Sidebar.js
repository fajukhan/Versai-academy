import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { name: "HTML HOME", path: "/html" },
    { name: "HTML Introduction", path: "/htmlhome" },
    { name: "HTML Editors", path: "/editor" },
    { name: "HTML Basic", path: "/basic" },
    { name: "HTML Elements", path: "/elements" },
    { name: "HTML Attributes", path: "/attribute" },
    { name: "HTML Headings", path: "/heading" },
    { name: "HTML Paragraphs", path: "/paragraph" },
    { name: "HTML Styles", path: "/style" },
    { name: "HTML Formatting", path: "/formatting" },
    { name: "HTML Quotations", path: "/quotation" },
    { name: "HTML Comments", path: "/comments" },
    { name: "HTML Colors", path: "/colors" },
    { name: "HTML CSS", path: "/css2" },
    { name: "HTML Links", path: "/links" },
    { name: "HTML Images", path: "/images" },
    { name: "HTML Favicon", path: "/favicon" },
    { name: "HTML Page Title", path: "/pagetitle" },
    { name: "HTML Tables", path: "/tables" },
    { name: "HTML Lists", path: "/lists" },
    { name: "HTML Div", path: "/divs" },
    { name: "HTML Block & Inline", path: "/blockinline" },
    { name: "HTML Class", path: "/htmlclass" },
    { name: "HTML Id", path: "/htmlid" },
    { name: "HTML Iframes", path: "/htmliframes" },
    { name: "HTML Javascript", path: "/htmljavascript" },
    { name: "HTML File Paths", path: "/htmlfilepath" },
    { name: "HTML Head", path: "/htmlhead" },
    { name: "HTML Layout", path: "/htmllayout" },
    { name: "HTML Responsive", path: "/htmlresponsive" },
    { name: "HTML Semantics", path: "/htmlsemantic" },
  ];

  const formLinks = [
    { name: "HTML Forms", path: "/htmlform" },
    { name: "HTML Form Elements", path: "/htmlformelement" },
    { name: "HTML Input Types", path: "/htmlinput" },
    { name: "HTML Input Attributes", path: "/htmlattribute" },
    { name: "HTML Form Attributes", path: "/htmlformattribute" },
  ];

  const mediaLinks = [
    { name: "HTML Media", path: "/htmlmultimedia" },
    { name: "HTML Audio", path: "/htmlaudio" },
    { name: "HTML Video", path: "/htmlvideo" },
    { name: "HTML Youtube", path: "/htmlyoutube" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">HTML Tutorial</h5>
      <ul className="list-unstyled">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink 
              to={link.path} 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">HTML Forms</h5>
      <ul className="list-unstyled">
        {formLinks.map((link) => (
          <li key={link.path}>
            <NavLink 
              to={link.path} 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">HTML Media</h5>
      <ul className="list-unstyled">
        {mediaLinks.map((link) => (
          <li key={link.path}>
            <NavLink 
              to={link.path} 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
