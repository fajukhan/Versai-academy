import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactMultipleInput = () => {
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
              <h1>React Multiple Input</h1>

              {/* Prev / Next */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reactselect">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reactcheckbox">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In React, when dealing with forms containing multiple input fields (like text, email, password, etc.), 
                we can handle all of them with a single <code>onChange</code> handler by using the <b>name</b> attribute.
              </p>

              <h3>1. Handling Multiple Inputs</h3>
              <p>
                We use one state object to store multiple values and update them dynamically based on the input <code>name</code>.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Multiple Input Fields</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Register Form</h2>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />
      <p>
        Username: {formData.username} <br />
        Email: {formData.email} <br />
        Password: {formData.password}
      </p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> A form with multiple input fields controlled by a single handler.</p>
                  <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">
                    <button className="try-btn mt-3">Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <h3>2. Dynamic Form with More Inputs</h3>
              <p>
                You can scale this approach for bigger forms without writing separate states for each input.
              </p>
              <div className="card my-4 shadow-sm">
                <div className="card-header">Example: Extended Form</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    city: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h2>User Information</h2>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />

      <p>
        {formData.firstName} {formData.lastName}, Age: {formData.age}, City: {formData.city}
      </p>
    </div>
  );
}

export default App;`}
                  </pre>
                  <p><b>Output:</b> You can fill multiple fields, and all data will be displayed dynamically.</p>
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
                    <li>Use one state object to handle multiple inputs.</li>
                    <li>Use the <code>name</code> attribute of inputs to update state dynamically.</li>
                    <li>Spread operator (<code>...</code>) helps to keep existing state values while updating only the changed field.</li>
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

export default ReactMultipleInput;
