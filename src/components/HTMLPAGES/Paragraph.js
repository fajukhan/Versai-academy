
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "../Sidebar";


const Paragraph = () => {
  return (
  <>
  
     {/* NavBar */}
       <Navbar />
   
         {/* Section-1 */}
         <section  className="p-0">
           <div className="bg-white">
             <div className="row g-0">
               {/* Sidebar (Left - col-2) */}
              <Sidebar />
   
               {/* Main Content (Middle - col-8) */}
               <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
                 <h1>HTML Paragraphs</h1>
   
                   {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="heading"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="style"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
   
                 <p className="pt-5">
                A paragraph always starts on a new line, and is usually a block of text.
                 </p>
             
             
                 <h2 className="pt-5">HTML Paragraphs</h2>
                 <p>The HTML element defines a paragraph.</p>
                 <p>
                A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
                 </p>
                 

                 <div className="pt-5">
                      {/* <!-- The href Attribute --> */}
  <h2>The href Attribute</h2>
  <p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:</p>

  <div class="example-box">
    <p><code>&lt;a href="https://www.w3schools.com"&gt;Visit W3Schools&lt;/a&gt;</code></p>
    <a href="https://www.w3schools.com" target="_blank" class="d-block mt-2 text-decoration-none">
      👉 Visit W3Schools (Live Link)
    </a>
    <button class="try-btn">Try it Yourself »</button>
  </div>


                 </div>



  <hr />


  <div className="py-5">

    {/* <!-- The src Attribute --> */}
  <h2>The src Attribute</h2>
  <p>The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image:</p>

  <div class="example-box">
    <p><code>&lt;img src="https://via.placeholder.com/150"&gt;</code></p>
    <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow-sm mt-2" alt="Demo Image"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>

  {/* <!-- The width and height Attributes --> */}
  <h2>The width and height Attributes</h2>
  <p>The <code>&lt;img&gt;</code> tag should also contain the <code>width</code> and <code>height</code> attributes:</p>

  <div class="example-box">
    <p><code>&lt;img src="https://via.placeholder.com/500x300" width="500" height="300"&gt;</code></p>
    <img src="https://via.placeholder.com/500x300" class="img-fluid rounded shadow-sm mt-2" width="500" height="300" alt="Demo Image with Size"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>

  {/* <!-- The alt Attribute --> */}
  <h2>The alt Attribute</h2>
  <p>The required <code>alt</code> attribute specifies an alternate text for an image:</p>

  <div class="example-box">
    <p><code>&lt;img src="https://via.placeholder.com/200" alt="Girl with a jacket"&gt;</code></p>
    <img src="https://via.placeholder.com/200" class="img-fluid rounded shadow-sm mt-2" alt="Girl with a jacket"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>

  {/* <!-- Broken Image Example --> */}
  <div class="example-box">
    <p><code>&lt;img src="wrongpath.jpg" alt="Girl with a jacket"&gt;</code></p>
    <img src="wrongpath.jpg" class="img-fluid rounded shadow-sm mt-2" alt="Girl with a jacket"/>
    <button class="try-btn">Try it Yourself »</button>
  </div>




  </div>

   
 

  <hr/>


               
   
                 <div></div>
                 <div></div>
   

               </div>
   
            
             </div>
           </div>
         </section>
    
    
    
    {/* Footer */}
    <Footer />
    
  
  
  
  
  </>
  )
}

export default Paragraph


