const details = [
  ["Objective", "Create a chronological visual resource that explains how artificial intelligence developed from foundational ideas into modern generative AI, agents, and regulation."],
  ["Process", "I researched important AI milestones, selected events that represented technical and social turning points, organized them chronologically, and combined concise explanations with visual references across four connected pages."],
  ["Tools & technologies", "Web-based research, document design tools, image resources, and PDF creation and merging tools."],
  ["Artifact-specific value proposition", "This timeline gives students, colleagues, and nontechnical professionals an accessible way to understand how today’s AI systems emerged from decades of research, setbacks, and breakthroughs."],
  ["Unique value", "The artifact connects technical advances, commercial adoption, AI winters, consumer products, generative AI, agents, and regulation in one continuous visual narrative."],
  ["Relevance", "Historical context helps AI professionals recognize recurring patterns, communicate emerging technology responsibly, and distinguish long-term progress from short-term hype."],
];

export default function TimelineArtifact() {
  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation">
        <a className="brand" href="/" aria-label="Portfolio home"><span>AI</span> Learning Portfolio</a>
        <div className="navlinks"><a href="/">← All artifacts</a><a href="#submission">Submission</a><a href="#details">Artifact details</a></div>
      </nav>

      <section className="artifactIntro artifactPageHero" id="top">
        <a className="backLink" href="/">← Back to portfolio</a>
        <p className="sectionLabel light">Artifact 01 · Research & visual communication</p>
        <div className="artifactHeading">
          <div><h1>Timeline of<br/>AI evolution.</h1><p className="subtitle">The original four-page document submitted for the AI & ML Timeline assignment</p></div>
          <p className="audience"><b>Designed for</b><br/>Students, colleagues, hiring managers, and nontechnical professionals who want a concise visual orientation to the development of AI.</p>
        </div>
      </section>

      <section className="submittedArtifact" id="submission">
        <div className="submissionHeader">
          <div><p className="sectionLabel">Submitted artifact</p><h2>The complete work,<br/>presented in full.</h2></div>
          <div><p>This is the actual document submitted for the course timeline activity. Every page is displayed below, and the original PDF is available to open or save.</p><a className="button" href="/artifacts/timeline-of-ai-evolution.pdf" target="_blank" rel="noreferrer">Open original PDF <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="pdfPages">
          {[1, 2, 3, 4].map((page) => <figure key={page}><img src={`/artifacts/timeline-page-${page}.png`} alt={`Timeline of AI Evolution, submitted document page ${page}`} /><figcaption>Page {page} of 4</figcaption></figure>)}
        </div>
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Required artifact information</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> Timeline of AI Evolution<br/><br/><b>Introduction & description:</b> This four-page visual timeline traces more than seven decades of artificial intelligence, beginning with Alan Turing’s 1950 proposal and progressing through neural networks, expert systems, AI winters, deep learning, large language models, multimodal systems, agents, and AI regulation through 2024.</p>
        <div className="detailGrid">{details.map(([label, text], i) => <div className="detail" key={label}><span>{String(i + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <footer><div className="brand"><span>AI</span> Learning Portfolio</div><p>Artifact 01 · Timeline of AI Evolution</p><a href="/">Return to portfolio →</a></footer>
    </main>
  );
}
