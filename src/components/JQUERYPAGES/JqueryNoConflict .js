import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryNoConflict = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
                                                                        {/* Sidebar (Left - col-2) */}
                                <SidebarJquery />
            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>jQuery noConflict</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerygetpost">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryfilters">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                If other libraries also use the <code>$</code> symbol, jQuery may conflict.  
                <code>jQuery.noConflict()</code> releases the <code>$</code> symbol so other libraries can use it.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                noConflict Example
              </h3>
              <pre className="bg-light p-3 rounded">
{`// Release the $ symbol
var jq = jQuery.noConflict();

jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("Hello from jQuery without $!");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>jQuery.noConflict()</code> to avoid conflicts with other libraries using <code>$</code>.</li>
                <li>Assign jQuery to another variable like <code>var jq = jQuery.noConflict();</code> and use <code>jq()</code> instead of <code>$()</code>.</li>
                <li>Useful when multiple JavaScript libraries coexist in the same project.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryNoConflict;
