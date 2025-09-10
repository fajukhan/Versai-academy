import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactEvents = () => {
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
              <h1>React Events</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactpropschildren">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactconditional">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, events are handled similar to HTML events, but with some differences:
              </p>
              <ul>
                <li>Event names are written in <b>camelCase</b> (e.g., <code>onClick</code>, <code>onChange</code>).</li>
                <li>You pass a function as the event handler instead of a string.</li>
              </ul>

              <h3>1. Handling Click Event</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Button Click Event</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  function showMessage() {
    alert("Button was clicked!");
  }

  return (
    <div>
      <button onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Clicking the button shows an alert message.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Passing Arguments to Event Handlers</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Passing Arguments</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  function greet(name) {
    alert("Hello, " + name);
  }

  return (
    <div>
      <button onClick={() => greet("Afraj")}>Greet Me</button>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Clicking the button shows: <code>Hello, Afraj</code>.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Event Handling in Class Components</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Class Component Event</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React, { Component } from "react";

class App extends Component {
  handleClick() {
    alert("Class Component Button Clicked!");
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Clicking the button shows an alert from a class method.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Common Events in React</h3>
              <ul>
                <li><code>onClick</code> - triggered when an element is clicked</li>
                <li><code>onChange</code> - triggered when input changes</li>
                <li><code>onSubmit</code> - triggered on form submission</li>
                <li><code>onMouseOver</code> - triggered when mouse hovers</li>
                <li><code>onKeyDown</code> - triggered when a key is pressed</li>
              </ul>

              {/* Example: onChange Event */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Input onChange Event</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Displays the text typed into the input field.</p>
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
                    <li>React uses <b>camelCase</b> for event names.</li>
                    <li>Pass a function as the event handler.</li>
                    <li>Supports both functional and class components.</li>
                    <li>Events like <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code> are commonly used.</li>
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

export default ReactEvents;
