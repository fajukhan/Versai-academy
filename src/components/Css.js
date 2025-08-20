import { useState, useEffect } from 'react';
import { CiSearch, CiUser } from "react-icons/ci";
import { FaSun, FaMoon, FaTh, FaChalkboardTeacher, FaArrowUp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Html = () => {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return (
      savedTheme === 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        savedTheme !== 'light')
    );
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
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', handleHover);
      dropdown.addEventListener('mouseleave', handleHover);
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener('mouseenter', handleHover);
        dropdown.removeEventListener('mouseleave', handleHover);
      });
    };
  }, []);

  return (
    <>
      {/* NavBar */}
      <header className="sticky-top sticky-navbar">
        {/* First Navbar (Top) */}
        <nav className="navbar navbar-expand-lg top-navbar py-2">
          <div className="container-fluid">
            <a className="navbar-brand mb-2" href="/">
              <img
                src={require('../images/logo.png')}
                alt="error-logo"
                height={'35px'}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="topNavbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown pt-2 px-3">
                  <a
                    className="nav-link1 dropdown-toggle page22"
                    href="/"
                    id="exercisesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Exercises <i className="fas fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="exercisesDropdown">
                    <li><a className="dropdown-item" href="/">HTML Exercises</a></li>
                    <li><a className="dropdown-item" href="/">CSS Exercises</a></li>
                    <li><a className="dropdown-item" href="/">JavaScript Exercises</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown pt-2 px-3">
                  <a
                    className="nav-link1 dropdown-toggle page22"
                    href="/"
                    id="certificatesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Certificates <i className="fas fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="certificatesDropdown">
                    <li><a className="dropdown-item" href="/">HTML Certificate</a></li>
                    <li><a className="dropdown-item" href="/">CSS Certificate</a></li>
                    <li><a className="dropdown-item" href="/">JavaScript Certificate</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown pt-2 px-3 page22">
                  <a
                    className="nav-link1 dropdown-toggle"
                    href="/"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Services <i className="fas fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/">Web Hosting</a></li>
                    <li><a className="dropdown-item" href="/">Website Builder</a></li>
                    <li><a className="dropdown-item" href="/">Domain Name</a></li>
                  </ul>
                </li>

                <div className="search-box me-3 ps-2 pt-1">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <i>
                    <CiSearch size={'20'} style={{ fontWeight: '600' }} />
                  </i>
                </div>

                {/* Theme toggle button */}
                <button onClick={toggleTheme} className="theme-toggle">
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
              </ul>

              <div className="d-flex align-items-center">
                <div className="spaces me-3">
                  <a href="/" className="text-decoration-none pe-2" style={{ color: '#812B8F' }}>
                    <i className="pe-1">
                      <FaTh size={15} color="purple" />
                    </i>{' '}
                    Spaces
                  </a>
                </div>

                <div className="for-teachers me-3 ps-2">
                  <a href="/" className="text-decoration-none " style={{ color: '#812B8F' }}>
                    <i className="pe-1">
                      <FaChalkboardTeacher size={20} color="purple" />
                    </i>{' '}
                    For Teachers
                  </a>
                </div>

                <div className="upgrade me-3">
                  <a href="/" className="text-decoration-none ps-2 " style={{ color: '#812B8F' }}>
                    <i className="pe-1">
                      <FaArrowUp size={20} color="purple" />
                    </i>{' '}
                    Upgrade
                  </a>
                </div>

                <div className="upgrade me-3">
                  <a href="/" className="text-decoration-none ps-2 " style={{ color: '#812B8F' }}>
                    <i className="pe-1">
                      <FaCartShopping size={20} color="purple" />
                    </i>{' '}
                    Get Certified
                  </a>
                </div>

                <div className="get-certified">
                  <button
                    className="btn btn-sm p-2"
                    style={{ fontWeight: '600', backgroundColor: '#812B8F', color: 'white' }}
                  >
                    <i>
                      <CiUser size={'20'} />
                    </i>{' '}
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Second Navbar (Bottom) */}
        <nav className="navbar navbar-expand-lg bottom-navbar py-0">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bottomNavbar"
            >
              <span className="navbar-toggler-icon text-white">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="bottomNavbar">
              <ul className="navbar-nav d-flex gap-2">
                <li className="nav-item"><a className="nav-link" href="html">HTML</a></li>
                <li className="nav-item"><a className="nav-link" href="css">CSS</a></li>
                <li className="nav-item"><a className="nav-link" href="/">JAVASCRIPT</a></li>
                <li className="nav-item"><a className="nav-link" href="/">SQL</a></li>
                <li className="nav-item"><a className="nav-link" href="/">PYTHON</a></li>
                <li className="nav-item"><a className="nav-link" href="/">JAVA</a></li>
                <li className="nav-item"><a className="nav-link" href="/">PHP</a></li>
                <li className="nav-item"><a className="nav-link" href="/">BOOTSTRAP</a></li>
                <li className="nav-item"><a className="nav-link" href="/">REACT</a></li>
                <li className="nav-item"><a className="nav-link" href="/">JQUERY</a></li>
                <li className="nav-item"><a className="nav-link" href="/">EXCEL</a></li>
                <li className="nav-item"><a className="nav-link" href="/">GITHUB</a></li>
                <li className="nav-item"><a className="nav-link" href="/">WORDPRESS</a></li>
                <li className="nav-item"><a className="nav-link" href="/">DIGITALMARKETING</a></li>
                <li className="nav-item"><a className="nav-link" href="/">GRAPHICDESIGN</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    {/* Section-1 */}
