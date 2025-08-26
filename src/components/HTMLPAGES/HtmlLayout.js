import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const HtmlLayout = () => {
  return (
    <>
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
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <h1 className="fw-bold">HTML Layout</h1>
              
              
                    {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlhead">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlresponsive">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>

              
              
              
              <p className="py-5">
                Every website is divided into sections like header, navigation,
                content, sidebar, and footer. Let’s see different HTML Layout
                examples.
              </p>

        

              {/* Example 1 - Basic Layout with Image */}
              <div className="card mb-4 shadow-sm rounded mt-4">
                <div className="card-header fw-bold">Example 1: Basic HTML Layout</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<header>Header</header>
<nav>Navigation</nav>
<section>Main Content</section>
<aside>Sidebar</aside>
<footer>Footer</footer>`}
                  </pre>
                  {/* Image Preview */}
                  <img
                    src="https://www.w3schools.com/html/img_sem_elements.gif"
                    alt="Basic HTML Layout"
                    className="img-fluid rounded shadow-sm border mt-3"
                  />
                </div>
              </div>

              {/* Example 2 - Div Layout */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example 2: Layout with &lt;div&gt;</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<div class="header">Header</div>
<div class="nav">Navigation</div>
<div class="row">
  <div class="main">Main</div>
  <div class="side">Sidebar</div>
</div>
<div class="footer">Footer</div>`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="border p-3 rounded bg-light mt-3">
                    <div className="p-2 bg-secondary text-white">Header</div>
                    <div className="p-2 bg-dark text-white">Navigation</div>
                    <div className="d-flex">
                      <div className="p-3 flex-fill bg-light border">Main</div>
                      <div className="p-3 flex-fill bg-white border">Sidebar</div>
                    </div>
                    <div className="p-2 bg-secondary text-white">Footer</div>
                  </div>

                  {/* Try it Button */}
                  <button className="btn mt-3 text-white" style={{ background: "#812B8F" }}>
                    Try it Yourself »
                  </button>
                </div>
              </div>

              {/* Example 3 - CSS Grid */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example 3: Layout with CSS Grid</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<div class="grid-container">
  <header>Header</header>
  <nav>Menu</nav>
  <main>Main</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="border p-3 rounded bg-light mt-3" style={{ display: "grid", gridTemplateAreas: `"header header" "menu main" "menu sidebar" "footer footer"`, gap: "5px" }}>
                    <div style={{ gridArea: "header" }} className="p-2 bg-secondary text-white">Header</div>
                    <div style={{ gridArea: "menu" }} className="p-2 bg-dark text-white">Menu</div>
                    <div style={{ gridArea: "main" }} className="p-2 bg-light border">Main</div>
                    <div style={{ gridArea: "sidebar" }} className="p-2 bg-white border">Sidebar</div>
                    <div style={{ gridArea: "footer" }} className="p-2 bg-secondary text-white">Footer</div>
                  </div>

                  {/* Try it Button */}
                  <button className="btn mt-3 text-white" style={{ background: "#812B8F" }}>
                    Try it Yourself »
                  </button>
                </div>
              </div>

              {/* Example 4 - Bootstrap Grid */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">Example 4: Bootstrap Grid Layout</div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<div class="container">
  <div class="row">
    <div class="col">Header</div>
  </div>
  <div class="row">
    <div class="col-3">Menu</div>
    <div class="col-6">Content</div>
    <div class="col-3">Sidebar</div>
  </div>
  <div class="row">
    <div class="col">Footer</div>
  </div>
</div>`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="container border p-3 rounded bg-light mt-3">
                    <div className="row">
                      <div className="col bg-secondary text-white p-2">Header</div>
                    </div>
                    <div className="row">
                      <div className="col-3 bg-dark text-white p-2">Menu</div>
                      <div className="col-6 bg-light border p-2">Content</div>
                      <div className="col-3 bg-white border p-2">Sidebar</div>
                    </div>
                    <div className="row">
                      <div className="col bg-secondary text-white p-2">Footer</div>
                    </div>
                  </div>

                  {/* Try it Button */}
                  <button className="btn mt-3 text-white" style={{ background: "#812B8F" }}>
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

export default HtmlLayout;
