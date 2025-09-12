import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitWorkflow = () => {
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
              <h1>GIT Workflow</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitmerge">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitbestpractices">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git workflow defines the sequence of steps developers follow to work with branches, commits, and collaboration. 
                Understanding workflow ensures organized and efficient project development.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Basic Git Workflow
              </h3>
              <pre className="bg-light p-3 rounded">
{`# 1. Make changes to files in the working directory
# 2. Stage changes
git add <file>

# 3. Commit changes
git commit -m "Message"

# 4. Push changes to remote
git push origin <branch>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Feature Branch Workflow
              </h3>
              <pre className="bg-light p-3 rounded">
{`# 1. Create a feature branch
git checkout -b feature

# 2. Make changes and commit
git add .
git commit -m "Add feature"

# 3. Push branch to remote
git push origin feature

# 4. Merge feature into main
git checkout main
git merge feature`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Git Pull Before Work
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Always update your local branch with remote changes
git pull origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Collaboration Workflow
              </h3>
              <pre className="bg-light p-3 rounded">
{`# 1. Clone repository
git clone <repo-url>

# 2. Create a branch and work on features
git checkout -b feature

# 3. Push branch to remote and create a pull request
git push origin feature`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Basic workflow: Edit → Stage → Commit → Push.</li>
                <li>Feature branch workflow allows isolated development without affecting main branch.</li>
                <li>Always pull latest changes before starting work.</li>
                <li>Collaboration workflow includes cloning, branching, pushing, and pull requests.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitWorkflow;
