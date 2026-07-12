export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Portfolio home"><span>HR</span> Learning Portfolio</a>
        <div className="navlinks"><a href="#about">About</a><a href="#artifacts">Artifacts</a></div>
      </nav>

      <section className="hero" id="top">
        <h1>I make complex AI ideas <em>clear, useful, and human.</em></h1>
        <p className="lede">A growing collection of course-based work that documents my ability to learn emerging technologies, connect ideas, and communicate their value to professional audiences.</p>
        <a className="button" href="#artifacts">Explore my work <span aria-hidden="true">↓</span></a>
      </section>

      <section className="about" id="about">
        <div><p className="sectionLabel">Professional bio</p><h2>Learning in public,<br/>leading with clarity.</h2></div>
        <div className="aboutCopy">
          <p>I am an AI and machine learning learner developing the technical judgment and communication skills needed to turn emerging technologies into practical value. My work is grounded in curiosity, careful research, and a commitment to responsible application.</p>
          <p>This portfolio follows that development through complete, audience-ready artifacts—not just descriptions of coursework. Each entry explains the goal, process, tools, and value behind the work.</p>
          <div className="value"><span>Personal value proposition</span><p>I translate complex AI/ML concepts into clear, actionable resources that help people learn, make informed decisions, and approach change with confidence.</p></div>
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
            <h3>Timeline of<br/>AI Evolution</h3>
            <p className="cardSubtitle">From the Turing Test to AI agents and regulation</p>
            <p>A four-page visual timeline tracing major developments in artificial intelligence from 1950 through 2024, including neural networks, expert systems, deep learning, generative AI, and modern AI agents.</p>
            <div className="cardMeta"><span><b>Format</b> Four-page PDF timeline</span><span><b>Focus</b> AI/ML evolution</span></div>
            <a className="button cardButton" href="/artifacts/ai-ml-timeline">View Artifact 1 <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </section>

      <footer><div className="brand"><span>HR</span> Learning Portfolio</div><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
