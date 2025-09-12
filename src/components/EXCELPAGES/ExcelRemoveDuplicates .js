import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelRemoveDuplicates = () => {
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

              <h1>Excel – Remove Duplicates</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceldifferencebetween">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelremoveduplicates">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                In Excel, the "Remove Duplicates" feature helps you delete duplicate entries from your data range, keeping only unique values.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Steps to Remove Duplicates
              </h3>
              <ul>
                <li>Select the range of cells that contains duplicate data.</li>
                <li>Go to the <strong>Data</strong> tab on the ribbon.</li>
                <li>Click on <strong>Remove Duplicates</strong> in the Data Tools group.</li>
                <li>Choose the columns to check for duplicates.</li>
                <li>Click <strong>OK</strong> to remove duplicates.</li>
                <li>Excel will show how many duplicates were removed and how many unique values remain.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Remove Duplicate Names
              </h3>
              <pre className="bg-light p-3 rounded">
{`Original Data:
A1: John
A2: Mary
A3: John
A4: Peter
A5: Mary

Action: Remove Duplicates

Result:
A1: John
A2: Mary
A3: Peter`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Always create a backup of your data before removing duplicates.</li>
                <li>The "Remove Duplicates" feature only works on selected data.</li>
                <li>Excel keeps the first occurrence and deletes subsequent duplicates.</li>
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

export default ExcelRemoveDuplicates;
