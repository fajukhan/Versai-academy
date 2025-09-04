import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactPropsDestructuring = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
                                                                      {/* Sidebar (Left - col-2) */}
      <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
  <h5 className="fw-bold mt-4">React Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="react">React Home</a></li>
    <li><a href="reactintroduction">React Intro</a></li>
    <li><a href="reactgetstarted">React Get Started</a></li>
    <li><a href="reactfirstapp">React First App</a></li>
    <li><a href="reactrenderhtml">React Render HTML</a></li>
    <li><a href="reactupgrade">React Upgrade</a></li>
    <li><a href="reactes6">React ES6</a></li>
    <li><a href="reactjsx">React JSX Intro</a></li>
    <li><a href="reactjsxexpressions">React JSX Expressions</a></li>
    <li><a href="reactjsxattributes">React JSX Attributes</a></li>
    <li><a href="reactjsxifstatment">React JSX If Statements</a></li>
    <li><a href="reactcomponents">React Components</a></li>
    <li><a href="reactclass">React Class</a></li>
    <li><a href="reactprops">React Props</a></li>
    <li><a href="reactpropsdestructuring">React Props Destructuring</a></li>
    <li><a href="reactpropschildren">React Props Children</a></li>
    <li><a href="reactevents">React Events</a></li>
    <li><a href="reactconditional">React Conditionals</a></li>
    <li><a href="reactlist">React Lists</a></li>
    <li><a href="reactforms">React Forms</a></li>
    <li><a href="/">React Forms Submit</a></li>
    <li><a href="/">React Textarea</a></li>
    <li><a href="/">React Select</a></li>
    <li><a href="/">React Multiple Inputs</a></li>
    <li><a href="/">React Checkbox</a></li>
    <li><a href="/">React Radio</a></li>
    <li><a href="/">React Portals</a></li>
    <li><a href="/">React Suspense</a></li>
    <li><a href="/">React CSS Styling</a></li>
    <li><a href="/">React CSS Modules</a></li>
    <li><a href="/">React CSS-in-JS</a></li>
    <li><a href="/">React Router</a></li>
    <li><a href="/">React Transitions</a></li>
    <li><a href="/">React Forward Ref</a></li>
    <li><a href="/">React HOC</a></li>
    <li><a href="/">React Sass</a></li>
  </ul>

  <h5 className="fw-bold">React Hooks</h5>
  <ul className="list-unstyled">
    <li><a href="/">What is Hooks?</a></li>
    <li><a href="/">React useState</a></li>
    <li><a href="/">React useEffect</a></li>
    <li><a href="/">React useContext</a></li>
    <li><a href="/">React useRef</a></li>
    <li><a href="/">React useReducer</a></li>
    <li><a href="/">React useCallback</a></li>
    <li><a href="/">React useMemo</a></li>
    <li><a href="/">React Custom Hooks</a></li>
  </ul>
</div>

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>React Props Destructuring</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactprops">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactpropschildren">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Props Destructuring</b> is a cleaner way to extract values from props directly in the function parameters or inside the component. 
                It helps make your code shorter and more readable.
              </p>

              <h3>1. Destructuring in Function Parameters</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Destructuring in Function Parameter</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Welcome({ name, age }) {
  return <h2>Hello {name}, you are {age} years old!</h2>;
}

function App() {
  return <Welcome name="Alice" age="25" />;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello Alice, you are 25 years old!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Destructuring Inside the Function Body</h3>
              <p>
                You can also destructure props inside the component body for more flexibility.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Destructuring Inside Function</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Welcome(props) {
  const { name, age } = props;
  return <h2>Hello {name}, you are {age} years old!</h2>;
}

function App() {
  return <Welcome name="Bob" age="30" />;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello Bob, you are 30 years old!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Destructuring in Class Components</h3>
              <p>
                In class components, you can destructure props from <code>this.props</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Destructuring in Class Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

class Car extends React.Component {
  render() {
    const { brand, model } = this.props;
    return <h2>This car is a {brand} {model}!</h2>;
  }
}

function App() {
  return <Car brand="Tesla" model="Model 3" />;
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
This car is a Tesla Model 3!
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
                    <li>Props destructuring makes code cleaner and more readable.</li>
                    <li>You can destructure directly in the function parameters or inside the body.</li>
                    <li>In class components, destructure props from <code>this.props</code>.</li>
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

export default ReactPropsDestructuring;
