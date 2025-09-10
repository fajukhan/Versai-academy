import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelManageRules = () => {
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

              <h1>Excel Manage Rules (CF)</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceliconsets">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcharts">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The Manage Rules option in Excel’s Conditional Formatting allows you to view, edit, and delete existing formatting rules. It helps you control how your data is visually represented based on conditions.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Manage Rules
              </h3>
              <ul>
                <li>Go to the <strong>Home</strong> tab and click <strong>Conditional Formatting</strong>.</li>
                <li>Select <strong>Manage Rules</strong> from the dropdown menu.</li>
                <li>A dialog box appears showing all the rules applied to the worksheet or selection.</li>
                <li>You can edit the rule, change the range, delete it, or reorder rules as needed.</li>
                <li>Click <strong>OK</strong> to save changes.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Editing a Rule
              </h3>
              <p>If you have applied a color scale but want to change the midpoint value, you can manage the rule to adjust it.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product   B1: Sales
A2: Pens      150
A3: Notebooks 120
A4: Erasers   80
A5: Markers   200
A6: Binders   100

Action:
- Apply color scale to B2:B6
- Go to Conditional Formatting > Manage Rules
- Edit the rule to change the midpoint from 100 to 120
- Click OK to apply the changes`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Managing rules gives you full control over how conditional formatting is applied.</li>
                <li>You can prioritize rules by moving them up or down in the list.</li>
                <li>Always check the range to ensure formatting applies to the correct cells.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelManageRules;
