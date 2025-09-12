import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitGetStarted = () => {
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
              <h1>GIT Get Started</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitconfig">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitnewfiles">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                After installing and configuring Git, you can start managing your projects with Git repositories. 
                This guide will help you create repositories, make commits, and understand the basic Git workflow.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating a New Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Navigate to your project folder
cd /path/to/project

# Initialize Git repository
git init

# Check repository status
git status`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Adding Files to Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Add a single file
git add filename.txt

# Add all files
git add .`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Making Your First Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Commit added files with a message
git commit -m "Initial commit"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Repository Status
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Check current repository status
git status`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Viewing Commit History
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Show commit history
git log`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git init</code> to create a new repository.</li>
                <li>Add files to staging area with <code>git add</code> before committing.</li>
                <li>Commit changes using <code>git commit -m "message"</code>.</li>
                <li>Check repository status with <code>git status</code> and commit history with <code>git log</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitGetStarted;
