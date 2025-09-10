import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryEvents = () => {
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
              <h1>jQuery Events</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryselectors">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryhideshow">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery makes it easy to handle events such as mouse clicks, keyboard presses, form submissions, and more.  
                It provides methods to bind event handlers to elements and manage user interactions.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Click Event</h3>
              <p>Run a function when an element is clicked:</p>
              <pre className="bg-light p-3 rounded">
{`$("#btn").click(function(){
  alert("Button clicked!");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Hover Event</h3>
              <p>Change style when the mouse hovers over an element:</p>
              <pre className="bg-light p-3 rounded">
{`$("#hoverDiv").hover(function(){
  $(this).css("background-color", "yellow");
}, function(){
  $(this).css("background-color", "");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Focus and Blur Events</h3>
              <p>Handle input focus and blur:</p>
              <pre className="bg-light p-3 rounded">
{`$("#input").focus(function(){
  $(this).css("background-color", "#ffffcc");
});

$("#input").blur(function(){
  $(this).css("background-color", "");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Form Submit Event</h3>
              <p>Prevent the default form submission and show an alert:</p>
              <pre className="bg-light p-3 rounded">
{`$("#myForm").submit(function(event){
  event.preventDefault();
  alert("Form submitted!");
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Key Events</h3>
              <p>Handle key presses in an input field:</p>
              <pre className="bg-light p-3 rounded">
{`$("#input").keypress(function(event){
  $("#output").text("Key pressed: " + event.which);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li>Use <code>.click()</code> for handling mouse clicks.</li>
                <li><code>.hover()</code> handles mouse over and out events.</li>
                <li>Focus and blur events track input interactions.</li>
                <li><code>.submit()</code> can prevent default form submission.</li>
                <li>Keyboard events are handled with <code>.keypress()</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryEvents;
