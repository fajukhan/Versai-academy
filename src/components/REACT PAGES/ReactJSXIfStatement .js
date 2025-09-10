import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactJSXIfStatement = () => {
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
              <h1>React JSX If Statement</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactjsxattributes">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactcomponents">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                JSX does not support <code>if-else</code> statements directly inside the markup.  
                Instead, you can use conditional rendering with JavaScript techniques like:
              </p>
              <ul>
                <li>Using <b>if statements</b> outside the return</li>
                <li>Using <b>ternary operators</b> inside JSX</li>
                <li>Using <b>logical AND (&&)</b> for short conditions</li>
              </ul>

              {/* Example 1 */}
              <h3>1. If Statement Outside JSX</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">If statement before return</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Greeting(props) {
  let message;
  if (props.isLoggedIn) {
    message = <h2>Welcome Back!</h2>;
  } else {
    message = <h2>Please Log In</h2>;
  }
  return message;
}`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Welcome Back! (if isLoggedIn = true)
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2 */}
              <h3>2. Ternary Operator</h3>
              <p>
                The ternary operator is commonly used for inline conditions in JSX.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Ternary Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Greeting(props) {
  return (
    <h2>{props.isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>
  );
}`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Welcome Back! (if true)  
Please Log In (if false)
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3 */}
              <h3>3. Logical AND (&&)</h3>
              <p>
                Use <code>&&</code> when you only want to render something if a condition is true.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Logical AND Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Notification(props) {
  return (
    <div>
      <h2>Dashboard</h2>
      {props.hasMessage && <p>You have a new message!</p>}
    </div>
  );
}`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Dashboard  
You have a new message! (if hasMessage = true)
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
                    <li>JSX does not support <code>if</code> statements directly inside markup.</li>
                    <li>Use normal <code>if-else</code> before the return statement.</li>
                    <li>Use the <b>ternary operator</b> for inline conditions.</li>
                    <li>Use <b>logical AND (&&)</b> for rendering only when condition is true.</li>
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

export default ReactJSXIfStatement;
