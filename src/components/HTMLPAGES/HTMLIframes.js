import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const HTMLIframes = () => {
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
                HTML <span style={{ color: "#812B8F" }}>Iframes</span>
              </h1>

               {/* Navigation Buttons */}
                                        <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                                          <a href="htmlid">
                                            <button className="custom-btn">
                                              <FaArrowLeft /> Previous
                                            </button>
                                          </a>
                                          <a href="htmljavascript">
                                            <button className="custom-btn">
                                              Next <FaArrowRight />
                                            </button>
                                          </a>
                                        </div>

              <p className="lead py-5">
                An <code>&lt;iframe&gt;</code> embeds another HTML page within the current page.
                Common uses: map embeds, videos, or app widgets.
              </p>

           
              

              {/* 1) Basic iframe */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">1) Basic &lt;iframe&gt;</div>
                <div className="card-body">
                  <p>Minimal example to load a webpage inside your page:</p>
                  <pre className="bg-light p-3 rounded">
{`<iframe src="https://www.example.com" title="Example Website"></iframe>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* 2) Width / Height */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">2) Width & Height</div>
                <div className="card-body">
                  <p>Size control via attributes or CSS:</p>
                  <pre className="bg-light p-3 rounded">
{`<!-- Attributes -->
<iframe src="https://www.example.com" width="600" height="300" title="Sized iFrame"></iframe>

<!-- CSS -->
<iframe src="https://www.example.com" style="width:100%; height:350px;" title="CSS Sized iFrame"></iframe>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe_height_width"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* 3) Border / No Border */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">3) Border / No Border</div>
                <div className="card-body">
                  <p>Modern way: control border with CSS (not the old <code>frameborder</code>):</p>
                  <pre className="bg-light p-3 rounded">
{`<iframe src="https://www.example.com" style="border:2px solid #812B8F;" title="Bordered"></iframe>

<iframe src="https://www.example.com" style="border:none;" title="No Border"></iframe>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe_frameborder_css"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* 4) Responsive iFrame (Bootstrap Ratio) */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">4) Responsive iFrame (Bootstrap Ratio)</div>
                <div className="card-body">
                  <p>Use Bootstrap’s <code>.ratio</code> utility to keep aspect ratio (16:9 example):</p>
                  <pre className="bg-light p-3 rounded">
{`<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video" allowfullscreen></iframe>
</div>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_ratio_16x9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* 5) Targeting Links into an iFrame */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">5) Open Link inside a Named iFrame</div>
                <div className="card-body">
                  <p>Give the iframe a <code>name</code> and use <code>target</code> on the link:</p>
                  <pre className="bg-light p-3 rounded">
{`<iframe name="contentBox" style="width:100%; height:220px; border:1px solid #ccc;"></iframe>
<p><a href="https://www.example.com" target="contentBox">Load Example.com in iFrame</a></p>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe_target"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* 6) Loading / Referrer / Allow */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">6) loading, referrerpolicy, allow</div>
                <div className="card-body">
                  <p>
                    Performance & privacy friendly attributes. <code>loading="lazy"</code> delays load until scroll,
                    <code>referrerpolicy</code> controls referrer header, <code>allow</code> grants features.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<iframe
  src="https://www.example.com"
  title="Safe iFrame"
  loading="lazy"
  referrerpolicy="no-referrer"
  allow="fullscreen; clipboard-read; clipboard-write">
</iframe>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe_allow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* 7) sandbox (Security) */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">7) Security with sandbox</div>
                <div className="card-body">
                  <p>
                    <code>sandbox</code> restricts capabilities of the embedded page. Add tokens to permit specific things.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<!-- Fully sandboxed -->
<iframe src="page.html" sandbox title="Sandboxed"></iframe>

<!-- Allow scripts but block same-origin -->
<iframe src="app.html" sandbox="allow-scripts" title="Sandboxed Scripts"></iframe>

<!-- Multiple permissions -->
<iframe src="app.html" sandbox="allow-same-origin allow-scripts allow-forms" title="App"></iframe>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe_sandbox"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* 8) Google Map Embed (real use-case) */}
              <div className="card mb-4 shadow-sm rounded py-5">
                <div className="card-header fw-bold">8) Google Map Embed</div>
                <div className="card-body">
                  <p>Copy embed code from Google Maps → paste in your page:</p>
                  <pre className="bg-light p-3 rounded">
{`<div class="ratio ratio-16x9">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
    style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade" title="Map">
  </iframe>
</div>`}
                  </pre>
                  <a
                    href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_google_maps_iframe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm mt-2" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Note */}
              <div className="alert border-0" style={noteBox}>
                <strong>Note:</strong> Some websites block embedding with
                <code> X-Frame-Options </code> / <code>Content-Security-Policy</code>. ऐसे cases में iframe काम नहीं करेगा।
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

/* Inline Styles */
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

export default HTMLIframes;
