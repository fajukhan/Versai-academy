import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitRebase = () => {
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
              <h1>Git Rebase</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitamend">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitreflog">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                The <code>git rebase</code> command is used to integrate changes from one branch into another by moving or combining a sequence of commits. 
                It helps maintain a cleaner project history compared to a merge.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Rebase Feature Branch onto Main
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Switch to the feature branch
git checkout feature-branch

# Rebase onto main branch
git rebase main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Resolve Conflicts during Rebase
              </h3>
              <pre className="bg-light p-3 rounded">
{`# After conflicts are detected, edit the conflicting files
# Mark conflicts as resolved
git add resolved-file.txt

# Continue the rebase
git rebase --continue`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Example: Abort a Rebase
              </h3>
              <pre className="bg-light p-3 rounded">
{`# If you want to cancel the rebase and return to the previous state
git rebase --abort`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Important Notes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Rebase rewrites history, so it’s best used on local branches
# Avoid rebasing branches that are shared with others`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li><code>git rebase</code> helps you apply changes from one branch onto another.</li>
                <li>It keeps a linear history, making it easier to understand.</li>
                <li>Always resolve conflicts and be cautious when rewriting history.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitRebase;
