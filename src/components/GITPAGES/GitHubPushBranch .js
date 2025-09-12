import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubPushBranch = () => {
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
              <h1>Push Branch To GitHub</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pullbranchfromgithub">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubflow">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Pushing a branch to GitHub uploads your local branch and its commits to the remote repository.
                This allows you to share your work and collaborate with others.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Push a New Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push your branch to the remote repository
git push origin feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Set Upstream for Tracking
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push branch and set it to track the remote branch
git push --set-upstream origin feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Force Push to a Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Forcefully push changes to overwrite remote history
git push origin feature-branch --force`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Push All Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push all branches at once
git push --all`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git push origin branch-name</code> to push a specific branch.</li>
                <li>Use <code>--set-upstream</code> to set the remote branch for tracking.</li>
                <li>Use <code>--force</code> carefully as it overwrites history.</li>
                <li><code>git push --all</code> pushes all local branches to the remote repository.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubPushBranch;
