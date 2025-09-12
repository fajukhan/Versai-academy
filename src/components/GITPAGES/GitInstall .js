import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

import SidebarGit from "../SidebarGit";

const GitInstall = () => {
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
              <h1>GIT Installation</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitintro">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitconfig">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git can be installed on Windows, macOS, and Linux. It is recommended to always use the latest stable version to take advantage of new features and security updates.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Installing Git on Windows
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Go to https://git-scm.com/download/win
2. Download the installer for Windows.
3. Run the installer and follow the instructions.
4. Open Command Prompt and type 'git --version' to verify installation.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Installing Git on macOS
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Using Homebrew
brew install git

# Verify installation
git --version`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Installing Git on Linux
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Ubuntu/Debian
sudo apt update
sudo apt install git

# Fedora
sudo dnf install git

# Verify installation
git --version`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Configuring Git
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Set your username
git config --global user.name "Your Name"

# Set your email
git config --global user.email "youremail@example.com"

# Verify configuration
git config --list`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Git can be installed on Windows, macOS, and Linux using official installers or package managers.</li>
                <li>Always verify the installation with <code>git --version</code>.</li>
                <li>Set your username and email before starting to commit changes.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitInstall;
