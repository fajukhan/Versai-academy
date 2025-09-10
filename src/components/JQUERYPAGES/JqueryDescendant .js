import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryDescendant = () => {
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
              <h1>jQuery Descendant</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryancestors">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerysiblings">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Descendant</b> methods allow you to select all descendant elements of a given element.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                find()
              </h3>
              <p>The <code>.find()</code> method gets all descendants of the selected element, filtered by an optional selector.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#btn-find").click(function(){
    $("#container").find("p").css("color", "red");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                children()
              </h3>
              <p>The <code>.children()</code> method gets only the direct child elements of the selected element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#btn-children").click(function(){
    $("#container").children("p").css("font-weight", "bold");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example HTML
              </h3>
              <pre className="bg-light p-3 rounded">
{`<div id="container">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <div>
    <p>Paragraph 3 (nested)</p>
  </div>
</div>

<button id="btn-find">Find All Descendants</button>
<button id="btn-children">Select Direct Children</button>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>.find()</code> – gets all descendant elements filtered by selector.</li>
                <li><code>.children()</code> – gets only direct children of the selected element.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryDescendant;
