import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelTRIM = () => {
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

              <h1>Excel TRIM Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelsumifs">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelvlookup">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The TRIM function in Excel removes all extra spaces from text, leaving only single spaces between words and no leading or trailing spaces.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>TRIM(text)</code>
              </p>
              <ul>
                <li><strong>text</strong>: The text or cell reference from which you want to remove extra spaces.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Remove Extra Spaces
              </h3>
              <pre className="bg-light p-3 rounded">
{`=TRIM("  Excel   Tutorial   ") 

Result:
"Excel Tutorial"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Clean Data Imported from Other Sources
              </h3>
              <pre className="bg-light p-3 rounded">
{`=TRIM(A2)

Where A2 contains:
"   John   Doe   "

Result:
"John Doe"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>TRIM only removes space characters (ASCII 32), not non-breaking spaces.</li>
                <li>It is useful when cleaning up data imported from external sources.</li>
                <li>TRIM helps prevent errors in formulas that rely on clean text data.</li>
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

export default ExcelTRIM;
