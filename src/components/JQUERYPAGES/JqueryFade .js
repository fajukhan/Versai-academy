import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryFade = () => {
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
              <h1>jQuery Fade</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryhideshow">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryslide">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery provides fade methods to smoothly transition elements in or out.  
                These methods are useful for creating animations that enhance the user experience without abrupt changes.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Fade In</h3>
              <p>Use <code>.fadeIn()</code> to gradually display an element:</p>
              <pre className="bg-light p-3 rounded">
{`$("#fadeInBtn").click(function(){
  $("#text").fadeIn();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Fade Out</h3>
              <p>Use <code>.fadeOut()</code> to gradually hide an element:</p>
              <pre className="bg-light p-3 rounded">
{`$("#fadeOutBtn").click(function(){
  $("#text").fadeOut();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Fade Toggle</h3>
              <p>Use <code>.fadeToggle()</code> to switch between fading in and out:</p>
              <pre className="bg-light p-3 rounded">
{`$("#fadeToggleBtn").click(function(){
  $("#text").fadeToggle();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Fade with Duration</h3>
              <p>You can specify the duration in milliseconds for the fade effect:</p>
              <pre className="bg-light p-3 rounded">
{`$("#fadeSlow").click(function(){
  $("#text").fadeOut(2000);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Fade to Opacity</h3>
              <p>Use <code>.fadeTo()</code> to set the opacity to a certain value:</p>
              <pre className="bg-light p-3 rounded">
{`$("#fadeToBtn").click(function(){
  $("#text").fadeTo(1000, 0.3);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li><code>.fadeIn()</code> and <code>.fadeOut()</code> control element visibility smoothly.</li>
                <li><code>.fadeToggle()</code> alternates between fade in and out.</li>
                <li><code>.fadeTo()</code> adjusts opacity to a specific value.</li>
                <li>Animations improve user interaction by providing gradual transitions.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryFade;
