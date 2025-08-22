
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
  <h5 className="fw-bold mt-4">PHP Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">PHP HOME</a></li>
    <li><a href="/">PHP Intro</a></li>
    <li><a href="/">PHP Install</a></li>
    <li><a href="/">PHP Syntax</a></li>
    <li><a href="/">PHP Comments</a></li>
    <li><a href="/">PHP Variables</a></li>
    <li><a href="/">PHP Echo / Print</a></li>
    <li><a href="/">PHP Data Types</a></li>
    <li><a href="/">PHP Strings</a></li>
    <li><a href="/">PHP Numbers</a></li>
    <li><a href="/">PHP Casting</a></li>
    <li><a href="/">PHP Math</a></li>
    <li><a href="/">PHP Constants</a></li>
    <li><a href="/">PHP Magic Constants</a></li>
    <li><a href="/">PHP Operators</a></li>
    <li><a href="/">PHP If...Else...Elseif</a></li>
    <li><a href="/">PHP Switch</a></li>
    <li><a href="/">PHP Loops</a></li>
    <li><a href="/">PHP Functions</a></li>
    <li><a href="/">PHP Arrays</a></li>
    <li><a href="/">PHP Superglobals</a></li>
    <li><a href="/">PHP RegEx</a></li>
  </ul>

  <h5 className="fw-bold">PHP Forms</h5>
  <ul className="list-unstyled">
    <li><a href="/">PHP Form Handling</a></li>
    <li><a href="/">PHP Form Validation</a></li>
    <li><a href="/">PHP Form Required</a></li>
    <li><a href="/">PHP Form URL/E-mail</a></li>
    <li><a href="/">PHP Form Complete</a></li>
  </ul>

  <h5 className="fw-bold">PHP Advanced</h5>
  <ul className="list-unstyled">
    <li><a href="/">PHP Date and Time</a></li>
    <li><a href="/">PHP Include</a></li>
    <li><a href="/">PHP File Handling</a></li>
    <li><a href="/">PHP File Open/Read</a></li>
    <li><a href="/">PHP File Create/Write</a></li>
    <li><a href="/">PHP File Upload</a></li>
    <li><a href="/">PHP Cookies</a></li>
    <li><a href="/">PHP Sessions</a></li>
    <li><a href="/">PHP Filters</a></li>
    <li><a href="/">PHP Filters Advanced</a></li>
    <li><a href="/">PHP Callback Functions</a></li>
    <li><a href="/">PHP JSON</a></li>
    <li><a href="/">PHP Exceptions</a></li>
  </ul>

  <h5 className="fw-bold">PHP OOP</h5>
  <ul className="list-unstyled">
    <li><a href="/">PHP What is OOP</a></li>
    <li><a href="/">PHP Classes/Objects</a></li>
    <li><a href="/">PHP Constructor</a></li>
    <li><a href="/">PHP Destructor</a></li>
    <li><a href="/">PHP Access Modifiers</a></li>
    <li><a href="/">PHP Inheritance</a></li>
    <li><a href="/">PHP Constants</a></li>
    <li><a href="/">PHP Abstract Classes</a></li>
    <li><a href="/">PHP Interfaces</a></li>
    <li><a href="/">PHP Traits</a></li>
    <li><a href="/">PHP Static Methods</a></li>
    <li><a href="/">PHP Static Properties</a></li>
    <li><a href="/">PHP Namespaces</a></li>
    <li><a href="/">PHP Iterables</a></li>
  </ul>

  <h5 className="fw-bold">MySQL Database</h5>
  <ul className="list-unstyled">
    <li><a href="/">MySQL Database</a></li>
    <li><a href="/">MySQL Connect</a></li>
    <li><a href="/">MySQL Create DB</a></li>
    <li><a href="/">MySQL Create Table</a></li>
    <li><a href="/">MySQL Insert Data</a></li>
    <li><a href="/">MySQL Get Last ID</a></li>
    <li><a href="/">MySQL Insert Multiple</a></li>
    <li><a href="/">MySQL Prepared</a></li>
    <li><a href="/">MySQL Select Data</a></li>
    <li><a href="/">MySQL Where</a></li>
    <li><a href="/">MySQL Order By</a></li>
    <li><a href="/">MySQL Delete Data</a></li>
    <li><a href="/">MySQL Update Data</a></li>
    <li><a href="/">MySQL Limit Data</a></li>
  </ul>
</div>




      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Php Tutorial</h1>

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
