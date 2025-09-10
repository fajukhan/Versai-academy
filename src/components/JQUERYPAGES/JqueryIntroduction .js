import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryIntroduction = () => {
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
              <h1>jQuery Introduction</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquery">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerygetstarted">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery</b> is a fast, small, and feature-rich JavaScript library. It makes it easier to handle events, perform animations, manipulate the DOM, and create Ajax-based applications.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>What is jQuery?</h3>
              <p>jQuery simplifies JavaScript programming by providing easy-to-use methods and functions. It is compatible with all modern browsers and reduces the amount of code you need to write.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Why Use jQuery?</h3>
              <ul>
                <li>Write less code to achieve more functionality.</li>
                <li>Handle HTML document traversal and manipulation easily.</li>
                <li>Create smooth animations and effects.</li>
                <li>Simplify AJAX requests and responses.</li>
                <li>Compatible with all major browsers.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>How to Use jQuery?</h3>
              <p>First, you need to include the jQuery library in your HTML file. You can use a CDN link like this:</p>
              <pre className="bg-light p-3 rounded">
{`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Example: Hello jQuery</h3>
              <pre className="bg-light p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
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
  <button>Click Me</button>
  <p id="demo">This is a paragraph.</p>
</body>
</html>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>Summary</h3>
              <ul>
                <li>jQuery is a popular JavaScript library that simplifies coding.</li>
                <li>It provides easy methods for DOM manipulation, animations, and events.</li>
                <li>Using a CDN link, you can quickly include jQuery in your project.</li>
                <li>It works across all browsers and is widely used in web development.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryIntroduction;
