import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactRadio = () => {
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
              <h1>React Radio Buttons</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactcheckbox">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactportal">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Radio buttons allow users to select <b>only one option</b> from a group.  
                In React, radio buttons are controlled components, and we use <code>useState</code> to track the selected value.
              </p>

              <h3>1. Basic Radio Button Example</h3>
              <p>
                You can create radio buttons using the <code>type="radio"</code> input.  
                All radio buttons in a group should have the same <code>name</code>.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Basic Radio Button</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h2>Select Gender</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <p>Selected: {gender}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Users can select only one gender option.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Radio Buttons with Multiple Options</h3>
              <p>
                You can create a group of radio buttons for categories like food, subjects, etc.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Favorite Fruit</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <h2>Select Your Favorite Fruit</h2>
      <label>
        <input
          type="radio"
          name="fruit"
          value="Apple"
          checked={fruit === "Apple"}
          onChange={(e) => setFruit(e.target.value)}
        />
        Apple
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="fruit"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={(e) => setFruit(e.target.value)}
        />
        Banana
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="fruit"
          value="Orange"
          checked={fruit === "Orange"}
          onChange={(e) => setFruit(e.target.value)}
        />
        Orange
      </label>
      <p>Favorite Fruit: {fruit}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Only one fruit can be selected at a time.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Dynamic Radio Buttons from Array</h3>
              <p>
                You can dynamically render radio buttons from an array of options.
              </p>

              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Dynamic Radio Buttons</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const options = ["Red", "Green", "Blue"];
  const [color, setColor] = useState("");

  return (
    <div>
      <h2>Select a Color</h2>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="color"
            value={option}
            checked={color === option}
            onChange={(e) => setColor(e.target.value)}
          />
          {option}
          <br />
        </label>
      ))}
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Colors are rendered dynamically, and only one can be selected.</p>
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
                    <li>Radio buttons allow only one selection per group.</li>
                    <li>Use <code>checked</code> and <code>onChange</code> with <code>useState</code> to control them.</li>
                    <li>Radio buttons can be dynamically generated from arrays.</li>
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

export default ReactRadio;
