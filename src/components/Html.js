
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from "./Footer";


const Html = () => {


  return (
    <>
      {/* NavBar */}
     <Navbar />

    {/* Section-1 */}
<section>
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
          <li><a href="/">HTML Paragraphs</a></li>
          <li><a href="/">HTML Styles</a></li>
          <li><a href="/">HTML Formatting</a></li>
          <li><a href="/">HTML Quotations</a></li>
          <li><a href="/">HTML Comments</a></li>
          <li><a href="/">HTML Colors</a></li>
          <li><a href="/">HTML CSS</a></li>
          <li><a href="/">HTML Links</a></li>
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

      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>HTML Tutorial</h1>

        {/* Buttons */}
      <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
          <a href="html"> <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button></a> 
        <a href="htmlhome"> <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button></a>
        </div> 
       
        <h2 className='pt-5'>Learn HTML</h2>
        <p>HTML is the standard markup language for Web pages.</p>
        <p>With HTML you can create your own Website.</p>
        <p>HTML is easy to learn - You will enjoy it!</p>



        {/* Example Section */}
              <div className="row justify-content-start pt-3">
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
                    &nbsp;&nbsp;&lt;h1&gt;This is a Heading&lt;/h1&gt;
                    <br />
                    &nbsp;&nbsp;&lt;p&gt;This is a paragraph.&lt;/p&gt;
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
    


    {/* <!-- Heading --> */}
    <div className='py-5'>
    <h2 class="fw-bold mb-3">HTML References</h2>
    <p class="text-muted mb-4">
      At W3Schools you will find complete references about HTML elements, attributes, events,
      color names, entities, character-sets, URL encoding, language codes, HTTP messages,
      browser support, and more:
    </p>

    {/* <!-- Cards Grid --> */}
    <div class="row g-3">
      {/* <!-- Card Item --> */}
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">HTML Elements</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Browser Support</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Attributes</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Global Attributes</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Event Attributes</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Color Names</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Canvas</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Audio/Video DOM</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Character Sets</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">URL Encoding</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Language Codes</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Country Codes</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">HTTP Messages</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Px to Em Converter</div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div class="ref-card">Keyboard Shortcuts</div>
      </div>
    </div>
   </div>

       
      </div>

      {/* Ads (Right - col-2) */}
      <div className="col-lg-2 col-md-3 col-12 bg-white">
        <div className="ads-box text-center p-3">
          <h6 className="fw-bold">ADVERTISEMENT</h6>
          <img
            src={require('../images/ads.jpeg')}
            alt="ads"
            className="img-fluid mt-2"
          />
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

export default Html;
