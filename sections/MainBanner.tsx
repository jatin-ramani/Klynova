const stack = ["React", "Next.js", "TypeScript", "Node.js", "AI"];

export default function MainBanner() {
  return (
    <div id="home" className="main-banner klynova-hero">
      <div className="klynova-hero-glow"></div>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <span className="hero-eyebrow">
                    <span className="hero-eyebrow-dot"></span>
                    Software Development Studio
                  </span>
                  <h1>
                    We build <span className="hero-grad">intelligent</span>{" "}
                    digital products
                  </h1>
                  <p>
                    Klynova is a software development studio specializing in
                    modern web applications, AI-powered tools, and scalable
                    digital products — built with React, Next.js, and
                    cutting-edge AI integrations.
                  </p>
                  <div className="hero-actions">
                    <a href="#contact" className="btn btn-primary">
                      Start a Project
                    </a>
                    <a href="#work" className="btn-klynova-outline">
                      View Our Work
                    </a>
                  </div>
                  <div className="hero-stack">
                    <span className="hero-stack-label">Built with</span>
                    {stack.map((s) => (
                      <span className="hero-chip-tech" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-visual">
                  <div className="code-window">
                    <div className="code-window-bar">
                      <span className="cw-dot cw-red"></span>
                      <span className="cw-dot cw-amber"></span>
                      <span className="cw-dot cw-green"></span>
                      <span className="cw-title">app/product.tsx</span>
                    </div>
                    <pre className="code-window-body">
                      <code>
                        <span className="cl">
                          <span className="tok-key">import</span>{" "}
                          <span className="tok-punc">{"{ "}</span>
                          <span className="tok-var">useAI</span>
                          <span className="tok-punc">{" }"}</span>{" "}
                          <span className="tok-key">from</span>{" "}
                          <span className="tok-str">&apos;@klynova/core&apos;</span>
                        </span>
                        <span className="cl"> </span>
                        <span className="cl">
                          <span className="tok-key">export default function</span>{" "}
                          <span className="tok-fn">Product</span>
                          <span className="tok-punc">() {"{"}</span>
                        </span>
                        <span className="cl ind">
                          <span className="tok-key">const</span>{" "}
                          <span className="tok-var">ai</span>{" "}
                          <span className="tok-punc">=</span>{" "}
                          <span className="tok-fn">useAI</span>
                          <span className="tok-punc">({"{ "}</span>
                          <span className="tok-var">model</span>
                          <span className="tok-punc">:</span>{" "}
                          <span className="tok-str">&apos;claude&apos;</span>
                          <span className="tok-punc">{" }"})</span>
                        </span>
                        <span className="cl"> </span>
                        <span className="cl ind">
                          <span className="tok-key">return</span>{" "}
                          <span className="tok-punc">&lt;</span>
                          <span className="tok-fn">App</span>
                        </span>
                        <span className="cl ind2">
                          <span className="tok-var">stack</span>
                          <span className="tok-punc">=</span>
                          <span className="tok-str">
                            {"{['react', 'next.js']}"}
                          </span>
                        </span>
                        <span className="cl ind2">
                          <span className="tok-var">scalable</span>{" "}
                          <span className="tok-var">aiReady</span>
                        </span>
                        <span className="cl ind">
                          <span className="tok-punc">/&gt;</span>
                        </span>
                        <span className="cl">
                          <span className="tok-punc">{"}"}</span>
                        </span>
                      </code>
                    </pre>
                  </div>

                  <div className="hero-chip hero-chip-1">
                    <i className="fas fa-circle-check"></i>
                    <span>
                      <strong>Deployed</strong>
                      <small>to production</small>
                    </span>
                  </div>
                  <div className="hero-chip hero-chip-2">
                    <i className="fas fa-gauge-high"></i>
                    <span>
                      <strong>100</strong>
                      <small>Lighthouse score</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
