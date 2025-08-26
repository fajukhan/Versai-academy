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

const HtmlFormElements = () => {
  return (
    <>
      <Navbar />

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

            {/* Main */}
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="fw-bold m-0">HTML Form Elements</h1>
                <span style={badge}>All Examples</span>
              </div>


                
                       {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlform">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlinput">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>


              <p className="lead py-5">
                A form element in HTML is represented by the <code>&lt;form&gt;</code> tag.  
                Inside the form, we can use various elements such as <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>,  
                <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>, and many more.
              </p>

            

              {/* Example 1 - Input */}
              <div className="card mt-4 mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 1: Input Element</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <input type="text" placeholder="Enter text">
  <input type="submit" value="Submit">
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <input type="text" className="form-control mb-2" placeholder="Enter text" />
                      <input type="submit" value="Submit" className="btn btn-sm" style={btn} />
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 2 - Select */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 2: Select Dropdown</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <label for="cars">Choose a car:</label>
  <select id="cars">
    <option value="volvo">Volvo</option>
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>
  </select>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <label htmlFor="cars" className="form-label">Choose a car:</label>
                      <select id="cars" className="form-select">
                        <option>Volvo</option>
                        <option>BMW</option>
                        <option>Audi</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 3 - Textarea */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 3: Textarea</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <textarea rows="4" cols="30">Write your message...</textarea>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 4 - Button */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 4: Button Element</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <button type="button">Click Me!</button>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <button type="button" className="btn btn-outline-dark">Click Me!</button>
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
    <input type="text">
  </fieldset>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <fieldset className="p-3 border rounded">
                        <legend>Personal Info</legend>
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 6 - Label */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 6: Label Element</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form>
  <label for="email">Email:</label>
  <input type="email" id="email">
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form>
                      <label htmlFor="email" className="form-label">Email:</label>
                      <input type="email" id="email" className="form-control" />
                    </form>
                  </div>
                </div>
              </div>

              {/* Example 7 - Output */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold">Example 7: Output Element</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="number" id="a" value="10"> +
  <input type="number" id="b" value="20"> =
  <output name="result">30</output>
</form>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <form onInput={(e) => {
                      const a = parseInt(document.getElementById("aVal").value) || 0;
                      const b = parseInt(document.getElementById("bVal").value) || 0;
                      document.getElementById("res").value = a + b;
                    }}>
                      <input type="number" id="aVal" defaultValue="10" className="form-control d-inline-block w-auto" /> +
                      <input type="number" id="bVal" defaultValue="20" className="form-control d-inline-block w-auto mx-2" /> =
                      <output id="res">30</output>
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

export default HtmlFormElements;
