import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactUpgrade = () => {
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
              <h1>React Upgrade</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactes6">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactes6">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                React is actively developed, and new versions are released frequently with bug fixes, performance improvements, and new features.  
                Keeping your React project updated ensures better security, stability, and compatibility with modern tools.
              </p>

              <h3>1. Check Current React Version</h3>
              <p>You can check which version of React you are using by running:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">{`npm list react`}</pre>
                  <p>or inside your project’s <code>package.json</code> file.</p>
                </div>
              </div>

              <h3>2. Upgrade React to Latest Version</h3>
              <p>Run the following commands to upgrade both <b>react</b> and <b>react-dom</b>:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npm install react@latest react-dom@latest`}
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Upgrade React Scripts (for CRA apps)</h3>
              <p>If you are using <b>Create React App</b>, also update <code>react-scripts</code>:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npm install react-scripts@latest`}
                  </pre>
                </div>
              </div>

              <h3>4. Using npx to Create a Fresh App</h3>
              <p>
                Sometimes the easiest way to upgrade is to create a new app with the latest React version and move your code into it:
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`npx create-react-app my-new-app`}
                  </pre>
                  <p>Then copy your <code>src</code> files into the new project.</p>
                </div>
              </div>

              <h3>5. Checking Out Release Notes</h3>
              <p>
                Before upgrading, always check React’s official <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">Release Notes</a> to know about breaking changes and migration steps.
              </p>

              <h3>6. Example: Updating Dependencies</h3>
              <p>Below is how a <code>package.json</code> looks after upgrading React:</p>
              <div className="card my-4 shadow-sm">
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "5.0.1"
}`}
                  </pre>
                </div>
              </div>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Check current React version with <code>npm list react</code>.</li>
                    <li>Upgrade using <code>npm install react@latest react-dom@latest</code>.</li>
                    <li>Update <code>react-scripts</code> if using CRA.</li>
                    <li>Sometimes creating a new app with <code>npx create-react-app</code> is easier.</li>
                    <li>Always read official React release notes before upgrading.</li>
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

export default ReactUpgrade;
