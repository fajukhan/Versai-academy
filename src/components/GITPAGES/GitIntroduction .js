import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitIntroduction = () => {
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
              <h1>GIT Introduction</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="git">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitinstall">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git is a free and open-source distributed version control system created by Linus Torvalds in 2005. 
                It allows developers to track changes in source code, collaborate on projects, and maintain a history of modifications.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                What is Version Control?
              </h3>
              <pre className="bg-light p-3 rounded">
{`Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Why Use Git?
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. Keep track of every change made to your code.
2. Collaborate with multiple developers efficiently.
3. Revert to previous versions if something goes wrong.
4. Branching and merging to experiment safely.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Git Terminology
              </h3>
              <pre className="bg-light p-3 rounded">
{`Repository (Repo) - A directory containing your project and its history
Commit - A snapshot of changes
Branch - A separate line of development
Merge - Combine changes from different branches
Clone - Copy of a repository`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Creating Your First Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Navigate to your project folder
git init

# Check repository status
git status`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Git is essential for tracking code changes and collaborating.</li>
                <li>Version control ensures that you can safely experiment and revert changes.</li>
                <li>Understanding Git terminology is key to effective usage.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitIntroduction;
