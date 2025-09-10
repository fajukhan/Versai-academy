import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryHideShow = () => {
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
              <h1>jQuery Hide/Show</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryevents">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryfade">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery provides simple methods to hide or show elements on your web page.  
                These methods can be used to create interactive UI elements such as toggles, collapsible menus, or animations.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Hide Element</h3>
              <p>Use <code>.hide()</code> to hide an element:</p>
              <pre className="bg-light p-3 rounded">
{`$("#hideBtn").click(function(){
  $("#text").hide();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Show Element</h3>
              <p>Use <code>.show()</code> to show an element:</p>
              <pre className="bg-light p-3 rounded">
{`$("#showBtn").click(function(){
  $("#text").show();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Toggle Element</h3>
              <p>Use <code>.toggle()</code> to switch between hide and show:</p>
              <pre className="bg-light p-3 rounded">
{`$("#toggleBtn").click(function(){
  $("#text").toggle();
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Hide with Duration</h3>
              <p>You can hide an element with an animation duration:</p>
              <pre className="bg-light p-3 rounded">
{`$("#hideSlow").click(function(){
  $("#text").hide(1000);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Show with Duration</h3>
              <p>Similarly, you can show an element with animation duration:</p>
              <pre className="bg-light p-3 rounded">
{`$("#showSlow").click(function(){
  $("#text").show(1000);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li><code>.hide()</code> hides elements instantly or with animation.</li>
                <li><code>.show()</code> displays elements instantly or with animation.</li>
                <li><code>.toggle()</code> switches between hiding and showing elements.</li>
                <li>You can pass durations in milliseconds to create animations.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryHideShow;
