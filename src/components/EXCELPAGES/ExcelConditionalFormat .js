import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelConditionalFormat = () => {
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

              <h1>Excel Conditional Format</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceltables">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelhighlightcellrules">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Conditional Formatting in Excel allows you to automatically apply formatting—such as colors, icons, or data bars—to cells that meet specific criteria. This helps highlight patterns and trends in your data.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply Conditional Formatting
              </h3>
              <ul>
                <li>Select the cells you want to format.</li>
                <li>Go to the <strong>Home</strong> tab and click <strong>Conditional Formatting</strong>.</li>
                <li>Choose a rule type such as Highlight Cells Rules or Top/Bottom Rules.</li>
                <li>Set the criteria and formatting options, then click <strong>OK</strong>.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Highlight Cells Greater Than
              </h3>
              <p>This example highlights cells where values exceed a certain threshold.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Name    B1: Score
A2: Alice   85
A3: Bob     70
A4: Charlie 90
A5: Dave    75

Action:
- Select B2:B5
- Click Home > Conditional Formatting > Highlight Cells Rules > Greater Than
- Enter '80'
- Choose a formatting style
- Click OK

Result:
Cells with scores greater than 80 are highlighted`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Use Data Bars
              </h3>
              <p>You can visualize the relative size of values with data bars.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product    B1: Sales
A2: Apple      120
A3: Banana     80
A4: Cherry     150
A5: Date       90

Action:
- Select B2:B5
- Click Home > Conditional Formatting > Data Bars
- Choose a style

Result:
Cells show data bars reflecting their sales values`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Conditional formatting helps you quickly spot important data trends and anomalies.</li>
                <li>You can manage rules by selecting Conditional Formatting  Manage Rules.</li>
                <li>Multiple rules can be applied to the same cells for advanced visualization.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelConditionalFormat;
