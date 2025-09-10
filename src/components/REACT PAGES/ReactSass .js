import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactSass = () => {
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
              <h1>React Sass</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reacthoc">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reacthooks">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Sass</b> (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds power and elegance to the basic CSS language.  
                You can use Sass in React projects to write nested rules, variables, mixins, and more.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. Installing Sass</h3>
              <p>Install Sass in your React project:</p>
              <pre className="bg-light p-3 rounded">npm install sass</pre>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. Creating a Sass File</h3>
              <p>Create a file with <code>.scss</code> extension, for example: <code>App.scss</code></p>
              <pre className="bg-light p-3 rounded">
{`$primary-color: #3498db;

.container {
  text-align: center;
  color: $primary-color;
}`}
              </pre>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. Importing Sass File</h3>
              <p>Import the Sass file into your React component:</p>
              <pre className="bg-light p-3 rounded">
{`import './App.scss';

function App() {
  return (
    <div className="container">
      <h1>Hello React with Sass!</h1>
    </div>
  );
}

export default App;`}
              </pre>

              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>4. Nested Rules</h3>
              <pre className="bg-light p-3 rounded">
{`.container {
  text-align: center;
  color: $primary-color;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-style: italic;
  }
}`}
              </pre>

              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>5. Advantages of Sass</h3>
              <ul>
                <li>Variables to store reusable values.</li>
                <li>Nested rules for better structure.</li>
                <li>Mixins for reusable code blocks.</li>
                <li>Partials and imports for modular styles.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Sass extends CSS with variables, nested rules, mixins, and more.</li>
                    <li>Use <code>.scss</code> files in React by importing them.</li>
                    <li>Enhances maintainability and readability of your styles.</li>
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

export default ReactSass;
