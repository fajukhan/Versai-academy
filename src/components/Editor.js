
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Editor = () => {

  

  return (
    <>
    
    {/* NavBar */}
       <Navbar />
   
         {/* Section-1 */}
         <section className="bg-white p-0">
           <div className="">
             <div className="row g-0">
               {/* Sidebar (Left - col-2) */}
               <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
                 <h5 className="fw-bold">HTML Tutorial</h5>
                 <ul className="list-unstyled">
          <li><a href="html">HTML HOME</a></li>
          <li><a href="htmlhome">HTML Introduction</a></li>
          <li><a href="editor">HTML Editors</a></li>
          <li><a href="basic">HTML Basic</a></li>
          <li><a href="elements">HTML Elements</a></li>
          <li><a href="attribute">HTML Attributes</a></li>
          <li><a href="heading">HTML Headings</a></li>
          <li><a href="paragraph">HTML Paragraphs</a></li>
          <li><a href="style">HTML Styles</a></li>
          <li><a href="formatting">HTML Formatting</a></li>
          <li><a href="quotation">HTML Quotations</a></li>
          <li><a href="comments">HTML Comments</a></li>
          <li><a href="colors">HTML Colors</a></li>
          <li><a href="css2">HTML CSS</a></li>
          <li><a href="links">HTML Links</a></li>
          <li><a href="/">HTML Images</a></li>
          <li><a href="/">HTML Favicon</a></li>
          <li><a href="/">HTML Page Title</a></li>
          <li><a href="/">HTML Tables</a></li>
          <li><a href="/">HTML Lists</a></li>
          <li><a href="/">HTML Div</a></li>
          <li><a href="/">HTML Block & Inline</a></li>
          <li><a href="/">HTML Class</a></li>
          <li><a href="/">HTML Id</a></li>
          <li><a href="/">HTML Iframes</a></li>
          <li><a href="/">HTML Javascript</a></li>
          <li><a href="/">HTML File Paths</a></li>
          <li><a href="/">HTML Head</a></li>
          <li><a href="/">HTML Layout</a></li>
          <li><a href="/">HTML Responsive</a></li>
          <li><a href="/">HTML Semantics</a></li>
        </ul>

         <h5 className="fw-bold">HTML Forms</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">HTML Forms</a></li>
          <li><a href="/">HTML Form Elements</a></li>
          <li><a href="/">HTML Input Types</a></li>
          <li><a href="/">HTML Input Attributes</a></li>
          <li><a href="/">HTML Form Attributes</a></li>
        
        </ul>
        <h5 className="fw-bold">HTML Media</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">HTML Media</a></li>
          <li><a href="/">HTML Audio</a></li>
          <li><a href="/">HTML Video</a></li>
          <li><a href="/">HTML Youtube</a></li>
          
        
        </ul>
               </div>
   
               {/* Main Content (Middle - col-8) */}
               <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
                 <h1>HTML Editors</h1>
   
                   {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="htmlhome"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="basic"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
   
                 <p className="pt-5">
                  A simple text editor is all you need to learn HTML.
                 </p>
   
                 <h2 className="pt-5">Learn HTML Using Notepad or TextEdit</h2>
                 <p>Web pages can be created and modified by using professional HTML editors.</p>
                 <p>
                  However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).
                 </p>
                 <p>We believe that using a simple text editor is a good way to learn HTML.</p>
                 <p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
                
   
                 {/* Example Section */}
                 <div className="row justify-content-start">
                   <div className="col-lg-10 col-md-12">
                     {/* Heading */}
                     <h4 className="fw-bold mb-3">Example</h4>
   
                     {/* Code Box */}
                     <div className="code-box mb-3">
                       &lt;!DOCTYPE html&gt;
                       <br />
                       &lt;html&gt;
                       <br />
                       &lt;head&gt;
                       <br />
                       &nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;
                       <br />
                       &lt;/head&gt;
                       <br />
                       &lt;body&gt;
                       <br />
                       <br />
                       &nbsp;&nbsp;&lt;h1&gt;My First Heading&lt;/h1&gt;
                       <br />
                       &nbsp;&nbsp;&lt;p&gt;My first paragraph.&lt;/p&gt;
                       <br />
                       <br />
                       &lt;/body&gt;
                       <br />
                       &lt;/html&gt;
                     </div>
   
                     {/* Button */}
                     <button className="custom-btn">Try it Yourself »</button>
                   </div>
                 </div>
   
                 <div></div>
                 <div></div>
   
   <div className="py-5">
                  
    {/* <!-- Step 1 PC --> */}
    <div class="step-box mb-4 p-4 rounded shadow-sm">
      <h4 class="fw-bold">Step 1: Open Notepad (PC)</h4>
      <p><strong>Windows 8 or later:</strong></p>
      <p>
        Open the <span class="highlight">Start Screen</span> (the window symbol at the bottom left on your screen). 
        Type <span class="highlight">Notepad</span>.
      </p>
      <p><strong>Windows 7 or earlier:</strong></p>
      <p>
        Open <span class="highlight">Start &gt; Programs &gt; Accessories &gt; Notepad</span>
      </p>
    </div>

    {/* <!-- Step 1 Mac --> */}
    <div class="step-box mb-4 p-4 rounded shadow-sm">
      <h4 class="fw-bold">Step 1: Open TextEdit (Mac)</h4>
      <p>
        Open <span class="highlight">Finder &gt; Applications &gt; TextEdit</span>
      </p>
      <p>
        Also change some preferences to get the application to save files correctly. 
        In <span class="highlight">Preferences &gt; Format</span> &gt; choose 
        <span class="highlight">"Plain Text"</span>
      </p>
      <p>
        Then under <span class="highlight">"Open and Save"</span>, check the box that says 
        <span class="highlight">"Display HTML files as HTML code instead of formatted text"</span>.
      </p>
      <p><strong>Then open a new document to place the code.</strong></p>
    </div>

    {/* <!-- Step 2 --> */}
    <div class="step-box mb-4 p-4 rounded shadow-sm">
      <h4 class="fw-bold">Step 2: Write Some HTML</h4>
      <p>
        Write or copy the following HTML code into Notepad:
      </p>
    </div>




                 </div>
               </div>
   
              
             </div>
           </div>
         </section>
    
    
    
    {/* Footer */}
    <Footer />
    
    
    
    </>
  )
}

export default Editor
