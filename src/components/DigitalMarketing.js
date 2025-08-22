
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
  <h5 className="fw-bold mt-4">Digital Marketing Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">Digital Marketing - Home</a></li>
    <li><a href="/">Digital Marketing - Overview</a></li>
    <li><a href="/">Digital Marketing - SEO</a></li>
    <li><a href="/">Digital Marketing - Social Media</a></li>
    <li><a href="/">Digital Marketing - Content</a></li>
    <li><a href="/">Digital Marketing - Email</a></li>
    <li><a href="/">Digital Marketing - Mobile</a></li>
    <li><a href="/">Digital Marketing - Pay Per Click</a></li>
    <li><a href="/">Digital Marketing - CRO</a></li>
    <li><a href="/">Digital Marketing - Web Analytics</a></li>
    <li><a href="/">Digital Marketing - Facebook</a></li>
    <li><a href="/">Digital Marketing - Pinterest</a></li>
    <li><a href="/">Digital Marketing - Twitter</a></li>
    <li><a href="/">Digital Marketing - Linkedin</a></li>
    <li><a href="/">Digital Marketing - Youtube</a></li>
    <li><a href="/">Digital Marketing - Google Adwords</a></li>
    <li><a href="/">Digital Marketing - Google Analytics</a></li>
    <li><a href="/">Digital Marketing - Quick Guide</a></li>
    <li><a href="/">Digital Marketing - Useful Resources</a></li>
    <li><a href="/">Digital Marketing - Discussion</a></li>
  </ul>
</div>





      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Digital Marketing Tutorial</h1>

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
