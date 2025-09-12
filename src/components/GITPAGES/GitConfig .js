import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

import SidebarGit from "../SidebarGit";

const GitConfig = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">

            {/* Sidebar (Left - col-2) */}
            <SidebarGit />

            {/* Main Content */}
            <div className="col-lg-8 col-md-6 col-12 bg-white p-5">
              <h1>GIT Configuration</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitinstall">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitgetstarted">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                After installing Git, it is essential to configure your user information and preferences. 
                This ensures that commits are properly identified and Git behaves according to your workflow.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Setting Your Username and Email
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Set your global username
git config --global user.name "Your Name"

# Set your global email
git config --global user.email "youremail@example.com"

# Verify configuration
git config --list`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Configuring Default Text Editor
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Set default editor to VS Code
git config --global core.editor "code --wait"

# Set default editor to Nano
git config --global core.editor "nano"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Checking Your Configuration
              </h3>
              <pre className="bg-light p-3 rounded">
{`# View all Git configurations
git config --list

# View a specific configuration
git config user.name
git config user.email`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Local vs Global Configuration
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Global configuration applies to all repositories for the user
git config --global user.name "Your Name"

# Local configuration applies only to the current repository
git config user.name "Local Name"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Always configure your username and email to properly identify commits.</li>
                <li>Global configuration applies to all repositories; local configuration applies only to the current repo.</li>
                <li>You can set default editors, merge tools, and other preferences using Git config.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitConfig;
