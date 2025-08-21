
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Htmlhome = () => {



  return (
    <>
      {/* NavBar */}
     <Navbar />

      {/* Section-1 */}
      <section>
        <div className="">
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
          <li><a href="/">HTML Paragraphs</a></li>
          <li><a href="/">HTML Styles</a></li>
          <li><a href="/">HTML Formatting</a></li>
          <li><a href="/">HTML Quotations</a></li>
          <li><a href="/">HTML Comments</a></li>
          <li><a href="/">HTML Colors</a></li>
          <li><a href="/">HTML CSS</a></li>
          <li><a href="/">HTML Links</a></li>
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

            {/* Ads (Right - col-2) */}
            <div className="col-lg-2 col-md-3 col-12">
              <div className="ads-box text-center p-3">
                <h6 className="fw-bold">ADVERTISEMENT</h6>
                <img
                  src="https://via.placeholder.com/160x600?text=Ad+Banner"
                  alt="ads"
                  className="img-fluid mt-2"
                />
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
