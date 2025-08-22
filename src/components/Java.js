
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

  <h5 className="fw-bold mt-4">Java Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">Java HOME</a></li>
    <li><a href="/">Java Intro</a></li>
    <li><a href="/">Java Get Started</a></li>
    <li><a href="/">Java Syntax</a></li>
    <li><a href="/">Java Output</a></li>
    <li><a href="/">Java Comments</a></li>
    <li><a href="/">Java Variables</a></li>
    <li><a href="/">Java Data Types</a></li>
    <li><a href="/">Java Type Casting</a></li>
    <li><a href="/">Java Operators</a></li>
    <li><a href="/">Java Strings</a></li>
    <li><a href="/">Java Math</a></li>
    <li><a href="/">Java Booleans</a></li>
    <li><a href="/">Java If...Else</a></li>
    <li><a href="/">Java Switch</a></li>
    <li><a href="/">Java While Loop</a></li>
    <li><a href="/">Java For Loop</a></li>
    <li><a href="/">Java Break/Continue</a></li>
    <li><a href="/">Java Arrays</a></li>
  </ul>

  <h5 className="fw-bold">Java Methods</h5>
  <ul className="list-unstyled">
    <li><a href="/">Java Methods</a></li>
    <li><a href="/">Java Method Parameters</a></li>
    <li><a href="/">Java Method Overloading</a></li>
    <li><a href="/">Java Scope</a></li>
    <li><a href="/">Java Recursion</a></li>
  </ul>

  <h5 className="fw-bold">Java Classes</h5>
  <ul className="list-unstyled">
    <li><a href="/">Java OOP</a></li>
    <li><a href="/">Java Classes/Objects</a></li>
    <li><a href="/">Java Class Attributes</a></li>
    <li><a href="/">Java Class Methods</a></li>
    <li><a href="/">Java Constructors</a></li>
    <li><a href="/">Java this Keyword</a></li>
    <li><a href="/">Java Modifiers</a></li>
    <li><a href="/">Java Encapsulation</a></li>
    <li><a href="/">Java Packages / API</a></li>
    <li><a href="/">Java Inheritance</a></li>
    <li><a href="/">Java Polymorphism</a></li>
    <li><a href="/">Java super Keyword</a></li>
    <li><a href="/">Java Inner Classes</a></li>
    <li><a href="/">Java Abstraction</a></li>
    <li><a href="/">Java Interface</a></li>
    <li><a href="/">Java Enums</a></li>
    <li><a href="/">Java User Input</a></li>
    <li><a href="/">Java Date</a></li>
  </ul>

  <h5 className="fw-bold">Java Errors</h5>
  <ul className="list-unstyled">
    <li><a href="/">Java Errors</a></li>
    <li><a href="/">Java Debugging</a></li>
    <li><a href="/">Java Exceptions</a></li>
  </ul>

  <h5 className="fw-bold">Java File Handling</h5>
  <ul className="list-unstyled">
    <li><a href="/">Java Files</a></li>
    <li><a href="/">Java Create/Write Files</a></li>
    <li><a href="/">Java Read Files</a></li>
    <li><a href="/">Java Delete Files</a></li>
  </ul>

  <h5 className="fw-bold">Java Data Structures</h5>
  <ul className="list-unstyled">
    <li><a href="/">Java Data Structures</a></li>
    <li><a href="/">Java Collections</a></li>
    <li><a href="/">Java List</a></li>
    <li><a href="/">Java ArrayList</a></li>
    <li><a href="/">Java LinkedList</a></li>
    <li><a href="/">Java List Sorting</a></li>
    <li><a href="/">Java Set</a></li>
    <li><a href="/">Java HashSet</a></li>
    <li><a href="/">Java TreeSet</a></li>
    <li><a href="/">Java LinkedHashSet</a></li>
    <li><a href="/">Java Map</a></li>
    <li><a href="/">Java HashMap</a></li>
    <li><a href="/">Java TreeMap</a></li>
    <li><a href="/">Java LinkedHashMap</a></li>
    <li><a href="/">Java Iterator</a></li>
  </ul>

</div>


      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Java Tutorial</h1>

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
