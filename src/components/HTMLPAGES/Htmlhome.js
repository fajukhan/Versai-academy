
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Navbar';
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Htmlhome = () => {
 

  return (
    <>
      {/* NavBar */}
     <Navbar />

      {/* Section-1 */}
      <section  className="p-0">
        <div className="bg-white">
          <div className="row g-0">
            {/* Sidebar (Left - col-2) */}
            
         <Sidebar />

      {/* Main Content (Middle - col-10) */}
          <div className="col-lg-8 col-md-6 col-12 bg-white p-5">

              <h1>HTML Introduction</h1>

               {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="html"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="editor"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 

              <p className="pt-5">
                HTML is the standard markup language for creating Web pages.
              </p>

              <h2 className="pt-5">What is HTML?</h2>
              <p>HTML stands for Hyper Text Markup Language.</p>
              <p>
                HTML is the standard markup language for creating Web pages.
              </p>
              <p>HTML describes the structure of a Web page.</p>
              <p>HTML consists of a series of elements.</p>
              <p>HTML elements tell the browser how to display the content.</p>
              <p>
                HTML elements label pieces of content such as "this is a
                heading", "this is a paragraph", "this is a link", etc.
              </p>

              {/* Example Section */}
              <div className="row justify-content-start">
                <div className="col-lg-10 col-md-12">
                  {/* Heading */}
                  <h4 className="fw-bold mb-3">Example</h4>

                  {/* Code Box */}
                  <div className="code-box mb-3">
                    &lt;!DOCTYPE html&gt;
                    <br />
                    &lt;html&gt;
                    <br />
                    &lt;head&gt;
                    <br />
                    &nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;
                    <br />
                    &lt;/head&gt;
                    <br />
                    &lt;body&gt;
                    <br />
                    <br />
                    &nbsp;&nbsp;&lt;h1&gt;My First Heading&lt;/h1&gt;
                    <br />
                    &nbsp;&nbsp;&lt;p&gt;My first paragraph.&lt;/p&gt;
                    <br />
                    <br />
                    &lt;/body&gt;
                    <br />
                    &lt;/html&gt;
                  </div>

                  {/* Button */}
                  <button className="custom-btn">Try it Yourself »</button>
                </div>
              </div>

              <div></div>
              <div></div>

              <div className="py-5">
                <h3 class="fw-bold mb-4 text-dark">Example Explained</h3>
                <ul class="list-unstyled fs-6">
                  <li class="mb-2">
                    <span class="tag">&lt;!DOCTYPE html&gt;</span> declaration
                    defines that this document is an HTML5 document
                  </li>
                  <li class="mb-2">
                    <span class="tag">&lt;html&gt;</span> element is the root
                    element of an HTML page
                  </li>
                  <li class="mb-2">
                    <span class="tag">&lt;head&gt;</span> element contains meta
                    information about the HTML page
                  </li>
                  <li class="mb-2">
                    <span class="tag">&lt;title&gt;</span> element specifies a
                    title for the HTML page (shown in browser’s tab)
                  </li>
                  <li class="mb-2">
                    <span class="tag">&lt;body&gt;</span> element defines the
                    document’s body and contains all visible contents
                  </li>
                  <li class="mb-2">
                    <span class="tag">&lt;h1&gt;</span> element defines a large
                    heading
                  </li>
                  <li class="mb-2">
                    <span class="tag">&lt;p&gt;</span> element defines a
                    paragraph
                  </li>
                </ul>

                <hr class="my-4" />

                {/* <!-- What is an HTML Element --> */}
                <h3 class="fw-bold text-dark">What is an HTML Element?</h3>
                <p class="mt-3 fs-6">
                  An HTML element is defined by a start tag, some content, and
                  an end tag:
                </p>

                <div class="example-box p-3 my-3">
                  <code class="fs-5">
                    &lt;<span class="tagname">tagname</span>&gt; Content goes
                    here... &lt;/<span class="tagname">tagname</span>&gt;
                  </code>
                </div>

                <p class="fs-6">
                  The HTML <strong>element</strong> is everything from the start
                  tag to the end tag:
                </p>
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

export default Htmlhome;
