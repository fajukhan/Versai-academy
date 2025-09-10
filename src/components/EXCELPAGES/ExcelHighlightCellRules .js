import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelHighlightCellRules = () => {
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

              <h1>Excel Highlight Cell Rules</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelconditionalformat">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceltopbottomrules">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Highlight Cell Rules in Excel allow you to automatically format cells based on their values. These rules help you quickly identify important data like numbers greater than a certain value, duplicates, or dates that meet specific conditions.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Use Highlight Cell Rules
              </h3>
              <ul>
                <li>Select the range of cells you want to highlight.</li>
                <li>Go to the <strong>Home</strong> tab and click <strong>Conditional Formatting</strong>.</li>
                <li>Choose <strong>Highlight Cells Rules</strong> from the dropdown.</li>
                <li>Select the condition type, set the value or range, and choose the formatting style.</li>
                <li>Click <strong>OK</strong> to apply the rule.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Highlight Greater Than
              </h3>
              <p>Highlight cells where values are greater than 100.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Item      B1: Amount
A2: Pens      50
A3: Notebooks 120
A4: Erasers   30
A5: Markers   150

Action:
- Select B2:B5
- Home > Conditional Formatting > Highlight Cells Rules > Greater Than
- Enter '100'
- Choose a format style
- Click OK

Result:
Cells with values greater than 100 are highlighted`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Highlight Duplicate Values
              </h3>
              <p>Identify duplicate entries in your data using highlight rules.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product
A2: Apple
A3: Banana
A4: Apple
A5: Cherry

Action:
- Select A2:A5
- Home > Conditional Formatting > Highlight Cells Rules > Duplicate Values
- Choose a formatting style
- Click OK

Result:
Duplicate entries such as 'Apple' are highlighted`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>You can use multiple highlight rules to focus on different aspects of your data.</li>
                <li>Managing rules through the Conditional Formatting Rules Manager allows you to edit or delete rules.</li>
                <li>Using highlight rules effectively makes data analysis faster and more accurate.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelHighlightCellRules;
