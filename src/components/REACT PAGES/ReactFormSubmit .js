import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactFormSubmit = () => {
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
