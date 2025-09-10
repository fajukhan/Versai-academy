import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactPropsChildren = () => {
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
              <h1>React Props Children</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactpropsdestructuring">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactevents">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, <b>props.children</b> is used to display the content between the opening and closing tags of a component. 
                It allows us to create reusable wrapper or container components.
              </p>

              <h3>1. Basic Example of props.children</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Using props.children</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Wrapper(props) {
  return <div className="box">{props.children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h2>Hello from inside the Wrapper!</h2>
    </Wrapper>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Hello from inside the Wrapper!
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Multiple Children</h3>
              <p>
                The <code>props.children</code> can contain multiple child elements such as text, components, or elements.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Children</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Wrapper(props) {
  return <div className="box">{props.children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h2>Child 1</h2>
      <p>This is another child element</p>
    </Wrapper>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
Child 1
This is another child element
                  </pre>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Children with Styling</h3>
              <p>
                You can style the wrapper while still rendering whatever children are passed.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Styled Wrapper with Children</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function Card(props) {
  return <div style={{border: "1px solid gray", padding: "10px"}}>
    {props.children}
  </div>;
}

function App() {
  return (
    <Card>
      <h3>This is inside a Card</h3>
      <p>Reusable Card Component with children</p>
    </Card>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b></p>
                  <pre className="bg-light p-3 rounded">
This is inside a Card
Reusable Card Component with children
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
                    <li><code>props.children</code> represents the content passed between component tags.</li>
                    <li>Useful for wrapper, layout, or reusable container components.</li>
                    <li>Can hold single or multiple child elements.</li>
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

export default ReactPropsChildren;
