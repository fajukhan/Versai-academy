
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Html = () => {


 
  return (
    <>
     <Navbar />
    {/* Section-1 */}
<section  className="p-0">
  <div className="bg-white">
    <div className="row g-0">
      
      {/* Sidebar (Left - col-2) */}
      <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
  <h5 className="fw-bold mt-4">React Tutorial</h5>
  <ul className="list-unstyled">
    <li><a href="/">React Home</a></li>
    <li><a href="/">React Intro</a></li>
    <li><a href="/">React Get Started</a></li>
    <li><a href="/">React First App</a></li>
    <li><a href="/">React Render HTML</a></li>
    <li><a href="/">React Upgrade</a></li>
    <li><a href="/">React ES6</a></li>
    <li><a href="/">React JSX Intro</a></li>
    <li><a href="/">React JSX Expressions</a></li>
    <li><a href="/">React JSX Attributes</a></li>
    <li><a href="/">React JSX If Statements</a></li>
    <li><a href="/">React Components</a></li>
    <li><a href="/">React Class</a></li>
    <li><a href="/">React Props</a></li>
    <li><a href="/">React Props Destructuring</a></li>
    <li><a href="/">React Props Children</a></li>
    <li><a href="/">React Events</a></li>
    <li><a href="/">React Conditionals</a></li>
    <li><a href="/">React Lists</a></li>
    <li><a href="/">React Forms</a></li>
    <li><a href="/">React Forms Submit</a></li>
    <li><a href="/">React Textarea</a></li>
    <li><a href="/">React Select</a></li>
    <li><a href="/">React Multiple Inputs</a></li>
    <li><a href="/">React Checkbox</a></li>
    <li><a href="/">React Radio</a></li>
    <li><a href="/">React Portals</a></li>
    <li><a href="/">React Suspense</a></li>
    <li><a href="/">React CSS Styling</a></li>
    <li><a href="/">React CSS Modules</a></li>
    <li><a href="/">React CSS-in-JS</a></li>
    <li><a href="/">React Router</a></li>
    <li><a href="/">React Transitions</a></li>
    <li><a href="/">React Forward Ref</a></li>
    <li><a href="/">React HOC</a></li>
    <li><a href="/">React Sass</a></li>
  </ul>

  <h5 className="fw-bold">React Hooks</h5>
  <ul className="list-unstyled">
    <li><a href="/">What is Hooks?</a></li>
    <li><a href="/">React useState</a></li>
    <li><a href="/">React useEffect</a></li>
    <li><a href="/">React useContext</a></li>
    <li><a href="/">React useRef</a></li>
    <li><a href="/">React useReducer</a></li>
    <li><a href="/">React useCallback</a></li>
    <li><a href="/">React useMemo</a></li>
    <li><a href="/">React Custom Hooks</a></li>
  </ul>
</div>


      {/* Main Content (Middle - col-10) */}
      <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
        <h1>React Tutorial</h1>

        {/* Buttons */}
        <div className="d-flex gap-3 flex-wrap mt-3">
          <button className="custom-btn">
            <i className="bi"><FaArrowLeft /></i> Previous
          </button>
          <button className="custom-btn">
            Next <i className="bi"><FaArrowRight /></i>
          </button>
        </div>
       
        {/* <h2 className='pt-5'>Learn HTML</h2>
        <p>HTML is the standard markup language for Web pages.</p>
        <p>With HTML you can create your own Website.</p>
        <p>HTML is easy to learn - You will enjoy it!</p> */}

       
      </div>



    </div>
  </div>
</section>

<Footer />

    </>
  );
};

export default Html;
