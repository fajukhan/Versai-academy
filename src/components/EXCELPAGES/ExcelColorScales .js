import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelColorScales = () => {
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

              <h1>Excel Color Scales</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceldatabars">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceliconsets">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Color Scales in Excel are a type of conditional formatting that applies a gradient of colors to a range of cells. This helps visualize data by using color intensity or shade to represent higher or lower values.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply Color Scales
              </h3>
              <ul>
                <li>Select the range of cells where you want to apply the color scale.</li>
                <li>Go to the <strong>Home</strong> tab and click <strong>Conditional Formatting</strong>.</li>
                <li>Choose <strong>Color Scales</strong> from the dropdown menu.</li>
                <li>Select from different two-color or three-color gradient options.</li>
                <li>Excel will apply the color gradient based on the values in the selected cells.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sales Performance
              </h3>
              <p>Use color scales to highlight higher and lower sales figures visually.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product   B1: Sales
A2: Pens      150
A3: Notebooks 120
A4: Erasers   80
A5: Markers   200
A6: Binders   100

Action:
- Select B2:B6
- Home > Conditional Formatting > Color Scales
- Choose a three-color gradient

Result:
Cells with higher sales are highlighted in darker shades, and lower sales in lighter shades.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Color scales provide a quick way to interpret data patterns and trends.</li>
                <li>You can adjust the minimum, midpoint, and maximum values for more refined formatting.</li>
                <li>Using appropriate color choices improves data readability and presentation.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelColorScales;
