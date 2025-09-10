import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarReact = () => {
  const reactLinks = [
    { name: "React Home", path: "/react" },
    { name: "React Intro", path: "/reactintroduction" },
    { name: "React Get Started", path: "/reactgetstarted" },
    { name: "React First App", path: "/reactfirstapp" },
    { name: "React Render HTML", path: "/reactrenderhtml" },
    { name: "React Upgrade", path: "/reactupgrade" },
    { name: "React ES6", path: "/reactes6" },
    { name: "React JSX Intro", path: "/reactjsx" },
    { name: "React JSX Expressions", path: "/reactjsxexpressions" },
    { name: "React JSX Attributes", path: "/reactjsxattributes" },
    { name: "React JSX If Statements", path: "/reactjsxifstatment" },
    { name: "React Components", path: "/reactcomponents" },
    { name: "React Class", path: "/reactclass" },
    { name: "React Props", path: "/reactprops" },
    { name: "React Props Destructuring", path: "/reactpropsdestructuring" },
    { name: "React Props Children", path: "/reactpropschildren" },
    { name: "React Events", path: "/reactevents" },
    { name: "React Conditionals", path: "/reactconditional" },
    { name: "React Lists", path: "/reactlist" },
    { name: "React Forms", path: "/reactforms" },
    { name: "React Forms Submit", path: "/reactformsubmit" },
    { name: "React Textarea", path: "/reacttextarea" },
    { name: "React Select", path: "/reactselect" },
    { name: "React Multiple Inputs", path: "/reactmultipleinput" },
    { name: "React Checkbox", path: "/reactcheckbox" },
    { name: "React Radio", path: "/reactradio" },
    { name: "React Portals", path: "/reactportal" },
    { name: "React Suspense", path: "/reactsuspense" },
    { name: "React CSS Styling", path: "/reactcssstyle" },
    { name: "React CSS Modules", path: "/reactcssmodules" },
    { name: "React CSS-in-JS", path: "/reactcssinjs" },
    { name: "React Router", path: "/reactrouter" },
    { name: "React Transitions", path: "/reacttransitions" },
    { name: "React Forward Ref", path: "/reactforwardref" },
    { name: "React HOC", path: "/reacthoc" },
    { name: "React Sass", path: "/reactsass" },
  ];

  const hooksLinks = [
    { name: "What is Hooks?", path: "/reacthooks" },
    { name: "React useState", path: "/reactusestate" },
    { name: "React useEffect", path: "/reactuseffect" },
    { name: "React useContext", path: "/reactusecontext" },
    { name: "React useRef", path: "/reactuseref" },
    { name: "React useReducer", path: "/reactusereducer" },
    { name: "React useCallback", path: "/reactusecallback" },
    { name: "React useMemo", path: "/reactusememo" },
    { name: "React Custom Hooks", path: "/reactcustomhooks" },
  ];

  return (
    <div className="col-lg-2 col-md-3 d-none d-md-block p-3 bg-light sidebar-fixed sidebar-link sidebar">
      <h5 className="fw-bold">React Tutorial</h5>
      <ul className="list-unstyled">
        {reactLinks.map((link) => (
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

      <h5 className="fw-bold mt-4">React Hooks</h5>
      <ul className="list-unstyled">
        {hooksLinks.map((link) => (
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

export default SidebarReact;
