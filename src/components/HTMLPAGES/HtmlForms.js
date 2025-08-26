import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const btn = {
  background: "#812B8F",
  color: "#fff",
  border: "0",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: ".25s",
};
const badge = {
  background: "#F6E8F9",
  color: "#812B8F",
  borderRadius: "20px",
  padding: "4px 10px",
  fontSize: 12,
  fontWeight: 600,
};

const HtmlForms = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
            {/* Sidebar */}
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

            {/* Main */}
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="fw-bold m-0">HTML Forms</h1>
                <span style={badge}>All Input Examples</span>
              </div>



                       {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlsemantic">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlformelement">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>

              <p className="lead py-5">
                HTML forms are used to collect user input.  
                Each form contains the <code>&lt;form&gt;</code> element and different types of <code>&lt;input&gt;</code> elements.
              </p>

            
              {/* Example 1 - Basic Form */}
              <div className="card mt-4 mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 1: Basic Form</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname"><br><br>
  <input type="submit" value="Submit">
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <label htmlFor="fname">First name:</label><br />
                      <input type="text" id="fname" className="form-control mb-2" /><br />
                      <label htmlFor="lname">Last name:</label><br />
                      <input type="text" id="lname" className="form-control mb-2" /><br />
                      <input type="submit" value="Submit" className="btn btn-sm" style={btn} />
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 2 - Input Types */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 2: Different Input Types</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <input type="text" placeholder="Text"><br>
  <input type="password" placeholder="Password"><br>
  <input type="email" placeholder="Email"><br>
  <input type="number" placeholder="Number"><br>
  <input type="date"><br>
  <input type="color"><br>
  <input type="range" min="0" max="100"><br>
  <input type="file"><br>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <input type="text" className="form-control mb-2" placeholder="Text" />
                      <input type="password" className="form-control mb-2" placeholder="Password" />
                      <input type="email" className="form-control mb-2" placeholder="Email" />
                      <input type="number" className="form-control mb-2" placeholder="Number" />
                      <input type="date" className="form-control mb-2" />
                      <input type="color" className="form-control mb-2" />
                      <input type="range" className="form-range mb-2" />
                      <input type="file" className="form-control mb-2" />
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 3 - Radio & Checkbox */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 3: Radio & Checkbox</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <input type="radio" name="gender" value="male"> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="checkbox" name="subscribe"> Subscribe
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <input type="radio" name="gender" value="male" /> Male <br />
                      <input type="radio" name="gender" value="female" /> Female <br />
                      <input type="checkbox" name="subscribe" /> Subscribe
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 4 - Select, Textarea, Datalist */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 4: Select, Textarea, Datalist</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select><br>
  <textarea rows="3" cols="30">Write here...</textarea><br>
  <input list="browsers">
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Edge">
  </datalist>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <select className="form-select mb-2">
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                      <textarea className="form-control mb-2" rows="3" placeholder="Write here..."></textarea>
                      <input list="browsers" className="form-control" placeholder="Type browser..." />
                      <datalist id="browsers">
                        <option value="Chrome" />
                        <option value="Firefox" />
                        <option value="Edge" />
                      </datalist>
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 5 - Fieldset & Legend */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 5: Fieldset & Legend</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <fieldset>
    <legend>Personal Info</legend>
    <label>Name:</label>
    <input type="text"><br>
    <label>Email:</label>
    <input type="email">
  </fieldset>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <fieldset className="p-3 border rounded">
                        <legend>Personal Info</legend>
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control mb-2" />
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 6 - Attributes */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 6: Form Attributes</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form action="/submit" method="post" target="_blank" autocomplete="on">
  <input type="text" required>
  <input type="submit">
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form action="/submit" method="post" target="_blank" autoComplete="on">
                      <input type="text" className="form-control mb-2" placeholder="Required field" required />
                      <input type="submit" value="Submit" className="btn btn-sm" style={btn} />
                    </form>
                  </div>
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

export default HtmlForms;
