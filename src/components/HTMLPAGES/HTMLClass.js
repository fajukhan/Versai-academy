
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
            <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
              <h5 className="fw-bold">HTML Tutorial</h5>
              <ul className="list-unstyled">
                <li><a href="html">HTML HOME</a></li>
                <li><a href="htmlhome">HTML Introduction</a></li>
                <li><a href="editor">HTML Editors</a></li>
                <li><a href="basic">HTML Basic</a></li>
                <li><a href="elements">HTML Elements</a></li>
                <li><a href="attribute">HTML Attributes</a></li>
                <li><a href="heading">HTML Headings</a></li>
                <li><a href="paragraph">HTML Paragraphs</a></li>
                <li><a href="style">HTML Styles</a></li>
                <li><a href="formatting">HTML Formatting</a></li>
                <li><a href="quotation">HTML Quotations</a></li>
                <li><a href="comments">HTML Comments</a></li>
                <li><a href="colors">HTML Colors</a></li>
                <li><a href="css2">HTML CSS</a></li>
                <li><a href="links">HTML Links</a></li>
                <li><a href="images">HTML Images</a></li>
                <li><a href="favicon">HTML Favicon</a></li>
                <li><a href="pagetitle">HTML Page Title</a></li>
                <li><a href="tables">HTML Tables</a></li>
                <li><a href="lists">HTML Lists</a></li>
                <li><a href="divs">HTML Div</a></li>
                <li><a href="blockinline">HTML Block & Inline</a></li>
                <li><a href="htmlclass">HTML Class</a></li>
                <li><a href="htmlid">HTML Id</a></li>
                <li><a href="htmliframes">HTML Iframes</a></li>
                <li><a href="htmljavascript">HTML Javascript</a></li>
                <li><a href="htmlfilepath">HTML File Paths</a></li>
                <li><a href="htmlhead">HTML Head</a></li>
                <li><a href="htmllayout">HTML Layout</a></li>
                <li><a href="htmlresponsive">HTML Responsive</a></li>
                <li><a href="htmlsemantic">HTML Semantics</a></li>
              </ul>

              <h5 className="fw-bold">HTML Forms</h5>
              <ul className="list-unstyled">
                <li><a href="htmlform">HTML Forms</a></li>
                <li><a href="htmlformelement">HTML Form Elements</a></li>
                <li><a href="htmlinput">HTML Input Types</a></li>
               <li><a href="htmlattribute">HTML Input Attributes</a></li>
                  <li><a href="htmlformattribute">HTML Form Attributes</a></li>
              </ul>

              <h5 className="fw-bold">HTML Media</h5>
              <ul className="list-unstyled">
                 <li><a href="htmlmultimedia">HTML Media</a></li>
              <li><a href="htmlaudio">HTML Audio</a></li>
                <li><a href="htmlvideo">HTML Video</a></li>
              <li><a href="htmlyoutube">HTML Youtube</a></li>
              </ul>
            </div>

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
