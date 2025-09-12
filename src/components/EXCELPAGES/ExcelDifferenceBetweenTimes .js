import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelDifferenceBetweenTimes = () => {
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

              <h1>Excel – Difference Between Times</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelconverttime">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelremoveduplicates">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                You can calculate the difference between two times in Excel by subtracting one time from another and formatting the result to display the duration.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Formula
              </h3>
              <p>
                <code>=EndTime - StartTime</code>
              </p>
              <p>
                Where <strong>EndTime</strong> and <strong>StartTime</strong> are the cells containing the respective times.
              </p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Calculate Time Difference
              </h3>
              <pre className="bg-light p-3 rounded">
{`A1: 08:00 AM
B1: 05:00 PM

Formula:
=B1 - A1

Result:
9:00 (9 hours difference)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Time Difference Across Midnight
              </h3>
              <pre className="bg-light p-3 rounded">
{`A1: 10:00 PM
B1: 06:00 AM

Formula:
=B1 - A1 + IF(B1<A1,1,0)

Result:
8:00 (8 hours difference)`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>If the end time is smaller than the start time, you can add 1 to account for the next day.</li>
                <li>Format the result cell as Time or Custom format [h]:mm to display durations greater than 24 hours.</li>
                <li>This method is useful for tracking working hours, shift times, and scheduling.</li>
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

export default ExcelDifferenceBetweenTimes;
