import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const HTMLFilePaths = () => {
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
                HTML <span style={{ color: "#812B8F" }}>File Paths</span>
              </h1>

                   {/* Navigation Buttons */}
                                             <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                                               <a href="htmljavascript">
                                                 <button className="custom-btn">
                                                   <FaArrowLeft /> Previous
                                                 </button>
                                               </a>
                                               <a href="htmlhead">
                                                 <button className="custom-btn">
                                                   Next <FaArrowRight />
                                                 </button>
                                               </a>
                                             </div>


              <p className="lead py-5">
                A file path describes the location of a file in a website’s folder structure.
              </p>

          
 {/* Example 1 - Same Folder */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">1) File in the Same Folder</div>
                <div className="card-body">
                  <p>If the image is in the same folder as the HTML file:</p>
                  <pre className="bg-light p-3 rounded">
{`<img src="picture.jpg" alt="My Image">`}
                  </pre>
                  {/* Real image */}
                  <img 
                    src="https://www.w3schools.com/html/img_girl.jpg" 
                    alt="Same Folder Example" 
                    className="img-fluid rounded border mt-2" 
                  />
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_filepath_samefolder"
                    target="_blank" rel="noreferrer"
                  >
               
                  </a>
                     
                </div>
                  <button className="btn btn-sm mt-3 w-25 my-5"  style={btn}>
                      Try it Yourself »
                    </button>
              </div>

              {/* Example 2 - Images in Subfolder */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">2) File in a Subfolder</div>
                <div className="card-body">
                  <p>If the image is located in a subfolder called <code>images</code>:</p>
                  <pre className="bg-light p-3 rounded">
{`<img src="images/picture.jpg" alt="My Image">`}
                  </pre>
                  {/* Real image */}
                  <img 
                    src="https://www.w3schools.com/html/img_chania.jpg" 
                    alt="Subfolder Example" 
                    className="img-fluid rounded border mt-2" 
                  />
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_filepath_subfolder"
                    target="_blank" rel="noreferrer"
                  >
                
                  </a>
                </div>
                 <button className="btn btn-sm mt-3 w-25 my-5"  style={btn}>
                      Try it Yourself »
                    </button>
              </div>

              {/* Example 3 - File in Parent Folder */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">3) File in the Parent Folder</div>
                <div className="card-body">
                  <p>Use <code>../</code> to go up one level in the folder structure:</p>
                  <pre className="bg-light p-3 rounded">
{`<img src="../picture.jpg" alt="My Image">`}
                  </pre>
                  {/* Real image */}
                  <img 
                    src="https://www.w3schools.com/html/img_chania.jpg" 
                    alt="Parent Folder Example" 
                    className="img-fluid rounded border mt-2" 
                  />
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_filepath_parent"
                    target="_blank" rel="noreferrer"
                  >
                  
                  </a>
                </div>
                 <button className="btn btn-sm mt-3 w-25 my-5"  style={btn}>
                      Try it Yourself »
                    </button>
              </div>

              {/* Example 4 - Full URL */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">4) File on the Internet (Full URL)</div>
                <div className="card-body">
                  <p>Use the full web address (absolute path):</p>
                  <pre className="bg-light p-3 rounded">
{`<img src="https://www.example.com/images/picture.jpg" alt="My Image">`}
                  </pre>
                  {/* Real image */}
                  <img 
                    src="https://www.w3schools.com/html/img_girl.jpg" 
                    alt="Full URL Example" 
                    className="img-fluid rounded border mt-2" 
                  />
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_filepath_url"
                    target="_blank" rel="noreferrer"
                  >
                 
                  </a>
                </div>
                 <button className="btn btn-sm mt-3 w-25 my-5"  style={btn}>
                      Try it Yourself »
                    </button>
              </div>

              <div className="alert border-0 mt-3" style={noteBox}>
                <strong>Tip:</strong>  
                हमेशा relative paths का use करें ताकि website portable और easy to manage रहे।
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

export default HTMLFilePaths;
