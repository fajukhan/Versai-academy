
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

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
          <Sidebar />

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
