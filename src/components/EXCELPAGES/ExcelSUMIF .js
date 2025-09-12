import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelSUMIF = () => {
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

              <h1>Excel SUMIF Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelsum">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelsumifs">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The SUMIF function in Excel adds the values in a range that meet a specified condition or criteria.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>SUMIF(range, criteria, [sum_range])</code>
              </p>
              <ul>
                <li><strong>range</strong>: The range of cells to evaluate.</li>
                <li><strong>criteria</strong>: The condition or criteria to apply.</li>
                <li><strong>sum_range</strong>: The actual cells to sum. If omitted, Excel sums the cells in the range.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sum if Greater Than 50
              </h3>
              <pre className="bg-light p-3 rounded">
{`=SUMIF(A1:A5, ">50")

If A1=30, A2=60, A3=55, A4=40, A5=70
Result: 60 + 55 + 70 = 185`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sum Sales by Region
              </h3>
              <pre className="bg-light p-3 rounded">
{`=SUMIF(B2:B6, "East", C2:C6)

Where:
B2:B6 = Region names
C2:C6 = Sales values

This sums all sales where the region is "East".`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use SUMIF to sum data that meets specific criteria.</li>
                <li>Text criteria should be enclosed in quotes, such as "East".</li>
                <li>You can use comparison operators like "", "=", etc.</li>
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

export default ExcelSUMIF;
