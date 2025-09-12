import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubPush = () => {
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
              <h1>Push to GitHub</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="pullfromgithub">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubbranch">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Pushing to GitHub allows you to upload your local repository content to the remote GitHub repository. 
                It is an essential step to share your changes with others or back up your code.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Push Changes to GitHub
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push your commits to the remote repository
git push origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Push to a Specific Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push changes to a specific branch
git push origin feature-branch`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Force Push (Use Carefully)
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Force push changes (overwrites history)
git push origin main --force`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Push All Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Push all local branches to the remote
git push --all`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Use <code>git push origin main</code> to push commits to the remote repository.</li>
                <li>Specify a branch name to push changes to that branch.</li>
                <li>Force push with caution as it can overwrite history.</li>
                <li><code>git push --all</code> pushes all branches at once.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubPush;
