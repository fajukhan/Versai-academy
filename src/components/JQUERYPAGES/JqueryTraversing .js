import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryTraversing = () => {
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
              <h1>jQuery Traversing</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerydimensions">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryancestors">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Traversing</b> methods allow you to navigate through the DOM and select elements relative to other elements.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Parent and Children
              </h3>
              <p>Use <code>.parent()</code> and <code>.children()</code> to traverse DOM up or down.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#btn-parent").click(function(){
    alert("Parent: " + $("#child").parent().attr("id"));
  });

  $("#btn-children").click(function(){
    alert("Children: " + $("#parent").children().length);
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Find and Closest
              </h3>
              <p>Use <code>.find()</code> to get descendants, and <code>.closest()</code> to get nearest ancestor matching selector.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#btn-find").click(function(){
    alert("Found: " + $("#parent").find(".child").length);
  });

  $("#btn-closest").click(function(){
    alert("Closest: " + $("#child").closest("#parent").attr("id"));
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Siblings
              </h3>
              <p>Use <code>.siblings()</code> to select all siblings of an element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#btn-siblings").click(function(){
    alert("Siblings count: " + $("#child").siblings().length);
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example HTML
              </h3>
              <pre className="bg-light p-3 rounded">
{`<div id="parent">
  <div id="child" class="child">Child</div>
  <div class="child">Child 2</div>
</div>

<button id="btn-parent">Get Parent</button>
<button id="btn-children">Get Children</button>
<button id="btn-find">Find .child</button>
<button id="btn-closest">Closest #parent</button>
<button id="btn-siblings">Get Siblings</button>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>.parent()</code> – selects the parent element.</li>
                <li><code>.children()</code> – selects child elements.</li>
                <li><code>.find()</code> – searches descendants matching a selector.</li>
                <li><code>.closest()</code> – selects the closest ancestor.</li>
                <li><code>.siblings()</code> – selects all siblings of the element.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryTraversing;
