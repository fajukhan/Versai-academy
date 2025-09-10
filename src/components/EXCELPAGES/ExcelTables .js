import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelTables = () => {
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

              <h1>Excel Tables</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelfilter">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelconditionalformat">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Excel Tables organize your data into structured ranges with features like sorting, filtering, and formatting. Tables make managing and analyzing data more efficient.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Create a Table
              </h3>
              <ul>
                <li>Select the range of data you want to format as a table.</li>
                <li>Go to the <strong>Insert</strong> tab and click on <strong>Table</strong>.</li>
                <li>Ensure the range is correct and "My table has headers" is checked if applicable.</li>
                <li>Click <strong>OK</strong> to create the table.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Create a Table
              </h3>
              <p>This example shows how to convert a dataset into a table format.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product    B1: Price
A2: Apple      1.2
A3: Banana     0.8
A4: Cherry     2.5
A5: Date       3.0

Action:
- Select A1:B5
- Go to Insert > Table
- Check 'My table has headers'
- Click OK

Result:
The data is formatted as a table with filters and banded rows`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Use Table Features
              </h3>
              <p>Once your data is a table, you can quickly sort, filter, and format it using the table tools.</p>
              <pre className="bg-light p-3 rounded">
{`Steps:
- Click anywhere inside the table
- Use the dropdown arrows to sort or filter data
- Apply table styles from the Design tab

Result:
You can easily manipulate the data and customize the appearance`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Tables automatically expand as you add new data to adjacent rows or columns.</li>
                <li>Structured references make formulas easier to read and update.</li>
                <li>Table styles enhance the readability and appearance of your dataset.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelTables;
