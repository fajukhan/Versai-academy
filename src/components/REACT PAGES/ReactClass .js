import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReactClass = () => {
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
              <h1>React Class Components</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactcomponents">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactprops">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, <b>Class Components</b> are ES6 classes that extend <code>React.Component</code>.  
                They can contain their own state, lifecycle methods, and must define a <code>render()</code> method that returns JSX.
              </p>

              <h3>1. Basic Class Component</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Simple Class Component</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import React from "react";

class Welcome extends React.Component {
  render() {
    return <h2>Hello, I am a Class Component!</h2>;
  }
}

export default Welcome;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello, I am a Class Component!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Class Component with Constructor</h3>
              <p>
                You can add a <code>constructor()</code> to initialize state or bind methods.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Class with Constructor</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Car extends React.Component {
  constructor() {
    super();
    this.state = { brand: "Ford" };
  }

  render() {
    return <h2>This is a {this.state.brand}!</h2>;
  }
}

export default Car;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
This is a Ford!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Updating State in Class Component</h3>
              <p>
                State is mutable and can be updated with <code>this.setState()</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Updating State</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Car extends React.Component {
  constructor() {
    super();
    this.state = { brand: "Ford" };
  }

  changeBrand = () => {
    this.setState({ brand: "Tesla" });
  };

  render() {
    return (
      <div>
        <h2>This is a {this.state.brand}!</h2>
        <button onClick={this.changeBrand}>Change Brand</button>
      </div>
    );
  }
}

export default Car;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
This is a Ford!  
[Click Button] → This is a Tesla!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Lifecycle Methods in Class Components</h3>
              <p>
                Class components include lifecycle methods like <code>componentDidMount()</code>, <code>componentDidUpdate()</code>, and <code>componentWillUnmount()</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Using componentDidMount</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`class Timer extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return <h2>Timer: {this.state.count}</h2>;
  }
}

export default Timer;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Timer: 0  
Timer: 1  
Timer: 2  
...
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
                    <li>Class components extend <code>React.Component</code>.</li>
                    <li>They must include a <code>render()</code> method that returns JSX.</li>
                    <li>They can hold and update <b>state</b> with <code>this.state</code> and <code>this.setState()</code>.</li>
                    <li>They support lifecycle methods for advanced functionality.</li>
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

export default ReactClass;
