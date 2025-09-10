import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarJquery = () => {
  const tutorialLinks = [
    { name: "jQuery HOME", path: "/jquery" },
    { name: "jQuery Intro", path: "/jqueryintroduction" },
    { name: "jQuery Get Started", path: "/jquerygetstarted" },
    { name: "jQuery Syntax", path: "/jquerysyntax" },
    { name: "jQuery Selectors", path: "/jqueryselectors" },
    { name: "jQuery Events", path: "/jqueryevents" },
  ];

  const effectsLinks = [
    { name: "jQuery Hide/Show", path: "/jqueryhideshow" },
    { name: "jQuery Fade", path: "/jqueryfade" },
    { name: "jQuery Slide", path: "/jqueryslide" },
    { name: "jQuery Animate", path: "/jqueryanimation" },
    { name: "jQuery stop()", path: "/jquerystop" },
    { name: "jQuery Callback", path: "/jquerycallback" },
    { name: "jQuery Chaining", path: "/jquerychaining" },
  ];

  const htmlLinks = [
    { name: "jQuery Get", path: "/jqueryget" },
    { name: "jQuery Set", path: "/jqueryset" },
    { name: "jQuery Add", path: "/jqueryadd" },
    { name: "jQuery Remove", path: "/jqueryremove" },
    { name: "jQuery CSS Classes", path: "/jquerycssclasses" },
    { name: "jQuery css()", path: "/jquerycss" },
    { name: "jQuery Dimensions", path: "/jquerydimensions" },
  ];

  const traversingLinks = [
    { name: "jQuery Traversing", path: "/jquerytraversing" },
    { name: "jQuery Ancestors", path: "/jqueryancestors" },
    { name: "jQuery Descendants", path: "/jquerydescendant" },
    { name: "jQuery Siblings", path: "/jquerysiblings" },
    { name: "jQuery Filtering", path: "/jqueryfiltering" },
  ];

  const ajaxLinks = [
    { name: "jQuery AJAX Intro", path: "/jqueryajaxintro" },
    { name: "jQuery Load", path: "/jqueryload" },
    { name: "jQuery Get/Post", path: "/jquerygetpost" },
  ];

  const miscLinks = [
    { name: "jQuery noConflict()", path: "/jquerynoconflict" },
    { name: "jQuery Filters", path: "/jqueryfilters" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">jQuery Tutorial</h5>
      <ul className="list-unstyled">
        {tutorialLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">jQuery Effects</h5>
      <ul className="list-unstyled">
        {effectsLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">jQuery HTML</h5>
      <ul className="list-unstyled">
        {htmlLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">jQuery Traversing</h5>
      <ul className="list-unstyled">
        {traversingLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">jQuery AJAX</h5>
      <ul className="list-unstyled">
        {ajaxLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">jQuery Misc</h5>
      <ul className="list-unstyled">
        {miscLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarJquery;
