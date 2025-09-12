import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer"; 
import SidebarGit from "../SidebarGit";

const GitHubGetStarted = () => {
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
              <h1>GitHub Get Started</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitglossary">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitssh">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                GitHub is a web-based platform for version control and collaboration, built on Git. 
                It allows you to host repositories, track changes, and work with others seamlessly.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating a GitHub Account
              </h3>
              <pre className="bg-light p-3 rounded">
{`# 1. Go to https://github.com
# 2. Click "Sign up" and follow the instructions
# 3. Verify your email and log in`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating a Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# 1. Click "New repository" on your GitHub dashboard
# 2. Enter a repository name and description
# 3. Choose public or private
# 4. Click "Create repository"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Cloning a Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Copy the repository URL
git clone <repository-url>

# Example:
git clone https://github.com/username/repository.git`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pushing Changes to GitHub
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Stage changes
git add .

# Commit changes
git commit -m "Add initial project files"

# Push to GitHub
git push origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Create a GitHub account and log in.</li>
                <li>Create repositories for your projects.</li>
                <li>Clone repositories to your local machine.</li>
                <li>Push local changes to GitHub using <code>git add</code>, <code>git commit</code>, and <code>git push</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubGetStarted;
