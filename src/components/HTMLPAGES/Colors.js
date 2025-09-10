import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Colors = () => {
  return (
    <>
      {/* NavBar */}
      <Navbar />

      {/* Section-1 */}
      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
            {/* Sidebar (Left - col-2) */}
           <Sidebar />

            {/* Main Content (Middle - col-8) */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>HTML Colors</h1>

              {/* Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="comments">
                  <button className="custom-btn">
                    <i className="bi"><FaArrowLeft /></i> Previous
                  </button>
                </a>
                <a href="css2">
                  <button className="custom-btn">
                    Next <i className="bi"><FaArrowRight /></i>
                  </button>
                </a>
              </div>

              <p className="pt-5">
             HTML supports different ways to define colors: by names, HEX values, 
                RGB, RGBA, HSL, and HSLA formats. Below are some examples.
              </p>

            {/* Text Color Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Text Color Example</div>
                <div className="card-body">
                  <p style={{ color: "red" }}>This text is red.</p>
                  <p style={{ color: "blue" }}>This text is blue.</p>
                  <p style={{ color: "green" }}>This text is green.</p>

                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;p style="color:red;"&gt;This text is red.&lt;/p&gt;<br />
                      &lt;p style="color:blue;"&gt;This text is blue.&lt;/p&gt;<br />
                      &lt;p style="color:green;"&gt;This text is green.&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>
            
            
         {/* Background Color Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Background Color Example</div>
                <div className="card-body">
                  <p style={{ backgroundColor: "yellow" }}>
                    This paragraph has a yellow background.
                  </p>
                  <p style={{ backgroundColor: "lightblue" }}>
                    This paragraph has a lightblue background.
                  </p>
                  <p style={{ backgroundColor: "lightgreen" }}>
                    This paragraph has a lightgreen background.
                  </p>

                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;p style="background-color:yellow;"&gt;...&lt;/p&gt;<br />
                      &lt;p style="background-color:lightblue;"&gt;...&lt;/p&gt;<br />
                      &lt;p style="background-color:lightgreen;"&gt;...&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>



            {/* Border Color Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">Border Color Example</div>
                <div className="card-body d-flex gap-3 flex-wrap">
                  <div style={{ border: "2px solid red", padding: "10px" }}>
                    Red Border
                  </div>
                  <div style={{ border: "2px solid green", padding: "10px" }}>
                    Green Border
                  </div>
                  <div style={{ border: "2px solid blue", padding: "10px" }}>
                    Blue Border
                  </div>

                  <div className="bg-light p-3 rounded w-100 mt-3">
                    <code>
                      &lt;div style="border:2px solid red;"&gt;Red Border&lt;/div&gt;<br />
                      &lt;div style="border:2px solid green;"&gt;Green Border&lt;/div&gt;<br />
                      &lt;div style="border:2px solid blue;"&gt;Blue Border&lt;/div&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>


              
              {/* RGB Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">RGB Colors Example</div>
                <div className="card-body">
                  <p style={{ color: "rgb(255,0,0)" }}>This is RGB Red (rgb(255,0,0)).</p>
                  <p style={{ color: "rgb(0,255,0)" }}>This is RGB Green (rgb(0,255,0)).</p>
                  <p style={{ color: "rgb(0,0,255)" }}>This is RGB Blue (rgb(0,0,255)).</p>

                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;p style="color:rgb(255,0,0);"&gt;Red&lt;/p&gt;<br />
                      &lt;p style="color:rgb(0,255,0);"&gt;Green&lt;/p&gt;<br />
                      &lt;p style="color:rgb(0,0,255);"&gt;Blue&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>
           
  
       {/* HSL Example */}
              <div className="card mb-4 shadow-sm py-5">
                <div className="card-header">HSL Colors Example</div>
                <div className="card-body">
                  <p style={{ color: "hsl(0,100%,50%)" }}>This is HSL Red (hsl(0,100%,50%)).</p>
                  <p style={{ color: "hsl(120,100%,25%)" }}>This is HSL Green (hsl(120,100%,25%)).</p>
                  <p style={{ color: "hsl(240,100%,50%)" }}>This is HSL Blue (hsl(240,100%,50%)).</p>

                  <div className="bg-light p-3 rounded">
                    <code>
                      &lt;p style="color:hsl(0,100%,50%);"&gt;Red&lt;/p&gt;<br />
                      &lt;p style="color:hsl(120,100%,25%);"&gt;Green&lt;/p&gt;<br />
                      &lt;p style="color:hsl(240,100%,50%);"&gt;Blue&lt;/p&gt;
                    </code>
                  </div>
                  <button className="try-btn mt-3">Try it Yourself »</button>
                </div>
              </div>


             
           

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Colors


