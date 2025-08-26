import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Lists = () => {
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
              <h1>HTML Lists</h1>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="tables">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="divs">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>

              <p className="pt-4">
                HTML lists allow you to group related items together. 
                There are three main types of lists in HTML: ordered, unordered, and description lists.
              </p>

              {/* Ordered List */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-purple fw-bold">Ordered List (ol)</div>
                <div className="card-body">
                  <ol>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                  </ol>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<ol>\n <li>Coffee</li>\n <li>Tea</li>\n <li>Milk</li>\n</ol>`}</code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Unordered List */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-purple fw-bold">Unordered List (ul)</div>
                <div className="card-body">
                  <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Orange</li>
                  </ul>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<ul>\n <li>Apple</li>\n <li>Banana</li>\n <li>Orange</li>\n</ul>`}</code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Nested List */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-purple fw-bold">Nested Lists</div>
                <div className="card-body">
                  <ul>
                    <li>Fruits
                      <ul>
                        <li>Apple</li>
                        <li>Mango</li>
                      </ul>
                    </li>
                    <li>Vegetables
                      <ul>
                        <li>Carrot</li>
                        <li>Potato</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>
                      {`<ul>\n <li>Fruits\n   <ul>\n     <li>Apple</li>\n     <li>Mango</li>\n   </ul>\n </li>\n <li>Vegetables\n   <ul>\n     <li>Carrot</li>\n     <li>Potato</li>\n   </ul>\n </li>\n</ul>`}
                    </code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Description List */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-purple fw-bold">Description List (dl)</div>
                <div className="card-body">
                  <dl>
                    <dt>HTML</dt>
                    <dd>Hyper Text Markup Language</dd>
                    <dt>CSS</dt>
                    <dd>Cascading Style Sheets</dd>
                  </dl>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<dl>\n <dt>HTML</dt>\n <dd>Hyper Text Markup Language</dd>\n <dt>CSS</dt>\n <dd>Cascading Style Sheets</dd>\n</dl>`}</code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* List Styling */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-purple fw-bold">List Styling Example</div>
                <div className="card-body">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Disc style</li>
                  </ul>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>Circle style</li>
                  </ul>
                  <ul style={{ listStyleType: "square" }}>
                    <li>Square style</li>
                  </ul>
                  <ul style={{ listStyleType: "none" }}>
                    <li>No bullets</li>
                  </ul>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<ul style="list-style-type:circle;">...</ul>`}</code>
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

export default Lists
