import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactCheckbox = () => {
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
