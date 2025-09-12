import React from 'react';
import { NavLink } from 'react-router-dom';

const SideWord = () => {
  const tutorialLinks = [
    { name: "WordPress - Home", path: "/wordpress" },
    { name: "WordPress - Overview", path: "/wordpressoverview" },
    { name: "WordPress - Installation", path: "/wordpressinstallation" },
    { name: "WordPress - Dashboard", path: "/wordpressdashboard" },
    { name: "WordPress - General Setting", path: "/wordpressgeneralsetting" },
    { name: "WordPress - Writing Setting", path: "/wordpresswritingsetting" },
    { name: "WordPress - Reading Setting", path: "/wordpressreadingsetting" },
    { name: "WordPress - Discussion Setting", path: "/wordpressdiscussionsetting" },
    { name: "WordPress - Media Setting", path: "/wordpressmediasetting" },
    { name: "WordPress - Permalink Setting", path: "/wordpresspermalinksetting" },
    { name: "WordPress - Plugin Setting", path: "/wordpresspluginsetting" },
  ];

  const categoriesLinks = [
    { name: "WordPress - Add Category", path: "/wordpressaddcategory" },
    { name: "WordPress - Edit Category", path: "/wordpresseditcategory" },
    { name: "WordPress - Delete Category", path: "/wordpressdeletecategory" },
    { name: "WordPress - Arrange Categories", path: "/wordpressarrangecategories" },
  ];

  const postsLinks = [
    { name: "WordPress - Add Posts", path: "/wordpressaddposts" },
    { name: "WordPress - Edit Posts", path: "/wordpresseditposts" },
    { name: "WordPress - Delete Posts", path: "/wordpressdeleteposts" },
    { name: "WordPress - Preview Posts", path: "/wordpresspreviewposts" },
    { name: "WordPress - Publish Posts", path: "/wordpresspublishposts" },
  ];

  const mediaLinks = [
    { name: "WordPress - Media Library", path: "/wordpressmedialibrary" },
    { name: "WordPress - Add Media", path: "/wordpressaddmedia" },
    { name: "WordPress - Insert Media", path: "/wordpressinsertmedia" },
    { name: "WordPress - Edit Media", path: "/wordpresseditmedia" },
  ];

  const pagesLinks = [
    { name: "WordPress - Add Pages", path: "/wordpressaddpages" },
    { name: "WordPress - Publish Pages", path: "/wordpresspublishpages" },
    { name: "WordPress - Edit Pages", path: "/wordpresseditpages" },
    { name: "WordPress - Delete Pages", path: "/wordpressdeletepages" },
  ];

  const tagsLinks = [
    { name: "WordPress - Add Tags", path: "/wordpressaddtags" },
    { name: "WordPress - Edit Tags", path: "/wordpressedittags" },
    { name: "WordPress - Delete Tags", path: "/wordpressdeletetags" },
  ];

  const linksLinks = [
    { name: "WordPress - Add Links", path: "/wordpressaddlinks" },
    { name: "WordPress - Edit Links", path: "/wordpresseditlinks" },
    { name: "WordPress - Delete Links", path: "/wordpressdeletelinks" },
  ];

  const commentsLinks = [
    { name: "WordPress - Add Comments", path: "/wordpressaddcomments" },
    { name: "WordPress - Edit Comments", path: "/wordpresseditcomments" },
    { name: "WordPress - Moderate Comments", path: "/wordpressmoderatecomments" },
  ];

  const pluginsLinks = [
    { name: "WordPress - View Plugins", path: "/wordpressviewplugins" },
    { name: "WordPress - Install Plugins", path: "/wordpressinstallplugins" },
    { name: "WordPress - Customize Plugins", path: "/wordpresscustomizeplugins" },
  ];

  const usersLinks = [
    { name: "WordPress - User Roles", path: "/wordpressuserroles" },
    { name: "WordPress - Add Users", path: "/wordpressaddusers" },
    { name: "WordPress - User Photo", path: "/wordpressuserphoto" },
    { name: "WordPress - Edit Users", path: "/wordpresseditusers" },
    { name: "WordPress - Delete Users", path: "/wordpressdeleteusers" },
    { name: "WordPress - Personal Profile", path: "/wordpresspersonalprofile" },
  ];

  const appearanceLinks = [
    { name: "WordPress - Theme Management", path: "/wordpressthememanagement" },
    { name: "WordPress - Customize Theme", path: "/wordpresscustomizetheme" },
    { name: "WordPress - Widget Management", path: "/wordpresswidgetmanagement" },
    { name: "WordPress - Background", path: "/wordpressbackground" },
  ];

  const advancedLinks = [
    { name: "WordPress - Host Transfer", path: "/wordpresshosttransfer" },
    { name: "WordPress - Version Update", path: "/wordpressversionupdate" },
    { name: "WordPress - Spam Protection", path: "/wordpressspamprotection" },
    { name: "WordPress - Backup & Restore", path: "/wordpressbackuprestore" },
    { name: "WordPress - Optimization", path: "/wordpressoptimization" },
    { name: "WordPress - Reset Password", path: "/wordpressresetpassword" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">WordPress Tutorials</h5>
      <ul className="list-unstyled">
        {tutorialLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Categories</h5>
      <ul className="list-unstyled">
        {categoriesLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Posts</h5>
      <ul className="list-unstyled">
        {postsLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Media</h5>
      <ul className="list-unstyled">
        {mediaLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Pages</h5>
      <ul className="list-unstyled">
        {pagesLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Tags</h5>
      <ul className="list-unstyled">
        {tagsLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Links</h5>
      <ul className="list-unstyled">
        {linksLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Comments</h5>
      <ul className="list-unstyled">
        {commentsLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Plugins</h5>
      <ul className="list-unstyled">
        {pluginsLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Users</h5>
      <ul className="list-unstyled">
        {usersLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Appearance</h5>
      <ul className="list-unstyled">
        {appearanceLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">WordPress Advanced</h5>
      <ul className="list-unstyled">
        {advancedLinks.map((link) => (
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

export default SideWord;
