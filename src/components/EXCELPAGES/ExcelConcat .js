import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelConcat = () => {
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

              <h1>Excel CONCAT Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelaverageifs">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelcount">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                The CONCAT function in Excel combines text from multiple cells or values into a single cell. It replaces the older CONCATENATE function and is easier to use.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>CONCAT(text1, [text2], ...)</code>
              </p>
              <ul>
                <li><code>text1</code>: The first text item or cell reference.</li>
                <li><code>text2</code>: (Optional) Additional text items or cell references.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Combine First and Last Names
              </h3>
              <pre className="bg-light p-3 rounded">
{`=CONCAT(A2, " ", B2)

If A2="John" and B2="Doe"
Result = "John Doe"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Combine Multiple Cells
              </h3>
              <pre className="bg-light p-3 rounded">
{`=CONCAT(A2, " - ", B2, " (", C2, ")")

If A2="Product1", B2="Blue", C2="In Stock"
Result = "Product1 - Blue (In Stock)"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>CONCAT ignores empty cells.</li>
                <li>It can combine numbers, text, and symbols in one formula.</li>
                <li>For conditional concatenation, you may need to use CONCAT with IF functions.</li>
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

export default ExcelConcat;
