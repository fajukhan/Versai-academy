import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
