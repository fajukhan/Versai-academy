
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Heading = () => {
  return (
  <>
  
     {/* NavBar */}
       <Navbar />
   
         {/* Section-1 */}
         <section  className="p-0">
           <div className="bg-white">
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
                 <h1>HTML Headings</h1>
   
                   {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="attribute"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="paragraph"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
   
                 <p className="pt-5">
                HTML headings are titles or subtitles that you want to display on a webpage.
                 </p>
   
  {/* <!-- Section 1: Headings Example --> */}
  <div class="mb-5">
    <div class="code-box">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
    <button class="btn btn-custom mt-3">Try it Yourself »</button>
  </div>

  <hr />

   
  {/* <!-- Section 2: Explanation --> */}
  <div class="mb-5">
    <h2>HTML Headings</h2>
    <p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.</p>
    <p><code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.</p>

    <h5 class="mt-4">Example</h5>
    <div class="code-box">
      &lt;h1&gt;Heading 1&lt;/h1&gt;<br/>
      &lt;h2&gt;Heading 2&lt;/h2&gt;<br/>
      &lt;h3&gt;Heading 3&lt;/h3&gt;<br/>
      &lt;h4&gt;Heading 4&lt;/h4&gt;<br/>
      &lt;h5&gt;Heading 5&lt;/h5&gt;<br/>
      &lt;h6&gt;Heading 6&lt;/h6&gt;
    </div>
    <button class="btn btn-custom mt-3">Try it Yourself »</button>

    <div class="note-box mt-3">
      <b>Note:</b> Browsers automatically add some white space (a margin) before and after a heading.
    </div>
  </div>

  <hr/>

  {/* <!-- Section 3: Importance --> */}
  <div class="mb-5">
    <h2>Headings Are Important</h2>
    <p>Search engines use the headings to index the structure and content of your web pages.</p>
    <p>Users often skim a page by its headings. It is important to use headings to show the document structure.</p>
    <p><code>&lt;h1&gt;</code> should be used for main headings, followed by <code>&lt;h2&gt;</code>, then <code>&lt;h3&gt;</code>, and so on.</p>

    <div class="note-box">
      <b>Note:</b> Use HTML headings for headings only. Don’t use headings to make text <b>BIG</b> or bold.
    </div>
  </div>
               
   
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

export default Heading

