import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const btn = {
  background: "#812B8F",
  color: "#fff",
  border: "0",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: ".25s",
};
const badge = {
  background: "#F6E8F9",
  color: "#812B8F",
  borderRadius: "20px",
  padding: "4px 10px",
  fontSize: 12,
  fontWeight: 600,
};

const HtmlInputTypes = () => {
  return (
    <>
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
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="fw-bold m-0">HTML Input Types</h1>
                <span style={badge}>All Examples</span>
              </div>

            
                         {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlformelement">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlattribute">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>
          

              <p className="lead py-5">
                HTML <code>&lt;input&gt;</code> element can have different types.  
                Each <code>type</code> attribute specifies how the input behaves.
              </p>

            
              {/* Input Types Examples */}
              {[
                { title: "Text", code: `<input type="text" placeholder="Enter name">`, render: <input type="text" className="form-control" placeholder="Enter name" /> },
                { title: "Password", code: `<input type="password" placeholder="Enter password">`, render: <input type="password" className="form-control" placeholder="Enter password" /> },
                { title: "Email", code: `<input type="email" placeholder="Enter email">`, render: <input type="email" className="form-control" placeholder="Enter email" /> },
                { title: "Number", code: `<input type="number" min="1" max="10">`, render: <input type="number" className="form-control" min="1" max="10" /> },
                { title: "Date", code: `<input type="date">`, render: <input type="date" className="form-control" /> },
                { title: "Time", code: `<input type="time">`, render: <input type="time" className="form-control" /> },
                { title: "Datetime-local", code: `<input type="datetime-local">`, render: <input type="datetime-local" className="form-control" /> },
                { title: "Month", code: `<input type="month">`, render: <input type="month" className="form-control" /> },
                { title: "Week", code: `<input type="week">`, render: <input type="week" className="form-control" /> },
                { title: "Color", code: `<input type="color">`, render: <input type="color" className="form-control form-control-color" /> },
                { title: "Range", code: `<input type="range" min="0" max="100">`, render: <input type="range" className="form-range" min="0" max="100" /> },
                { title: "Checkbox", code: `<input type="checkbox"> I agree`, render: <div><input type="checkbox" id="chk" /> <label htmlFor="chk"> I agree</label></div> },
                { title: "Radio", code: `<input type="radio" name="gender"> Male`, render: <div><input type="radio" name="gender" id="male" /> <label htmlFor="male">Male</label> <br /> <input type="radio" name="gender" id="female" /> <label htmlFor="female">Female</label></div> },
                { title: "File", code: `<input type="file">`, render: <input type="file" className="form-control" /> },
                { title: "Hidden", code: `<input type="hidden" value="12345">`, render: <small className="text-muted">Hidden input (not visible)</small> },
                { title: "Submit", code: `<input type="submit" value="Submit">`, render: <input type="submit" value="Submit" className="btn btn-sm" style={btn} /> },
                { title: "Reset", code: `<input type="reset">`, render: <input type="reset" value="Reset" className="btn btn-outline-secondary btn-sm" /> },
                { title: "Button", code: `<input type="button" value="Click Me">`, render: <input type="button" value="Click Me" className="btn btn-outline-dark btn-sm" /> },
                { title: "Search", code: `<input type="search" placeholder="Search...">`, render: <input type="search" className="form-control" placeholder="Search..." /> },
                { title: "Tel", code: `<input type="tel" placeholder="123-456-7890">`, render: <input type="tel" className="form-control" placeholder="123-456-7890" /> },
                { title: "URL", code: `<input type="url" placeholder="https://example.com">`, render: <input type="url" className="form-control" placeholder="https://example.com" /> },
                { title: "Image (submit)", code: `<input type="image" src="https://via.placeholder.com/100x40?text=Submit">`, render: <input type="image" src="https://via.placeholder.com/100x40?text=Submit" alt="Submit" /> },
              ].map((item, i) => (
                <div className="card mb-4 shadow-sm" key={i}>
                  <div className="card-header fw-bold">Example: {item.title}</div>
                  <div className="card-body">
                    <pre className="bg-light p-3 rounded">{item.code}</pre>
                    <div className="border rounded p-3 bg-light">{item.render}</div>
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

export default HtmlInputTypes;
