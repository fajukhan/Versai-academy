import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Pagetitle = () => {
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
              <h1>HTML Page Title</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="favicon">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="tables">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
                The <strong>HTML title tag</strong> defines the title of the web page, which is shown in the browser tab, search engines, and when bookmarked.
              
              </p>

             {/* Card 1 - Basic Example */}
              <div className="card shadow-sm mb-4 py-5">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">🔹 Basic Title Example</h5>
                  <p>Place the <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code> section of the page:</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;!DOCTYPE html&gt;<br />
                      &lt;html&gt;<br />
                      &lt;head&gt;<br />
                      &nbsp;&nbsp;&lt;title&gt;My First Webpage&lt;/title&gt;<br />
                      &lt;/head&gt;<br />
                      &lt;body&gt;<br />
                      &nbsp;&nbsp;&lt;h1&gt;Welcome to My Page&lt;/h1&gt;<br />
                      &lt;/body&gt;<br />
                      &lt;/html&gt;
                    </code>
                  </div>
                  <p className="mt-3">👉 The browser tab will display: <strong>My First Webpage</strong></p>
                </div>
              </div>

 {/* Card 2 - SEO Importance */}
            <div className="card shadow-sm mb-4 border-0 py-5">
  <div className="card-body bg-gradient-light">
    <h5 className="fw-bold text-success">🔹 Importance in SEO</h5>
    <p>
      Search engines like Google display the title in search results.  
      A clear and descriptive title helps in better ranking.
    </p>
    <img
      src="https://www.shoutmeloud.com/wp-content/uploads/2019/01/SEO-Title-Example.png"
      alt="SEO Title Example"
      className="img-fluid rounded shadow-sm border mt-2"
    />
  </div>
</div>

 {/* Card 3 - Good vs Bad Titles */}
              <div className="card shadow-sm mb-4 py-5">
                <div className="card-body">
                  <h5 className="fw-bold text-danger">🔹 Good vs Bad Titles</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded mb-3">
                        <h6 className="text-success">✅ Good Title</h6>
                        <p><code>&lt;title&gt;Best Pizza Recipes - Food Blog&lt;/title&gt;</code></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded mb-3">
                        <h6 className="text-danger">❌ Bad Title</h6>
                        <p><code>&lt;title&gt;Untitled Document&lt;/title&gt;</code></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
 
      {/* Card 4 - Long Title Example */}
              <div className="card shadow-sm mb-5 py-5">
                <div className="card-body">
                  <h5 className="fw-bold text-warning">🔹 Long Title Example</h5>
                  <p>If the title is too long, search engines may truncate it.</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;title&gt;Welcome to My Website - Learn HTML, CSS, JavaScript, Tutorials, and More&lt;/title&gt;
                    </code>
                  </div>
                  <p className="mt-2">👉 Google may show only the first 50–60 characters.</p>
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

export default Pagetitle




