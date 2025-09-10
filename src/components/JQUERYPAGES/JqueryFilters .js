import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryFilters = () => {
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
              <h1>jQuery Filtering</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerysiblings">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryajaxintro">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery provides powerful <b>filtering methods</b> to select specific elements from a group of selected elements.  
                These include <code>.first()</code>, <code>.last()</code>, <code>.eq()</code>, <code>.filter()</code>, <code>.not()</code>, and more.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Filtering Example
              </h3>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("li").first().css("color", "red");      // First li element
  $("li").last().css("color", "green");     // Last li element
  $("li").eq(2).css("color", "blue");       // Third li element (0-based index)
  $("li").not(":first").css("font-weight", "bold"); // All except first
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>.first()</code> and <code>.last()</code> to target the first or last element.</li>
                <li>Use <code>.eq(index)</code> to target a specific element by index.</li>
                <li>Use <code>.filter(selector)</code> to select elements matching a criteria.</li>
                <li>Use <code>.not(selector)</code> to exclude certain elements from selection.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryFilters;
