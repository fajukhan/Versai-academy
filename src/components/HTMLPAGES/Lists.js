import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

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
           <Sidebar />

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
