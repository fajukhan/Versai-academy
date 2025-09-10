import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JquerySyntax = () => {
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
              <h1>jQuery Syntax</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerygetstarted">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryselectors">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The basic syntax of jQuery is designed to make it easy to select HTML elements and perform actions on them.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>jQuery Syntax</h3>
              <p>The basic structure of jQuery is:</p>
              <pre className="bg-light p-3 rounded">
{`$(selector).action()`}
              </pre>
              <p>Where:</p>
              <ul>
                <li><code>$</code> refers to jQuery.</li>
                <li><code>selector</code> finds HTML elements.</li>
                <li><code>action()</code> performs tasks on the selected elements.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Example: Change Text</h3>
              <p>This example shows how to change the text of a paragraph:</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("button").click(function(){
    $("#demo").text("Hello, jQuery!");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Example: Hide an Element</h3>
              <p>This example hides a paragraph when a button is clicked:</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("button").click(function(){
    $("#demo").hide();
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Chaining Actions</h3>
              <p>You can chain multiple actions together:</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("button").click(function(){
    $("#demo").css("color", "red").slideUp(2000).slideDown(2000);
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Document Ready Event</h3>
              <p>The <code>$(document).ready()</code> function ensures that your code runs after the document is fully loaded:</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  // Code here
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li>jQuery uses <code>$()</code> to select elements and perform actions.</li>
                <li>Use selectors to target elements and actions to manipulate them.</li>
                <li>Chaining allows multiple actions in one statement.</li>
                <li>Always use <code>$(document).ready()</code> to ensure the DOM is loaded.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JquerySyntax;
