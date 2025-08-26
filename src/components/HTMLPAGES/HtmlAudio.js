import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const HtmlAudio = () => {
  // Try it Yourself Popup
  const openTryit = (code) => {
    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head><title>Try it Yourself - HTML Audio</title></head>
        <body style="font-family:Arial; padding:20px;">
          <h2>Output:</h2>
          ${code}
          <hr/>
          <h3>Code:</h3>
          <pre style="background:#f4f4f4; padding:10px; border-radius:6px;">${code
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</pre>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  const examples = [
    {
      title: "Basic Audio",
      desc: "The <audio> element with controls.",
      code: `<audio controls>
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`
    },
    {
      title: "Audio",
      desc: "Audio can start automatically using the  attribute.",
      code: `<audio controls >
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/mpeg">
</audio>`
    },
    {
      title: "Looping Audio",
      desc: "The loop attribute makes the audio restart automatically.",
      code: `<audio controls loop>
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/mpeg">
</audio>`
    },
    {
      title: "Muted Audio",
      desc: "The muted attribute starts the audio with sound turned off.",
      code: `<audio controls muted>
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/mpeg">
</audio>`
    },
    {
      title: "Multiple Sources",
      desc: "You can specify multiple audio sources for browser compatibility.",
      code: `<audio controls>
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/mpeg">
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`
    },
    {
      title: "Different Audio Formats",
      desc: "MP3, OGG, and WAV formats are widely supported.",
      code: `<p>MP3 Audio:</p>
<audio controls>
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/mpeg">
</audio>

<p>OGG Audio:</p>
<audio controls>
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/ogg">
</audio>

<p>WAV Audio:</p>
<audio controls>
  <source src="https://versaiacademy.com/audio/sample.mp3" type="audio/wav">
</audio>`
    }
  ];

  return (
    <>
      <Navbar />

      <section className="p-0 bg-white">
        <div className="container-fluid p-0">
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
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <h1 className="fw-bold">HTML Audio</h1>
 
                <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlmultimedia">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlvideo">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>&lt;audio&gt;</code> tag is used to embed sound content in HTML documents.  
                It supports multiple formats like MP3, OGG, and WAV.  
                Below are examples of how to use audio in different ways.
              </p>

          

              {/* Example Cards */}
              {examples.map((ex, i) => (
                <div className="card mb-4 shadow-sm" key={i}>
                  <div className="card-header fw-bold">{ex.title}</div>
                  <div className="card-body">
                    <p>{ex.desc}</p>
                    <pre className="bg-light p-3 rounded">{ex.code}</pre>
                    <p><strong>Output:</strong></p>
                    <div
                      className="border p-3 rounded bg-white"
                      dangerouslySetInnerHTML={{ __html: ex.code }}
                    />
                    <button
                      className="btn mt-3 text-white"
                      style={{ background: "#812B8F" }}
                      onClick={() => openTryit(ex.code)}
                    >
                      Try it Yourself »
                    </button>
                  </div>
                </div>
              ))}

         
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HtmlAudio;


