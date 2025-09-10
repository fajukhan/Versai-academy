import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarReact from "../SidebarReact";

const ReactForwardRef = () => {
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
              <h1>React Forward Ref</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="reacttransitions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="reacthoc">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>React Forward Ref</b> is used to forward a ref through a component to one of its child components.  
                It allows parent components to directly access a DOM node or child component instance.
              </p>

              <h3>1. Basic Example</h3>
              <pre className="bg-light p-3 rounded">{`import React, { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => (
  <input ref={ref} type="text" placeholder="Type here..." />
));

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;`}</pre>

        <button className="try-btn my-5">Try it Yourself »</button>

              <h3>2. Forward Ref with Class Component</h3>
              <pre className="bg-light p-3 rounded">{`import React, { forwardRef, useRef } from "react";

class CustomInput extends React.Component {
  render() {
    return <input ref={this.props.inputRef} type="text" placeholder="Class Component" />;
  }
}

const ForwardedInput = forwardRef((props, ref) => {
  return <CustomInput {...props} inputRef={ref} />;
});

function App() {
  const inputRef = useRef(null);
  return (
    <div>
      <ForwardedInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

export default App;`}

</pre>
 <button className="try-btn my-5">Try it Yourself »</button>

             

              <h3>3. When to Use Forward Ref</h3>
              <ul>
                <li>Access a child DOM node directly from the parent.</li>
                <li>Integrate with third-party libraries that need DOM nodes.</li>
                <li>Improve reusability of components while exposing internal refs.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li><b>forwardRef</b> allows passing refs to child components.</li>
                    <li>Works with functional and class components.</li>
                    <li>Useful when parent needs direct access to child's DOM node or instance.</li>
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

export default ReactForwardRef;
