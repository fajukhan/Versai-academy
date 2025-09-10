import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryGetStarted = () => {
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
              <h1>jQuery Get Started</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryintroduction">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerysyntax">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery is a lightweight JavaScript library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>How to Add jQuery</h3>
              <p>You can add jQuery to your web project by including it via a CDN link inside the <code>&lt;head&gt;</code> section of your HTML file:</p>
              <pre className="bg-light p-3 rounded">
{`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Basic Structure</h3>
              <p>Here is the basic structure of an HTML page with jQuery included:</p>
              <pre className="bg-light p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
  <title>jQuery Example</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

  <h1>Hello, jQuery!</h1>

</body>
</html>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Using $(document).ready()</h3>
              <p>Always wrap your jQuery code inside <code>$(document).ready()</code> to ensure that the DOM is fully loaded before executing scripts:</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  // Your jQuery code here
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Example: Change Text</h3>
              <p>This example shows how to change the text of an HTML element using jQuery:</p>
              <pre className="bg-light p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
  <title>jQuery Example</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function(){
      $("button").click(function(){
        $("#demo").text("Hello, jQuery!");
      });
    });
  </script>
</head>
<body>

  <h1>jQuery Get Started</h1>
  <button>Click Me</button>
  <p id="demo">This is a paragraph.</p>

</body>
</html>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li>jQuery can be easily added via CDN links.</li>
                <li>Always use <code>$(document).ready()</code> to ensure the DOM is loaded before running scripts.</li>
                <li>jQuery simplifies JavaScript tasks such as DOM manipulation and event handling.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryGetStarted;
