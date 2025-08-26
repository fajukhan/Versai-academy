import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const HtmlMultimedia = () => {
  // Try it Yourself Popup
  const openTryit = (code) => {
    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head><title>Try it Yourself - HTML Multimedia</title></head>
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
      title: "Image Example",
      desc: "Images can be inserted in HTML using the <img> tag.",
      code: `<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" width="200" height="250">`
    },
    {
      title: "Audio Example",
      desc: "The <audio> element is used to embed audio content.",
      code: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`
    },
    {
      title: "Video Example",
      desc: "The <video> element is used to embed video content.",
      code: `<video width="320" height="240" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`
    },
    {
      title: "YouTube Video Example",
      desc: "You can embed YouTube videos using an <iframe>.",
      code: `<iframe width="360" height="215" 
  src="https://www.youtube.com/embed/tgbNymZ7vqY" 
  title="YouTube video" frameborder="0" allowfullscreen></iframe>`
    },
    {
      title: "Object Element Example",
      desc: "The <object> element can be used to embed external resources like PDF or Flash.",
      code: `<object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
  type="application/pdf" width="300" height="200"></object>`
    },
    {
      title: "Embed Element Example",
      desc: "The <embed> element is used to embed external content.",
      code: `<embed src="https://www.w3schools.com/html/mov_bbb.mp4" width="320" height="240">`
    },
    {
      title: "Responsive Video Example",
      desc: "You can make multimedia responsive using CSS.",
      code: `<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%;">
  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" 
    style="position:absolute; top:0; left:0; width:100%; height:100%;" 
    frameborder="0" allowfullscreen></iframe>
</div>`
    }
  ];

  return (
    <>
      <Navbar />

      <section className="bg-white p-0">
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
              <h1 className="fw-bold">HTML Multimedia</h1>

                        {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlformattribute">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlaudio">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>


              <p className="lead py-5">
                Multimedia on the web includes images, audio, video, and other embedded content.  
                HTML provides different tags to display multimedia effectively.  
                Below are examples of each multimedia type.
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

export default HtmlMultimedia;
