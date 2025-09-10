import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryDimensions = () => {
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
              <h1>jQuery Dimensions</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jquerycss">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerytraversing">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery Dimensions</b> methods are used to get the width, height, and other dimensions of elements. These methods help in creating responsive and dynamic layouts.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Width and Height
              </h3>
              <p>The <code>.width()</code> and <code>.height()</code> methods are used to get the current width and height of an element.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#get-dimensions").click(function(){
    alert("Width: " + $("#box").width() + "px, Height: " + $("#box").height() + "px");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Inner Width and Height
              </h3>
              <p>The <code>.innerWidth()</code> and <code>.innerHeight()</code> methods include padding but not borders.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#get-inner").click(function(){
    alert("Inner Width: " + $("#box").innerWidth() + "px, Inner Height: " + $("#box").innerHeight() + "px");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Outer Width and Height
              </h3>
              <p>The <code>.outerWidth(true)</code> and <code>.outerHeight(true)</code> methods include borders and optionally margins.</p>
              <pre className="bg-light p-3 rounded">
{`$(document).ready(function(){
  $("#get-outer").click(function(){
    alert("Outer Width: " + $("#box").outerWidth(true) + "px, Outer Height: " + $("#box").outerHeight(true) + "px");
  });
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example CSS
              </h3>
              <p>Here’s how the box can be styled:</p>
              <pre className="bg-light p-3 rounded">
{`#box {
  width: 200px;
  height: 150px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  background-color: #f2f2f2;
}`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example HTML
              </h3>
              <pre className="bg-light p-3 rounded">
{`<div id="box">This is a box.</div>
<button id="get-dimensions">Get Width & Height</button>
<button id="get-inner">Get Inner Dimensions</button>
<button id="get-outer">Get Outer Dimensions</button>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Use Cases
              </h3>
              <ul>
                <li>Adjust layout dynamically based on element size.</li>
                <li>Get padding, borders, and margin information.</li>
                <li>Create interactive and responsive user interfaces.</li>
              </ul>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>.width()</code> and <code>.height()</code> to get dimensions without padding or borders.</li>
                <li><code>.innerWidth()</code> and <code>.innerHeight()</code> include padding.</li>
                <li><code>.outerWidth(true)</code> and <code>.outerHeight(true)</code> include padding, borders, and margins.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryDimensions;
