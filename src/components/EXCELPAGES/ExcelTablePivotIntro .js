import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelTablePivotIntro = () => {
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

              <h1>Excel Table Pivot – Introduction</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelcharts">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="casepokemart">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                A Pivot Table in Excel is a powerful tool that allows you to summarize, analyze, and explore large amounts of data quickly. It helps you extract meaningful insights by rearranging data without changing the original dataset.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                What is a Pivot Table?
              </h3>
              <p>
                A Pivot Table is a summary report that can automatically sort, count, and total data stored in a table or range. It allows you to group and filter data, calculate sums or averages, and display trends in an interactive way.
              </p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Creating a Pivot Table
              </h3>
              <p>This example shows how to create a basic pivot table to summarize sales data by region and product category.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Region    B1: Category   C1: Sales
A2: East      Pens         150
A3: West      Notebooks   200
A4: East      Markers     180
A5: West      Binders     220
A6: East      Pens         100

Action:
- Select A1:C6
- Go to Insert > Pivot Table
- Place 'Region' in Rows, 'Category' in Columns, 'Sales' in Values
- Analyze data by region and product category.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Pivot Tables help you gain insights without writing formulas.</li>
                <li>You can easily group, filter, and sort large datasets.</li>
                <li>Pivot Tables can be refreshed when the source data changes.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelTablePivotIntro;
