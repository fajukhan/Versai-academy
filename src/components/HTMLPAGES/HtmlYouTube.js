import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const HtmlYouTube = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

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
              <h1>HTML YouTube Videos</h1>


                  {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlvideo">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="htmlyoutube">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                You can embed YouTube videos into HTML pages using the{" "}
                <code>&lt;iframe&gt;</code> element. YouTube provides multiple
                options such as autoplay, mute, controls, start time, and
                responsive embeds.
              </p>


              {/* Example 1: Basic Embed */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Basic YouTube Embed</div>
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                      title="YouTube Video Example"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      &lt;iframe width="560" height="315"{" "}
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"&gt;
                      &lt;/iframe&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 2: Autoplay */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Autoplay Example</div>
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                      title="Autoplay YouTube Video"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 3: Start Time */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Start Time Example</div>
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/tgbNymZ7vqY?start=60"
                      title="Start Time YouTube Video"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      src="https://www.youtube.com/embed/tgbNymZ7vqY?start=60"
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 4: No Controls */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">No Controls Example</div>
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
                      title="YouTube Video No Controls"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 5: Playlist Embed */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Playlist Embed</div>
                <div className="card-body">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/videoseries?list=PLjwm_8O3suyMkw4Q0UdQomBP-Yyp1vyxO"
                      title="YouTube Playlist"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      src="https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID"
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>

              {/* Example 6: Responsive YouTube Video */}
              <div className="card my-4 shadow-sm">
                <div className="card-header">Responsive YouTube Video</div>
                <div className="card-body">
                  <p>
                    Bootstrap's <code>.ratio</code> class makes YouTube videos
                    responsive. It automatically adjusts the aspect ratio.
                  </p>
                  <div className="ratio ratio-21x9">
                    <iframe
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                      title="Responsive YouTube Video"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="bg-light p-3 rounded mt-3">
                    <code>
                      &lt;div class="ratio ratio-16x9"&gt;<br />
                      &nbsp;&nbsp;&lt;iframe src="..."&gt;&lt;/iframe&gt;<br />
                      &lt;/div&gt;
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

export default HtmlYouTube;
