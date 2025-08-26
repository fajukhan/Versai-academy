import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Images1 = () => {
  return (
    <>
      {/* NavBar */}
      <Navbar />

      {/* Section-1 */}
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

            {/* Main Content (Middle - col-8) */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>HTML Images</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="links">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="favicon">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
               Images in HTML are defined with the <code>&lt;img&gt;</code> tag. 
                The <code>src</code> attribute specifies the path, and the <code>alt</code> 
                attribute provides alternative text if the image cannot be displayed.
              </p>

     {/* Basic Image */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Basic Image Example</div>
                <div className="card-body">
                  <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" 
                       alt="Nature" className="img-thumbnail mb-3" width="250" />
                  <div className="bg-light p-3 rounded">
                    <code>&lt;img src="pic.jpg" alt="Description"&gt;</code>
                  </div>
                </div>
              </div>


   {/* Image Size */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Image Size</div>
                <div className="card-body">
                  <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg" 
                       alt="Small" width="150" height="100" className="me-3 border" />
                  <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg" 
                       alt="Large" width="250" height="150" className="border" />
                  <div className="bg-light p-3 rounded mt-3">
                    <code>&lt;img src="pic.jpg" width="150" height="100"&gt;</code>
                  </div>
                </div>
              </div>

        {/* Responsive Image */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Responsive Image</div>
                <div className="card-body">
                  <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" 
                       alt="Responsive" className="img-fluid rounded" />
                  <div className="bg-light p-3 rounded mt-3">
                    <code>&lt;img src="pic.jpg" class="img-fluid"&gt;</code>
                  </div>
                </div>
              </div>


              
 
              {/* Image as a Link */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Image as a Link</div>
                <div className="card-body">
                  <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg" 
                         alt="Google Link" className="img-thumbnail" width="250" />
                  </a>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>&lt;a href="https://google.com"&gt;&lt;img src="pic.jpg"&gt;&lt;/a&gt;</code>
                  </div>
                </div>
              </div>


        {/* Floating Images */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Floating Images</div>
                <div className="card-body">
                  <p>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" 
                         alt="Left" className="float-start me-3 mb-2 rounded" width="120" />
                    This image floats to the left of the text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="clearfix"></div>
                  <p>
                    <img src="https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg" 
                         alt="Right" className="float-end ms-3 mb-2 rounded" width="120" />
                    This image floats to the right of the text. Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                  <div className="clearfix"></div>
                </div>
              </div>


      {/* Background Image */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Background Image</div>
                <div className="card-body">
                  <div className="p-5 text-white rounded" 
                       style={{ backgroundImage: "url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg')", backgroundSize: "cover" }}>
                    This div has a background image.
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>style="background-image: url('pic.jpg');"</code>
                  </div>
                </div>
              </div>


            
              {/* Image Map */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">Image Map</div>
                <div className="card-body">
                  <p>An image map allows you to define clickable areas within an image:</p>
                  <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg" 
                       alt="Map" useMap="#demoMap" className="img-fluid border rounded" />
                  <map name="demoMap">
                    <area shape="rect" coords="0,0,150,150" href="https://www.google.com" alt="Google" />
                    <area shape="rect" coords="150,0,300,150" href="https://www.youtube.com" alt="YouTube" />
                  </map>
                </div>
              </div>


                {/* Reference Table */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header fw-bold">HTML Images Reference</div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Description</th>
                          <th>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>src</td>
                          <td>Specifies the path of the image</td>
                          <td>&lt;img src="pic.jpg"&gt;</td>
                        </tr>
                        <tr>
                          <td>alt</td>
                          <td>Alternative text if image not displayed</td>
                          <td>&lt;img src="pic.jpg" alt="desc"&gt;</td>
                        </tr>
                        <tr>
                          <td>width / height</td>
                          <td>Specifies dimensions of image</td>
                          <td>&lt;img src="pic.jpg" width="100"&gt;</td>
                        </tr>
                        <tr>
                          <td>usemap</td>
                          <td>Reference to an image-map</td>
                          <td>&lt;img usemap="#map"&gt;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export default Images1



