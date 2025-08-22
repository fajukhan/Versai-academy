
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
  <h5 className="fw-bold mt-4">Git Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">Git HOME</a></li>
    <li><a href="/">Git Intro</a></li>
    <li><a href="/">Git Install</a></li>
    <li><a href="/">Git Config</a></li>
    <li><a href="/">Git Get Started</a></li>
    <li><a href="/">Git New Files</a></li>
    <li><a href="/">Git Staging</a></li>
    <li><a href="/">Git Commit</a></li>
    <li><a href="/">Git Tagging</a></li>
    <li><a href="/">Git Stash</a></li>
    <li><a href="/">Git History</a></li>
    <li><a href="/">Git Help</a></li>
    <li><a href="/">Git Branch</a></li>
    <li><a href="/">Git Merge</a></li>
    <li><a href="/">Git Workflow</a></li>
    <li><a href="/">Git Best Practices</a></li>
    <li><a href="/">Git Glossary</a></li>
  </ul>

  <h5 className="fw-bold">Git and GitHub</h5>
  <ul className="list-unstyled">
    <li><a href="/">GitHub Get Started</a></li>
    <li><a href="/">Git What is SSH?</a></li>
    <li><a href="/">GitHub Add SSH</a></li>
    <li><a href="/">GitHub Set Remote</a></li>
    <li><a href="/">GitHub Edit Code</a></li>
    <li><a href="/">Pull from GitHub</a></li>
    <li><a href="/">Push to GitHub</a></li>
    <li><a href="/">GitHub Branch</a></li>
    <li><a href="/">Pull Branch from GitHub</a></li>
    <li><a href="/">Push Branch to GitHub</a></li>
    <li><a href="/">GitHub Flow</a></li>
    <li><a href="/">GitHub Pages</a></li>
    <li><a href="/">Git GUI Clients</a></li>
  </ul>

  <h5 className="fw-bold">Git Contribute</h5>
  <ul className="list-unstyled">
    <li><a href="/">GitHub Fork</a></li>
    <li><a href="/">Git Clone from GitHub</a></li>
    <li><a href="/">GitHub Send Pull Request</a></li>
  </ul>

  <h5 className="fw-bold">Git Undo</h5>
  <ul className="list-unstyled">
    <li><a href="/">Git Revert</a></li>
    <li><a href="/">Git Reset</a></li>
    <li><a href="/">Git Amend</a></li>
    <li><a href="/">Git Rebase</a></li>
    <li><a href="/">Git Reflog</a></li>
    <li><a href="/">Git Recovery</a></li>
  </ul>
</div>




      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Git Tutorial</h1>

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
