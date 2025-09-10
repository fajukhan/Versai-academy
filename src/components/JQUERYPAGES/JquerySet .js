import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JquerySet = () => {
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
              <h1>jQuery Set</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryget">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryadd">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Set</b> methods are used to set or change the values of HTML elements, such as text, HTML content, and input values.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Set Text Content</h3>
              <p>You can use the <code>.text()</code> method to set the text content of an element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#demo").text("Hello, jQuery!");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Set HTML Content</h3>
              <p>The <code>.html()</code> method sets the HTML content inside an element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#demo").html("<b>Hello, jQuery!</b>");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Set Input Value</h3>
              <p>You can use the <code>.val()</code> method to set the value of input elements.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#name").val("John Doe");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Use Cases</h3>
              <ul>
                <li>Change content dynamically without refreshing the page.</li>
                <li>Pre-fill form fields with default values.</li>
                <li>Modify sections of the webpage based on user interactions.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li><code>.text()</code> sets the text content of elements.</li>
                <li><code>.html()</code> sets the HTML content inside elements.</li>
                <li><code>.val()</code> sets the value of form inputs.</li>
                <li>These methods are essential for updating the webpage dynamically using jQuery.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JquerySet;
