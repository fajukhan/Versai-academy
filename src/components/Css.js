
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
        <h5 className="fw-bold">CSS Tutorial</h5>
        <ul className="list-unstyled">
          <li><a href="/">CSS HOME</a></li>
          <li><a href="/">CSS Introduction</a></li>
          <li><a href="/">CSS Syntax</a></li>
          <li><a href="/">CSS Selector</a></li>
          <li><a href="/">CSS How To</a></li>
          <li><a href="/">CSS Comments</a></li>
          <li><a href="/">CSS Errors</a></li>
          <li><a href="/">CSS Color</a></li>
          <li><a href="/">CSS Background</a></li>
          <li><a href="/">CSS Borders</a></li>
          <li><a href="/">CSS Margins</a></li>
          <li><a href="/">CSS Padding</a></li>
          <li><a href="/">CSS Height/Width</a></li>
          <li><a href="/">CSS Box Model</a></li>
          <li><a href="/">CSS Outline</a></li>
          <li><a href="/">CSS Tex</a></li>
          <li><a href="/">CSS Fonts</a></li>
          <li><a href="/">CSS Icons</a></li>
          <li><a href="/">CSS Links</a></li>
          <li><a href="/">CSS Lists</a></li>
          <li><a href="/">CSS Table</a></li>
          <li><a href="/">CSS Display</a></li>
          <li><a href="/">CSS Max-Width</a></li>
          <li><a href="/">CSS Position</a></li>
          <li><a href="/">CSS Z-index</a></li>
          <li><a href="/">CSS Overflow</a></li>
          <li><a href="/">CSS Inline-Block</a></li>
          <li><a href="/">CSS Align</a></li>
          <li><a href="/">CSS Combinator</a></li>
          <li><a href="/">CSS Pseudo-classes</a></li>
          <li><a href="/">CSS Pseudo-elements</a></li>
          <li><a href="/">CSS Dropdowns</a></li>
          <li><a href="/">CSS Image Gallery</a></li>
        </ul>
        <h5 className="fw-bold">CSS Flexbox</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">Flexbox Intro</a></li>
          <li><a href="/">Flex Container</a></li>
          <li><a href="/">Flex Items</a></li>
          <li><a href="/">Flex Responsive</a></li>
          
        
        </ul>
        <h5 className="fw-bold">CSS Grid</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">Grid Intro</a></li>
          <li><a href="/">Grid Columns/Rows</a></li>
          <li><a href="/">Grid Container</a></li>
          <li><a href="/">Grid Item</a></li>
           <li><a href="/">CSS @supports</a></li>
          
        
        </ul>
         <h5 className="fw-bold">CSS Responsive</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">RWD Intro</a></li>
          <li><a href="/">RWD Viewport</a></li>
          <li><a href="/">RWD Grid View</a></li>
          <li><a href="/">RWD Media Queries</a></li>
           <li><a href="/">RWD Images</a></li>
           <li><a href="/">RWD Videos</a></li>
           <li><a href="/">RWD Framworks</a></li>
          
        
        </ul>
      </div>

      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>HTML Tutorial</h1>

        {/* Buttons */}
        <div className="d-flex gap-3 flex-wrap mt-3">
          <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button>
          <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button>
        </div>
       
        <h2 className='pt-5'>Learn HTML</h2>
        <p>HTML is the standard markup language for Web pages.</p>
        <p>With HTML you can create your own Website.</p>
        <p>HTML is easy to learn - You will enjoy it!</p>

       
      </div>



    </div>
  </div>
</section>

<Footer />

    </>
  );
};

export default Html;
