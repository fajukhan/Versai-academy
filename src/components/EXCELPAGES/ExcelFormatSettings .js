import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatSettings = () => {
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

              <h1>Excel Format Settings</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatgrids">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelsort">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Excel’s format settings allow you to control how data is displayed and managed in your spreadsheet. You can adjust options for calculation, editing, display, and more.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Access Format Settings
              </h3>
              <ul>
                <li>Go to <strong>File</strong> → <strong>Options</strong>.</li>
                <li>Select the category such as <strong>General</strong>, <strong>Formulas</strong>, <strong>Proofing</strong>, <strong>Advanced</strong>, etc.</li>
                <li>Modify the settings as per your requirement and click <strong>OK</strong>.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Change Calculation Options
              </h3>
              <p>You can set Excel to calculate formulas automatically or manually.</p>
              <pre className="bg-light p-3 rounded">
{`Go to File > Options > Formulas
- Under Calculation options, choose Automatic or Manual
- Click OK
Result: Excel recalculates formulas based on the selected option`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Customize Editing Options
              </h3>
              <p>You can modify how you edit data in Excel.</p>
              <pre className="bg-light p-3 rounded">
{`Go to File > Options > Advanced
- Under Editing options, enable or disable features like 'Enable AutoComplete'
- Click OK
Result: Editing behavior changes as per your preferences`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Changing format settings can improve efficiency and data accuracy.</li>
                <li>Always review the changes before applying them to ensure they meet your needs.</li>
                <li>Use format settings to personalize Excel’s interface and functionality for your workflow.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatSettings;
