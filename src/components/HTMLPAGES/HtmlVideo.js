import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const HtmlVideo = () => {
  return (
    <>
      {/* Navbar */}
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
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>HTML Video</h1>


              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlaudio">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="htmlyoutube">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                HTML <code>&lt;video&gt;</code> element is used to embed video content in a web page. 
                It supports multiple attributes like <code>controls</code>, <code>autoplay</code>, 
                <code>loop</code>, <code>muted</code>, and <code>poster</code>.
              </p>

           

              {/* Example 1: Basic Video */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Basic Video Example</div>
                <div className="card-body">
                  <video width="100%" controls>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      &lt;video width="320" height="240" controls&gt;<br />
                      &nbsp;&nbsp;&lt;source src="movie.mp4" type="video/mp4"&gt;<br />
                      &nbsp;&nbsp;&lt;source src="movie.ogg" type="video/ogg"&gt;<br />
                      &lt;/video&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Autoplay + Muted + Loop */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Autoplay, Muted, and Loop</div>
                <div className="card-body">
                  <video width="100%" autoplay muted loop>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  </video>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      &lt;video autoplay muted loop&gt;<br />
                      &nbsp;&nbsp;&lt;source src="movie.mp4" type="video/mp4"&gt;<br />
                      &lt;/video&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Poster Image */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Poster Attribute Example</div>
                <div className="card-body">
                  <video width="100%" controls poster="https://via.placeholder.com/600x300.png?text=Video+Thumbnail">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  </video>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      &lt;video controls poster="poster.jpg"&gt;<br />
                      &nbsp;&nbsp;&lt;source src="movie.mp4" type="video/mp4"&gt;<br />
                      &lt;/video&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: Multiple Source Formats */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Multiple Source Formats</div>
                <div className="card-body">
                  <video width="100%" controls>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    <source src="https://www.w3schools.com/html/mov_bbb.webm" type="video/webm" />
                    <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
                  </video>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      &lt;video controls&gt;<br />
                      &nbsp;&nbsp;&lt;source src="movie.mp4" type="video/mp4"&gt;<br />
                      &nbsp;&nbsp;&lt;source src="movie.ogg" type="video/ogg"&gt;<br />
                      &nbsp;&nbsp;&lt;source src="movie.webm" type="video/webm"&gt;<br />
                      &lt;/video&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5: YouTube Embed */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Embedding a YouTube Video</div>
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                      title="YouTube video"
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      &lt;iframe width="560" height="315" 
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"&gt;&lt;/iframe&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
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

export default HtmlVideo;
