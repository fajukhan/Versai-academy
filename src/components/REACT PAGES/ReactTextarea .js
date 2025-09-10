import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactTextarea = () => {
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
              <h1>React Textarea</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactformsubmit">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactselect">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, the <code>&lt;textarea&gt;</code> element is used just like an input field. 
                Instead of using <code>defaultValue</code> like in plain HTML, we control it using React <b>state</b>.
              </p>

              <h3>1. Basic Textarea</h3>
              <p>
                A controlled textarea means its value is managed by React state.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Controlled Textarea</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Feedback Form</h2>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your feedback here..."
      />
      <p>Your feedback: {text}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A textarea where typed text is displayed below.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Multiline Textarea</h3>
              <p>
                The <code>rows</code> and <code>cols</code> attributes (or CSS) can be used to make a textarea larger.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiline Textarea</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const [story, setStory] = useState("");

  return (
    <div>
      <h2>Write Your Story</h2>
      <textarea 
        rows="6"
        cols="50"
        value={story}
        onChange={(e) => setStory(e.target.value)}
      />
      <p><b>Preview:</b> {story}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A bigger textarea with multiple rows.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Textarea with Form Submission</h3>
              <p>
                Textarea values can be submitted just like input fields using <code>onSubmit</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Submit Textarea Value</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message Submitted: " + message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message..."
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A textarea that submits the typed message with an alert.</p>
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
                    <li><code>&lt;textarea&gt;</code> in React is controlled by state.</li>
                    <li>Use <code>value</code> and <code>onChange</code> to manage content.</li>
                    <li>You can adjust size with <code>rows</code> and <code>cols</code>.</li>
                    <li>Textarea values can be submitted like input fields.</li>
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

export default ReactTextarea;
