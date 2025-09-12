import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitCloneFromFork = () => {
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
              <h1>Git Clone From GitHub Fork</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubfork">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubsendpullrequest">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Cloning a repository from your GitHub fork allows you to create a local copy on your computer where you can work on the project and make changes.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 1 – Copy Repository URL
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Go to your forked repository on GitHub
# Click on the 'Code' button
# Copy the HTTPS or SSH URL`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 2 – Clone the Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Open your terminal or Git Bash
git clone https://github.com/your-username/forked-repo.git`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 3 – Navigate into the Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Move into the cloned repository folder
cd forked-repo`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 4 – Verify Remote
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Check the remote URL to confirm it's pointing to your fork
git remote -v`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Copy the URL of your forked repository from GitHub.</li>
                <li>Clone the repository using the `git clone` command.</li>
                <li>Navigate into the repository folder to start working.</li>
                <li>Verify the remote to ensure it points to your fork.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitCloneFromFork;
