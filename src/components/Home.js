import {  useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaTh } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

const Home = () => {
// Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches && savedTheme !== 'light');
  });

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Dropdown hover effect
  useEffect(() => {
    const handleHover = (e) => {
      if (window.innerWidth >= 992) {
        const menu = e.currentTarget.querySelector('.dropdown-menu');
        if (menu) menu.classList.toggle('show', e.type === 'mouseenter');
      }
    };

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', handleHover);
      dropdown.addEventListener('mouseleave', handleHover);
    });

    return () => {
      dropdowns.forEach(dropdown => {
        dropdown.removeEventListener('mouseenter', handleHover);
        dropdown.removeEventListener('mouseleave', handleHover);
      });
    };
  }, []);

  


  return (
   <>
 {/* NavBar */}
<header className='sticky-top sticky-navbar'>
  {/* <!-- First Navbar (Top) --> */}
  <nav className="navbar navbar-expand-lg top-navbar py-2">
    <div className="container-fluid">
      <a className="navbar-brand mb-2" href="/"><img src={require('../images/logo.png')} alt="error-logo" height={'35px'} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="topNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item dropdown pt-2 px-3">
            <a className="nav-link1 dropdown-toggle page22" href="/" id="exercisesDropdown" role="button" data-bs-toggle="dropdown">
              Exercises <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="exercisesDropdown">
              <li><a className="dropdown-item" href="/">HTML Exercises</a></li>
              <li><a className="dropdown-item" href="/">CSS Exercises</a></li>
              <li><a className="dropdown-item" href="/">JavaScript Exercises</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown pt-2 px-3">
            <a className="nav-link1 dropdown-toggle page22" href="/" id="certificatesDropdown" role="button" data-bs-toggle="dropdown">
              Certificates <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="certificatesDropdown">
              <li><a className="dropdown-item" href="/">HTML Certificate</a></li>
              <li><a className="dropdown-item" href="/">CSS Certificate</a></li>
              <li><a className="dropdown-item" href="/">JavaScript Certificate</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown pt-2 px-3 page22">
            <a className="nav-link1 dropdown-toggle" href="/" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
              Services <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><a className="dropdown-item" href="/">Web Hosting</a></li>
              <li><a className="dropdown-item" href="/">Website Builder</a></li>
              <li><a className="dropdown-item" href="/">Domain Name</a></li>
            </ul>
          </li>

          <div className="search-box me-3 ps-2 pt-1">
            <input className="form-control" type="search" placeholder="Search..." aria-label="Search"/>
            <i><CiSearch className='' size={'20'} style={{fontWeight:'600'}} /></i> 
          </div>
          
          {/* Theme toggle button */}
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </ul>
        
        <div className="d-flex align-items-center">
          <div className="spaces me-3">
            <a href="/" className="text-decoration-none pe-2" style={{color:' #812B8F'}}><i className='pe-1'>  <FaTh size={15} color="purple" /> </i> Spaces</a>
          </div>
          
          <div className="for-teachers me-3 ps-2">
            <a href="/" className="text-decoration-none " style={{color:' #812B8F'}}><i className='pe-1'> <FaChalkboardTeacher size={20} color="purple" /></i> For Teachers</a>
          </div>
          
          <div className="upgrade me-3">
            <a href="/" className="text-decoration-none ps-2 " style={{color:' #812B8F'}}><i className='pe-1'> <FaArrowUp size={20} color="purple" /> </i> Upgrade</a>
          </div>

          <div className="upgrade me-3">
            <a href="/" className="text-decoration-none ps-2 " style={{color:' #812B8F'}}><i className='pe-1'> <FaCartShopping size={20} color="purple" /> </i> Get Certified</a>
          </div>
          
          <div className="get-certified">
            <button className="btn  btn-sm p-2" style={{fontWeight:'600',backgroundColor:'#812B8F', color:'white'}}>
              <i><CiUser size={'20'} /></i> Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  {/* <!-- Second Navbar (Bottom) --> */}
  <nav className="navbar navbar-expand-lg bottom-navbar py-0">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bottomNavbar">
        <span className="navbar-toggler-icon text-white"><i className="fas fa-bars"></i></span>
      </button>
      
      <div className="collapse navbar-collapse" id="bottomNavbar">
        <ul className="navbar-nav d-flex gap-2">
          <li className="nav-item">
            <Link className="nav-link" to="html">HTML</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">CSS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">JAVASCRIPT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">SQL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">PYTHON</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">JAVA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">PHP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">BOOTSTRAP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">REACT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">JQUERY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">EXCEL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">GITHUB</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">WORDPRESS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">DIGITALMARKETING</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">GRAPHICDESIGN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>






   
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





   <footer class="w3-footer P-5">
        {/* <!-- First Row - Logo and Links --> */}
        <div class="footer-top P-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-md-12 mb-0 pb-3 mb-lg-0">
                        <div class="footer-logo">
                           <a href="/"><img src={require('../images/logo.png')} height={'100px'} alt="error-logo" /></a>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-12 p-5 mt-2">
                        <div class="row">
                            <div class="col-md-2 col-sm-4 col-6 mb-3">
                                <a href="/" class="footer-top-link">PLUS</a>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6 mb-3">
                                <a href="/" class="footer-top-link">SPACES</a>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6 mb-3">
                                <a href="/" class="footer-top-link">GET CERTIFIED</a>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6 mb-3">
                                <a href="/" class="footer-top-link">FOR TEACHERS</a>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6 mb-3">
                                <a href="/" class="footer-top-link">FOR BUSINESS</a>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6 mb-3">
                                <a href="/" class="footer-top-link">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Second Row - 4 Column Links --> */}
        <div class="footer-middle p-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h4 class="footer-heading">Top Tutorials</h4>
                        <ul class="footer-links">
                            <li><a href="/">HTML Tutorial</a></li>
                            <li><a href="/">CSS Tutorial</a></li>
                            <li><a href="/">JavaScript Tutorial</a></li>
                            <li><a href="/">How to Tutorial</a></li>
                            <li><a href="/">SQL Tutorial</a></li>
                            <li><a href="/">Python Tutorial</a></li>
                            <li><a href="/">PHP Tutorial</a></li>
                            <li><a href="/">Bootstrap Tutorial</a></li>
                            <li><a href="/">React Tutorial</a></li>
                            <li><a href="/">JQUERY Tutorial</a></li>
                            <li><a href="/">Execl Tutorial</a></li>
                            <li><a href="/">GitHub Tutorial</a></li>
                             <li><a href="/">Wordpress Tutorial</a></li>
                             <li><a href="/">DigitalMarketing Tutorial</a></li>
                             <li><a href="/">GraphicDesign Tutorial</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h4 class="footer-heading">Top References</h4>
                        <ul class="footer-links">
                            <li><a href="/">HTML Reference</a></li>
                            <li><a href="/">CSS Reference</a></li>
                            <li><a href="/">JavaScript Reference</a></li>
                            <li><a href="/">How to Reference</a></li>
                            <li><a href="/">SQL Reference</a></li>
                            <li><a href="/">Python Reference</a></li>
                            <li><a href="/">PHP Reference</a></li>
                            <li><a href="/">Bootstrap Reference</a></li>
                            <li><a href="/">React Reference</a></li>
                            <li><a href="/">JQUERY Reference</a></li>
                            <li><a href="/">Execl Reference</a></li>
                            <li><a href="/">GitHub Reference</a></li>
                             <li><a href="/">Wordpress Reference</a></li>
                             <li><a href="/">DigitalMarketing Reference</a></li>
                             <li><a href="/">GraphicDesign Reference</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h4 class="footer-heading">Top Examples</h4>
                        <ul class="footer-links">
                             <li><a href="/">HTML Examples</a></li>
                            <li><a href="/">CSS Examples</a></li>
                            <li><a href="/">JavaScript Examples</a></li>
                            <li><a href="/">How to Examples</a></li>
                            <li><a href="/">SQL Examples</a></li>
                            <li><a href="/">Python Examples</a></li>
                            <li><a href="/">PHP Examples</a></li>
                            <li><a href="/">Bootstrap Examples</a></li>
                            <li><a href="/">React Examples</a></li>
                            <li><a href="/">JQUERY Examples</a></li>
                            <li><a href="/">Execl Examples</a></li>
                            <li><a href="/">GitHub Examples</a></li>
                             <li><a href="/">Wordpress Examples</a></li>
                             <li><a href="/">DigitalMarketing Examples</a></li>
                             <li><a href="/">GraphicDesign Examples</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h4 class="footer-heading">Get Certified</h4>
                        <ul class="footer-links">
                              <li><a href="/">HTML Certified</a></li>
                            <li><a href="/">CSS Certified</a></li>
                            <li><a href="/">JavaScript Certified</a></li>
                            <li><a href="/">How to Certified</a></li>
                            <li><a href="/">SQL Certified</a></li>
                            <li><a href="/">Python Certified</a></li>
                            <li><a href="/">PHP Certified</a></li>
                            <li><a href="/">Bootstrap Certified</a></li>
                            <li><a href="/">React Certified</a></li>
                            <li><a href="/">JQUERY Certified</a></li>
                            <li><a href="/">Execl Certified</a></li>
                            <li><a href="/">GitHub Certified</a></li>
                             <li><a href="/">Wordpress Certified</a></li>
                             <li><a href="/">DigitalMarketing Certified</a></li>
                             <li><a href="/">GraphicDesign Certified</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div class="footer-bottom" style={{backgroundColor:'#F8F9FA'}}>
            <div class="container">
                <div class="footer-about">
                    <h5 class="about-heading">
                <a href="/"><i ><FaComment color='purple' /></i> FORUM</a>
                <span class="separator">|</span> 
                <a href="/"><i ><IoIosInformationCircle color='purple' /></i> ABOUT</a>
                <span class="separator">|</span> 
                <a href="/"><i ><FaGraduationCap color='purple' /></i> ACADEMY</a>
            </h5>
                    <p class="about-text">W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot answer full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookies and privacy policy.</p>
                    <p class="copyright">Copyright 1999-2025 by Refsnes Data, All Rights Reserved. W3Schools is Powered by W3.CSS.</p>
                </div>
            </div>
        </div>
    </footer>





   </>
  )
}

export default Home
