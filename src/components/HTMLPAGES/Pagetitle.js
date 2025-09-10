import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";


const Pagetitle = () => {
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
              <h1>HTML Page Title</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="favicon">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="tables">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
                The <strong>HTML title tag</strong> defines the title of the web page, which is shown in the browser tab, search engines, and when bookmarked.
              
              </p>

             {/* Card 1 - Basic Example */}
              <div className="card shadow-sm mb-4 py-5">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">🔹 Basic Title Example</h5>
                  <p>Place the <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code> section of the page:</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;!DOCTYPE html&gt;<br />
                      &lt;html&gt;<br />
                      &lt;head&gt;<br />
                      &nbsp;&nbsp;&lt;title&gt;My First Webpage&lt;/title&gt;<br />
                      &lt;/head&gt;<br />
                      &lt;body&gt;<br />
                      &nbsp;&nbsp;&lt;h1&gt;Welcome to My Page&lt;/h1&gt;<br />
                      &lt;/body&gt;<br />
                      &lt;/html&gt;
                    </code>
                  </div>
                  <p className="mt-3">👉 The browser tab will display: <strong>My First Webpage</strong></p>
                </div>
              </div>

 {/* Card 2 - SEO Importance */}
            <div className="card shadow-sm mb-4 border-0 py-5">
  <div className="card-body bg-gradient-light">
    <h5 className="fw-bold text-success">🔹 Importance in SEO</h5>
    <p>
      Search engines like Google display the title in search results.  
      A clear and descriptive title helps in better ranking.
    </p>
    <img
      src="https://www.shoutmeloud.com/wp-content/uploads/2019/01/SEO-Title-Example.png"
      alt="SEO Title Example"
      className="img-fluid rounded shadow-sm border mt-2"
    />
  </div>
</div>

 {/* Card 3 - Good vs Bad Titles */}
              <div className="card shadow-sm mb-4 py-5">
                <div className="card-body">
                  <h5 className="fw-bold text-danger">🔹 Good vs Bad Titles</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded mb-3">
                        <h6 className="text-success">✅ Good Title</h6>
                        <p><code>&lt;title&gt;Best Pizza Recipes - Food Blog&lt;/title&gt;</code></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded mb-3">
                        <h6 className="text-danger">❌ Bad Title</h6>
                        <p><code>&lt;title&gt;Untitled Document&lt;/title&gt;</code></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
 
      {/* Card 4 - Long Title Example */}
              <div className="card shadow-sm mb-5 py-5">
                <div className="card-body">
                  <h5 className="fw-bold text-warning">🔹 Long Title Example</h5>
                  <p>If the title is too long, search engines may truncate it.</p>
                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;title&gt;Welcome to My Website - Learn HTML, CSS, JavaScript, Tutorials, and More&lt;/title&gt;
                    </code>
                  </div>
                  <p className="mt-2">👉 Google may show only the first 50–60 characters.</p>
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

export default Pagetitle




