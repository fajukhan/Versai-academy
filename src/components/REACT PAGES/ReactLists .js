import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactLists = () => {
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
              <h1>React Lists</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactconditional">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactforms">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, you can render lists of items using the JavaScript <code>map()</code> function.
                Each child in a list should have a unique <code>key</code> prop for efficient rendering.
              </p>

              <h3>1. Rendering a List of Items</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Rendering a List</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Displays an unordered list of fruits.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Using Objects in Lists</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Rendering a List of Objects</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "David" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Displays a list of user names.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>3. Rendering Components in a List</h3>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: List with Components</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function User(props) {
  return <li>{props.name}</li>;
}

function App() {
  const users = ["John", "Alice", "David"];

  return (
    <ul>
      {users.map((user, index) => (
        <User key={index} name={user} />
      ))}
    </ul>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> Displays a list of users using a separate <code>User</code> component.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>4. Using Index as Key (Not Recommended)</h3>
              <p>
                You can use the index of the array as a <code>key</code>, but it is not recommended if items may be reordered.
              </p>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>Use <code>map()</code> to render lists in React.</li>
                    <li>Each list item must have a unique <code>key</code> prop.</li>
                    <li>You can render strings, objects, or components inside lists.</li>
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

export default ReactLists;
