import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarGit = () => {
  const tutorialLinks = [
    { name: "Git HOME", path: "/git" },
    { name: "Git Intro", path: "/gitintro" },
    { name: "Git Install", path: "/gitinstall" },
    { name: "Git Config", path: "/gitconfig" },
    { name: "Git Get Started", path: "/gitgetstarted" },
    { name: "Git New Files", path: "/gitnewfiles" },
    { name: "Git Staging", path: "/gitstaging" },
    { name: "Git Commit", path: "/gitcommit" },
    { name: "Git Tagging", path: "/gittagging" },
    { name: "Git Stash", path: "/gitstash" },
    { name: "Git History", path: "/githistory" },
    { name: "Git Help", path: "/githelp" },
    { name: "Git Branch", path: "/gitbranch" },
    { name: "Git Merge", path: "/gitmerge" },
    { name: "Git Workflow", path: "/gitworkflow" },
    { name: "Git Best Practices", path: "/gitbestpractices" },
    { name: "Git Glossary", path: "/gitglossary" },
  ];

  const gitHubLinks = [
    { name: "GitHub Get Started", path: "/githubgetstarted" },
    { name: "Git What is SSH?", path: "/gitssh" },
    { name: "GitHub Add SSH", path: "/githubaddssh" },
    { name: "GitHub Set Remote", path: "/githubsetremote" },
    { name: "GitHub Edit Code", path: "/githubeditcode" },
    { name: "Pull from GitHub", path: "/pullfromgithub" },
    { name: "Push to GitHub", path: "/pushtogithub" },
    { name: "GitHub Branch", path: "/githubbranch" },
    { name: "Pull Branch from GitHub", path: "/pullbranchfromgithub" },
    { name: "Push Branch to GitHub", path: "/pushbranchtogithub" },
    { name: "GitHub Flow", path: "/githubflow" },
    { name: "GitHub Pages", path: "/githubpages" },
    { name: "Git GUI Clients", path: "/gitguiclients" },
  ];

  const contributeLinks = [
    { name: "GitHub Fork", path: "/githubfork" },
    { name: "Git Clone from GitHub", path: "/gitclonefromgithub" },
    { name: "GitHub Send Pull Request", path: "/githubsendpullrequest" },
  ];

  const undoLinks = [
    { name: "Git Revert", path: "/gitrevert" },
    { name: "Git Reset", path: "/gitreset" },
    { name: "Git Amend", path: "/gitamend" },
    { name: "Git Rebase", path: "/gitrebase" },
    { name: "Git Reflog", path: "/gitreflog" },
    { name: "Git Recovery", path: "/gitrecovery" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">Git Tutorial</h5>
      <ul className="list-unstyled">
        {tutorialLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Git and GitHub</h5>
      <ul className="list-unstyled">
        {gitHubLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Git Contribute</h5>
      <ul className="list-unstyled">
        {contributeLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? "active-link" : ""}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <h5 className="fw-bold mt-4">Git Undo</h5>
      <ul className="list-unstyled">
        {undoLinks.map((link) => (
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

export default SidebarGit;
