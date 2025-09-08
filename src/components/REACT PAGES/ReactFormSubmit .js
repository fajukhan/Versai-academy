import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactFormSubmit = () => {
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
              <h1>React Form Submit</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactforms">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reacttextarea">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, form submission is usually handled with the <code>onSubmit</code> event. 
                Instead of letting the browser refresh the page, we use <code>event.preventDefault()</code> to stop the default behavior 
                and handle the form data with JavaScript.
              </p>

              <h3>1. Basic Form Submit</h3>
              <p>
                Here’s a simple example where we submit a form and show an alert with the input value.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Basic Form Submit</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted name: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name: </label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A form that asks for your name and alerts it after submit.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Multiple Input Form Submit</h3>
              <p>
                When a form has multiple input fields, you can store all the values in an object and update them dynamically.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Inputs</div>
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
    alert(\`Username: \${formData.username}, Email: \${formData.email}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input 
        type="text" 
        name="username" 
        value={formData.username} 
        onChange={handleChange} 
      />
      <br />
      <label>Email: </label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Form with multiple input fields (username + email).</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Handling Textarea and Select in Submit</h3>
              <p>
                You can also handle <code>textarea</code> and <code>select</code> fields the same way as inputs during submission.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Textarea & Select</div>
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
      <textarea 
        placeholder="Enter feedback" 
        value={feedback} 
        onChange={(e) => setFeedback(e.target.value)} 
      />
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
                  <p><b>Output:</b> A feedback form with textarea and dropdown selection.</p>
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
                    <li>Form submission in React is handled with the <code>onSubmit</code> event.</li>
                    <li><code>event.preventDefault()</code> stops the page from refreshing.</li>
                    <li>Use state to manage input values.</li>
                    <li>Works with input, textarea, and select elements.</li>
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

export default ReactFormSubmit;
