import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryChaining = () => {
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
              <h1>jQuery Chaining</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerycallback">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryget">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>Chaining</b> in jQuery allows you to execute multiple methods on the same set of elements in a single line of code.  
                This makes your code shorter and easier to read.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Basic Example of Chaining</h3>
              <p>This example shows how you can chain multiple methods:</p>
              <pre className="bg-light p-3 rounded">
{`$("#box").css("color", "red").slideUp(2000).slideDown(2000);`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Chaining Multiple Effects</h3>
              <p>You can chain different effects one after another to create animations:</p>
              <pre className="bg-light p-3 rounded">
{`$("#box").slideUp(1000)
         .slideDown(1000)
         .fadeOut(1000)
         .fadeIn(1000);`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Chaining with CSS Methods</h3>
              <p>You can also chain CSS changes:</p>
              <pre className="bg-light p-3 rounded">
{`$("#box").css("color", "blue")
         .css("background-color", "yellow")
         .slideUp(500)
         .slideDown(500);`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Why Use Chaining?</h3>
              <ul>
                <li>Reduces the need to repeatedly reference the same element.</li>
                <li>Makes your code cleaner and easier to maintain.</li>
                <li>Allows you to apply multiple effects or styles in sequence smoothly.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li>jQuery chaining helps you write concise code by applying multiple methods to the same element.</li>
                <li>You can chain animations, CSS changes, and other effects in one statement.</li>
                <li>It enhances code readability and performance.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryChaining;
