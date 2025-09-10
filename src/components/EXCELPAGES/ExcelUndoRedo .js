import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarExcel from "../SidebarExcel";


const ExcelUndoRedo = () => {
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

              <h1>Excel Undo and Redo</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="exceldeletecells">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a  href="exceltopbottomrules">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Undo and Redo in Excel help you quickly correct mistakes or restore recent changes. Use them to manage your work efficiently and avoid losing data.
              </p>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                What is Undo?
              </h3>
              <p>Undo allows you to reverse the last action or multiple actions, such as deleting data or changing formatting.</p>
              <ul>
                <li>Shortcut: <strong>Ctrl + Z</strong></li>
                <li>Press multiple times to undo several changes one by one.</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                What is Redo?
              </h3>
              <p>Redo lets you bring back actions you have undone if you change your mind.</p>
              <ul>
                <li>Shortcut: <strong>Ctrl + Y</strong></li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Undo a Deletion
              </h3>
              <p>If you accidentally delete a cell, press <strong>Ctrl + Z</strong> to undo and restore the deleted data.</p>
              <pre className="bg-light p-3 rounded">
{`Before deletion:
A1: Apple
A2: Banana
A3: Cherry

Action: Delete A2.

Result:
A1: Apple
A2: Cherry

Press Ctrl + Z to undo and restore A2: Banana.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Example – Redo an Undo
              </h3>
              <p>If you undo a deletion and then decide you want it again, press <strong>Ctrl + Y</strong> to redo the action.</p>
              <pre className="bg-light p-3 rounded">
{`Before redo:
A1: Apple
A2: Cherry

Action: Redo

Result:
A1: Apple
A2: (Deleted Cell)
A3: Cherry`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: 'purple', color: 'white', borderRadius: '8px', padding: '10px' }}>
                Notes
              </h3>
              <ul>
                <li>Undo can help prevent accidental data loss.</li>
                <li>Redo brings back changes only if they were undone first.</li>
                <li>You can always save your work after reviewing changes.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExcelUndoRedo;
