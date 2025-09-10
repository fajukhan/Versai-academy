import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryRemove = () => {
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
              <h1>jQuery Remove</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryadd">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerycssclasses">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Remove</b> methods are used to remove elements or their content from the DOM.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Remove Elements
              </h3>
              <p>The <code>.remove()</code> method removes the selected element and its content completely from the DOM.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#remove-btn").click(function(){
    $("#demo").remove();
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Empty Elements
              </h3>
              <p>The <code>.empty()</code> method removes only the content inside the selected element but leaves the element itself intact.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#empty-btn").click(function(){
    $("#demo").empty();
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Difference between remove() and empty()
              </h3>
              <ul>
                <li><b>remove()</b>: Removes the element and its content completely from the DOM.</li>
                <li><b>empty()</b>: Removes only the content inside the element but keeps the element in the DOM.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example HTML Structure
              </h3>
              <pre className="bg-light p-3 rounded">
{`<div id="demo">
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
</div>
<button id="remove-btn">Remove</button>
<button id="empty-btn">Empty</button>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Use Cases
              </h3>
              <ul>
                <li>Remove outdated or unwanted elements dynamically.</li>
                <li>Empty container elements without removing the structure.</li>
                <li>Improve performance by removing unused DOM elements.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>.remove()</code> deletes the element and its content from the page.</li>
                <li><code>.empty()</code> clears the content but keeps the element in place.</li>
                <li>These methods are useful for dynamic web applications.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryRemove;
