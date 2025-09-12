import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelVLOOKUP = () => {
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

              <h1>Excel VLOOKUP Function</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceltrim">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelxor">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                VLOOKUP is a powerful Excel function that helps you search for a value in the first column of a table and return a value in the same row from another column.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Syntax
              </h3>
              <p>
                <code>VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code>
              </p>
              <ul>
                <li><strong>lookup_value</strong>: The value to search for.</li>
                <li><strong>table_array</strong>: The range where the search is performed.</li>
                <li><strong>col_index_num</strong>: The column number in the range from which to return the value.</li>
                <li><strong>range_lookup</strong>: Optional; TRUE for approximate match, FALSE for exact match.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Find Product Price
              </h3>
              <p>
                Suppose you have the following table and you want to find the price of "Banana":
              </p>
              <pre className="bg-light p-3 rounded">
{`A         B
1 Product  Price
2 Apple    5
3 Banana   10
4 Cherry   7

Formula:
=VLOOKUP("Banana", A2:B4, 2, FALSE)

Result:
10`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Approximate Match
              </h3>
              <p>
                You can use VLOOKUP with approximate match to find where a value falls within a range:
              </p>
              <pre className="bg-light p-3 rounded">
{`A        B
1 Score   Grade
2 0      F
3 50     C
4 70     B
5 90     A

Formula:
=VLOOKUP(85, A2:B5, 2, TRUE)

Result:
B`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>VLOOKUP always searches in the first column of the range.</li>
                <li>Use FALSE for exact match, TRUE for approximate match.</li>
                <li>Ensure that the lookup column is sorted in ascending order if using approximate match.</li>
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

export default ExcelVLOOKUP;
