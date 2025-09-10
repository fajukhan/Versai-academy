import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCasePokeMart = () => {
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

              <h1>Excel Case: Poke Mart</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceltablepivotintro">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="casepokemartstyling">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                In this case study, we will explore how Poke Mart, a fictional retail store, uses Excel to manage its sales data, track inventory, and analyze customer behavior. This example will demonstrate practical applications of Excel’s features.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Scenario
              </h3>
              <p>
                Poke Mart sells various stationery and office supplies. They want to use Excel to keep track of products, sales, and inventory levels while analyzing which products are most popular and generating monthly reports.
              </p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example Dataset
              </h3>
              <pre className="bg-light p-3 rounded">
{`A1: Product   B1: Category    C1: Quantity Sold   D1: Price   E1: Date
A2: Pens      Office         150               1.20     2025-09-01
A3: Notebooks Office         200               2.50     2025-09-01
A4: Markers   Office         180               1.80     2025-09-02
A5: Binders   Office         220               3.00     2025-09-02
A6: Files     Office         130               2.00     2025-09-03`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Tasks
              </h3>
              <ul>
                <li>Create a table from the dataset for easier filtering and sorting.</li>
                <li>Use formulas to calculate total sales (Quantity × Price).</li>
                <li>Analyze sales trends by product and date using charts and pivot tables.</li>
                <li>Apply conditional formatting to highlight high-performing products.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Excel is a great tool for managing business data efficiently.</li>
                <li>Using tables and formulas can save time and improve accuracy.</li>
                <li>Visualizations such as charts make it easier to interpret data and present findings.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelCasePokeMart;
