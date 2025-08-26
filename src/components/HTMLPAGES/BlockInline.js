
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BlockInline = () => {



  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Section */}
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
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>HTML Block and Inline Elements</h1>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="divs">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlclass">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>

              <p className="pt-5">
                In HTML, elements are mainly categorized into two types: 
                <strong> Block-level elements </strong> and <strong> Inline elements</strong>.
              </p>

            {/* Block Example */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header fw-bold bg-light">Block Elements Example</div>
                <div className="card-body">
                  
                  <button
                    className="try-btn mt-2"
                   
                  >
                    Try it Yourself »
                  </button>
                </div>
              </div>

              {/* Inline Elements Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Inline Elements Example</div>
                <div className="card-body">
                  <div className="p-3 bg-purple border rounded">
                    This is <span style={{ color: "#812B8F" }}>inline text</span> with 
                    <a href="/" className="ms-1">a link</a> and 
                    <strong className="ms-1">bold text</strong>.
                  </div>
                  <div className="bg-purple p-2 rounded mt-2">
                    <code>
{`This is <span>inline text</span> 
with <a href="#">a link</a> 
and <strong>bold text</strong>`}
                    </code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Block vs Inline Comparison */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Block vs Inline Comparison</div>
                <div className="card-body">
                  <div className="p-3 bg-purple border rounded">
                    <div className="mb-2 bg-white border p-2">I am a Block Div (full width)</div>
                    <span className="bg-light border p-2 me-2 d-inline-block">I am Inline Span</span>
                    <span className="bg-light border p-2 d-inline-block">I am Inline Span</span>
                  </div>
                  <div className="bg-purple p-2 rounded mt-2">
                    <code>
{`<div>I am a Block Div</div>
<span>I am Inline Span</span>
<span>I am Inline Span</span>`}
                    </code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Inline inside Block Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Inline inside Block</div>
                <div className="card-body">
                  <div className="p-3 bg-light border rounded">
                    <p>
                      This is a block paragraph with an 
                      <span style={{ color: "#812B8F" }}> inline span</span> inside.
                    </p>
                  </div>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>
{`<p>This is a block paragraph 
with an <span>inline span</span> inside.</p>`}
                    </code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
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

export default BlockInline;
