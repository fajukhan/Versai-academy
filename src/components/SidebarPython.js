import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarPython = () => {
  const pythonLinks = [
    { name: "Python HOME", path: "/PythonTutorial" },
    { name: "Python Intro", path: "/pythonintroduction" },
    { name: "Python Get Started", path: "/pythongettingstarted" },
    { name: "Python Syntax", path: "/pythonSyntax" },
    { name: "Python Comments", path: "/pythoncomments" },
    { name: "Python Variables", path: "/pythonvariables" },
    { name: "Python Data Types", path: "/pythondatatypes" },
    { name: "Python Numbers", path: "/pythonnumbers" },
    { name: "Python Casting", path: "/pythoncasting" },
    { name: "Python Strings", path: "/pythonstrings" },
    { name: "Python Booleans", path: "/pythonbooleans" },
    { name: "Python Operators", path: "/pythonoperators" },
    { name: "Python Lists", path: "/pythonlist" },
    { name: "Python Tuples", path: "/pythontuples" },
    { name: "Python Sets", path: "/pythonsets" },
    { name: "Python Dictionaries", path: "/pythondictionaries" },
    { name: "Python If...Else", path: "/pythonifelse" },
    { name: "Python Match", path: "/pythonmatch" },
    { name: "Python While Loops", path: "/pythonwhileloops" },
    { name: "Python For Loops", path: "/pythonforloops" },
    { name: "Python Functions", path: "/pythonfunctions" },
    { name: "Python Lambda", path: "/pythonlambda" },
    { name: "Python Arrays", path: "/pythonarray" },
    { name: "Python OOP", path: "/pythonoop" },
    { name: "Python Classes/Objects", path: "/pythonclassesobjects" },
    { name: "Python Inheritance", path: "/pythoninheritance" },
    { name: "Python Iterators", path: "/pythoniterators" },
    { name: "Python Polymorphism", path: "/pythonpolymorphism" },
    { name: "Python Scope", path: "/pythonscope" },
    { name: "Python Modules", path: "/pythonmodules" },
    { name: "Python Dates", path: "/pythondates" },
    { name: "Python Math", path: "/pythonmath" },
    { name: "Python JSON", path: "/pythonjson" },
    { name: "Python RegEx", path: "/pythonregex" },
    { name: "Python PIP", path: "/pytonpip" },
    { name: "Python Try...Except", path: "/pythontryexcept" },
    { name: "Python String Formatting", path: "/pythonstringformatting" },
    { name: "Python User Input", path: "/pythonuserinput" },
    { name: "Python VirtualEnv", path: "/pythonvirtualenv" },
  ];

  const fileHandlingLinks = [
    { name: "Python File Handling", path: "/pythonfilehandling" },
    { name: "Python Read Files", path: "/pythonreadfile" },
    { name: "Python Write/Create Files", path: "/pythonwritefile" },
    { name: "Python Delete Files", path: "/pythondeletefile" },
  ];

  const moduleLinks = [
    { name: "NumPy Tutorial", path: "/pythonnumpy" },
    { name: "Pandas Tutorial", path: "/pythonpandas" },
    { name: "SciPy Tutorial", path: "/pythonscipy" },
    { name: "Django Tutorial", path: "/pythondjango" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">Python Tutorial</h5>
      <ul className="list-unstyled">
        {pythonLinks.map((link) => (
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

      <h5 className="fw-bold mt-4">File Handling</h5>
      <ul className="list-unstyled">
        {fileHandlingLinks.map((link) => (
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

      <h5 className="fw-bold mt-4">Python Modules</h5>
      <ul className="list-unstyled">
        {moduleLinks.map((link) => (
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

export default SidebarPython;
