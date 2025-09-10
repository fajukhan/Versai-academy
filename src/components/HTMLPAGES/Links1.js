import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";


const Links1 = () => {
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
              <h1>HTML Links</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="colors">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="images">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
               HTML links are defined with the <code>&lt;a&gt;</code> tag. 
                A link can point to another page, a section within the same page, 
                an email address, or any external resource.
              </p>

          {/* Basic Link Card */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Basic Link Example</div>
                <div className="card-body">
                  <p>
                    <a href="https://www.example.com" target="_blank" rel="noreferrer">
                      Visit Example.com
                    </a>
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>
            
       {/* Target Attribute */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Target Attribute</div>
                <div className="card-body">
                  <p>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">
                      Open Google in a new tab
                    </a>
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;a href="https://www.google.com" target="_blank"&gt;Open Google&lt;/a&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>



            {/* Email Link */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Email Link</div>
                <div className="card-body">
                  <p>
                    <a href="mailto:info@example.com">Send Email</a>
                  </p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;a href="mailto:info@example.com"&gt;Send Email&lt;/a&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>


              
         {/* ✅ Link Colors */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Link Colors</div>
                <div className="card-body">
                  <p>By default, links have different colors for different states:</p>
                  <ul>
                    <li><span style={{ color: "#0000EE" }}>Unvisited Link</span></li>
                    <li><span style={{ color: "#551A8B" }}>Visited Link</span></li>
                    <li><span style={{ color: "#FF0000" }}>Active Link</span></li>
                    <li><span style={{ color: "#00A000" }}>Hover Link</span></li>
                  </ul>
                  <div className="bg-light p-3 rounded">
                    <code>
                      a:link &#123; color: blue; &#125;<br />
                      a:visited &#123; color: purple; &#125;<br />
                      a:hover &#123; color: green; &#125;<br />
                      a:active &#123; color: red; &#125;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>


        {/* ✅ Bookmark Links */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">HTML Link Bookmarks</div>
                <div className="card-body">
                  <p>
                    Bookmarks can be used to jump to a specific part of a page.  
                    Use the <code>id</code> attribute to create a bookmark, and the <code>href="#id"</code> to link to it.
                  </p>
                  <div className="bg-light p-3 rounded mb-3">
                    <code>
                      &lt;a href="#section1"&gt;Jump to Section 1&lt;/a&gt;<br />
                      &lt;h2 id="section1"&gt;Section 1&lt;/h2&gt;
                    </code>
                  </div>

                  <p><a href="#bookmark-demo">Jump to Demo Section ↓</a></p>

                  <div id="bookmark-demo" className="mt-5 p-3 border rounded bg-light">
                    <h2>Demo Bookmark Section</h2>
                    <p>This is the target section reached via bookmark link.</p>
                  </div>

                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>


            
             {/* Reference Table */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">HTML Links Reference</div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Description</th>
                          <th>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>href</td>
                          <td>Specifies the URL of the page</td>
                          <td>&lt;a href="page.html"&gt;</td>
                        </tr>
                        <tr>
                          <td>target="_blank"</td>
                          <td>Opens in a new tab</td>
                          <td>&lt;a href="page.html" target="_blank"&gt;</td>
                        </tr>
                        <tr>
                          <td>mailto:</td>
                          <td>Opens email client</td>
                          <td>&lt;a href="mailto:abc@xyz.com"&gt;</td>
                        </tr>
                        <tr>
                          <td>tel:</td>
                          <td>Opens phone dialer</td>
                          <td>&lt;a href="tel:+911234567890"&gt;</td>
                        </tr>
                        <tr>
                          <td>href="#id"</td>
                          <td>Jumps to a bookmark</td>
                          <td>&lt;a href="#top"&gt;Go Top&lt;/a&gt;</td>
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

export default Links1



