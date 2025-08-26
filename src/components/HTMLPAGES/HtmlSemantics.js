import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const btn = {
  background: "#812B8F",
  color: "#fff",
  border: "0",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: ".25s",
};
const badge = {
  background: "#F6E8F9",
  color: "#812B8F",
  borderRadius: "20px",
  padding: "4px 10px",
  fontSize: 12,
  fontWeight: 600,
};

const HtmlSemantics = () => {
  return (
    <>
      <Navbar />

      <section className="p-0">
        <div className="bg-white">
          <div className="row g-0">
        {/* Sidebar (Left - col-2) */}
            <div className="col-lg-2 col-md-3 col-12 sidebar bg-light p-3">
              <h5 className="fw-bold">HTML Tutorial</h5>
              <ul className="list-unstyled">
                <li><a href="html">HTML HOME</a></li>
                <li><a href="htmlhome">HTML Introduction</a></li>
                <li><a href="editor">HTML Editors</a></li>
                <li><a href="basic">HTML Basic</a></li>
                <li><a href="elements">HTML Elements</a></li>
                <li><a href="attribute">HTML Attributes</a></li>
                <li><a href="heading">HTML Headings</a></li>
                <li><a href="paragraph">HTML Paragraphs</a></li>
                <li><a href="style">HTML Styles</a></li>
                <li><a href="formatting">HTML Formatting</a></li>
                <li><a href="quotation">HTML Quotations</a></li>
                <li><a href="comments">HTML Comments</a></li>
                <li><a href="colors">HTML Colors</a></li>
                <li><a href="css2">HTML CSS</a></li>
                <li><a href="links">HTML Links</a></li>
                <li><a href="images">HTML Images</a></li>
                <li><a href="favicon">HTML Favicon</a></li>
                <li><a href="pagetitle">HTML Page Title</a></li>
                <li><a href="tables">HTML Tables</a></li>
                <li><a href="lists">HTML Lists</a></li>
                <li><a href="divs">HTML Div</a></li>
                <li><a href="blockinline">HTML Block & Inline</a></li>
                <li><a href="htmlclass">HTML Class</a></li>
                <li><a href="htmlid">HTML Id</a></li>
                <li><a href="htmliframes">HTML Iframes</a></li>
                <li><a href="htmljavascript">HTML Javascript</a></li>
                <li><a href="htmlfilepath">HTML File Paths</a></li>
                <li><a href="htmlhead">HTML Head</a></li>
                <li><a href="htmllayout">HTML Layout</a></li>
                <li><a href="htmlresponsive">HTML Responsive</a></li>
                <li><a href="htmlsemantic">HTML Semantics</a></li>
              </ul>

              <h5 className="fw-bold">HTML Forms</h5>
              <ul className="list-unstyled">
                <li><a href="htmlform">HTML Forms</a></li>
                <li><a href="htmlformelement">HTML Form Elements</a></li>
                <li><a href="htmlinput">HTML Input Types</a></li>
                <li><a href="htmlattribute">HTML Input Attributes</a></li>
                  <li><a href="htmlformattribute">HTML Form Attributes</a></li>
              </ul>

              <h5 className="fw-bold">HTML Media</h5>
              <ul className="list-unstyled">
                 <li><a href="htmlmultimedia">HTML Media</a></li>
              <li><a href="htmlaudio">HTML Audio</a></li>
                <li><a href="htmlvideo">HTML Video</a></li>
              <li><a href="htmlyoutube">HTML Youtube</a></li>
              </ul>
            </div>


            {/* Main */}
            <div className="col-lg-8 col-md-9 col-12 bg-white p-5">
              <div className="d-flex align-items-center gap-2 mb-2">
                <h1 className="fw-bold m-0">HTML Semantic Elements</h1>
                <span style={badge}>SEO + Accessibility</span>
              </div>

                 
                         {/* Navigation Buttons */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-3">
                <a href="htmlresponsive">
                  <button className="custom-btn">
                    <FaArrowLeft /> Previous
                  </button>
                </a>
                <a href="htmlform">
                  <button className="custom-btn">
                    Next <FaArrowRight />
                  </button>
                </a>
              </div>


              <p className="lead py-5">
                Semantic elements ऐसे tags होते हैं जो अपने content का मतलब बताते हैं
                (जैसे <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, आदि)।
                ये SEO, accessibility और maintainable code के लिए बहुत मददगार होते हैं।
              </p>

           
              {/* Example 0 - Non Semantic vs Semantic */}
              <div className="card mb-4 shadow-sm rounded mt-4">
                <div className="card-header fw-bold">
                  Why Semantics? (Non-Semantic vs Semantic)
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <h6 className="fw-semibold">❌ Non-Semantic</h6>
                      <pre className="bg-light p-3 rounded">
{`<div id="header"></div>
<div class="nav"></div>
<div class="content"></div>
<div class="footer"></div>`}
                      </pre>
                      <div className="border rounded p-3 bg-light">
                        <div className="p-2 bg-secondary text-white">DIV (Header)</div>
                        <div className="p-2 bg-dark text-white">DIV (Nav)</div>
                        <div className="p-3 border bg-white">DIV (Content)</div>
                        <div className="p-2 bg-secondary text-white">DIV (Footer)</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-semibold">✅ Semantic</h6>
                      <pre className="bg-light p-3 rounded">
{`<header></header>
<nav></nav>
<main></main>
<footer></footer>`}
                      </pre>
                      <div className="border rounded p-3 bg-light">
                        <header className="p-2 bg-secondary text-white">header</header>
                        <nav className="p-2 bg-dark text-white">nav</nav>
                        <main className="p-3 border bg-white">main</main>
                        <footer className="p-2 bg-secondary text-white">footer</footer>
                      </div>
                    </div>
                  </div>
                  <a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 1 - Basic semantic layout */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">
                  Example 1: Basic Semantic Layout (header + nav + main + aside + footer)
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<header>
  <h1>Site Name</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">Blog</a>
  <a href="#">About</a>
</nav>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
  <aside>
    <h3>Related</h3>
    <ul><li>Link A</li><li>Link B</li></ul>
  </aside>
</main>

<footer>© 2025 MySite</footer>`}
                  </pre>

                  {/* Browser Preview */}
                  <div className="border rounded p-3 bg-light">
                    <header className="p-2 bg-secondary text-white rounded">Site Name</header>
                    <nav className="d-flex gap-3 p-2 bg-dark text-white my-2 rounded">
                      <span>Home</span><span>Blog</span><span>About</span>
                    </nav>
                    <div className="row g-3">
                      <div className="col-md-8">
                        <article className="p-3 border rounded bg-white">
                          <h2>Article Title</h2>
                          <p>This is article content. It lives inside <code>&lt;article&gt;</code>.</p>
                        </article>
                      </div>
                      <div className="col-md-4">
                        <aside className="p-3 border rounded bg-white">
                          <h5>Related</h5>
                          <ul className="m-0">
                            <li>How to start</li>
                            <li>Read more</li>
                          </ul>
                        </aside>
                      </div>
                    </div>
                    <footer className="p-2 bg-secondary text-white mt-2 rounded">© 2025 MySite</footer>
                  </div>

                  <a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_semantic_basic" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 2 - article + section */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">
                  Example 2: <code>&lt;article&gt;</code> vs <code>&lt;section&gt;</code>
                </div>
                <div className="card-body">
                  <p className="mb-2">
                    <b>Article</b> = independent/distributable content. <b>Section</b> = thematic grouping inside a page or article.
                  </p>
                  <pre className="bg-light p-3 rounded">
{`<article>
  <h2>News: Product Launch</h2>
  <section>
    <h3>Overview</h3>
    <p>Short summary...</p>
  </section>
  <section>
    <h3>Specs</h3>
    <ul><li>Fast</li><li>Light</li></ul>
  </section>
</article>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <article className="p-3 border rounded bg-white">
                      <h3>News: Product Launch</h3>
                      <section className="mb-2">
                        <h6 className="m-0">Overview</h6>
                        <p className="m-0">Short summary...</p>
                      </section>
                      <section>
                        <h6 className="m-0">Specs</h6>
                        <ul className="m-0"><li>Fast</li><li>Light</li></ul>
                      </section>
                    </article>
                  </div>
                  <a href="https://www.w3schools.com/tags/tag_article.asp" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 3 - figure + figcaption */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">
                  Example 3: <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code>
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<figure>
  <img src="image.jpg" alt="Mountains">
  <figcaption>Fig.1 - Snowy Mountains.</figcaption>
</figure>`}
                  </pre>
                  <div className="border rounded p-3 bg-light text-center">
                    <figure>
                      <img
                        src="https://www.w3schools.com/w3images/mountains.jpg"
                        alt="Mountains"
                        className="img-fluid rounded border"
                        style={{ maxHeight: 180, objectFit: "cover" }}
                      />
                      <figcaption className="mt-2">Fig.1 - Snowy Mountains.</figcaption>
                    </figure>
                  </div>
                  <a href="https://www.w3schools.com/tags/tag_figure.asp" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 4 - time, mark, address */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">
                  Example 4: <code>&lt;time&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;address&gt;</code>
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<p>Event on <time datetime="2025-09-01">1 Sept 2025</time>.</p>
<p>Search result: <mark>semantic elements</mark></p>
<address>
  Written by John Doe<br>
  Contact: john@example.com
</address>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <p>Event on <time dateTime="2025-09-01">1 Sept 2025</time>.</p>
                    <p>Search result: <mark>semantic elements</mark></p>
                    <address className="m-0">
                      Written by John Doe<br />
                      Contact: john@example.com
                    </address>
                  </div>
                  <a href="https://www.w3schools.com/tags/tag_time.asp" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 5 - details + summary */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">
                  Example 5: <code>&lt;details&gt;</code> + <code>&lt;summary&gt;</code>
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<details>
  <summary>Read more</summary>
  <p>This content is initially hidden.</p>
</details>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <details>
                      <summary>Read more</summary>
                      <p className="m-0">This content is initially hidden.</p>
                    </details>
                  </div>
                  <a href="https://www.w3schools.com/tags/tag_details.asp" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 6 - Accessible nav with landmarks */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">
                  Example 6: Accessible Landmarks + ARIA
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<header role="banner">Site Header</header>
<nav aria-label="Primary">...</nav>
<main role="main">Main content...</main>
<aside aria-label="Sidebar">...</aside>
<footer role="contentinfo">Footer info</footer>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <header className="p-2 bg-secondary text-white rounded">Site Header</header>
                    <nav className="p-2 bg-dark text-white my-2 rounded">Primary Navigation</nav>
                    <main className="p-3 border rounded bg-white">Main content area with proper landmark roles.</main>
                    <aside className="p-3 border rounded bg-white mt-2">Sidebar with complementary info.</aside>
                    <footer className="p-2 bg-secondary text-white mt-2 rounded">Footer info</footer>
                  </div>
                  <a href="https://www.w3.org/TR/wai-aria-practices/" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Example 7 - Multiple articles in main (blog) */}
              <div className="card mb-4 shadow-sm rounded">
                <div className="card-header fw-bold">
                  Example 7: Blog layout with multiple <code>&lt;article&gt;</code>s
                </div>
                <div className="card-body">
                  <pre className="bg-light p-3 rounded">
{`<main>
  <article>
    <h2>Post 1</h2>
    <p>...</p>
  </article>
  <article>
    <h2>Post 2</h2>
    <p>...</p>
  </article>
</main>`}
                  </pre>
                  <div className="border rounded p-3 bg-light">
                    <main className="row g-3">
                      <div className="col-md-6">
                        <article className="p-3 border rounded bg-white">
                          <h4 className="m-0">Post 1</h4>
                          <p className="m-0">This is an independent article.</p>
                        </article>
                      </div>
                      <div className="col-md-6">
                        <article className="p-3 border rounded bg-white">
                          <h4 className="m-0">Post 2</h4>
                          <p className="m-0">Another independent article.</p>
                        </article>
                      </div>
                    </main>
                  </div>
                  <a href="https://www.w3schools.com/tags/tag_main.asp" target="_blank" rel="noreferrer">
                    <button className="btn btn-sm mt-3" style={btn}>Try it Yourself »</button>
                  </a>
                </div>
              </div>

              {/* Tips */}
              <div className="alert mt-2" style={{
                background: "linear-gradient(120deg,#faf5ff,#fff1fb)",
                borderRadius: 12,
                border: "1px solid #f3e2f7"
              }}>
                <b>Tips:</b> 
                <ul className="m-0 mt-2">
                  <li>हर page में एक ही <code>&lt;main&gt;</code> हो।</li>
                  <li><code>&lt;section&gt;</code> को हमेशा heading दें (जैसे <code>&lt;h2&gt;</code>).</li>
                  <li>Navigation के लिए <code>&lt;nav&gt;</code>, footer info के लिए <code>&lt;footer&gt;</code> use करें।</li>
                  <li>Assistive tech (screen readers) semantics से structure समझ पाती हैं → बेहतर accessibility।</li>
                </ul>
              </div>

              {/* Prev/Next Bottom */}
              <div className="d-flex justify-content-between gap-3 flex-wrap mt-4">
                <a href="responsive"><button className="btn btn-sm" style={btn}><FaArrowLeft /> Previous</button></a>
                <a href="layout"><button className="btn btn-sm" style={btn}>Next <FaArrowRight /></button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HtmlSemantics;
