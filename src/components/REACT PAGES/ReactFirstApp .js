import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactFirstApp = () => {
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
              <h1>React First App</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactgetstarted">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactrenderhtml">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Let’s build our very first React application!  
                We will start by creating a new project, running it, and writing a simple component.
              </p>

              <h3>1. Create a New React Project</h3>
              <p>We’ll use <b>Create React App</b> to generate a new project:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Command</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npx create-react-app my-first-app
cd my-first-app
npm start`}
                  </pre>
                  <p><b>Output:</b> A new React project is created and runs at <code>http://localhost:3000</code>.</p>
                </div>
              </div>

              <h3>2. Project Structure</h3>
              <p>After creating the app, you’ll see the following important files:</p>
              <ul>
                <li><code>src/index.js</code> → Entry point of the app</li>
                <li><code>src/App.js</code> → Main component</li>
                <li><code>public/index.html</code> → HTML template</li>
              </ul>

              <h3>3. First Edit in App.js</h3>
              <p>Let’s open <code>src/App.js</code> and change the code:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: App.js</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>My first React app is running!</p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. index.js File</h3>
              <p><code>index.js</code> renders the <code>App</code> component inside <code>root</code> element:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: index.js</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);`}
                  </pre>
                </div>
              </div>

              <h3>5. Run the Application</h3>
              <p>
                Save your changes and the app will reload automatically in your browser.  
                You should now see:  
                <code>Hello, World! My first React app is running!</code>
              </p>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>create-react-app</code> to create a new project.</li>
                    <li>React apps have an entry file (<code>index.js</code>) and components (like <code>App.js</code>).</li>
                    <li>Components return JSX which looks like HTML.</li>
                    <li>Running <code>npm start</code> launches the dev server.</li>
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

export default ReactFirstApp;
