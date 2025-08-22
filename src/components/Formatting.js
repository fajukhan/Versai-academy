import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Formatting = () => {
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
              <h1>HTML Text Formatting</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="style">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="quotation">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
               HTML contains several elements for defining text with a special meaning.
              </p>

              {/* Example Card */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Formatting Example</div>
                <div className="card-body">
                  <h2>Text Formatting</h2>
                  <p>
                    <b>Bold text</b>, <strong>Strong importance</strong>,{" "}
                    <i>Italic text</i>, <em>Emphasized text</em>,{" "}
                    <mark>Highlighted</mark>, <small>Smaller text</small>,{" "}
                    <del>Deleted</del>, <ins>Inserted</ins>,{" "}
                    H<sub>2</sub>O, X<sup>2</sup>
                  </p>

                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;b&gt;Bold&lt;/b&gt;, &lt;i&gt;Italic&lt;/i&gt;, &lt;mark&gt;Highlighted&lt;/mark&gt;, 
                      &lt;sub&gt;Subscript&lt;/sub&gt;, &lt;sup&gt;Superscript&lt;/sup&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              <hr />

            {/* Reference Table */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">HTML Formatting Tags</div>
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
                          <td>&lt;b&gt;</td>
                          <td>Defines bold text</td>
                        </tr>
                        <tr>
                          <td>&lt;strong&gt;</td>
                          <td>Defines important text</td>
                        </tr>
                        <tr>
                          <td>&lt;i&gt;</td>
                          <td>Defines italic text</td>
                        </tr>
                        <tr>
                          <td>&lt;em&gt;</td>
                          <td>Defines emphasized text</td>
                        </tr>
                        <tr>
                          <td>&lt;mark&gt;</td>
                          <td>Defines highlighted text</td>
                        </tr>
                        <tr>
                          <td>&lt;small&gt;</td>
                          <td>Defines smaller text</td>
                        </tr>
                        <tr>
                          <td>&lt;del&gt;</td>
                          <td>Defines deleted text</td>
                        </tr>
                        <tr>
                          <td>&lt;ins&gt;</td>
                          <td>Defines inserted text</td>
                        </tr>
                        <tr>
                          <td>&lt;sub&gt;</td>
                          <td>Defines subscript text</td>
                        </tr>
                        <tr>
                          <td>&lt;sup&gt;</td>
                          <td>Defines superscript text</td>
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

export default Formatting

