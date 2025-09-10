import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelRIGHT = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

            {/* Sidebar (Left - col-2) */}
            <SidebarExcel />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">

              <h1>Excel RIGHT Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelrand">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelstdevp">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The RIGHT function in Excel returns the last character or characters in a text string, based on the number of characters you specify.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>RIGHT(text, [num_chars])</code>
              </p>
              <ul>
                <li><strong>text</strong>: The text string you want to extract from.</li>
                <li><strong>num_chars</strong>: Optional. The number of characters you want from the right side. Default is 1.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Extract Last 3 Characters
              </h3>
              <pre className="bg-light p-3 rounded">
{`=RIGHT("HelloWorld", 3)
Result: "rld"`

}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Extract Last Character
              </h3>
              <pre className="bg-light p-3 rounded">
{`=RIGHT("Excel", 1)
Result: "l"`

}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>If <code>num_chars</code> is greater than the length of the text, the entire text is returned.</li>
                <li>This function is useful for extracting file extensions, last names, or any part at the end of a text string.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelRIGHT;