<section>
  <div className="">
    <div className="row g-0">
      
      {/* Sidebar (Left - col-2) */}
      <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
        <h5 className="fw-bold">CSS Tutorial</h5>
        <ul className="list-unstyled">
          <li><a href="/">CSS HOME</a></li>
          <li><a href="/">CSS Introduction</a></li>
          <li><a href="/">CSS Syntax</a></li>
          <li><a href="/">CSS Selector</a></li>
          <li><a href="/">CSS How To</a></li>
          <li><a href="/">CSS Comments</a></li>
          <li><a href="/">CSS Errors</a></li>
          <li><a href="/">CSS Color</a></li>
          <li><a href="/">CSS Background</a></li>
          <li><a href="/">CSS Borders</a></li>
          <li><a href="/">CSS Margins</a></li>
          <li><a href="/">CSS Padding</a></li>
          <li><a href="/">CSS Height/Width</a></li>
          <li><a href="/">CSS Box Model</a></li>
          <li><a href="/">CSS Outline</a></li>
          <li><a href="/">CSS Tex</a></li>
          <li><a href="/">CSS Fonts</a></li>
          <li><a href="/">CSS Icons</a></li>
          <li><a href="/">CSS Links</a></li>
          <li><a href="/">CSS Lists</a></li>
          <li><a href="/">CSS Table</a></li>
          <li><a href="/">CSS Display</a></li>
          <li><a href="/">CSS Max-Width</a></li>
          <li><a href="/">CSS Position</a></li>
          <li><a href="/">CSS Z-index</a></li>
          <li><a href="/">CSS Overflow</a></li>
          <li><a href="/">CSS Inline-Block</a></li>
          <li><a href="/">CSS Align</a></li>
          <li><a href="/">CSS Combinator</a></li>
          <li><a href="/">CSS Pseudo-classes</a></li>
          <li><a href="/">CSS Pseudo-elements</a></li>
          <li><a href="/">CSS Dropdowns</a></li>
          <li><a href="/">CSS Image Gallery</a></li>
        </ul>
        <h5 className="fw-bold">CSS Flexbox</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">Flexbox Intro</a></li>
          <li><a href="/">Flex Container</a></li>
          <li><a href="/">Flex Items</a></li>
          <li><a href="/">Flex Responsive</a></li>
          
        
        </ul>
        <h5 className="fw-bold">CSS Grid</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">Grid Intro</a></li>
          <li><a href="/">Grid Columns/Rows</a></li>
          <li><a href="/">Grid Container</a></li>
          <li><a href="/">Grid Item</a></li>
           <li><a href="/">CSS @supports</a></li>
          
        
        </ul>
         <h5 className="fw-bold">CSS Responsive</h5>
        <ul className="list-unstyled">
        
         
          <li><a href="/">RWD Intro</a></li>
          <li><a href="/">RWD Viewport</a></li>
          <li><a href="/">RWD Grid View</a></li>
          <li><a href="/">RWD Media Queries</a></li>
           <li><a href="/">RWD Images</a></li>
           <li><a href="/">RWD Videos</a></li>
           <li><a href="/">RWD Framworks</a></li>
          
        
        </ul>
      </div>

      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>HTML Tutorial</h1>

        {/* Buttons */}
        <div className="d-flex gap-3 flex-wrap mt-3">
          <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button>
          <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button>
        </div>
       
        <h2 className='pt-5'>Learn HTML</h2>
        <p>HTML is the standard markup language for Web pages.</p>
        <p>With HTML you can create your own Website.</p>
        <p>HTML is easy to learn - You will enjoy it!</p>

       
      </div>

      {/* Ads (Right - col-2) */}
      <div className="col-lg-2 col-md-3 col-12">
        <div className="ads-box text-center p-3">
          <h6 className="fw-bold">ADVERTISEMENT</h6>
          <img
            src="https://via.placeholder.com/160x600?text=Ad+Banner"
            alt="ads"
            className="img-fluid mt-2"
          />
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
};

export default Html;
