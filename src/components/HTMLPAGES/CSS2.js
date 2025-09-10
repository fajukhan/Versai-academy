import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const CSS2 = () => {
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
              <h1>HTML CSS</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="colors">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="links">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
             HTML supports different ways to define colors: by names, HEX values, 
                RGB, RGBA, HSL, and HSLA formats. Below are some examples.
              </p>

           {/* Inline CSS Card */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Inline CSS Example</div>
                <div className="card-body">
                  <p style={{ color: "blue", fontSize: "18px" }}>
                    This is a blue paragraph styled with inline CSS.
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;p style="color:blue;font-size:18px;"&gt;This is a blue paragraph.&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>
            
        {/* Internal CSS Card */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Internal CSS Example</div>
                <div className="card-body">
                  <p className="internal-demo">
                    This paragraph is styled with internal CSS.
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;style&gt;<br />
                      p &#123; color: green; font-size: 20px; &#125;<br />
                      &lt;/style&gt;<br /><br />
                      &lt;p&gt;This paragraph is styled with internal CSS.&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>



            {/* External CSS Card */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">External CSS Example</div>
                <div className="card-body">
                  <p className="external-demo">
                    This paragraph is styled using external CSS.
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;link rel="stylesheet" href="styles.css"&gt;<br />
                      <br />
                     <br />
                      p &#123; color: red; font-size: 22px; &#125;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>


              
             {/* CSS Reference Table */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">CSS Usage Types</div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Description</th>
                          <th>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Inline CSS</td>
                          <td>Applied directly to element via <code>style</code> attribute</td>
                          <td>&lt;p style="color:blue;"&gt;Text&lt;/p&gt;</td>
                        </tr>
                        <tr>
                          <td>Internal CSS</td>
                          <td>Defined inside a <code>&lt;style&gt;</code> tag</td>
                          <td>&lt;style&gt;p &#123;color:green;&#125;&lt;/style&gt;</td>
                        </tr>
                        <tr>
                          <td>External CSS</td>
                          <td>Written in separate <code>.css</code> file and linked with <code>&lt;link&gt;</code></td>
                          <td>styles.css → p &#123;color:red;&#125;</td>
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

export default CSS2



