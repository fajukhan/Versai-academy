
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
  <h5 className="fw-bold">Python Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">Python HOME</a></li>
    <li><a href="/">Python Intro</a></li>
    <li><a href="/">Python Get Started</a></li>
    <li><a href="/">Python Syntax</a></li>
    <li><a href="/">Python Comments</a></li>
    <li><a href="/">Python Variables</a></li>
    <li><a href="/">Python Data Types</a></li>
    <li><a href="/">Python Numbers</a></li>
    <li><a href="/">Python Casting</a></li>
    <li><a href="/">Python Strings</a></li>
    <li><a href="/">Python Booleans</a></li>
    <li><a href="/">Python Operators</a></li>
    <li><a href="/">Python Lists</a></li>
    <li><a href="/">Python Tuples</a></li>
    <li><a href="/">Python Sets</a></li>
    <li><a href="/">Python Dictionaries</a></li>
    <li><a href="/">Python If...Else</a></li>
    <li><a href="/">Python Match</a></li>
    <li><a href="/">Python While Loops</a></li>
    <li><a href="/">Python For Loops</a></li>
    <li><a href="/">Python Functions</a></li>
    <li><a href="/">Python Lambda</a></li>
    <li><a href="/">Python Arrays</a></li>
    <li><a href="/">Python OOP</a></li>
    <li><a href="/">Python Classes/Objects</a></li>
    <li><a href="/">Python Inheritance</a></li>
    <li><a href="/">Python Iterators</a></li>
    <li><a href="/">Python Polymorphism</a></li>
    <li><a href="/">Python Scope</a></li>
    <li><a href="/">Python Modules</a></li>
    <li><a href="/">Python Dates</a></li>
    <li><a href="/">Python Math</a></li>
    <li><a href="/">Python JSON</a></li>
    <li><a href="/">Python RegEx</a></li>
    <li><a href="/">Python PIP</a></li>
    <li><a href="/">Python Try...Except</a></li>
    <li><a href="/">Python String Formatting</a></li>
    <li><a href="/">Python User Input</a></li>
    <li><a href="/">Python VirtualEnv</a></li>
  </ul>

  <h5 className="fw-bold">File Handling</h5>
  <ul className="list-unstyled">
    <li><a href="/">Python File Handling</a></li>
    <li><a href="/">Python Read Files</a></li>
    <li><a href="/">Python Write/Create Files</a></li>
    <li><a href="/">Python Delete Files</a></li>
  </ul>

  <h5 className="fw-bold">Python Modules</h5>
  <ul className="list-unstyled">
    <li><a href="/">NumPy Tutorial</a></li>
    <li><a href="/">Pandas Tutorial</a></li>
    <li><a href="/">SciPy Tutorial</a></li>
    <li><a href="/">Django Tutorial</a></li>
  </ul>
</div>


      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Python Tutorial</h1>

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
