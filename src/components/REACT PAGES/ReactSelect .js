import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactSelect = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
            
                     {/* Sidebar (Left - col-2) */}
                         <SidebarReact />
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
