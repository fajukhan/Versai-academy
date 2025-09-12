import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SidebarGit from "../SidebarGit";

const GitSSH = () => {
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
              <h1>GIT What is SSH</h1>

              {/* Prev / Next Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3 mb-4">
                <a href="githubgetstarted">
                  <button className="custom-btn"><FaArrowLeft /> Previous</button>
                </a>
                <a href="githubaddssh">
                  <button className="custom-btn">Next <FaArrowRight /></button>
                </a>
              </div>

              <p className="lead py-5">
                SSH (Secure Shell) is a protocol used to securely connect to remote servers. 
                In Git, SSH is commonly used to authenticate and interact with remote repositories without entering passwords each time.
              </p>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Checking for SSH Keys
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Check if you already have SSH keys
ls -al ~/.ssh`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Generating a New SSH Key
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Generate a new SSH key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Follow prompts and press Enter to accept defaults`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Adding SSH Key to SSH Agent
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Start the ssh-agent
eval "$(ssh-agent -s)"

# Add your SSH private key to the agent
ssh-add ~/.ssh/id_rsa`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Adding SSH Key to GitHub
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Copy the SSH key to clipboard
cat ~/.ssh/id_rsa.pub

# Go to GitHub -> Settings -> SSH and GPG keys -> New SSH key
# Paste the key and save`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Testing SSH Connection
              </h3>
              <pre className="bg-light p-3 rounded">
{`# Test the connection to GitHub
ssh -T git@github.com`}
              </pre>
              <button className="try-btn my-5">Try it Yourself »</button>

              <h3 style={{ backgroundColor: "purple", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Summary
              </h3>
              <ul>
                <li>SSH allows secure communication with remote repositories.</li>
                <li>Check for existing keys using <code>ls -al ~/.ssh</code>.</li>
                <li>Generate new keys with <code>ssh-keygen</code> and add them to the ssh-agent.</li>
                <li>Add your public key to GitHub for authentication.</li>
                <li>Test the connection using <code>ssh -T git@github.com</code>.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GitSSH;
