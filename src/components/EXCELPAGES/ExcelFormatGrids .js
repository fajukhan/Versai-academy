import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";

const ExcelFormatGrids = () => {
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

              <h1>Excel Format Grids</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="excelformatnumbers">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="excelformatsettings">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-4">
                Excel gridlines are the faint lines that appear between cells to help you view and organize data more easily. You can choose to show or hide gridlines and customize their appearance.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Show or Hide Gridlines
              </h3>
              <ul>
                <li>Go to the <strong>View</strong> tab and check or uncheck the <strong>Gridlines</strong> option to show or hide them.</li>
                <li>You can also go to the <strong>Page Layout</strong> tab and use the <strong>Gridlines</strong> checkbox under the <strong>Sheet Options</strong>.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Hide Gridlines
              </h3>
              <p>Hiding gridlines makes the worksheet look cleaner for presentations or printing.</p>
              <pre className="bg-light p-3 rounded">
{`Go to View tab
- Uncheck Gridlines
Result: Gridlines disappear, making the worksheet look clean and professional`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Change Gridline Color
              </h3>
              <p>You can customize the color of gridlines to better suit your worksheet design.</p>
              <pre className="bg-light p-3 rounded">
{`Go to File > Options > Advanced
- Scroll to Display options for this worksheet
- Click Gridline color
- Choose desired color
Result: Gridlines are displayed in the chosen color`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Gridlines help visually organize data but are not printed by default.</li>
                <li>You can customize or hide them to improve the worksheet's appearance.</li>
                <li>Changing gridline color can enhance readability and presentation.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelFormatGrids;
