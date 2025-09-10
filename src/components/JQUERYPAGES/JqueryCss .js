import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryCss = () => {
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
              <h1>jQuery Css</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerycssclasses">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerydimensions">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Css</b> methods are used to get or set style properties of HTML elements. You can dynamically change the appearance of elements using CSS properties.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Get CSS Properties
              </h3>
              <p>The <code>.css()</code> method can be used to get the value of a style property.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#get-btn").click(function(){
    var color = $("#demo").css("color");
    alert("The color is " + color);
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Set CSS Properties
              </h3>
              <p>You can set one or more CSS properties using <code>.css()</code>.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#set-btn").click(function(){
    $("#demo").css("color", "red");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Set Multiple CSS Properties
              </h3>
              <p>You can pass an object to <code>.css()</code> to set multiple properties at once.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#multi-btn").click(function(){
    $("#demo").css({
      "color": "green",
      "font-size": "20px",
      "border": "2px solid black"
    });
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example CSS
              </h3>
              <p>Here is an example CSS that styles the demo element:</p>
              <pre className="bg-light p-3 rounded">
{`#demo {
  padding: 10px;
  border: 1px solid #ccc;
}`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example HTML Structure
              </h3>
              <pre className="bg-light p-3 rounded">
{`<div id="demo">This is a demo element.</div>
<button id="get-btn">Get CSS</button>
<button id="set-btn">Set CSS</button>
<button id="multi-btn">Set Multiple CSS</button>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Use Cases
              </h3>
              <ul>
                <li>Change styles dynamically based on user interactions.</li>
                <li>Get current styles and respond accordingly.</li>
                <li>Animate elements by changing CSS properties smoothly.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>.css()</code> is used to get or set CSS properties.</li>
                <li>You can pass one property or multiple properties as an object.</li>
                <li>It enables interactive, dynamic styling of web pages.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryCss;
