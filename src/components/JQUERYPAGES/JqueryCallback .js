import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryCallback = () => {
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
              <h1>jQuery Callback</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerystop">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerychaining">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                A <b>callback</b> in jQuery is a function that is passed as an argument to another function and is executed after that function completes.  
                Callbacks are useful to ensure that code runs in the right sequence, especially when dealing with animations or asynchronous tasks.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Basic Callback Example</h3>
              <p>In this example, the callback is used to display a message after the fade out animation completes.</p>
              <pre className="bg-light p-3 rounded">
{`$("#fadeBtn").click(function(){
  $("#box").fadeOut(1000, function(){
    alert("Animation complete!");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Chaining Animations with Callback</h3>
              <p>You can chain animations by placing one inside the callback of another.</p>
              <pre className="bg-light p-3 rounded">
{`$("#chainBtn").click(function(){
  $("#box").slideUp(1000, function(){
    $(this).slideDown(1000);
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Using Callback with Custom Functions</h3>
              <p>You can also use callbacks with custom functions to execute code after a process is completed:</p>
              <pre className="bg-light p-3 rounded">
{`function myFunction(callback) {
  console.log("Doing something...");
  callback();
}

$("#myBtn").click(function(){
  myFunction(function(){
    alert("Callback executed!");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Why Use Callbacks?</h3>
              <ul>
                <li>Ensure tasks are executed in the correct order.</li>
                <li>Handle asynchronous operations like animations, AJAX requests, etc.</li>
                <li>Keep code organized and avoid unnecessary delays or errors.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li>Callbacks are functions passed into other functions to be executed later.</li>
                <li>They are useful for animations, asynchronous tasks, and keeping code in sequence.</li>
                <li>jQuery methods like <code>fadeOut()</code>, <code>slideUp()</code>, etc. support callbacks.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryCallback;
