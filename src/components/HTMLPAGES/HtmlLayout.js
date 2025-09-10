import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";


const HtmlLayout = () => {
  return (
    <>
      <Navbar />

      {/* Section */}
      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
               {/* Sidebar (Left - col-2) */}
           <Sidebar />

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
