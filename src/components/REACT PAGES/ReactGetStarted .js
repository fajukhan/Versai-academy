import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactGetStarted = () => {
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
              <h1>React Get Started</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactintroduction">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactfirstapp">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                There are many ways to set up a <b>React</b> development environment.  
                You can use a simple HTML file with the React library, use online editors, or install tools like <b>Create React App</b> or <b>Vite</b> for professional projects.
              </p>

              <h3>1. Using Online Editor</h3>
              <p>
                The fastest way to try React is to use an online code editor like <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">CodeSandbox</a> or <a href="https://stackblitz.com/" target="_blank" rel="noopener noreferrer">StackBlitz</a>.  
                You don’t need to install anything, just start coding.
              </p>

              {/* Example 1 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Hello React</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, React!</h1>);`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Using Create React App</h3>
              <p>
                For larger projects, you can use the official tool <b>Create React App</b>.  
                It sets up everything for you (Webpack, Babel, development server, etc.).
              </p>

              {/* Example 2 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Command Line Setup</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npx create-react-app my-app
cd my-app
npm start`}
                  </pre>
                  <p><b>Output:</b> Starts a local development server and opens <code>http://localhost:3000</code>.</p>
                </div>
              </div>

              <h3>3. Using Vite (Faster Alternative)</h3>
              <p>
                <b>Vite</b> is a modern build tool that is faster and simpler than Create React App.
              </p>

              {/* Example 3 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Command Line Setup with Vite</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npm create vite@latest my-app
cd my-app
npm install
npm run dev`}
                  </pre>
                  <p><b>Output:</b> Starts a development server on <code>http://localhost:5173</code>.</p>
                </div>
              </div>

              <h3>4. Adding React to HTML (CDN)</h3>
              <p>
                You can also add React using CDN links inside a simple HTML file.  
                This is useful for learning or small experiments.
              </p>

              {/* Example 4 */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: React with CDN</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<!DOCTYPE html>
<html>
  <head>
    <title>React CDN Example</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(React.createElement("h1", null, "Hello from React!"));
    </script>
  </body>
</html>`}
                  </pre>
                  <a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>For beginners: use an online editor or CDN setup.</li>
                    <li>For projects: use <b>Create React App</b> or <b>Vite</b>.</li>
                    <li>React apps run on a development server (localhost).</li>
                    <li>After setup, you can start creating components and UIs.</li>
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

export default ReactGetStarted;
