
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
  <h5 className="fw-bold mt-4">jQuery Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">jQuery HOME</a></li>
    <li><a href="/">jQuery Intro</a></li>
    <li><a href="/">jQuery Get Started</a></li>
    <li><a href="/">jQuery Syntax</a></li>
    <li><a href="/">jQuery Selectors</a></li>
    <li><a href="/">jQuery Events</a></li>
  </ul>

  <h5 className="fw-bold">jQuery Effects</h5>
  <ul className="list-unstyled">
    <li><a href="/">jQuery Hide/Show</a></li>
    <li><a href="/">jQuery Fade</a></li>
    <li><a href="/">jQuery Slide</a></li>
    <li><a href="/">jQuery Animate</a></li>
    <li><a href="/">jQuery stop()</a></li>
    <li><a href="/">jQuery Callback</a></li>
    <li><a href="/">jQuery Chaining</a></li>
  </ul>

  <h5 className="fw-bold">jQuery HTML</h5>
  <ul className="list-unstyled">
    <li><a href="/">jQuery Get</a></li>
    <li><a href="/">jQuery Set</a></li>
    <li><a href="/">jQuery Add</a></li>
    <li><a href="/">jQuery Remove</a></li>
    <li><a href="/">jQuery CSS Classes</a></li>
    <li><a href="/">jQuery css()</a></li>
    <li><a href="/">jQuery Dimensions</a></li>
  </ul>

  <h5 className="fw-bold">jQuery Traversing</h5>
  <ul className="list-unstyled">
    <li><a href="/">jQuery Traversing</a></li>
    <li><a href="/">jQuery Ancestors</a></li>
    <li><a href="/">jQuery Descendants</a></li>
    <li><a href="/">jQuery Siblings</a></li>
    <li><a href="/">jQuery Filtering</a></li>
  </ul>

  <h5 className="fw-bold">jQuery AJAX</h5>
  <ul className="list-unstyled">
    <li><a href="/">jQuery AJAX Intro</a></li>
    <li><a href="/">jQuery Load</a></li>
    <li><a href="/">jQuery Get/Post</a></li>
  </ul>

  <h5 className="fw-bold">jQuery Misc</h5>
  <ul className="list-unstyled">
    <li><a href="/">jQuery noConflict()</a></li>
    <li><a href="/">jQuery Filters</a></li>
  </ul>
</div>



      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>jQuery Tutorial</h1>

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
