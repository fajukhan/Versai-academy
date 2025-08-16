import { useRef, useState, useEffect } from 'react';
import { FaBars, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaTh } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";



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

  //slider functionality
    const sliderRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(15); // Number of initially visible items
  const [currentIndex, setCurrentIndex] = useState(0);

  const menuItems = [
    'HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'PYTHON', 'PHP',
    'BOOTSTRAP', 'REACT', 'MYSQL', 'JQUERY', 'EXCEL',
    'GITHUB', 'WORDPRESS', 'DIGITALMARKETING', 'GRAPHICDESIGN',
    'GITHUB', 'WORDPRESS', 'DIGITALMARKETING', 'GRAPHICDESIGN'
  ];

  const showNextItems = () => {
    if (currentIndex + visibleItems < menuItems.length) {
      setCurrentIndex(currentIndex + 1);
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.children[0]?.offsetWidth || 150;
        sliderRef.current.scrollLeft += itemWidth;
      }
    }
  };

  const showPrevItems = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.children[0]?.offsetWidth || 150;
        sliderRef.current.scrollLeft -= itemWidth;
      }
    }
  };



  return (
   <>
  <header>
       {/* <!-- First Navbar (Top) --> */}
    <nav class="navbar navbar-expand-lg top-navbar py-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Sutorials</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/topNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="topNavbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item dropdown pe-2">
                        <a class="nav-link dropdown-toggle text-black page22" href="/" id="exercisesDropdown" role="button" data-bs-toggle="dropdown">
                            Exercises <i class="fas fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="exercisesDropdown">
                            <li><a class="dropdown-item" href="/">HTML Exercises</a></li>
                            <li><a class="dropdown-item" href="/">CSS Exercises</a></li>
                            <li><a class="dropdown-item" href="/">JavaScript Exercises</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown pe-2">
                        <a class="nav-link dropdown-toggle page22" href="/" id="certificatesDropdown" role="button" data-bs-toggle="dropdown">
                            Certificates <i class="fas fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="certificatesDropdown">
                            <li><a class="dropdown-item" href="/">HTML Certificate</a></li>
                            <li><a class="dropdown-item" href="/">CSS Certificate</a></li>
                            <li><a class="dropdown-item" href="/">JavaScript Certificate</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown pe-2 page22">
                        <a class="nav-link dropdown-toggle" href="/" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
                            Services <i class="fas fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                            <li><a class="dropdown-item" href="/">Web Hosting</a></li>
                            <li><a class="dropdown-item" href="/">Website Builder</a></li>
                            <li><a class="dropdown-item" href="/">Domain Name</a></li>
                        </ul>
                    </li>

                         <div class="search-box me-3 ps-2">
                        <input class="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                      <i><CiSearch /></i> 

                    </div>
                    
                        {/* Theme toggle button */}
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
                </ul>
                
                <div class="d-flex align-items-center">
               
                    
                    <div class="spaces me-3">
                        <a href="/" class="text-decoration-none pe-2"><i>  <FaTh size={0} color="blue" /> </i> Spaces</a>
                    </div>
                    
                    <div class="for-teachers me-3 ps-2">
                        <a href="/" class="text-decoration-none"><i> <FaChalkboardTeacher size={0} color="blue" /></i> For Teachers</a>
                    </div>
                    
                    <div class="upgrade me-3">
                        <a href="/" class="text-decoration-none ps-2"><i> <FaArrowUp size={0} color="blue" /> </i> Upgrade</a>
                    </div>

                     <div class="upgrade me-3">
                        <a href="/" class="text-decoration-none ps-2"><i> <FaCartShopping size={0} color="blue" /> </i> Get Certified</a>
                    </div>
                    
                    <div class="get-certified">
                        <button class="btn btn-success btn-sm " style={{fontWeight:'600'}}>
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
          <span className="navbar-toggler-icon text-white"><FaBars /></span>
        </button>
        
        <div className="collapse navbar-collapse" id="bottomNavbar">
          <div className="d-flex align-items-center w-100 position-relative">
            <ul 
              className="navbar-nav flex-nowrap menu-slider" 
              ref={sliderRef}
              style={{ scrollBehavior: 'smooth' }}
            >
              {menuItems.map((item, index) => (
                <li 
                  className={`nav-item ${index >= currentIndex && index < currentIndex + visibleItems ? 'visible' : 'hidden'}`} 
                  key={item}
                >
                  <a className="nav-link" href="/">{item}</a>
                </li>
              ))}
              
              <li className="nav-item arrow-item">
                <button 
                  className="nav-link arrow-button" 
                  onClick={showNextItems}
                  disabled={currentIndex + visibleItems >= menuItems.length}
                >
                  <FaArrowRight />
                </button>
              </li>
            </ul>
            
            {currentIndex > 0 && (
              <button 
                className="slide-arrow left-arrow" 
                onClick={showPrevItems}
              >
                <FaArrowLeft />
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bottom-navbar {
          background-color: #282A35;
        }
        
        .menu-slider {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          flex-wrap: nowrap;
          width: 100%;
        }
        
        .menu-slider::-webkit-scrollbar {
          display: none;
        }
        
        .nav-item {
          flex: 0 0 auto;
          white-space: nowrap;
        }
        
        .nav-item.hidden {
          display: none;
        }
        
        .nav-link {
          color: white !important;
          padding: 10px 15px;
        }
        
        .arrow-item {
          margin-left: auto;
        }
        
        .arrow-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .arrow-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .slide-arrow {
          position: absolute;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
          z-index: 1;
        }
        
        .left-arrow {
          left: 0;
        }
        
        @media (max-width: 992px) {
          .menu-slider {
            overflow-x: auto;
          }
          
          .nav-item.hidden {
            display: block;
          }
          
          .slide-arrow {
            display: none;
          }
        }
      `}</style>
    </nav>



  </header>
   </>
  )
}

export default Home
