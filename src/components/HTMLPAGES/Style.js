import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Style = () => {
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

            {/* Main Content (Middle - col-8) */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>HTML Styles</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="paragraph">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="formatting">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
                The HTML style attribute is used to add styles to an element, such as color, font, size, and more.
              </p>

              {/* Paragraph Card */}
              <div className="card mb-4 py-5">
                <div className="card-header">Paragraph Example</div>
                <div className="card-body">
                  <p>
                    This is a paragraph in HTML. Paragraphs are defined with the <code>&lt;p&gt;</code> tag.
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>
                  </div>
                  <button className="try-btn">Try it Yourself »</button>
                </div>
              </div>

              <hr />

              {/* Line Breaks Card */}
              <div className="card mb-4 py-5">
                <div className="card-header">Line Breaks Example</div>
                <div className="card-body">
                  <p>The <code>&lt;br&gt;</code> tag inserts a single line break.</p>
                  <div className="bg-light p-3 rounded">
                    <code>&lt;p&gt;This is a&lt;br&gt;paragraph with line breaks.&lt;/p&gt;</code>
                  </div>
                  <button className="try-btn">Try it Yourself »</button>
                </div>
              </div>

              <hr />

              {/* Horizontal Rules Card */}
              <div className="card mb-4 py-5">
                <div className="card-header">Horizontal Rules Example</div>
                <div className="card-body">
                  <p>The <code>&lt;hr&gt;</code> tag defines a thematic break (horizontal line):</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;h1&gt;Heading 1&lt;/h1&gt;<br />
                      &lt;p&gt;This is some text.&lt;/p&gt;<br />
                      &lt;hr&gt;<br />
                      &lt;h2&gt;Heading 2&lt;/h2&gt;<br />
                      &lt;p&gt;This is some other text.&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn">Try it Yourself »</button>
                </div>
              </div>

              {/* Reference Table Card */}
              <div className="card mb-4 py-5">
                <div className="card-header">HTML Tag Reference</div>
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
                          <td>&lt;p&gt;</td>
                          <td>Defines a paragraph</td>
                        </tr>
                        <tr>
                          <td>&lt;br&gt;</td>
                          <td>Inserts a line break</td>
                        </tr>
                        <tr>
                          <td>&lt;hr&gt;</td>
                          <td>Defines a thematic break (horizontal line)</td>
                        </tr>
                        <tr>
                          <td>&lt;pre&gt;</td>
                          <td>Defines pre-formatted text</td>
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

export default Style;
