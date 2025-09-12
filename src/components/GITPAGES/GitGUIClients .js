import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitGUIClients = () => {
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
              <h1>GIT GUI Clients</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubpages">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubfork">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Git GUI clients provide a graphical interface for Git, making it easier to manage repositories, branches, commits, and merges without using the command line.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Popular GUI Clients
              </h3>
              <pre className="bg-light p-3 rounded">
{`1. GitHub Desktop
2. Sourcetree
3. GitKraken
4. Tower
5. SmartGit`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Installing GitHub Desktop
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Download from https://desktop.github.com/
# Install the application
# Sign in with your GitHub account`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Cloning a Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Open the GUI client
# Select 'Clone Repository'
# Enter the URL or choose from your GitHub account`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Making a Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Stage files using the interface
# Add a commit message
# Click 'Commit' to save changes`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pushing Changes
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Click 'Push' in the GUI client
# Upload your commits to the remote repository`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>GUI clients simplify Git operations with visual tools.</li>
                <li>Popular clients include GitHub Desktop, Sourcetree, and GitKraken.</li>
                <li>They provide easy ways to clone, commit, and push changes.</li>
                <li>Useful for beginners or those who prefer not to use the command line.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitGUIClients;
