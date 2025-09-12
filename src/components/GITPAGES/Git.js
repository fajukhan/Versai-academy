import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitTutorial = () => {
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
              <h1>GIT Tutorial</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="/">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitintro">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git is a distributed version control system used to track changes in source code during software development. 
                It allows multiple developers to collaborate, manage project history, and maintain code integrity.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Initializing a Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Navigate to your project folder
git init`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Cloning a Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`git clone https://github.com/username/repository.git`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Checking Status
              </h3>
              <pre className="bg-light p-3 rounded">
{`git status`}
              </pre>
              <p>This command shows the status of your working directory and staging area.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Committing Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`git add .
git commit -m "Initial commit"`}
              </pre>
              <p>Use these commands to stage changes and commit them to the repository.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Pushing Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`git push origin main`}
              </pre>
              <p>This command pushes your local commits to the remote repository.</p>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Git is essential for version control and collaboration.</li>
                <li>Use commands like init, clone, add, commit, and push regularly.</li>
                <li>Always check status to understand the state of your repository.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitTutorial;
