import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";


const HTMLHead = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
              {/* Sidebar (Left - col-2) */}
          <Sidebar />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1 className="mb-2">
                HTML <span style={{ color: "#812B8F" }}>Head Element</span>
              </h1>


                 {/* Navigation Buttons */}
                                             <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                                               <a href="htmlfilepath">
                                                 <button className="custom-btn">
                                                   <FaArrowLeft /> Previous
                                                 </button>
                                               </a>
                                               <a href="htmllayout">
                                                 <button className="custom-btn">
                                                   Next <FaArrowRight />
                                                 </button>
                                               </a>
                                             </div>


              <p className="lead py-5">
                The <code>&lt;head&gt;</code> element contains metadata (data about data) 
                and information for the browser, search engines, and external files.
              </p>

      

              {/* Example 1 - Title */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">1) &lt;title&gt; — Page Title</div>
                <div className="card-body">
                  <p>The <code>&lt;title&gt;</code> element defines the title of the page shown in browser tab and used in SEO.</p>
                  <pre className="bg-light p-3 rounded">
{`<head>
  <title>My First Page</title>
</head>`}
                  </pre>
                  {/* ✅ SEO Title Example Image */}
  
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_title"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2 - Style */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">2) &lt;style&gt; — Internal CSS</div>
                <div className="card-body">
                  <p>You can define CSS inside the <code>&lt;head&gt;</code> using the <code>&lt;style&gt;</code> tag:</p>
                  <pre className="bg-light p-3 rounded">
{`<head>
  <style>
    body { background-color: #f8f9fa; }
    h1 { color: purple; }
  </style>
</head>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_style"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3 - Link */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">3) &lt;link&gt; — External CSS & Favicon</div>
                <div className="card-body">
                  <p>The <code>&lt;link&gt;</code> tag is used to include external resources like CSS or favicon.</p>
                  <pre className="bg-light p-3 rounded">
{`<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" type="image/png" href="favicon.png">
</head>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_link"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4 - Meta */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">4) &lt;meta&gt; — Metadata</div>
                <div className="card-body">
                  <p>Meta tags define information like character set, author, description, and responsive viewport.</p>
                  <pre className="bg-light p-3 rounded">
{`<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_meta"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5 - Script */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">5) &lt;script&gt; — Adding JavaScript</div>
                <div className="card-body">
                  <p>You can add JavaScript code inside the <code>&lt;head&gt;</code> or link an external JS file.</p>
                  <pre className="bg-light p-3 rounded">
{`<head>
  <script>
    alert("Hello from Head!");
  </script>
</head>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_script"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6 - Base */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">6) &lt;base&gt; — Base URL</div>
                <div className="card-body">
                  <p>The <code>&lt;base&gt;</code> tag specifies the base URL for all relative links on a page.</p>
                  <pre className="bg-light p-3 rounded">
{`<head>
  <base href="https://www.example.com/">
</head>`}
                  </pre>
                  <p>Now, all relative links will use <code>https://www.example.com/</code> as base.</p>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_base"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              <div className="alert border-0 mt-3" style={noteBox}>
                <strong>Tip:</strong>  
                The <code>&lt;head&gt;</code> is one of the most important parts of an HTML document for SEO, performance, and linking external files.
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

/* Styles */
const btn = {
  background: "#812B8F",
  color: "#fff",
  border: "0",
  padding: "8px 16px",
  borderRadius: "10px",
  transition: ".25s",
};
const noteBox = {
  background: "linear-gradient(120deg,#faf5ff,#fff1fb)",
  borderRadius: "12px",
  padding: "14px 16px",
  marginTop: "10px",
};

export default HTMLHead;
