
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";


const React = () => {


 
  return (
    <>
     <Navbar />
    {/* Section-1 */}
<section  className="p-0">
  <div className="bg-white">
    <div className="row g-0">
      
      {/* Sidebar (Left - col-2) */}
    <SidebarReact />


      {/* Main Content (Middle - col-10) */}
      {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React Home</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactintro">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactintroduction">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React</b> is a JavaScript library developed by Facebook for building fast, 
                interactive, and reusable user interfaces, especially single-page applications (SPAs).
              </p>

              <p>
                It uses a <b>component-based architecture</b>, where the UI is divided into small, reusable pieces 
                called <b>components</b>. React also uses a <b>virtual DOM</b> to efficiently update and render changes.
              </p>

              {/* Example 1: Basic React Component */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: Basic React Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

function Welcome() {
  return <h2>Hello, React!</h2>;
}

export default Welcome;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: JSX */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: JSX in React</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

const App = () => {
  const name = "Afraj";
  return <h2>Hello {name}, welcome to React!</h2>;
};

export default App;`}
                  </pre>
                  <p>
                    JSX allows writing HTML-like syntax directly inside JavaScript. 
                    It makes the UI code more readable and expressive.
                  </p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Rendering a Component */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 3: Rendering a Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";

ReactDOM.render(<Welcome />, document.getElementById("root"));`}
                  </pre>
                  <p>
                    Here, the <b>Welcome</b> component is rendered inside the <code>div</code> 
                    with id <code>root</code> in <b>index.html</b>.
                  </p>
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
                    <li>React is a JavaScript library for building UIs.</li>
                    <li>Uses components to create reusable UI pieces.</li>
                    <li>JSX allows HTML-like syntax inside JavaScript.</li>
                    <li>ReactDOM is used to render components in the DOM.</li>
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

export default React;
