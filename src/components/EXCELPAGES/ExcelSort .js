import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelSort = () => {
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

              <h1>Excel Sort</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatsettings">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelfilter">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Sorting in Excel helps you organize your data by arranging it in ascending, descending, or custom orders, making it easier to analyze and interpret.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Sort Data
              </h3>
              <ul>
                <li>Select the data range you want to sort.</li>
                <li>Go to the <strong>Data</strong> tab and click on <strong>Sort</strong>.</li>
                <li>Choose the column you want to sort by, and select ascending or descending order.</li>
                <li>Click <strong>OK</strong> to apply the sort.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sort by Name (A to Z)
              </h3>
              <p>This example sorts a list of names in alphabetical order.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Name
A2: Alice
A3: Bob
A4: Charlie
A5: Dave

Action:
- Select A1:A5
- Go to Data > Sort
- Choose 'Name' column
- Sort A to Z
Result:
A2: Alice
A3: Bob
A4: Charlie
A5: Dave`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Sort by Sales (Largest to Smallest)
              </h3>
              <p>Sort numerical data to see which entries have the highest or lowest values.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Product    B1: Sales
A2: Apple      B2: 500
A3: Banana     B3: 800
A4: Cherry     B4: 300
A5: Date       B5: 700

Action:
- Select A1:B5
- Go to Data > Sort
- Choose 'Sales' column
- Sort Largest to Smallest
Result:
A2: Banana     B2: 800
A3: Date       B3: 700
A4: Apple      B4: 500
A5: Cherry     B5: 300`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Sorting helps to quickly find patterns, trends, and outliers in data.</li>
                <li>Always select the entire data set to ensure related information stays together.</li>
                <li>You can also use custom sorting to organize data in any order you prefer.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelSort;
