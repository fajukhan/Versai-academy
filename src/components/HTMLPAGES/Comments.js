import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Comments = () => {
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
              <h1>HTML Comments</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="quotation">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="colors">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
              Comments in HTML are not displayed by the browser, but they can
                help document your source code.  
                The syntax for a comment is:{" "}
                <code>&lt;!-- Write your comment here --&gt;</code>.
              </p>

             {/* Single Line Comment Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Single Line Comment Example</div>
                <div className="card-body">
                  <p>
                    Example of a single-line comment in HTML:
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;!-- This is a comment --&gt;<br />
                      &lt;p&gt;This is a paragraph.&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

            {/* Multi-Line Comment Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Multi-Line Comment Example</div>
                <div className="card-body">
                  <p>
                    You can also add comments that span multiple lines:
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;!-- <br />
                      This is a comment <br />
                      that spans multiple lines <br />
                      --&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>


         

              {/* Hide Content Example */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header">Using Comments to Hide Content</div>
                <div className="card-body">
                  <p>
                    Developers sometimes use comments to hide code temporarily:
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;p&gt;This is visible text.&lt;/p&gt;<br />
                      &lt;!-- &lt;p&gt;This paragraph is hidden.&lt;/p&gt; --&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
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

export default Comments


