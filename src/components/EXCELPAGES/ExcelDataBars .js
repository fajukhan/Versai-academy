import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelDataBars = () => {
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

              <h1>Excel Data Bars</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceltopbottomrules">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcolorscales">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Data Bars in Excel are a type of conditional formatting that visually represent the value of a cell relative to others. This helps you quickly understand the distribution or significance of data within your spreadsheet.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply Data Bars
              </h3>
              <ul>
                <li>Select the range of cells where you want to apply Data Bars.</li>
                <li>Go to the <strong>Home</strong> tab and click <strong>Conditional Formatting</strong>.</li>
                <li>Choose <strong>Data Bars</strong> from the dropdown menu.</li>
                <li>Select a gradient fill or solid fill style based on your preference.</li>
                <li>Excel will automatically apply the data bars representing the values.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sales Data Visualization
              </h3>
              <p>Use Data Bars to visually compare sales figures across different products.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product   B1: Sales
A2: Pens      150
A3: Notebooks 120
A4: Erasers   80
A5: Markers   200

Action:
- Select B2:B5
- Home > Conditional Formatting > Data Bars
- Choose a gradient fill style

Result:
Each cell in column B displays a bar representing its value relative to others.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Data Bars help in quickly identifying higher or lower values without reading each number.</li>
                <li>You can customize the fill type, color, and appearance according to your report style.</li>
                <li>Combining Data Bars with other conditional formats enhances data visualization and reporting efficiency.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelDataBars;
