import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
const Div = () => {
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
              <h1>HTML Div</h1>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="lists">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="blockinline">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>

              <p className="pt-4">
                The <code>&lt;div&gt;</code> tag defines a division or section in HTML. 
                It is a container for other HTML elements, often used for layout purposes.
              </p>

              {/* Basic Div Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Basic Div Example</div>
                <div className="card-body">
                  <div className="p-3 bg-light border rounded">
                    This is a simple div element.
                  </div>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<div>\n This is a simple div element.\n</div>`}</code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Nested Div Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Nested Div Example</div>
                <div className="card-body">
                  <div className="p-3 bg-light border rounded">
                    Outer Div
                    <div className="mt-2 p-2 bg-white border">
                      Inner Div
                    </div>
                  </div>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>
                      {`<div>\n  Outer Div\n   <div>\n     Inner Div\n   </div>\n</div>`}
                    </code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Div with Background & Border */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Div with Background and Border</div>
                <div className="card-body">
                  <div className="p-3 rounded" style={{ backgroundColor: "#812B8F", color: "white" }}>
                    This div has a purple background.
                  </div>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>{`<div style="background-color:#812B8F;color:white;">\n This div has a purple background.\n</div>`}</code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Div Layout with Columns */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Div Layout Example</div>
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col-md-4 p-3 bg-light border">Column 1</div>
                    <div className="col-md-4 p-3 bg-light border">Column 2</div>
                    <div className="col-md-4 p-3 bg-light border">Column 3</div>
                  </div>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>
                      {`<div class="row">\n <div class="col">Column 1</div>\n <div class="col">Column 2</div>\n <div class="col">Column 3</div>\n</div>`}
                    </code>
                  </div>
                  <button className="try-btn mt-2">Try it Yourself »</button>
                </div>
              </div>

              {/* Responsive Div Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header bg-purple fw-bold">Responsive Div Example</div>
                <div className="card-body">
                  <div className="d-md-flex gap-3">
                    <div className="flex-fill p-3 bg-light border">Div 1</div>
                    <div className="flex-fill p-3 bg-light border">Div 2</div>
                  </div>
                  <div className="bg-light p-2 rounded mt-2">
                    <code>
                      {`<div class="d-md-flex">\n <div>Div 1</div>\n <div>Div 2</div>\n</div>`}
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

export default Div;
