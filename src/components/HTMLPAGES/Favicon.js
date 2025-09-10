import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";


const Favicon = () => {
  return (
    <>
      {/* NavBar */}
      <Navbar />

      {/* Section-1 */}
      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
            {/* Sidebar (Left - col-2) */}
          <Sidebar />

            {/* Main Content (Middle - col-8) */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>HTML Favicon</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="images">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="pagetitle">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
                A <strong>favicon</strong> is a small icon that represents your website in the browser tab, bookmarks, and address bar.  
                Favicons help users identify your website quickly.
              
              </p>

               {/* Basic Favicon Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Basic Favicon Example</div>
                <div className="card-body">
                  <p>Add this code inside the <code>&lt;head&gt;</code> section:</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;link rel="icon" type="image/x-icon" href="favicon.ico"&gt;
                    </code>
                  </div>
                  <p className="mt-3">🔹 Example:  
                    <img src="https://www.google.com/favicon.ico" alt="Google Favicon" width="20" className="ms-2" />  
                    Google favicon in browser tab.
                  </p>
                </div>
              </div>



 {/* PNG Favicon */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Using PNG Image</div>
                <div className="card-body">
                  <p>You can also use a PNG file as favicon:</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;link rel="icon" type="image/png" href="favicon.png"&gt;
                    </code>
                  </div>
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" 
                       alt="HTML Icon" width="40" className="mt-3 border rounded p-1" />
                </div>
              </div>

    {/* Multiple Sizes */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Favicon with Multiple Sizes</div>
                <div className="card-body">
                  <p>Provide multiple favicon sizes for better browser support:</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;link rel="icon" sizes="16x16" href="favicon-16.png"&gt;<br />
                      &lt;link rel="icon" sizes="32x32" href="favicon-32.png"&gt;<br />
                      &lt;link rel="icon" sizes="48x48" href="favicon-48.png"&gt;
                    </code>
                  </div>
                  <div className="d-flex gap-3 mt-3">
                    <img src="https://cdn-icons-png.flaticon.com/16/732/732212.png" alt="16px" />
                    <img src="https://cdn-icons-png.flaticon.com/32/732/732212.png" alt="32px" />
                    <img src="https://cdn-icons-png.flaticon.com/48/732/732212.png" alt="48px" />
                  </div>
                </div>
              </div>

              
 
            {/* Apple Touch Icon */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Apple Touch Icon</div>
                <div className="card-body">
                  <p>For iOS devices, use <code>apple-touch-icon</code>:</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;link rel="apple-touch-icon" href="apple-icon.png"&gt;
                    </code>
                  </div>
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" 
                       alt="Apple Icon" width="60" className="mt-3 border rounded p-1" />
                </div>
              </div>



  {/* Shortcut Icon */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Shortcut Icon (Old Browsers)</div>
                <div className="card-body">
                  <p>For old browsers (like IE), use <code>shortcut icon</code>:</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;link rel="shortcut icon" href="favicon.ico"&gt;
                    </code>
                  </div>
                  <img src="https://cdn-icons-png.flaticon.com/128/732/732212.png" 
                       alt="Shortcut Icon" width="40" className="mt-3 border rounded p-1" />
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

export default Favicon




