import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarJquery from "../SidebarJquery";

const JqueryLoad = () => {
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
              <h1>jQuery Load</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="jqueryajaxintro">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="jquerygetpost">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                <b>jQuery's <code>.load()</code></b> method loads data from a server and places the returned HTML into the selected element.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Basic Syntax
              </h3>
              <pre className="bg-light p-3 rounded">
{`$(selector).load(URL, data, callback);`}
              </pre>
              <p>Where:</p>
              <ul>
                <li><b>URL</b>: The URL to load data from</li>
                <li><b>data</b>: Optional. Key/value pairs sent to the server</li>
                <li><b>callback</b>: Optional. Function executed when load is complete</li>
              </ul>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Load HTML content
              </h3>
              <pre className="bg-light p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<div id="content">
  Content will be loaded here.
</div>

<button id="loadBtn">Load Content</button>

<script>
  $("#loadBtn").click(function(){
    $("#content").load("example.html");
  });
</script>

</body>
</html>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>.load()</code> is an easy way to get content from the server and insert it into the page.</li>
                <li>You can provide optional data and a callback function.</li>
                <li>Great for loading parts of a page without refreshing.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JqueryLoad;
