import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitGlossary = () => {
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
              <h1>GIT Glossary</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="gitbestpractices">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubgetstarted">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                This Git glossary contains common terms and definitions used in Git. 
                Understanding these terms will help you work effectively with Git repositories.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Commit
              </h3>
              <pre className="bg-light p-3 rounded">
{`A snapshot of changes in your repository at a specific point in time.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Branch
              </h3>
              <pre className="bg-light p-3 rounded">
{`A separate line of development. Branches allow you to work on features or fixes independently.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Merge
              </h3>
              <pre className="bg-light p-3 rounded">
{`The process of combining changes from one branch into another.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Remote Repository
              </h3>
              <pre className="bg-light p-3 rounded">
{`A version of your repository hosted on a server, such as GitHub or GitLab, accessible by multiple collaborators.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Pull Request
              </h3>
              <pre className="bg-light p-3 rounded">
{`A request to merge changes from one branch into another, usually reviewed before merging.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Staging Area
              </h3>
              <pre className="bg-light p-3 rounded">
{`An intermediate area where changes are placed before committing to the repository.`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>Commit: snapshot of changes.</li>
                <li>Branch: separate line of development.</li>
                <li>Merge: combining branches.</li>
                <li>Remote Repository: shared repository on a server.</li>
                <li>Pull Request: request to merge changes.</li>
                <li>Staging Area: place changes before committing.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitGlossary;
