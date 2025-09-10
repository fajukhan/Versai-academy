import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryTutorial = () => {
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
              <h1>jQuery Tutorial</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="/">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryintroduction">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery</b> is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>1. jQuery Syntax</h3>
              <p>The basic syntax of jQuery is:</p>
              <pre className="bg-light p-3 rounded">
{`$(selector).action()`}</pre>
              <p>Where:</p>
              <ul>
                <li><b>$</b> is the jQuery selector.</li>
                <li><b>selector</b> finds HTML elements.</li>
                <li><b>action()</b> is the jQuery action performed on the element.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>2. Example: Change Text on Button Click</h3>
              <pre className="bg-light p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function(){
      $("button").click(function(){
        $("#demo").text("Hello jQuery!");
      });
    });
  </script>
</head>
<body>
  <button>Click Me</button>
  <p id="demo">Original Text</p>
</body>
</html>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>3. jQuery Effects</h3>
              <p>jQuery offers many effects like hiding, showing, and fading elements easily.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>4. AJAX Example</h3>
              <p>You can load content from a server without refreshing the page.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#load").click(function(){
    $("#content").load("example.txt");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>5. Advantages of jQuery</h3>
              <ul>
                <li>Simplifies JavaScript programming.</li>
                <li>Cross-browser compatibility.</li>
                <li>Supports animations, effects, and AJAX easily.</li>
                <li>Lightweight and fast.</li>
              </ul>

              {/* Summary */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Summary</div>
                <div className="card-body">
                  <ul>
                    <li>jQuery is a fast, feature-rich JavaScript library.</li>
                    <li>It simplifies DOM manipulation, event handling, and animations.</li>
                    <li>Use it to build interactive web applications quickly.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryTutorial;
