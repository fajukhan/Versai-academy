import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelTopBottomRules = () => {
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

              <h1>Excel Top Bottom Rules</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelhighlightcellrules">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="/">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Top and Bottom Rules in Excel allow you to highlight the highest or lowest values in a range. This helps you easily spot trends, outliers, or important data points in your spreadsheet.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Apply Top and Bottom Rules
              </h3>
              <ul>
                <li>Select the range of cells where you want to apply the rule.</li>
                <li>Go to the <strong>Home</strong> tab and click <strong>Conditional Formatting</strong>.</li>
                <li>Choose <strong>Top/Bottom Rules</strong> from the dropdown.</li>
                <li>Select Top 10 Items, Top 10%, Bottom 10 Items, or Bottom 10% as needed.</li>
                <li>Choose a formatting style and click <strong>OK</strong>.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Highlight Top 3 Scores
              </h3>
              <p>Highlight the top 3 highest values in a list.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Name     B1: Score
A2: Alice    85
A3: Bob      95
A4: Charlie  78
A5: Dave     92
A6: Eva      88

Action:
- Select B2:B6
- Home > Conditional Formatting > Top/Bottom Rules > Top 3 Items
- Choose a formatting style
- Click OK

Result:
The top 3 scores (95, 92, 88) are highlighted`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Highlight Bottom 2 Items
              </h3>
              <p>Highlight the bottom 2 lowest values in a dataset.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product   B1: Sales
A2: Pens      150
A3: Notebooks 120
A4: Erasers   80
A5: Markers   90

Action:
- Select B2:B5
- Home > Conditional Formatting > Top/Bottom Rules > Bottom 2 Items
- Choose a formatting style
- Click OK

Result:
The lowest 2 values (80, 90) are highlighted`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Top and Bottom rules help you quickly spot key values without manual inspection.</li>
                <li>You can combine these rules with other conditional formatting to enhance your analysis.</li>
                <li>Always review and adjust the formatting style to ensure it clearly highlights important data.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelTopBottomRules;
