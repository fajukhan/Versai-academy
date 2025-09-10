import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryGetPost = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
                                                                      {/* Sidebar (Left - col-2) */}
                       <SidebarJquery />


            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>jQuery Get/Post</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryload">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerynoconflict">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                jQuery provides <code>$.get()</code> and <code>$.post()</code> methods to perform AJAX GET and POST requests easily.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                $.get() Example
              </h3>
              <pre className="bg-light p-3 rounded">
{`$.get("demo_get.php", { name: "John", age: 30 })
  .done(function(data){
    $("#result").html(data);
  });`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                $.post() Example
              </h3>
              <pre className="bg-light p-3 rounded">
{`$.post("demo_post.php", { name: "John", age: 30 })
  .done(function(data){
    $("#result").html(data);
  });`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>$.get()</code> sends data to the server using GET and receives a response.</li>
                <li><code>$.post()</code> sends data to the server using POST and receives a response.</li>
                <li>Both methods are easy ways to perform AJAX requests without writing full XMLHttpRequest code.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryGetPost;
