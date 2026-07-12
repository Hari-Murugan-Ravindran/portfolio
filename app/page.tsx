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
        <h1>Exploring how AI <em>evolves, teaches, and creates value.</em></h1>
        <div className="heroLower">
          <div><p className="lede">I’m Hari Murugan Ravindran. With a background in software development and DevOps, I’m expanding my knowledge of AI and machine learning through practical, hands-on projects.</p><a className="button" href="#artifacts">Explore my work <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section className="about" id="about">
        <div><p className="sectionLabel">Professional bio</p><h2>Building software.<br/>Learning what’s next.</h2></div>
        <div className="aboutCopy">
          <p>I’m Hari Murugan Ravindran, a software development and DevOps professional with four years of experience. As an AI and machine learning learner, I’m focused on understanding not only what AI can do, but also how to explain it clearly and shape it around real audience needs.</p>
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
