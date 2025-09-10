import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

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
          <Sidebar />

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
