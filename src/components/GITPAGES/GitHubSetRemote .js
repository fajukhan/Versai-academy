import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubSetRemote = () => {
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
              <h1>GitHub Set Remote</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubaddssh">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubeditcode">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Setting a remote repository in Git allows your local repository to communicate with a repository hosted on GitHub. 
                This is essential for pushing and pulling changes.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Check Existing Remotes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# List existing remote repositories
git remote -v`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Add a New Remote
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Add a remote repository named "origin"
git remote add origin <repository-url>

# Example:
git remote add origin git@github.com:username/repository.git`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Change Remote URL
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Change the URL of an existing remote
git remote set-url origin <new-repository-url>`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Verify Remote
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Verify the remote URL
git remote -v`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Check existing remotes using <code>git remote -v</code>.</li>
                <li>Add a remote repository with <code>git remote add origin &lt;url&gt;</code>.</li>
                <li>Change the remote URL with <code>git remote set-url origin &lt;new-url&gt;</code>.</li>
                <li>Verify the remote setup with <code>git remote -v</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubSetRemote;
