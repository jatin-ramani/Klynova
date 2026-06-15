const stack = ["React", "Next.js", "TypeScript", "AI Integration"];

export default function Founder() {
  return (
    <section id="about" className="ptb-80 bg-f9f6f6">
      <div className="section-title ">
        <span className="klynova-tag">About</span>
        <h2>Meet the Founder</h2>
        <div className="bar"></div>
      </div>

      <div className="container">
        <div className="klynova-founder-card">
          <div className="klynova-founder-avatar">JR</div>
          <h3>Jatin Ramani</h3>
          <span className="klynova-founder-role">Founder &amp; Developer</span>
          <p>
            Klynova was founded by Jatin Ramani, a frontend developer
            specializing in React, Next.js, and TypeScript, with a focus on
            building products that combine clean design with practical AI
            integration. Based in Gujarat, India, and working with clients
            globally, Klynova takes on a limited number of projects at a time to
            ensure quality and direct collaboration.
          </p>
          <div className="klynova-tags">
            {stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
