export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Portfolio home"><span>AI</span> Learning Portfolio</a>
        <div className="navlinks"><a href="#about">About</a><a href="#artifacts">Artifacts</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">Professional portfolio · AI & machine learning</div>
        <h1>I make complex AI ideas <em>clear, useful, and human.</em></h1>
        <p className="lede">A growing collection of course-based work that documents my ability to learn emerging technologies, connect ideas, and communicate their value to professional audiences.</p>
        <a className="button" href="#artifacts">Explore my work <span aria-hidden="true">↓</span></a>
        <div className="heroNote"><span>01</span><p><b>Current focus</b><br/>Building a rigorous foundation in artificial intelligence and machine learning.</p></div>
      </section>

      <section className="about" id="about">
        <div><p className="sectionLabel">About this portfolio</p><h2>Learning in public,<br/>leading with clarity.</h2></div>
        <div className="aboutCopy">
          <p>I am an AI and machine learning learner developing the technical judgment and communication skills needed to turn emerging technologies into practical value. My work is grounded in curiosity, careful research, and a commitment to responsible application.</p>
          <p>This portfolio follows that development through complete, audience-ready artifacts—not just descriptions of coursework. Each entry explains the goal, process, tools, and value behind the work.</p>
          <div className="value"><span>My value proposition</span><p>I translate complex AI/ML concepts into clear, actionable resources that help people learn, make informed decisions, and approach change with confidence.</p></div>
        </div>
      </section>

      <section className="artifactsSection" id="artifacts">
        <div className="artifactsHeader">
          <div><p className="sectionLabel">Selected work</p><h2>Portfolio artifacts.</h2></div>
          <p>Each artifact is presented as a complete professional resource, with its purpose, process, tools, and audience value documented.</p>
        </div>

        <article className="artifactCard">
          <div className="artifactCardVisual" aria-hidden="true">
            <span className="cardNumber">01</span>
            <div className="cardOrb"></div>
            <div className="cardTimeline"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <div className="artifactCardContent">
            <p className="cardKicker">Artifact 01 · Research & communication</p>
            <h3>From Imitation<br/>to Generation</h3>
            <p className="cardSubtitle">A brief history of artificial intelligence and machine learning</p>
            <p>A visual timeline connecting eight pivotal technical advances to their practical and cultural impact, designed for hiring managers, colleagues, and nontechnical leaders.</p>
            <div className="cardMeta"><span><b>Format</b> Interactive-style timeline</span><span><b>Focus</b> AI/ML foundations</span></div>
            <a className="button cardButton" href="/artifacts/ai-ml-timeline">View Artifact 1 <span aria-hidden="true">→</span></a>
          </div>
        </article>

        <div className="comingNext"><span>02—05</span><p>More course-based artifacts will be added as the portfolio grows.</p></div>
      </section>

      <footer><div className="brand"><span>AI</span> Learning Portfolio</div><p>Course-based work · Curiosity · Clarity · Responsible innovation</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
