import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryStop = () => {
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
              <h1>jQuery Stop</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryanimation">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerycallback">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>.stop()</code> method in jQuery is used to stop the currently running animations on the selected elements.  
                This is useful when you want to prevent animations from queuing up or to interrupt animations before they complete.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Basic Usage of .stop()</h3>
              <p>You can stop an ongoing animation by calling <code>.stop()</code> on the element:</p>
              <pre className="bg-light p-3 rounded">
{`$("#stopBtn").click(function(){
  $("#box").stop();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Stop Animation Immediately</h3>
              <p>You can stop the animation instantly without completing it by calling <code>.stop(true)</code>:</p>
              <pre className="bg-light p-3 rounded">
{`$("#stopBtn").click(function(){
  $("#box").stop(true);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Stop Animation and Jump to Final State</h3>
              <p>If you want to stop the animation and immediately set the element to its final state, use <code>.stop(true, true)</code>:</p>
              <pre className="bg-light p-3 rounded">
{`$("#stopBtn").click(function(){
  $("#box").stop(true, true);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Stopping Multiple Animations</h3>
              <p>You can stop animations on multiple elements at once:</p>
              <pre className="bg-light p-3 rounded">
{`$("#stopBtn").click(function(){
  $(".box").stop();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Use Cases</h3>
              <ul>
                <li>Prevent animation buildup when repeatedly triggering animations.</li>
                <li>Stop animations on user interaction, like clicks or hover events.</li>
                <li>Control the animation flow for smoother UI experience.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li><code>.stop()</code> stops currently running animations.</li>
                <li>You can pass parameters to control how animations are stopped.</li>
                <li>Helps prevent animation queues and provides better control over UI behavior.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryStop;
