
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Html = () => {


 
  return (
    <>
     <Navbar />
    {/* Section-1 */}
<section  className="p-0">
  <div className="bg-white">
    <div className="row g-0">
      
      {/* Sidebar (Left - col-2) */}
   <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
  <h5 className="fw-bold mt-4">Excel Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">Excel HOME</a></li>
    <li><a href="/">Excel Introduction</a></li>
    <li><a href="/">Excel Get Started</a></li>
    <li><a href="/">Excel Overview</a></li>
    <li><a href="/">Excel Syntax</a></li>
    <li><a href="/">Excel Ranges</a></li>
    <li><a href="/">Excel Fill</a></li>
    <li><a href="/">Excel Move Cells</a></li>
    <li><a href="/">Excel Add Cells</a></li>
    <li><a href="/">Excel Delete Cells</a></li>
    <li><a href="/">Excel Undo Redo</a></li>
    <li><a href="/">Excel Formulas</a></li>
    <li><a href="/">Excel Relative Reference</a></li>
    <li><a href="/">Excel Absolute Reference</a></li>
    <li><a href="/">Excel Arithmetic Operators</a></li>
    <li><a href="/">Excel Parentheses</a></li>
    <li><a href="/">Excel Functions</a></li>
  </ul>

  <h5 className="fw-bold">Excel Formatting</h5>
  <ul className="list-unstyled">
    <li><a href="/">Excel Formatting</a></li>
    <li><a href="/">Excel Format Painter</a></li>
    <li><a href="/">Excel Format Colors</a></li>
    <li><a href="/">Excel Format Fonts</a></li>
    <li><a href="/">Excel Format Borders</a></li>
    <li><a href="/">Excel Format Numbers</a></li>
    <li><a href="/">Excel Format Grids</a></li>
    <li><a href="/">Excel Format Settings</a></li>
  </ul>

  <h5 className="fw-bold">Excel Data Analysis</h5>
  <ul className="list-unstyled">
    <li><a href="/">Excel Sort</a></li>
    <li><a href="/">Excel Filter</a></li>
    <li><a href="/">Excel Tables</a></li>
    <li><a href="/">Excel Conditional Format</a></li>
    <li><a href="/">Excel Highlight Cell Rules</a></li>
    <li><a href="/">Excel Top Bottom Rules</a></li>
    <li><a href="/">Excel Data Bars</a></li>
    <li><a href="/">Excel Color Scales</a></li>
    <li><a href="/">Excel Icon Sets</a></li>
    <li><a href="/">Excel Manage Rules (CF)</a></li>
    <li><a href="/">Excel Charts</a></li>
  </ul>

  <h5 className="fw-bold">Table Pivot</h5>
  <ul className="list-unstyled">
    <li><a href="/">Table Pivot Intro</a></li>
  </ul>

  <h5 className="fw-bold">Excel Case</h5>
  <ul className="list-unstyled">
    <li><a href="/">Case: Poke Mart</a></li>
    <li><a href="/">Case: Poke Mart, Styling</a></li>
  </ul>

  <h5 className="fw-bold">Excel Functions</h5>
  <ul className="list-unstyled">
    <li><a href="/">AND</a></li>
    <li><a href="/">AVERAGE</a></li>
    <li><a href="/">AVERAGEIF</a></li>
    <li><a href="/">AVERAGEIFS</a></li>
    <li><a href="/">CONCAT</a></li>
    <li><a href="/">COUNT</a></li>
    <li><a href="/">COUNTA</a></li>
    <li><a href="/">COUNTBLANK</a></li>
    <li><a href="/">COUNTIF</a></li>
    <li><a href="/">COUNTIFS</a></li>
    <li><a href="/">IF</a></li>
    <li><a href="/">IFS</a></li>
    <li><a href="/">LEFT</a></li>
    <li><a href="/">LOWER</a></li>
    <li><a href="/">MAX</a></li>
    <li><a href="/">MEDIAN</a></li>
    <li><a href="/">MIN</a></li>
    <li><a href="/">MODE</a></li>
    <li><a href="/">NPV</a></li>
    <li><a href="/">OR</a></li>
    <li><a href="/">RAND</a></li>
    <li><a href="/">RIGHT</a></li>
    <li><a href="/">STDEV.P</a></li>
    <li><a href="/">STDEV.S</a></li>
    <li><a href="/">SUM</a></li>
    <li><a href="/">SUMIF</a></li>
    <li><a href="/">SUMIFS</a></li>
    <li><a href="/">TRIM</a></li>
    <li><a href="/">VLOOKUP</a></li>
    <li><a href="/">XOR</a></li>
  </ul>

  <h5 className="fw-bold">Excel How To</h5>
  <ul className="list-unstyled">
    <li><a href="/">Convert Time to Seconds</a></li>
    <li><a href="/">Difference Between Times</a></li>
    <li><a href="/">NPV (Net Present Value)</a></li>
    <li><a href="/">Remove Duplicates</a></li>
  </ul>
</div>




      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Excel Tutorial</h1>

        {/* Buttons */}
        <div className="d-flex gap-3 flex-wrap mt-3">
          <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button>
          <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button>
        </div>
       
        {/* <h2 className='pt-5'>Learn HTML</h2>
        <p>HTML is the standard markup language for Web pages.</p>
        <p>With HTML you can create your own Website.</p>
        <p>HTML is easy to learn - You will enjoy it!</p> */}

       
      </div>



    </div>
  </div>
</section>

<Footer />

    </>
  );
};

export default Html;
