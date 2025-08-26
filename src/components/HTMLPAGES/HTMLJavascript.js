import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const HTMLJavascript = () => {
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
              <h1 className="mb-2">
                HTML <span style={{ color: "#812B8F" }}>JavaScript</span>
              </h1>


                {/* Navigation Buttons */}
                                             <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                                               <a href="htmliframes">
                                                 <button className="custom-btn">
                                                   <FaArrowLeft /> Previous
                                                 </button>
                                               </a>
                                               <a href="htmlfilepath">
                                                 <button className="custom-btn">
                                                   Next <FaArrowRight />
                                                 </button>
                                               </a>
                                             </div>


              <p className="lead py-5">
                JavaScript can be added to HTML pages to make them dynamic and interactive.
              </p>

             

              {/* Example 1 - Basic Script */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">1) Basic JavaScript in HTML</div>
                <div className="card-body">
                  <p>JavaScript code is placed inside the <code>&lt;script&gt;</code> tag.</p>
                  <pre className="bg-light p-3 rounded">
{`<script>
  document.write("Hello JavaScript!");
</script>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_script"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>

              {/* Example 2 - Change Content */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">2) Changing HTML Content</div>
                <div className="card-body">
                  <p>Use JavaScript to change HTML element content using <code>document.getElementById()</code>.</p>
                  <pre className="bg-light p-3 rounded">
{`<p id="demo">Hello World!</p>
<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_script_change"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>

              {/* Example 3 - Change Style */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">3) Changing Style with JavaScript</div>
                <div className="card-body">
                  <p>JavaScript can change CSS styles dynamically.</p>
                  <pre className="bg-light p-3 rounded">
{`<p id="demo">Watch my color!</p>
<script>
  document.getElementById("demo").style.color = "#812B8F";
</script>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_script_styles"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>

              {/* Example 4 - Events */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">4) Using Events</div>
                <div className="card-body">
                  <p>Use events like <code>onclick</code> to execute JavaScript.</p>
                  <pre className="bg-light p-3 rounded">
{`<button onclick="alert('Hello!')">Click Me</button>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_event_onclick"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>

              {/* Example 5 - External JS */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">5) External JavaScript</div>
                <div className="card-body">
                  <p>Link external JavaScript file using <code>&lt;script src="..."&gt;</code>.</p>
                  <pre className="bg-light p-3 rounded">
{`<script src="script.js"></script>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_script_external"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>
                      Try it Yourself »
                    </button>
                  </a>
                </div>
              </div>

              <div className="alert border-0 mt-3" style={noteBox}>
                <strong>Note:</strong> हमेशा JavaScript को body के end में load करना बेहतर है,
                ताकि HTML पहले render हो सके।
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

/* Inline Styles */
const btn = {
  background: "#812B8F",
  color: "#fff",
  border: "0",
  padding: "8px 16px",
  borderRadius: "10px",
  transition: ".25s",
};
const noteBox = {
  background: "linear-gradient(120deg,#faf5ff,#fff1fb)",
  borderRadius: "12px",
  padding: "14px 16px",
  marginTop: "10px",
};

export default HTMLJavascript;
