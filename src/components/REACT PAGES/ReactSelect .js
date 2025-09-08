import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactSelect = () => {
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
              <h1>React Select</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reacttextarea">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactmultipleinput">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, the <code>&lt;select&gt;</code> element works a little differently from regular HTML. 
                Instead of using <code>selected</code> attributes, we use the <b>value</b> property with React state.
              </p>

              <h3>1. Basic Select</h3>
              <p>
                A controlled <code>&lt;select&gt;</code> allows React to manage the selected option using state.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Controlled Select</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("apple");

  return (
    <div>
      <h2>Choose a fruit:</h2>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="apple">Apple</option>
        <option value="mango">Mango</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <p>You selected: {fruit}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A dropdown to choose fruits.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Default Value</h3>
              <p>
                You can set a default selected option by initializing state with a value.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Default Selected Option</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const [car, setCar] = useState("volvo");

  return (
    <div>
      <h2>Select a Car</h2>
      <select value={car} onChange={(e) => setCar(e.target.value)}>
        <option value="volvo">Volvo</option>
        <option value="bmw">BMW</option>
        <option value="audi">Audi</option>
        <option value="mercedes">Mercedes</option>
      </select>
      <p>You selected: {car}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Volvo will be selected by default.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Multiple Select</h3>
              <p>
                By adding the <code>multiple</code> attribute, you can allow multiple selections.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Select</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const [languages, setLanguages] = useState([]);

  const handleChange = (event) => {
    const options = Array.from(event.target.selectedOptions, option => option.value);
    setLanguages(options);
  };

  return (
    <div>
      <h2>Select Programming Languages</h2>
      <select multiple value={languages} onChange={handleChange}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>
      </select>
      <p>You selected: {languages.join(", ")}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A multiple select dropdown for programming languages.</p>
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
                    <li>React uses <code>value</code> and <code>onChange</code> instead of <code>selected</code>.</li>
                    <li>Default option is set using state initialization.</li>
                    <li>Multiple selections are possible using the <code>multiple</code> attribute.</li>
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

export default ReactSelect;
