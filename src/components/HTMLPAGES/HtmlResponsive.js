
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const HtmlResponsive = () => {
  return (
    <>
      <Navbar />

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

            {/* Main Content */}
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <h1 className="fw-bold">HTML Responsive Web Design</h1>

             
                     {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmllayout">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlsemantic">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>


              <p className="py-5">
                Responsive Web Design (RWD) का मतलब है कि आपकी website हर screen size 
                (Desktop, Tablet, Mobile) पर अच्छे से दिखे और automatically adjust हो जाए।  
                इसके लिए हम <b>viewport, flexible layouts, images, media queries और Bootstrap Grid</b> का use करते हैं।
              </p>

           

              {/* Example 1 - Viewport */}
              <div className="card mb-4 shadow-sm rounded mt-4">
                <div className="card-header fw-bold">Example 1: Viewport Meta Tag</div>
                <div className="card-body">
                  <p>
                    HTML Responsive web page बनाने के लिए सबसे पहले head में viewport tag डालना जरूरी है।
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
                  </pre>
                  <p><b>Effect:</b> इससे webpage mobile screen पर zoom-out नहीं होगा।</p>
                  <button className="btn mt-2 text-white" style={{ background: "#812B8F" }}>
                    Try it Yourself »
                  </button>
                </div>
              </div>

              {/* Example 2 - Responsive Image */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example 2: Responsive Image</div>
                <div className="card-body">
                  <p>
                    Image को responsive बनाने के लिए हम <code>max-width: 100%</code> और <code>height: auto</code> का use करते हैं।
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<img src="nature.jpg" style="max-width:100%;height:auto;">`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="border p-3 mt-3 rounded bg-light">
                    <img
                      src="https://www.w3schools.com/w3images/fjords.jpg"
                      alt="Responsive Example"
                      style={{ maxWidth: "100%", height: "auto" }}
                      className="rounded shadow-sm"
                    />
                  </div>

                  <button className="btn mt-2 text-white" style={{ background: "#812B8F" }}>
                    Try it Yourself »
                  </button>
                </div>
              </div>

              {/* Example 3 - Media Queries */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example 3: Media Queries</div>
                <div className="card-body">
                  <p>
                    Media Queries की मदद से हम अलग-अलग screen sizes के लिए अलग CSS apply कर सकते हैं।
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<style>
  body { background-color: lightblue; }
  @media (max-width: 600px) {
    body { background-color: lightgreen; }
  }
</style>`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="border p-3 mt-3 rounded bg-light">
                    <p><b>Resize screen</b> → Background color change होगा।</p>
                  </div>

                  <button className="btn mt-2 text-white" style={{ background: "#812B8F" }}>
                    Try it Yourself »
                  </button>
                </div>
              </div>

              {/* Example 4 - Bootstrap Grid */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example 4: Bootstrap Responsive Grid</div>
                <div className="card-body">
                  <p>
                    Bootstrap grid system responsive web design को easy बनाता है।
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<div class="container">
  <div class="row">
    <div class="col-sm-4">Column 1</div>
    <div class="col-sm-4">Column 2</div>
    <div class="col-sm-4">Column 3</div>
  </div>
</div>`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="container border p-3 rounded bg-light mt-3">
                    <div className="row text-center">
                      <div className="col-sm-4 p-2 bg-secondary text-white">Column 1</div>
                      <div className="col-sm-4 p-2 bg-dark text-white">Column 2</div>
                      <div className="col-sm-4 p-2 bg-secondary text-white">Column 3</div>
                    </div>
                  </div>

                  <button className="btn mt-2 text-white" style={{ background: "#812B8F" }}>
                    Try it Yourself »
                  </button>
                </div>
              </div>

              {/* Example 5 - Responsive Text */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example 5: Responsive Text</div>
                <div className="card-body">
                  <p>
                    Text को responsive बनाने के लिए हम relative units जैसे <code>vw</code> (viewport width) use करते हैं।
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<h1 style="font-size:5vw;">Responsive Heading</h1>`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="border p-3 mt-3 rounded bg-light">
                    <h1 style={{ fontSize: "5vw" }}>Responsive Heading</h1>
                  </div>

                  <button className="btn mt-2 text-white" style={{ background: "#812B8F" }}>
                    Try it Yourself »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HtmlResponsive;

