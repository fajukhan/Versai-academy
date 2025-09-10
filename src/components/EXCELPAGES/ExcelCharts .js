import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelCharts = () => {
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

              <h1>Excel Charts</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelmanagerules">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="tablepivotintro">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Charts in Excel are graphical representations of data that make it easier to visualize patterns, trends, and comparisons. Excel offers a variety of chart types like column, line, pie, bar, and more.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Create a Chart
              </h3>
              <ul>
                <li>Select the data range you want to plot.</li>
                <li>Go to the <strong>Insert</strong> tab.</li>
                <li>Choose the desired chart type from the Charts group.</li>
                <li>Click on the chart to insert it into the worksheet.</li>
                <li>Use Chart Tools to format and customize the appearance.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sales Data Chart
              </h3>
              <p>This example shows how to create a column chart to compare sales for different products.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product    B1: Sales
A2: Pens       150
A3: Notebooks  120
A4: Erasers    80
A5: Markers    200
A6: Binders    100

Action:
- Select A1:B6
- Insert > Column Chart
- Customize the chart title and colors

Result:
A chart showing sales distribution for each product.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Charts help in presenting data in a visually appealing and easily understandable way.</li>
                <li>You can format charts by adding titles, labels, legends, and data markers.</li>
                <li>Experiment with different chart types to find the best way to represent your data.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelCharts;
