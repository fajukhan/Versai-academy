import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelAddCells = () => {
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
              <h1>Excel Add Cells</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelmovecell">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceldeletecells">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In Excel, you can add or insert new cells into your worksheet to expand or organize data more efficiently.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                How to Add Cells
              </h3>
              <p>Select the cell or range where you want to insert new cells, right-click, and choose “Insert” from the menu.</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Select the target cell or range.
Step 2: Right-click and choose "Insert".
Step 3: Choose how you want to shift cells (right/down).`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Insert Options
              </h3>
              <p>Excel gives you options to insert new cells and shift existing data accordingly:</p>
              <ul>
                <li>Shift cells right: Moves existing cells to the right.</li>
                <li>Shift cells down: Moves existing cells downward.</li>
                <li>Insert entire row: Adds a new row at the selected position.</li>
                <li>Insert entire column: Adds a new column at the selected position.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example – Insert Cells and Shift Down
              </h3>
              <p>If you want to insert a new cell and shift others down:</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Select cell B2.
Step 2: Right-click and choose "Insert".
Step 3: Select "Shift cells down" and click OK.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example – Insert Entire Row
              </h3>
              <p>To insert a new row:</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Right-click on the row header (e.g., row 3).
Step 2: Choose "Insert".
Excel will add a new blank row at that position.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Tips for Adding Cells
              </h3>
              <ul>
                <li>Use keyboard shortcuts like Ctrl + Shift + "+" to quickly insert cells, rows, or columns.</li>
                <li>Always double-check how cells are being shifted before inserting.</li>
                <li>Adding cells can help you expand datasets without overwriting existing data.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>You can insert cells by selecting the position and choosing how to shift existing data.</li>
                <li>Options include shifting cells right/down or inserting entire rows/columns.</li>
                <li>Adding cells helps organize and extend data efficiently in Excel.</li>
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

export default ExcelAddCells;
