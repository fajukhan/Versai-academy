
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
  <h5 className="fw-bold mt-4">WordPress Tutorials</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Home</a></li>
    <li><a href="/">WordPress - Overview</a></li>
    <li><a href="/">WordPress - Installation</a></li>
    <li><a href="/">WordPress - Dashboard</a></li>
    <li><a href="/">WordPress - General Setting</a></li>
    <li><a href="/">WordPress - Writing Setting</a></li>
    <li><a href="/">WordPress - Reading Setting</a></li>
    <li><a href="/">WordPress - Discussion Setting</a></li>
    <li><a href="/">WordPress - Media Setting</a></li>
    <li><a href="/">WordPress - Permalink Setting</a></li>
    <li><a href="/">WordPress - Plugin Setting</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Categories</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Add Category</a></li>
    <li><a href="/">WordPress - Edit Category</a></li>
    <li><a href="/">WordPress - Delete Category</a></li>
    <li><a href="/">WordPress - Arrange Categories</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Posts</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Add Posts</a></li>
    <li><a href="/">WordPress - Edit Posts</a></li>
    <li><a href="/">WordPress - Delete Posts</a></li>
    <li><a href="/">WordPress - Preview Posts</a></li>
    <li><a href="/">WordPress - Publish Posts</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Media</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Media Library</a></li>
    <li><a href="/">WordPress - Add Media</a></li>
    <li><a href="/">WordPress - Insert Media</a></li>
    <li><a href="/">WordPress - Edit Media</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Pages</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Add Pages</a></li>
    <li><a href="/">WordPress - Publish Pages</a></li>
    <li><a href="/">WordPress - Edit Pages</a></li>
    <li><a href="/">WordPress - Delete Pages</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Tags</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Add Tags</a></li>
    <li><a href="/">WordPress - Edit Tags</a></li>
    <li><a href="/">WordPress - Delete Tags</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Links</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Add Links</a></li>
    <li><a href="/">WordPress - Edit Links</a></li>
    <li><a href="/">WordPress - Delete Links</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Comments</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Add Comments</a></li>
    <li><a href="/">WordPress - Edit Comments</a></li>
    <li><a href="/">WordPress - Moderate Comments</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Plugins</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - View Plugins</a></li>
    <li><a href="/">WordPress - Install Plugins</a></li>
    <li><a href="/">WordPress - Customize Plugins</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Users</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - User Roles</a></li>
    <li><a href="/">WordPress - Add Users</a></li>
    <li><a href="/">WordPress - User Photo</a></li>
    <li><a href="/">WordPress - Edit Users</a></li>
    <li><a href="/">WordPress - Delete Users</a></li>
    <li><a href="/">WordPress - Personal Profile</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Appearance</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Theme Management</a></li>
    <li><a href="/">WordPress - Customize Theme</a></li>
    <li><a href="/">WordPress - Widget Management</a></li>
    <li><a href="/">WordPress - Background</a></li>
  </ul>

  <h5 className="fw-bold">WordPress Advanced</h5>
  <ul className="list-unstyled">
    <li><a href="/">WordPress - Host Transfer</a></li>
    <li><a href="/">WordPress - Version Update</a></li>
    <li><a href="/">WordPress - Spam Protection</a></li>
    <li><a href="/">WordPress - Backup & Restore</a></li>
    <li><a href="/">WordPress - Optimization</a></li>
    <li><a href="/">WordPress - Reset Password</a></li>
  </ul>
</div>





      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>Wordpress Tutorial</h1>

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
