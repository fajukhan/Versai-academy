import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCasePokeMartStyling = () => {
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

              <h1>Excel Case: Poke Mart, Styling</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcasepokemart">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceland">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                In this case, we will learn how Poke Mart can enhance the presentation of its data using Excel's styling features. Formatting helps make reports clearer, visually appealing, and easier to interpret.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Styling Techniques
              </h3>
              <p>
                Excel offers various styling options such as applying colors, fonts, borders, and number formatting. Using these tools effectively can help highlight key information and improve readability.
              </p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Applying Styling
              </h3>
              <p>This example shows how to style sales data by applying bold fonts, cell borders, and fill colors to make it easier to read.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product   B1: Quantity Sold   C1: Price   D1: Total
A2: Pens      150              1.20     180.00
A3: Notebooks 200              2.50     500.00
A4: Markers   180              1.80     324.00

Actions:
- Apply bold formatting to headers (A1:D1)
- Use light yellow fill for alternate rows
- Add borders around cells for clarity
- Format 'Price' and 'Total' columns as currency`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Use styling to improve data presentation and emphasize important values.</li>
                <li>Consistent formatting makes reports more professional and easier to understand.</li>
                <li>Conditional formatting can dynamically highlight data based on values.</li>
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

export default ExcelCasePokeMartStyling;
