import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactProps = () => {
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
              <h1>React Props</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactclass">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactpropsdestructuring">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Props</b> (short for "properties") are used to pass data from one component to another.  
                Props are read-only, meaning they cannot be modified inside the component that receives them.
              </p>

              <h3>1. Passing Props to a Function Component</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Props in Function Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello, Alice!  
Hello, Bob!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Props in Class Components</h3>
              <p>
                In class components, props are accessed with <code>this.props</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Props in Class</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

function App() {
  return <Car brand="Tesla" />;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
I am a Tesla!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Passing Objects as Props</h3>
              <p>
                You can also pass objects as props and access their properties inside the child component.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Object Props</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Car(props) {
  return <h2>{props.brand.model} is made by {props.brand.name}</h2>;
}

function App() {
  const carInfo = { name: "Tesla", model: "Model 3" };
  return <Car brand={carInfo} />;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Model 3 is made by Tesla
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Children Props</h3>
              <p>
                Every component has a special prop called <code>children</code>, which represents the content between the opening and closing tags of a component.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Using children Prop</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Layout(props) {
  return (
    <div>
      <header>Header</header>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h2>Welcome to my site!</h2>
    </Layout>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Header  
Welcome to my site!  
Footer
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
                    <li>Props are used to pass data from parent to child components.</li>
                    <li>Props are <b>read-only</b> (cannot be changed by the child).</li>
                    <li>Props can be strings, numbers, objects, arrays, or even functions.</li>
                    <li><code>props.children</code> lets you nest elements inside components.</li>
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

export default ReactProps;
