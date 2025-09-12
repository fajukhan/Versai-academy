import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubFork = () => {
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
              <h1>GitHub Fork</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitguiclients">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitclonefromgithub">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Forking a repository on GitHub creates a copy of the original project in your own account. 
                It allows you to freely experiment with changes without affecting the original project.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                How to Fork a Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Go to the repository you want to fork
# Click on the 'Fork' button in the top-right corner
# Choose your account or organization`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Cloning Your Forked Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Copy the repository URL from your fork
git clone https://github.com/your-username/forked-repo.git`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Making Changes and Pushing
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Make your changes in the local repository
git add .
git commit -m "Describe your changes"
git push origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Creating a Pull Request
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Go to the original repository
# Click on 'New Pull Request'
# Compare changes from your forked repository`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Forking allows you to experiment without affecting the original repository.</li>
                <li>Clone the fork to your local machine for development.</li>
                <li>Push changes and create pull requests to contribute back to the original project.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubFork;
