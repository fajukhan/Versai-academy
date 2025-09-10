import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JquerySlide = () => {
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
              <h1>jQuery Slide</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryfade">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryanimation">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery provides slide methods to smoothly hide or show elements by sliding them up or down.  
                These methods are commonly used to create accordions, toggle menus, or reveal additional content.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Slide Down</h3>
              <p>Use <code>.slideDown()</code> to reveal an element by sliding it down:</p>
              <pre className="bg-light p-3 rounded">
{`$("#slideDownBtn").click(function(){
  $("#panel").slideDown();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Slide Up</h3>
              <p>Use <code>.slideUp()</code> to hide an element by sliding it up:</p>
              <pre className="bg-light p-3 rounded">
{`$("#slideUpBtn").click(function(){
  $("#panel").slideUp();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Slide Toggle</h3>
              <p>Use <code>.slideToggle()</code> to toggle between sliding up and sliding down:</p>
              <pre className="bg-light p-3 rounded">
{`$("#slideToggleBtn").click(function(){
  $("#panel").slideToggle();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Slide with Duration</h3>
              <p>You can specify the duration in milliseconds to control how fast or slow the slide animation happens:</p>
              <pre className="bg-light p-3 rounded">
{`$("#slideSlow").click(function(){
  $("#panel").slideUp(2000);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Complete Example</h3>
              <p>This example shows how multiple slide effects can be combined:</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#slideDownBtn").click(function(){
    $("#panel").slideDown();
  });
  $("#slideUpBtn").click(function(){
    $("#panel").slideUp();
  });
  $("#slideToggleBtn").click(function(){
    $("#panel").slideToggle();
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li><code>.slideDown()</code> shows elements by sliding them down.</li>
                <li><code>.slideUp()</code> hides elements by sliding them up.</li>
                <li><code>.slideToggle()</code> toggles between sliding up and down.</li>
                <li>Duration can be set to control animation speed.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JquerySlide;
