import React from 'react';
import { FaComment } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

const Footer = () => {
  return (
    <>
    

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
                        <p class="about-text">
    Versai Academy is optimized for learning and training. Examples might be simplified to improve reading and learning. 
    Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot answer full correctness of all content. 
    While using Versai Academy, you agree to have read and accepted our terms of use, cookies and privacy policy.
</p>

<p class="copyright">
    Copyright 2025-2026 by Refsnes Data, All Rights Reserved. 
    Versai Academy is Powered by <a href="" class="versai-link">VersaiTechnology</a>
</p>




                    </div>
                </div>
            </div>
        </footer>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer
