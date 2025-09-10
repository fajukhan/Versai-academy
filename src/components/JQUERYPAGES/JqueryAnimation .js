import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryAnimation = () => {
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
              <h1>jQuery Animation</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryslide">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerystop">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery’s <code>.animate()</code> method allows you to create custom animations by changing CSS properties over time.  
                This enables you to animate many aspects like height, width, opacity, or other numeric CSS values.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Basic Animation</h3>
              <p>You can animate one or more CSS properties with <code>.animate()</code>:</p>
              <pre className="bg-light p-3 rounded">
{`$("#animateBtn").click(function(){
  $("#box").animate({
    height: "200px",
    width: "200px"
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Animation with Multiple Properties</h3>
              <p>You can animate multiple properties at once by passing them in the object:</p>
              <pre className="bg-light p-3 rounded">
{`$("#animateBtn").click(function(){
  $("#box").animate({
    left: "300px",
    opacity: 0.5,
    height: "150px"
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Animation Duration</h3>
              <p>You can control how long the animation lasts by passing a duration in milliseconds:</p>
              <pre className="bg-light p-3 rounded">
{`$("#animateBtn").click(function(){
  $("#box").animate({
    left: "300px"
  }, 2000);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Callback Functions</h3>
              <p>You can execute code after the animation completes by passing a callback function:</p>
              <pre className="bg-light p-3 rounded">
{`$("#animateBtn").click(function(){
  $("#box").animate({
    left: "300px"
  }, 2000, function(){
    alert("Animation completed!");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Chaining Animations</h3>
              <p>You can chain multiple animations together for sequential effects:</p>
              <pre className="bg-light p-3 rounded">
{`$("#animateBtn").click(function(){
  $("#box")
    .animate({ left: "300px" }, 1000)
    .animate({ top: "150px" }, 1000)
    .animate({ left: "0" }, 1000)
    .animate({ top: "0" }, 1000);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Stop Animations</h3>
              <p>You can stop an animation before it completes using <code>.stop()</code>:</p>
              <pre className="bg-light p-3 rounded">
{`$("#stopBtn").click(function(){
  $("#box").stop();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li><code>.animate()</code> can animate CSS properties over time.</li>
                <li>You can animate multiple properties and set the duration.</li>
                <li>Callbacks allow code execution after animation completion.</li>
                <li>Animations can be chained for complex effects.</li>
                <li><code>.stop()</code> stops ongoing animations.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryAnimation;
