import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelMoveCell = () => {
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
              <h1>Excel Move Cell</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelfill">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceladdcells">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                In Excel, you can easily move cells to a new location using drag-and-drop or cut and paste features. This helps reorganize data quickly.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Move Cells Using Drag and Drop
              </h3>
              <p>Select the cell or range of cells you want to move, click on the border of the selection, and drag it to the desired location.</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Select the cell or range.
Step 2: Click and hold the border.
Step 3: Drag to the new location and release.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Move Cells Using Cut and Paste
              </h3>
              <p>You can also move cells by cutting and pasting:</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Select the cell(s) you want to move.
Step 2: Right-click and choose "Cut" or press Ctrl + X.
Step 3: Right-click on the destination cell and choose "Paste" or press Ctrl + V.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Moving Entire Rows or Columns
              </h3>
              <p>You can move rows or columns similarly by selecting them entirely and dragging or cutting:</p>
              <pre className="bg-light p-3 rounded">
{`Step 1: Click the row or column header.
Step 2: Drag or cut and paste as needed.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Tips for Moving Cells
              </h3>
              <ul>
                <li>Use drag and drop for quick moves.</li>
                <li>Use cut and paste for precise placement.</li>
                <li>Press the Esc key to cancel a move operation.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Excel allows moving cells, rows, and columns easily.</li>
                <li>Drag and drop is faster; cut and paste offers more control.</li>
                <li>Moving helps in organizing data efficiently.</li>
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

export default ExcelMoveCell;
