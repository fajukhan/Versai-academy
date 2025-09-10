import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

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
           <Sidebar />

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
