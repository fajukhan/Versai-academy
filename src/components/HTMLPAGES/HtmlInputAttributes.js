import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const HtmlInputAttributes = () => {
  // "Try it Yourself" popup
  const openTryit = (code) => {
    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head><title>Try it Yourself - HTML Input Attribute</title></head>
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

  // All input attribute examples
  const examples = [
    { title: "value", desc: "Specifies an initial value for an input field.", code: `<input type="text" value="John Doe">` },
    { title: "readonly", desc: "Specifies that an input field is read-only.", code: `<input type="text" value="Can't edit" readonly>` },
    { title: "disabled", desc: "Disables an input field (not editable, not sent in form).", code: `<input type="text" value="Disabled" disabled>` },
    { title: "size", desc: "Defines the width (in characters) of an input field.", code: `<input type="text" size="40" placeholder="Wide input">` },
    { title: "maxlength", desc: "Specifies the maximum number of characters allowed.", code: `<input type="text" maxlength="10" placeholder="Max 10 chars">` },
    { title: "min and max", desc: "Defines minimum and maximum values for number/date inputs.", code: `<input type="number" min="1" max="10">` },
    { title: "multiple", desc: "Allows multiple values for email or file inputs.", code: `<input type="file" multiple>` },
    { title: "pattern", desc: "Defines a regex pattern the input value must match.", code: `<input type="text" pattern="[A-Za-z]{3}" placeholder="3 letters only">` },
    { title: "placeholder", desc: "Specifies a hint for the input field.", code: `<input type="text" placeholder="Enter your name">` },
    { title: "required", desc: "Specifies that an input field must be filled before submitting.", code: `<input type="email" required placeholder="Enter email">` },
    { title: "step", desc: "Specifies the legal number intervals for number/date inputs.", code: `<input type="number" step="5" min="0" max="50">` },
   
    { title: "autocomplete", desc: "Specifies whether the browser should autocomplete the field.", code: `<input type="text" autocomplete="on" placeholder="Start typing...">` },
    { title: "checked", desc: "Pre-selects an input (checkbox/radio).", code: `<input type="checkbox" checked> Subscribe` },
    { title: "name", desc: "Specifies the name of the input (sent in form data).", code: `<input type="text" name="username">` },
    { title: "form", desc: "Specifies which form the input belongs to.", code: `<form id="myForm"><input type="submit"></form><br><input type="text" form="myForm" placeholder="Linked to form">` },
    { title: "height and width", desc: "Only for <input type='image'> to set image size.", code: `<input type="image" src="https://via.placeholder.com/100" width="80" height="50">` },
    { title: "list (with datalist)", desc: "Specifies a list of pre-defined options.", code: `<input list="browsers"><datalist id="browsers"><option value="Chrome"><option value="Firefox"><option value="Edge"></datalist>` },
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
              <h1 className="fw-bold">HTML Input Attributes</h1>

            
                        {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlinput">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlformattribute">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>


              <p className="lead py-5">
                HTML input elements support a wide variety of attributes that define their behavior, restrictions, and default values.  
                Below are examples of the most commonly used attributes with live demonstrations.
              </p>

              

              {/* Example Cards */}
              {examples.map((ex, i) => (
                <div className="card mb-4 shadow-sm" key={i}>
                  <div className="card-header fw-bold">{ex.title} Attribute</div>
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

export default HtmlInputAttributes;
