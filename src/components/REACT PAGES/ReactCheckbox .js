import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactCheckbox = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

                       {/* Sidebar (Left - col-2) */}
 <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
  <h5 className="fw-bold mt-4">React Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="react">React Home</a></li>
    <li><a href="reactintroduction">React Intro</a></li>
    <li><a href="reactgetstarted">React Get Started</a></li>
    <li><a href="reactfirstapp">React First App</a></li>
    <li><a href="reactrenderhtml">React Render HTML</a></li>
    <li><a href="reactupgrade">React Upgrade</a></li>
    <li><a href="reactes6">React ES6</a></li>
    <li><a href="reactjsx">React JSX Intro</a></li>
    <li><a href="reactjsxexpressions">React JSX Expressions</a></li>
    <li><a href="reactjsxattributes">React JSX Attributes</a></li>
    <li><a href="reactjsxifstatment">React JSX If Statements</a></li>
    <li><a href="reactcomponents">React Components</a></li>
    <li><a href="reactclass">React Class</a></li>
    <li><a href="reactprops">React Props</a></li>
    <li><a href="reactpropsdestructuring">React Props Destructuring</a></li>
    <li><a href="reactpropschildren">React Props Children</a></li>
    <li><a href="reactevents">React Events</a></li>
    <li><a href="reactconditional">React Conditionals</a></li>
    <li><a href="reactlist">React Lists</a></li>
    <li><a href="reactforms">React Forms</a></li>
    <li><a href="reactformsubmit">React Forms Submit</a></li>
    <li><a href="reacttextarea">React Textarea</a></li>
    <li><a href="reactselect">React Select</a></li>
    <li><a href="reactmultipleinput">React Multiple Inputs</a></li>
    <li><a href="reactcheckbox">React Checkbox</a></li>
    <li><a href="reactradio">React Radio</a></li>
    <li><a href="reactportal">React Portals</a></li>
    <li><a href="reactsuspense">React Suspense</a></li>
    <li><a href="reactcssstyle">React CSS Styling</a></li>
    <li><a href="reactcssmodules">React CSS Modules</a></li>
    <li><a href="reactcssinjs">React CSS-in-JS</a></li>
    <li><a href="reactrouter">React Router</a></li>
    <li><a href="reacttransitions">React Transitions</a></li>
    <li><a href="reactforwardref">React Forward Ref</a></li>
    <li><a href="reacthoc">React HOC</a></li>
    <li><a href="reactsass">React Sass</a></li>
  </ul>

  <h5 className="fw-bold">React Hooks</h5>
  <ul className="list-unstyled">
    <li><a href="reacthooks">What is Hooks?</a></li>
    <li><a href="reactusestate">React useState</a></li>
    <li><a href="reactuseeffect">React useEffect</a></li>
    <li><a href="reactusecontext">React useContext</a></li>
    <li><a href="reactuseref">React useRef</a></li>
    <li><a href="reactusereducer">React useReducer</a></li>
    <li><a href="reactusecallback">React useCallback</a></li>
    <li><a href="reactusememo">React useMemo</a></li>
    <li><a href="reactcustomhooks">React Custom Hooks</a></li>
  </ul>
</div>

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React Checkbox</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactmultipleinput">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactradio">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Checkboxes are commonly used in forms when you want users to select one or more options.
                In React, checkboxes are controlled components, meaning their checked state is managed using <code>useState</code>.
              </p>

              <h3>1. Single Checkbox</h3>
              <p>
                A single checkbox can be managed by setting its <code>checked</code> value from state.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Single Checkbox</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <h2>Newsletter Signup</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      <p>{isChecked ? "Subscribed!" : "Not Subscribed"}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A single checkbox toggles subscription text.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Multiple Checkboxes</h3>
              <p>
                If you have multiple checkboxes, you can use one state object or array to track selected values.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Checkboxes</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [hobbies, setHobbies] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  };

  return (
    <div>
      <h2>Select Hobbies</h2>
      <label>
        <input type="checkbox" value="Reading" onChange={handleChange} />
        Reading
      </label>
      <br />
      <label>
        <input type="checkbox" value="Traveling" onChange={handleChange} />
        Traveling
      </label>
      <br />
      <label>
        <input type="checkbox" value="Gaming" onChange={handleChange} />
        Gaming
      </label>
      <p>Selected Hobbies: {hobbies.join(", ")}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Users can select multiple hobbies, displayed in a list.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Dynamic Checkboxes from Array</h3>
              <p>
                You can generate checkboxes dynamically from an array of options.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Dynamic Checkboxes</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const options = ["HTML", "CSS", "JavaScript", "React"];
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h2>Select Skills</h2>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" value={option} onChange={handleChange} />
          {option}
        </label>
      ))}
      <p>Selected Skills: {selected.join(", ")}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Dynamically rendered checkboxes update the selected skills list.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Checkboxes in React are controlled using <code>checked</code> and <code>onChange</code>.</li>
                    <li>For multiple checkboxes, use arrays to store selected values.</li>
                    <li>Checkboxes can be generated dynamically from arrays.</li>
                  </ul>
                </div>
              </div>

     
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReactCheckbox;
