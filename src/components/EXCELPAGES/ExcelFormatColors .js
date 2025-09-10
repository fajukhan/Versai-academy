import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatColors = () => {
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

              <h1>Excel Format Colors</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatpainter">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatfonts">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Format Colors in Excel allow you to apply background colors (fill) and font colors to cells to make your data visually appealing and easier to read.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply Format Colors
              </h3>
              <ul>
                <li>Select the cell or range you want to format.</li>
                <li>Click the <strong>Fill Color</strong> button in the Home tab to change the cell background color.</li>
                <li>Click the <strong>Font Color</strong> button to change the text color.</li>
                <li>Choose the desired color from the color palette.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Apply Fill Color
              </h3>
              <p>Fill a cell with a yellow background color.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Revenue
- Select A1
- Click Fill Color
- Choose Yellow
Result: A1 background becomes Yellow`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Apply Font Color
              </h3>
              <p>Change the font color of a cell to red.</p>
              <pre className="bg-light p-3 rounded">
{`A2: Expenses
- Select A2
- Click Font Color
- Choose Red
Result: Text in A2 appears Red`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use colors consistently to enhance readability.</li>
                <li>Too many colors can make a spreadsheet confusing.</li>
                <li>Conditional formatting can dynamically change colors based on cell values.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatColors;
