import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";


const HtmlFormAttributes = () => {
  // Try it Yourself Popup
  const openTryit = (code) => {
    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head><title>Try it Yourself - HTML Form Attribute</title></head>
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
      title: "action",
      desc: "Specifies where to send the form data when submitted.",
      code: `<form action="/submit">
  <label>Name: <input type="text" name="username"></label>
  <input type="submit" value="Submit">
</form>`
    },
    {
      title: "method",
      desc: "Defines how form data is sent (GET or POST).",
      code: `<form action="/submit" method="post">
  <label>Email: <input type="email" name="email"></label>
  <input type="submit" value="Submit">
</form>`
    },
    {
      title: "target",
      desc: "Specifies where to display the response after form submission.",
      code: `<form action="/submit" target="_blank">
  <label>Message: <input type="text" name="msg"></label>
  <input type="submit" value="Submit">
</form>`
    },
    {
      title: "autocomplete",
      desc: "Specifies whether the form should have autocomplete on/off.",
      code: `<form action="/submit" autocomplete="on">
  <label>First Name: <input type="text" name="fname"></label><br>
  <label>Last Name: <input type="text" name="lname"></label><br>
  <input type="submit" value="Submit">
</form>`
    },
    {
      title: "novalidate",
      desc: "Specifies that the form data should not be validated before submission.",
      code: `<form action="/submit" novalidate>
  <label>Email: <input type="email" name="email"></label>
  <input type="submit" value="Submit">
</form>`
    },
    {
      title: "enctype",
      desc: "Specifies how form data should be encoded when submitting (used with POST).",
      code: `<form action="/upload" method="post" enctype="multipart/form-data">
  <label>Upload File: <input type="file" name="myFile"></label>
  <input type="submit" value="Upload">
</form>`
    },
    {
      title: "name",
      desc: "Specifies the name of the form (used in JavaScript).",
      code: `<form name="myForm">
  <label>Age: <input type="number" name="age"></label>
  <input type="submit" value="Submit">
</form>`
    },
    {
      title: "accept-charset",
      desc: "Specifies the character encodings used for form submission.",
      code: `<form action="/submit" accept-charset="UTF-8">
  <label>Username: <input type="text" name="uname"></label>
  <input type="submit" value="Submit">
</form>`
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
              <h1 className="fw-bold">HTML Form Attributes</h1>


                
            
                        {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlinput">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlmultimedia">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>


              <p className="lead py-5">
                HTML forms support a number of attributes that define how the form behaves when submitted.  
                Below are the most commonly used attributes with examples and live demonstrations.
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

export default HtmlFormAttributes;
