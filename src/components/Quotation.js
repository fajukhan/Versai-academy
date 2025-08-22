import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Quotation = () => {
  return (
    <>
      {/* NavBar */}
      <Navbar />

      {/* Section-1 */}
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
                <li><a href="/">HTML Images</a></li>
                <li><a href="/">HTML Favicon</a></li>
                <li><a href="/">HTML Page Title</a></li>
                <li><a href="/">HTML Tables</a></li>
                <li><a href="/">HTML Lists</a></li>
                <li><a href="/">HTML Div</a></li>
                <li><a href="/">HTML Block & Inline</a></li>
                <li><a href="/">HTML Class</a></li>
                <li><a href="/">HTML Id</a></li>
                <li><a href="/">HTML Iframes</a></li>
                <li><a href="/">HTML Javascript</a></li>
                <li><a href="/">HTML File Paths</a></li>
                <li><a href="/">HTML Head</a></li>
                <li><a href="/">HTML Layout</a></li>
                <li><a href="/">HTML Responsive</a></li>
                <li><a href="/">HTML Semantics</a></li>
              </ul>

              <h5 className="fw-bold">HTML Forms</h5>
              <ul className="list-unstyled">
                <li><a href="/">HTML Forms</a></li>
                <li><a href="/">HTML Form Elements</a></li>
                <li><a href="/">HTML Input Types</a></li>
                <li><a href="/">HTML Input Attributes</a></li>
                <li><a href="/">HTML Form Attributes</a></li>
              </ul>

              <h5 className="fw-bold">HTML Media</h5>
              <ul className="list-unstyled">
                <li><a href="/">HTML Media</a></li>
                <li><a href="/">HTML Audio</a></li>
                <li><a href="/">HTML Video</a></li>
                <li><a href="/">HTML Youtube</a></li>
              </ul>
            </div>

            {/* Main Content (Middle - col-8) */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>HTML Quotation and Citation Elements</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="style">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="comments">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
               HTML provides several elements for adding quotations and
                citations to a document, such as <code>&lt;blockquote&gt;</code>,
                <code>&lt;q&gt;</code>, <code>&lt;abbr&gt;</code>,
                <code>&lt;address&gt;</code>, and more.
              </p>

              {/* Blockquote Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Blockquote Example</div>
                <div className="card-body">
                  <blockquote className="blockquote">
                    <p>"The journey of a thousand miles begins with one step."</p>
                    <footer className="blockquote-footer">Lao Tzu</footer>
                  </blockquote>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;blockquote&gt;The journey of a thousand miles begins with one step.&lt;/blockquote&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Other Quotation Tags */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Other Quotation Tags</div>
                <div className="card-body">
                  <p>
                    The <code>&lt;q&gt;</code> tag defines a short quotation:{" "}
                    <q>This is inside q tag</q>
                  </p>
                  <p>
                    The <code>&lt;abbr&gt;</code> tag defines abbreviations:{" "}
                    <abbr title="World Health Organization">WHO</abbr>
                  </p>
                  <p>
                    The <code>&lt;address&gt;</code> tag defines contact
                    information:
                  </p>
                  <address>
                    Written by John Doe.<br />
                    Visit us at: example.com<br />
                    Box 564, Disneyland<br />
                    USA
                  </address>
                  <p>
                    The <code>&lt;cite&gt;</code> tag defines a work title:{" "}
                    <cite>The Scream</cite> by Edvard Munch.
                  </p>
                  <p>
                    The <code>&lt;bdo&gt;</code> tag overrides text direction:{" "}
                    <bdo dir="rtl">This text will be right-to-left</bdo>
                  </p>
                </div>
              </div>

              <hr />

           {/* Reference Table */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">HTML Quotation Tags</div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th>Tag</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>&lt;blockquote&gt;</td>
                          <td>Defines a section quoted from another source</td>
                        </tr>
                        <tr>
                          <td>&lt;q&gt;</td>
                          <td>Defines a short inline quotation</td>
                        </tr>
                        <tr>
                          <td>&lt;abbr&gt;</td>
                          <td>Defines an abbreviation or acronym</td>
                        </tr>
                        <tr>
                          <td>&lt;address&gt;</td>
                          <td>Defines contact information</td>
                        </tr>
                        <tr>
                          <td>&lt;cite&gt;</td>
                          <td>Defines the title of a creative work</td>
                        </tr>
                        <tr>
                          <td>&lt;bdo&gt;</td>
                          <td>Overrides the current text direction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export default Quotation

