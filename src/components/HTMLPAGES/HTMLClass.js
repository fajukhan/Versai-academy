
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const HTMLClass = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
              {/* Sidebar (Left - col-2) */}
           <Sidebar />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>
                HTML <span style={{ color: "#812B8F" }}>class</span> Attribute
              </h1>

            
                {/* Navigation Buttons */}
                          <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                            <a href="blockinline">
                              <button className="custom-btn">
                                <FaArrowLeft /> Previous
                              </button>
                            </a>
                            <a href="htmlid">
                              <button className="custom-btn">
                                Next <FaArrowRight />
                              </button>
                            </a>
                          </div>


              <p className="lead py-5">
                The <code>class</code> attribute is used to specify one or more
                class names for an element. It can be used by CSS and JavaScript
                to apply styles or manipulate the element.
              </p>

              {/* Example 1 */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example: Using Class in CSS</div>
                <div className="card-body">
                  <p>Here we define a class <code>.city</code> and use it in multiple elements:</p>
                  <pre className="bg-light p-3 rounded">
{`<style>
.city {
  background-color: #812B8F;
  color: white;
  padding: 10px;
  margin: 5px;
}
</style>

<div class="city">London</div>
<div class="city">Paris</div>
<div class="city">Tokyo</div>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_classes_capitals"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={{ background: "#812B8F", color: "#fff" }}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>

              {/* Example 2 */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example: Multiple Classes</div>
                <div className="card-body">
                  <p>You can add multiple classes to an element:</p>
                  <pre className="bg-light p-3 rounded">
{`<style>
.note {
  font-size: 18px;
}
.important {
  color: red;
}
</style>

<p class="note important">This is an important note.</p>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_classes_multiple"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={{ background: "#812B8F", color: "#fff" }}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>

              {/* Example 3 */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example: Class with JavaScript</div>
                <div className="card-body">
                  <p>JavaScript can also select elements by class name:</p>
                  <pre className="bg-light p-3 rounded">
{`<div class="highlight">Hello</div>
<div class="highlight">World</div>

<script>
  const x = document.getElementsByClassName("highlight");
  x[0].style.backgroundColor = "yellow";
</script>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_classes_js"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={{ background: "#812B8F", color: "#fff" }}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HTMLClass;
