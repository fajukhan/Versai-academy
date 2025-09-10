import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelLEFT = () => {
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

              <h1>Excel LEFT Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelifs">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excellower">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The LEFT function in Excel returns the first specified number of characters from the start (left side) of a text string.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>LEFT(text, [num_chars])</code>
              </p>
              <ul>
                <li><code>text</code>: The text string containing the characters you want to extract.</li>
                <li><code>num_chars</code>: (Optional) The number of characters to extract from the left. Default is 1.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Extract First 4 Characters
              </h3>
              <pre className="bg-light p-3 rounded">
{`=LEFT("ExcelTutorial", 4)

Result: "Exce"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Default 1 Character
              </h3>
              <pre className="bg-light p-3 rounded">
{`=LEFT("Excel", )

Result: "E" (returns the first character by default)`} 
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>If <code>num_chars</code> is greater than the length of the text, the entire text is returned.</li>
                <li>LEFT can be combined with other text functions like RIGHT, MID, or CONCAT.</li>
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

export default ExcelLEFT;
