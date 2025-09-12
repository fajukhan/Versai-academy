import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelConvertTimeToSeconds = () => {
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

              <h1>Excel – Convert Time to Seconds</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelxor">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="exceldifferencebetween">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                In Excel, you can convert time values to seconds by using a formula that multiplies the time by 86400, which is the total number of seconds in a day.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Formula
              </h3>
              <p>
                <code>=A1 * 86400</code>
              </p>
              <p>
                Where <strong>A1</strong> is the cell containing the time value.
              </p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Convert 01:30:00 to Seconds
              </h3>
              <pre className="bg-light p-3 rounded">
{`A1: 01:30:00

Formula:
=A1 * 86400

Result:
5400 seconds`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Convert 00:45:30 to Seconds
              </h3>
              <pre className="bg-light p-3 rounded">
{`A1: 00:45:30

Formula:
=A1 * 86400

Result:
2730 seconds`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Ensure the cell with the time value is formatted as Time in Excel.</li>
                <li>Multiplying by 86400 converts days to seconds since Excel stores time as a fraction of a day.</li>
                <li>You can use this method for any valid time entry in Excel.</li>
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

export default ExcelConvertTimeToSeconds;
