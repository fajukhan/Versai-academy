import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitHubPages = () => {
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
              <h1>GitHub Pages</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubflow">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="gitguiclients">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                GitHub Pages is a service provided by GitHub that allows you to host websites directly from a GitHub repository.
                It's commonly used for project pages, documentation, and personal portfolios.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 1 – Create a Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Create a new repository on GitHub
# The repository name can be anything or follow the format username.github.io`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 2 – Add Website Files
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Add your HTML, CSS, and JavaScript files
# For example, index.html for the homepage`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 3 – Enable GitHub Pages
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Go to the repository settings
# Scroll down to 'GitHub Pages'
# Select the branch and folder to publish from`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Step 4 – Access Your Website
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Your site will be available at:
https://username.github.io/repository-name/`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Create a repository for your website.</li>
                <li>Add HTML/CSS/JS files to it.</li>
                <li>Enable GitHub Pages in the repository settings.</li>
                <li>Access your website using the GitHub Pages URL.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitHubPages;
