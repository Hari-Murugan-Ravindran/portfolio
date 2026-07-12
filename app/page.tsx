import { ArtifactCard } from "./components/ArtifactCard";
import { artifacts } from "./data/artifacts";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a>
        <div className="navlinks"><a href="#about">About</a><a href="#artifacts">Artifacts</a></div>
      </nav>

      <section className="hero" id="top">
        <h1>I make complex AI ideas <em>clear, useful, and human.</em></h1>
        <p className="lede">A growing collection of projects that demonstrates my ability to learn emerging technologies, connect ideas, and communicate their value to professional audiences.</p>
        <a className="button" href="#artifacts">Explore my work <span aria-hidden="true">↓</span></a>
      </section>

      <section className="about" id="about">
        <div><p className="sectionLabel">Professional bio</p><h2>Learning in public,<br/>leading with clarity.</h2></div>
        <div className="aboutCopy">
          <p>I am an AI and machine learning learner developing the technical judgment and communication skills needed to turn emerging technologies into practical value. My work is grounded in curiosity, careful research, and a commitment to responsible application.</p>
          <p>This portfolio presents complete, audience-ready projects. Each entry explains the goal, process, tools, and value behind the work.</p>
          <div className="value"><span>Personal value proposition</span><p>I translate complex AI/ML concepts into clear, actionable resources that help people learn, make informed decisions, and approach change with confidence.</p></div>
        </div>
      </section>

      <section className="artifactsSection" id="artifacts">
        <div className="artifactsHeader"><h2>Portfolio artifacts.</h2></div>

        <div className="artifactsGrid">
          {artifacts.map((artifact) => <ArtifactCard artifact={artifact} key={artifact.href} />)}
        </div>
      </section>

      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
