import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryAncestors = () => {
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
              <h1>jQuery Ancestors</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerytraversing">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerydescendant">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Ancestors</b> methods allow you to traverse up the DOM tree and select parent or ancestor elements of a selected element.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                parent() and parents()
              </h3>
              <p>Use <code>.parent()</code> to get the immediate parent, and <code>.parents()</code> to get all ancestors.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#btn-parent").click(function(){
    alert("Parent: " + $("#child").parent().attr("id"));
  });

  $("#btn-parents").click(function(){
    alert("Ancestors count: " + $("#child").parents().length);
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                closest()
              </h3>
              <p>The <code>.closest()</code> method returns the first ancestor that matches a selector.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#btn-closest").click(function(){
    alert("Closest ancestor: " + $("#child").closest(".container").attr("id"));
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example HTML
              </h3>
              <pre className="bg-light p-3 rounded">
{`<div id="grandparent" class="container">
  <div id="parent">
    <div id="child">Child</div>
  </div>
</div>

<button id="btn-parent">Get Parent</button>
<button id="btn-parents">Get All Ancestors</button>
<button id="btn-closest">Get Closest .container</button>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>.parent()</code> – gets the immediate parent element.</li>
                <li><code>.parents()</code> – gets all ancestor elements.</li>
                <li><code>.closest()</code> – gets the first matching ancestor.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryAncestors;
