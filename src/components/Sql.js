
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
  <h5 className="fw-bold">SQL Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">SQL HOME</a></li>
    <li><a href="/">SQL Intro</a></li>
    <li><a href="/">SQL Syntax</a></li>
    <li><a href="/">SQL Select</a></li>
    <li><a href="/">SQL Select Distinct</a></li>
    <li><a href="/">SQL Where</a></li>
    <li><a href="/">SQL Order By</a></li>
    <li><a href="/">SQL And</a></li>
    <li><a href="/">SQL Or</a></li>
    <li><a href="/">SQL Not</a></li>
    <li><a href="/">SQL Insert Into</a></li>
    <li><a href="/">SQL Null Values</a></li>
    <li><a href="/">SQL Update</a></li>
    <li><a href="/">SQL Delete</a></li>
    <li><a href="/">SQL Select Top</a></li>
    <li><a href="/">SQL Aggregate Functions</a></li>
    <li><a href="/">SQL Min and Max</a></li>
    <li><a href="/">SQL Count</a></li>
    <li><a href="/">SQL Sum</a></li>
    <li><a href="/">SQL Avg</a></li>
    <li><a href="/">SQL Like</a></li>
    <li><a href="/">SQL Wildcards</a></li>
    <li><a href="/">SQL In</a></li>
    <li><a href="/">SQL Between</a></li>
    <li><a href="/">SQL Aliases</a></li>
    <li><a href="/">SQL Joins</a></li>
    <li><a href="/">SQL Inner Join</a></li>
    <li><a href="/">SQL Left Join</a></li>
    <li><a href="/">SQL Right Join</a></li>
    <li><a href="/">SQL Full Join</a></li>
    <li><a href="/">SQL Self Join</a></li>
    <li><a href="/">SQL Union</a></li>
    <li><a href="/">SQL Union All</a></li>
    <li><a href="/">SQL Group By</a></li>
    <li><a href="/">SQL Having</a></li>
    <li><a href="/">SQL Exists</a></li>
    <li><a href="/">SQL Any, All</a></li>
    <li><a href="/">SQL Select Into</a></li>
    <li><a href="/">SQL Insert Into Select</a></li>
    <li><a href="/">SQL Case</a></li>
    <li><a href="/">SQL Null Functions</a></li>
    <li><a href="/">SQL Stored Procedures</a></li>
    <li><a href="/">SQL Comments</a></li>
    <li><a href="/">SQL Operators</a></li>
  </ul>

  <h5 className="fw-bold">SQL Database</h5>
  <ul className="list-unstyled">
    <li><a href="/">SQL Create DB</a></li>
    <li><a href="/">SQL Drop DB</a></li>
    <li><a href="/">SQL Backup DB</a></li>
    <li><a href="/">SQL Create Table</a></li>
    <li><a href="/">SQL Drop Table</a></li>
    <li><a href="/">SQL Alter Table</a></li>
    <li><a href="/">SQL Constraints</a></li>
    <li><a href="/">SQL Not Null</a></li>
    <li><a href="/">SQL Unique</a></li>
    <li><a href="/">SQL Primary Key</a></li>
    <li><a href="/">SQL Foreign Key</a></li>
    <li><a href="/">SQL Check</a></li>
    <li><a href="/">SQL Default</a></li>
    <li><a href="/">SQL Index</a></li>
    <li><a href="/">SQL Auto Increment</a></li>
    <li><a href="/">SQL Dates</a></li>
    <li><a href="/">SQL Views</a></li>
    <li><a href="/">SQL Injection</a></li>
    <li><a href="/">SQL Hosting</a></li>
    <li><a href="/">SQL Data Types</a></li>
  </ul>
</div>


      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Sql Tutorial</h1>

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
