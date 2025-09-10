import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryAdd = () => {
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
              <h1>jQuery Add</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryset">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryremove">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Add</b> methods are used to add content before, after, or inside selected elements dynamically.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Add Content Before an Element</h3>
              <p>The <code>.before()</code> method inserts content before the selected element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#demo").before("<p>New paragraph before!</p>");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Add Content After an Element</h3>
              <p>The <code>.after()</code> method inserts content after the selected element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#demo").after("<p>New paragraph after!</p>");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Add Content Inside an Element at the Beginning</h3>
              <p>The <code>.prepend()</code> method inserts content at the beginning inside the selected element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#demo").prepend("<b>Prepended text!</b>");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Add Content Inside an Element at the End</h3>
              <p>The <code>.append()</code> method inserts content at the end inside the selected element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#demo").append("<i> Appended text!</i>");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Use Cases</h3>
              <ul>
                <li>Add elements dynamically without reloading the page.</li>
                <li>Insert content before or after existing elements for styling or layout.</li>
                <li>Build interactive web pages with user-driven content updates.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li><code>.before()</code> adds content before an element.</li>
                <li><code>.after()</code> adds content after an element.</li>
                <li><code>.prepend()</code> adds content inside at the beginning.</li>
                <li><code>.append()</code> adds content inside at the end.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryAdd;
