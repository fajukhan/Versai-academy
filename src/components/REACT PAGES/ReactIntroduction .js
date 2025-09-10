import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactIntroduction = () => {
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
              <h1>React Introduction</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="react">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactgetstarted">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React</b> is one of the most popular JavaScript libraries for building modern user interfaces.  
                It was created by <b>Facebook</b> in 2013 and is now maintained by Meta and a large developer community.
              </p>

              <h3>Why React?</h3>
              <ul>
                <li>Component-based: Build reusable UI pieces.</li>
                <li>Fast rendering with Virtual DOM.</li>
                <li>JSX syntax makes UI code more intuitive.</li>
                <li>Large ecosystem and community support.</li>
              </ul>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 1: React Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

function Greeting() {
  return <h2>Hello from React!</h2>;
}

export default Greeting;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>Features of React</h3>
              <ul>
                <li>Declarative: Describe what you want, React takes care of updates.</li>
                <li>Unidirectional data flow: Data flows one way, making apps predictable.</li>
                <li>Cross-platform: React Native allows building mobile apps.</li>
              </ul>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example 2: Using JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

const App = () => {
  const user = "Afraj";
  return <h2>Welcome, {user}!</h2>;
};

export default App;`}
                  </pre>
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
                    <li>Created by Facebook (Meta).</li>
                    <li>Uses components, JSX, and virtual DOM for efficiency.</li>
                    <li>Great for building single-page applications (SPAs).</li>
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

export default ReactIntroduction;
