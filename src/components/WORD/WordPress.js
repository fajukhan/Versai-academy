import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SideWord from "../SideWord";

const WordPressTutorial = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

            {/* Sidebar (Left - col-2) */}
            <SideWord />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>WordPress Tutorial</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="/previouspage">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="/nextpage">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                WordPress is one of the most popular content management systems (CMS) in the world. 
                It allows you to create websites and blogs easily without having to write code.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Installing WordPress
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Download WordPress from wordpress.org
2. Upload files to your web server
3. Create a database and user
4. Run the WordPress installer`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Creating a New Post
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Login to your WordPress dashboard
2. Go to Posts -> Add New
3. Enter the title and content
4. Click 'Publish' to make it live`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Installing a Plugin
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Go to Plugins -> Add New
2. Search for a plugin (e.g., 'Contact Form 7')
3. Click 'Install Now'
4. Click 'Activate'`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Changing the Theme
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Go to Appearance -> Themes
2. Click 'Add New'
3. Choose a theme and click 'Install'
4. Click 'Activate'`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>WordPress is an easy-to-use CMS for websites and blogs.</li>
                <li>You can install plugins and themes to extend functionality and design.</li>
                <li>Creating content such as posts and pages is simple and intuitive.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WordPressTutorial;
