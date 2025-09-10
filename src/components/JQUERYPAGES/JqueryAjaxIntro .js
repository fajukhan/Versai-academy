import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryAjaxIntro = () => {
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
              <h1>jQuery AJAX Intro</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryfiltering">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jqueryload">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>AJAX</b> (Asynchronous JavaScript and XML) allows you to load data asynchronously in the background without refreshing the web page. jQuery provides convenient methods to make AJAX requests easier.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                $.ajax()
              </h3>
              <p>The <code>$.ajax()</code> method performs an asynchronous HTTP request.</p>
              <pre className="bg-light p-3 rounded">
{`$.ajax({
  url: "https://api.example.com/data",
  method: "GET",
  success: function(response){
    console.log(response);
  },
  error: function(error){
    console.log(error);
  }
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                $.get()
              </h3>
              <p>The <code>$.get()</code> method is a shorthand for GET requests.</p>
              <pre className="bg-light p-3 rounded">
{`$.get("https://api.example.com/data", function(response){
  console.log(response);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                $.post()
              </h3>
              <p>The <code>$.post()</code> method is a shorthand for POST requests.</p>
              <pre className="bg-light p-3 rounded">
{`$.post("https://api.example.com/data", { name: "John", age: 30 }, function(response){
  console.log(response);
});`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>AJAX allows asynchronous data loading without refreshing the page.</li>
                <li>jQuery provides <code>$.ajax()</code>, <code>$.get()</code>, and <code>$.post()</code> methods.</li>
                <li>Use <code>success</code> and <code>error</code> callbacks to handle responses.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryAjaxIntro;
