import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JquerySelectors = () => {
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
              <h1>jQuery Selectors</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerysyntax">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryevents">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery selectors are used to find or select HTML elements based on their name, id, classes, types, attributes, values, and much more.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Select by Element</h3>
              <p>Select all <code>&lt;p&gt;</code> elements:</p>
              <pre className="bg-light p-3 rounded">
{`$("p").css("color", "red");`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Select by ID</h3>
              <p>Select an element by its id:</p>
              <pre className="bg-light p-3 rounded">
{`$("#demo").hide();`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Select by Class</h3>
              <p>Select elements by their class:</p>
              <pre className="bg-light p-3 rounded">
{`$(".example").css("font-weight", "bold");`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Select by Attribute</h3>
              <p>Select elements by attribute:</p>
              <pre className="bg-light p-3 rounded">
{`$("input[name='email']").val("example@example.com");`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Multiple Selectors</h3>
              <p>Select multiple elements at once:</p>
              <pre className="bg-light p-3 rounded">
{`$("p, .example, #demo").css("background-color", "yellow");`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Filter Selectors</h3>
              <p>Use filters like <code>:first</code>, <code>:last</code>, <code>:even</code>, etc.:</p>
              <pre className="bg-light p-3 rounded">
{`$("li:first").css("color", "blue");
$("li:odd").css("background-color", "#ccc");`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li>Use element selectors to target tags like <code>&lt;p&gt;</code>.</li>
                <li>ID selectors target specific elements with <code>id</code>.</li>
                <li>Class selectors target groups of elements.</li>
                <li>Attribute selectors are powerful for targeting inputs and other elements.</li>
                <li>Filter selectors allow advanced targeting.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JquerySelectors;
