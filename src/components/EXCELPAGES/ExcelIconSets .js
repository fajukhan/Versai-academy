import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelIconSets = () => {
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

              <h1>Excel Icon Sets</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcolorscales">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelmanagerules">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Icon Sets in Excel are a form of conditional formatting that visually represent data using icons like arrows, flags, and traffic lights. These icons help you quickly interpret data trends and categories.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply Icon Sets
              </h3>
              <ul>
                <li>Select the range of cells you want to format.</li>
                <li>Go to the <strong>Home</strong> tab and click <strong>Conditional Formatting</strong>.</li>
                <li>Choose <strong>Icon Sets</strong> from the dropdown menu.</li>
                <li>Select the type of icon set you want to use, such as directional arrows or shapes.</li>
                <li>Excel will automatically apply icons based on the value in each cell.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Tracking Performance
              </h3>
              <p>Use icon sets to easily track performance by highlighting cells based on their values.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Employee   B1: Performance
A2: John       85
A3: Alice      60
A4: Bob        45
A5: Clara      75

Action:
- Select B2:B5
- Home > Conditional Formatting > Icon Sets
- Choose directional arrows icon set

Result:
- Green up arrow for high performance
- Yellow side arrow for average performance
- Red down arrow for low performance`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Icon sets help visualize trends and comparisons at a glance without reading individual numbers.</li>
                <li>You can edit the rules or icon thresholds based on your reporting needs.</li>
                <li>Combining icon sets with other formatting options enhances data analysis and presentation.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelIconSets;
