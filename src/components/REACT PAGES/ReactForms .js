import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactForms = () => {
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
    <li><a href="/">React Forms Submit</a></li>
    <li><a href="/">React Textarea</a></li>
    <li><a href="/">React Select</a></li>
    <li><a href="/">React Multiple Inputs</a></li>
    <li><a href="/">React Checkbox</a></li>
    <li><a href="/">React Radio</a></li>
    <li><a href="/">React Portals</a></li>
    <li><a href="/">React Suspense</a></li>
    <li><a href="/">React CSS Styling</a></li>
    <li><a href="/">React CSS Modules</a></li>
    <li><a href="/">React CSS-in-JS</a></li>
    <li><a href="/">React Router</a></li>
    <li><a href="/">React Transitions</a></li>
    <li><a href="/">React Forward Ref</a></li>
    <li><a href="/">React HOC</a></li>
    <li><a href="/">React Sass</a></li>
  </ul>

  <h5 className="fw-bold">React Hooks</h5>
  <ul className="list-unstyled">
    <li><a href="/">What is Hooks?</a></li>
    <li><a href="/">React useState</a></li>
    <li><a href="/">React useEffect</a></li>
    <li><a href="/">React useContext</a></li>
    <li><a href="/">React useRef</a></li>
    <li><a href="/">React useReducer</a></li>
    <li><a href="/">React useCallback</a></li>
    <li><a href="/">React useMemo</a></li>
    <li><a href="/">React Custom Hooks</a></li>
  </ul>
</div>


            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React Forms</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactlist">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactrouter">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Forms in React are used to handle user input. Unlike regular HTML forms, React forms are controlled using <b>state</b>. 
                This makes it easy to manage input values and handle form submissions efficiently.
              </p>

              <h3>1. Controlled Components</h3>
              <p>
                A controlled component is an input element whose value is controlled by React using state.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Simple Input Form</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name: </label>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A form that asks for your name and shows an alert on submit.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Multiple Inputs</h3>
              <p>
                You can handle multiple inputs in a single form by using the <code>name</code> attribute of inputs.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Form Inputs</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Username: " + formData.username + ", Email: " + formData.email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <br />
      <label>Email: </label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A form with username and email input fields.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Textarea and Select</h3>
              <p>
                Just like input fields, <code>textarea</code> and <code>select</code> are also controlled using state in React.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Textarea and Select</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState("");
  const [language, setLanguage] = useState("JavaScript");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(\`Feedback: \${feedback}, Language: \${language}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <br />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A form with a textarea and dropdown list.</p>
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
                    <li>React forms use controlled components managed by state.</li>
                    <li><code>onChange</code> event updates the state with new values.</li>
                    <li>Form submission can be handled with <code>onSubmit</code>.</li>
                    <li>Inputs, textareas, and selects all follow the same pattern.</li>
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

export default ReactForms;
