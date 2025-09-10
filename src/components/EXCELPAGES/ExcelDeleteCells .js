import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelDeleteCells = () => {
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


                 <h1>Excel Delete Cells</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceladdcells">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelundoredo">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In Excel, you can delete cells to remove data, shift cells up, left, or delete entire rows and columns as needed.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                How to Delete Cells
              </h3>
              <p>Follow these steps to delete cells in Excel:</p>
              <ul>
                <li>Select the cell or range of cells you want to delete.</li>
                <li>Right-click and choose "Delete".</li>
                <li>Choose whether to shift cells left, shift cells up, delete entire row, or delete entire column.</li>
                <li>Click "OK".</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Delete Cells and Shift Up
              </h3>
              <p>If you delete a cell in the middle of your data and shift cells up, Excel will move the cells below up to fill the gap.</p>
              <pre className="bg-light p-3 rounded">
{`A1: Apple
A2: Banana
A3: Cherry
A4: Date

Action: Delete cell A2 and shift cells up.

Result:
A1: Apple
A2: Cherry
A3: Date`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Delete Entire Row
              </h3>
              <p>You can delete a whole row to remove all data within that row.</p>
              <pre className="bg-light p-3 rounded">
{`Row 2: Apple, 10, $5
Row 3: Banana, 20, $10
Row 4: Cherry, 15, $7

Action: Delete Row 3.

Result:
Row 2: Apple, 10, $5
Row 3: Cherry, 15, $7`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Always backup data before deleting cells or rows.</li>
                <li>Use the "Undo" button (Ctrl + Z) if you accidentally delete data.</li>
                <li>Deleting cells does not permanently erase the data unless saved.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>




      
      <Footer />
    </>
  );
};

export default ExcelDeleteCells;

      