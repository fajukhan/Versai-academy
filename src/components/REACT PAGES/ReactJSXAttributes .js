import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactJSXAttributes = () => {
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
              <h1>React JSX Attributes</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactjsxexpressions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactjsxifstatment">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In JSX, you can use attributes just like in HTML, but with some differences.  
                Attributes in JSX follow <b>camelCase naming</b> instead of lowercase.  
                For example, <code>class</code> in HTML becomes <code>className</code> in JSX,  
                and <code>onclick</code> becomes <code>onClick</code>.
              </p>

              {/* Example 1: className */}
              <h3>1. className instead of class</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Using className in JSX</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const element = <h2 className="header">Hello React</h2>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Hello React (styled with class "header")</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2: onClick event */}
              <h3>2. Event Attributes (onClick)</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">onClick Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function showAlert() {
  alert("Button clicked!");
}
const element = <button onClick={showAlert}>Click Me</button>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Button (shows alert on click)</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3: Inline Styles */}
              <h3>3. Inline Styles</h3>
              <p>
                Inline styles are written as objects in JSX. The property names use camelCase.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Inline Style Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const styleObj = { color: "blue", fontSize: "20px" };
const element = <h2 style={styleObj}>Styled Text</h2>;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Styled Text (blue, 20px)</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4: Dynamic Attributes */}
              <h3>4. Dynamic Attributes</h3>
              <p>You can pass variables as attributes in JSX.</p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Dynamic Attributes Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const imgUrl = "https://via.placeholder.com/150";
const element = <img src={imgUrl} alt="Placeholder" />;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Image rendered with dynamic src</pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5: Boolean Attributes */}
              <h3>5. Boolean Attributes</h3>
              <p>
                In JSX, boolean attributes (like <code>disabled</code>, <code>checked</code>) should be written as <code>{`attr={true}`}</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Boolean Attribute Example</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`const element = <input type="checkbox" checked={true} />;
ReactDOM.render(element, document.getElementById('root'));`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">Checkbox (checked by default)</pre>
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
                    <li>Use <code>className</code> instead of <code>class</code> in JSX.</li>
                    <li>Event names like <code>onClick</code>, <code>onChange</code> are camelCase.</li>
                    <li>Inline styles are objects with camelCase properties.</li>
                    <li>Attributes can be dynamic using variables.</li>
                    <li>Boolean attributes should be written as <code>{`attr={true}`}</code>.</li>
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

export default ReactJSXAttributes;
