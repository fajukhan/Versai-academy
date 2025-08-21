
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from "./Footer";

const Home = () => {

  


  return (
   <>
 {/* NavBar */}
<Navbar />






   
   {/* Section-2 */}

   <section >
       <div class=" hero-section d-flex flex-column justify-content-center">
        <div class="container">
            <h1 class="hero-title">Learn to Code</h1>
            <p class="hero-subtitle">With the world's largest web developer site.</p>
            
            <div class="search-container position-relative">
                <input type="text" class="form-control search-input" placeholder="Search our tutorials, e.g. HTML"/>
                <button class="search-btn"><i><FaSearch /></i></button>
            </div>
            
            <p class="help-text">Not Sure Where To Begin?</p>
            
        </div>
    </div>







   </section>


{/* Section-1 */}

<section>
  <div className="css-section" style={{backgroundColor:'#797917ff'}}>
    <div className="container">
      <div className="row">
        {/* First Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="css-content">
            <h1 className="css-title">CSS</h1>
            <p className="css-description">The language for styling web pages</p>
            
            <div className="css-buttons">
              <a href="/" className="css-button">
                Learn CSS
                <i className="fas fa-arrow-right button-icon"></i>
              </a>
              <a href="/" className="css-button">
                CSS Reference
                <i className="fas fa-book button-icon"></i>
              </a>
              <a href="/" className="css-button">
                Get Certified
                <i className="fas fa-award button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col-lg-6 col-md-12">
          <div className="css-example-card">
            <div className="card-header">
              <h3>CSS Example:</h3>
            </div>
            <div className="card-body">
              <pre className="css-code">
                {`body { background-color: lightblue; }
h1 { color: white; text-align: center; }
p { font-family: verdana; }`}
              </pre>
              <button className="try-button">
                Try it Yourself
                <i className="fas fa-code button-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


   <div className="css-section py-5" style={{backgroundColor:'#3fac59ff'}}>
    <div className="container">
      <div className="row">
        {/* First Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="css-content">
            <h1 className="css-title">HTML</h1>
            <p className="css-description">The language for building web pages</p>
            
            <div className="css-buttons">
              <a href="/" className="css-button">
                Learn HTML
                <i className="fas fa-arrow-right button-icon"></i>
              </a>
              <a href="/" className="css-button">
                HTML Reference
                <i className="fas fa-book button-icon"></i>
              </a>
              <a href="/" className="css-button">
                Get Certified
                <i className="fas fa-award button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col-lg-6 col-md-12">
          <div className="css-example-card">
            <div className="card-header">
              <h3>HTML Example:</h3>
            </div>
            <div className="card-body">
              <pre className="HTML-code">
                {`
<h1>This is a heading</h1>
<p>This is a paragraph.</p>`}
              </pre>
              <button className="try-button">
                Try it Yourself
                <i className="fas fa-code button-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="css-section py-5" style={{backgroundColor:'#3f91acff'}}>
    <div className="container">
      <div className="row">
        {/* First Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="css-content">
            <h1 className="css-title">JavaScript</h1>
            <p className="css-description">The language for programming web pages</p>
            
            <div className="css-buttons">
              <a href="/" className="css-button">
                Learn JavaScript
                <i className="fas fa-arrow-right button-icon"></i>
              </a>
              <a href="/" className="css-button">
                JavaScript Reference
                <i className="fas fa-book button-icon"></i>
              </a>
              <a href="/" className="css-button">
                Get Certified
                <i className="fas fa-award button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col-lg-6 col-md-12">
          <div className="css-example-card">
            <div className="card-header">
              <h3>JavaScript Example:</h3>
            </div>
            <div className="card-body">
              <pre className="css-code">
                {`<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>`}
              </pre>
              <button className="try-button">
                Try it Yourself
                <i className="fas fa-code button-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


   <div className="css-section py-5" style={{backgroundColor:'#c46822ff'}}>
    <div className="container">
      <div className="row">
        {/* First Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="css-content">
            <h1 className="css-title">Python</h1>
            <p className="css-description">A popular programming language</p>
            
            <div className="css-buttons">
              <a href="/" className="css-button">
                Learn Python
                <i className="fas fa-arrow-right button-icon"></i>
              </a>
              <a href="/" className="css-button">
                Python Reference
                <i className="fas fa-book button-icon"></i>
              </a>
              <a href="/" className="css-button">
                Get Certified
                <i className="fas fa-award button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col-lg-6 col-md-12">
          <div className="css-example-card">
            <div className="card-header">
              <h3>Python Example:</h3>
            </div>
            <div className="card-body">
              <pre className="css-code">
                {`if 5 > 2:
  print("Five is greater than two!")`}
              </pre>
              <button className="try-button">
                Try it Yourself
                <i className="fas fa-code button-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

   <div className="css-section py-5" style={{backgroundColor:'rgba(182, 184, 40, 1)2, 170, 12, 1)'}}>
    <div className="container">
      <div className="row">
        {/* First Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="css-content">
            <h1 className="css-title">SQL</h1>
            <p className="css-description">A language for accessing databases</p>
            
            <div className="css-buttons">
              <a href="/" className="css-button">
                Learn SQL
                <i className="fas fa-arrow-right button-icon"></i>
              </a>
              <a href="/" className="css-button">
                SQL Reference
                <i className="fas fa-book button-icon"></i>
              </a>
              <a href="/" className="css-button">
                Get Certified
                <i className="fas fa-award button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col-lg-6 col-md-12">
          <div className="css-example-card">
            <div className="card-header">
              <h3>SQL Example:</h3>
            </div>
            <div className="card-body">
              <pre className="css-code">
                {`SELECT * FROM Customers
WHERE Country='Mexico';`}
              </pre>
              <button className="try-button">
                Try it Yourself
                <i className="fas fa-code button-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  
    {/* Section-3 */}
    <section>
        <div class="container pt-5">
      <div class="row g-4 py-5">

      <div class="col-12 col-md-6">
        <div class="course-card bg-php">
          <h4>PHP</h4>
          <p>A web server programming language</p>
          <a href="/" class="btn-learn">Learn PHP</a>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-jquery">
          <h4>jQuery</h4>
          <p>A JS library for developing web pages</p>
          <a href="/" class="btn-learn">Learn jQuery</a>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-java">
          <h4>JavaScript</h4>
          <p>A programming language</p>
          <a href="/" class="btn-learn">Learn JavaScript</a>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-cpp">
          <h4>SQL</h4>
          <p>A Database Language</p>
          <a href="/" class="btn-learn">Learn PHP</a>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-w3css">
          <h4>CSS</h4>
          <p>A CSS framework for faster and better responsive web pages</p>
          <a href="/" class="btn-learn">Learn CSS</a>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-bootstrap">
          <h4>Bootstrap</h4>
          <p>A CSS framework for designing better web pages</p>
          <a href="/" class="btn-learn">Learn Bootstrap</a>
        </div>
      </div>

    </div>
        
    
        
        {/* <!-- Third Row - Small cards --> */}
        <h2 class="section-title">More Languages & Technologies</h2>
        <div class="row small-card-container">
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#87272e'}}>
                    <h4 class="small-card-title">HTML</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#278782'}}>
                    <h4 class="small-card-title">CSS</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#842787'}}>
                    <h4 class="small-card-title">JavaScript</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#7a6478'}}>
                    <h4 class="small-card-title">SQL</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#0b8531'}}>
                    <h4 class="small-card-title">Python</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#330830'}}>
                    <h4 class="small-card-title">PHP</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#872771'}}>
                    <h4 class="small-card-title">Bootstrap</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#372787'}}>
                    <h4 class="small-card-title">React</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#27877d'}}>
                    <h4 class="small-card-title">JQUERY</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#363a3d'}}>
                    <h4 class="small-card-title">Excel</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#571712'}}>
                    <h4 class="small-card-title">GitHub</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#9c9443'}}>
                    <h4 class="small-card-title">WordPress</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#9c32c2'}}>
                    <h4 class="small-card-title">DigitalMarketing</h4>
                </div>
            </div>
            <div class="col-md-2 col-4 mb-3">
                <div class="small-card" style={{backgroundColor:'#535959'}}>
                    <h4 class="small-card-title">GraphicDesign</h4>
                </div>
            </div>
          
            
          
           
        </div>

        
         <div class="row py-5 g-4">

      <div class="col-12 col-md-6">
        <div class="course-card bg-excel">Excel</div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-dsa">React</div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-ml">GitHub</div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-ai">Wordpress</div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-intro">Graphic Design</div>
      </div>

      <div class="col-12 col-md-6">
        <div class="course-card bg-bash">Digital Marketing</div>
      </div>

    </div>

    </div>




    </section>


  
  {/* Section-3 */}
  <section style={{backgroundColor:' var(--light-bg)'}}>
     <div class="auth-container">
        <div class="auth-header py-5">
            <h1 class="auth-title">Log in / Sign Up</h1>
            <p class="auth-subtitle">Create a free account to track your progress, and get access to more features and learning materials.</p>
        </div>

        <div className='text-center py-3'>
            <img src={require('../images/dashboard2.jpeg')} alt="error-image" height={'400px'} />
        </div>
        
        
    </div>


  </section>



  {/* Section-4 */}
  <section>
        <div class="container-center py-5">
        <div class="plus-card">
            <h1 class="plus-title">Become a Plus User</h1>
            <p class="plus-subtitle">And unlock powerful features:</p>
            
            <ul class="plus-features">
                <li class="feature-item">
                    <i class="feature-icon"> <FaCheck /></i>
                    <span>Browse Versai Academy without ads</span>
                </li>
                <li class="feature-item">
                    <i class="feature-icon"><FaCheck /></i>
                    <span>Build and host Websites</span>
                </li>
                <li class="feature-item">
                    <i class="feature-icon"><FaCheck /></i>
                    <span>Unlimited challenges</span>
                </li>
                <li class="feature-item">
                    <i class="feature-icon"><FaCheck /></i>
                    <span>Unlimited practice tests</span>
                </li>
                <li class="feature-item">
                    <i class="feature-icon"><FaCheck /></i>
                    <span>Get extra credits</span>
                </li>
                <li class="feature-item">
                    <i class="feature-icon"><FaCheck /></i>
                    <span>Priority support</span>
                </li>
            </ul>
            
            <button class="plus-button">Learn More</button>
        </div>
    </div>

  </section>



  
  {/* Section-5 */}
  <section style={{backgroundColor:' var(--light-bg)'}}>
        <div class="career-container container">
            <div className="row">
        <div class="col-10 career-card p-5">
            <h1 class="career-title">Kickstart your career</h1>
            <p class="career-subtitle">Get certified by completing a course</p>
            
            <div class="career-actions">
                <button class="career-button">
                    Get started
                    <i class="fas fa-arrow-right button-icon"></i>
                </button>
                
                <div class="career-links">
                    <a href="/" class="career-link">Vesai Academy</a>
                    <a href="/" class="career-link">ADWA Digital</a>
                </div>
            </div>
        </div>

        <div className='col-2'>
           <img src={require('../images/award.jpg')} alt="error-image" height={"400px"} />
        </div>
        </div>
    </div>




  </section>



{/* Footer */}

<Footer />




   </>
  )
}

export default Home
