import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelRelativeReference = () => {
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

              <h1>Excel Relative Reference</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformulas">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelabsolutereference">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Relative references in Excel refer to cell locations based on their position relative to the formula's cell. When you copy or fill the formula across cells, Excel adjusts the references automatically.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                What is a Relative Reference?
              </h3>
              <p>
                A relative reference adjusts when the formula is copied to another cell. Excel automatically updates the cell reference based on the position.
              </p>
              <ul>
                <li>For example, if you copy a formula from cell A1 to B1, a reference to A2 will change to B2.</li>
                <li>This makes calculations easier when you need the same logic applied across rows or columns.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Copying Formula with Relative Reference
              </h3>
              <p>See how Excel adjusts the reference automatically when you copy a formula.</p>
              <pre className="bg-light p-3 rounded">
{`A1: 5
A2: 10
A3: 15

Formula in B1: =A1 * 2
Result in B1: 10

When copied to B2, formula becomes =A2 * 2
Result in B2: 20

When copied to B3, formula becomes =A3 * 2
Result in B3: 30`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Relative references are useful for applying formulas to multiple rows or columns.</li>
                <li>When copying formulas, Excel automatically changes cell references based on their relative position.</li>
                <li>If you want the reference to remain fixed, use an absolute reference instead.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelRelativeReference;
