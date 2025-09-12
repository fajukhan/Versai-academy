import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitBestPractices = () => {
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
              <h1>GIT Best Practices</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitworkflow">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitglossary">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                Following Git best practices ensures your project remains organized, maintainable, and collaborative. 
                Adopting these habits helps prevent errors and improves team efficiency.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Write Clear Commit Messages
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Use descriptive messages that explain the purpose
git commit -m "Add user authentication feature"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Use Feature Branches
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a separate branch for each feature or bug fix
git checkout -b feature-login`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pull Before You Push
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Update your local branch before pushing
git pull origin main`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Commit Frequently
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Make small, frequent commits to track changes easily
git add .
git commit -m "Fix header alignment on homepage"`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Avoid Committing Secrets
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Do not commit passwords or sensitive data
# Use .gitignore to exclude files`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Write clear and descriptive commit messages.</li>
                <li>Use feature branches for isolated development.</li>
                <li>Pull the latest changes before pushing your work.</li>
                <li>Commit frequently with small, logical changes.</li>
                <li>Avoid committing sensitive data or secrets.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitBestPractices;
