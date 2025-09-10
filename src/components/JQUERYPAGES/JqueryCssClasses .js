import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryCssClasses = () => {
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
              <h1>jQuery Css Classes</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryremove">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerycss">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Css Classes</b> methods allow you to add, remove, and toggle CSS classes dynamically on HTML elements.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Add Class
              </h3>
              <p>The <code>.addClass()</code> method adds one or more classes to the selected elements.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#add-btn").click(function(){
    $("#demo").addClass("highlight");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Remove Class
              </h3>
              <p>The <code>.removeClass()</code> method removes one or more classes from the selected elements.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#remove-btn").click(function(){
    $("#demo").removeClass("highlight");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Toggle Class
              </h3>
              <p>The <code>.toggleClass()</code> method toggles the specified class on or off depending on its current state.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#toggle-btn").click(function(){
    $("#demo").toggleClass("highlight");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example CSS
              </h3>
              <p>Define the CSS class to apply styles:</p>
              <pre className="bg-light p-3 rounded">
{`.highlight {
  background-color: yellow;
  font-weight: bold;
}`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example HTML Structure
              </h3>
              <pre className="bg-light p-3 rounded">
{`<div id="demo">This is a demo element.</div>
<button id="add-btn">Add Class</button>
<button id="remove-btn">Remove Class</button>
<button id="toggle-btn">Toggle Class</button>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Use Cases
              </h3>
              <ul>
                <li>Add styles dynamically based on user interaction.</li>
                <li>Remove unnecessary styles or reset the appearance.</li>
                <li>Toggle between different states or themes.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>.addClass()</code> adds classes to elements.</li>
                <li><code>.removeClass()</code> removes classes from elements.</li>
                <li><code>.toggleClass()</code> toggles classes on or off.</li>
                <li>These methods help create interactive and styled web pages.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryCssClasses;
