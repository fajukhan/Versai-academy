import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitMerge = () => {
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
              <h1>GIT Merge</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitbranch">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitworkflow">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git Merge is the process of combining changes from one branch into another. 
                It is typically used to integrate feature branches into the main branch after development is complete.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Merging a Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Switch to the branch you want to merge into (e.g., main)
git checkout main

# Merge the "feature" branch into current branch
git merge feature`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Merge Conflicts
              </h3>
              <pre className="bg-light p-3 rounded">
{`# If a conflict occurs, Git will mark the conflicting files
# Open the files and resolve conflicts manually
# After resolving, add the files to staging
git add <file>

# Complete the merge
git commit`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Fast-forward Merge
              </h3>
              <pre className="bg-light p-3 rounded">
{`# If the branch has no diverging commits, Git performs a fast-forward merge
git merge feature`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Abort a Merge
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Abort an ongoing merge if there are conflicts or issues
git merge --abort`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Switch to the branch you want to merge into using <code>git checkout</code>.</li>
                <li>Merge a branch using <code>git merge &lt;branch&gt;</code>.</li>
                <li>Resolve merge conflicts manually, then <code>git add</code> and <code>git commit</code>.</li>
                <li>Fast-forward merges occur when there are no diverging commits.</li>
                <li>Abort a merge using <code>git merge --abort</code> if needed.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitMerge;
