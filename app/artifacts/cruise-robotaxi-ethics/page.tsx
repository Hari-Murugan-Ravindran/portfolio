const incidentStages = [
  ["Collision", "A pedestrian was struck by a human-driven vehicle and thrown into the path of a Cruise driverless vehicle."],
  ["Initial stop", "The autonomous vehicle initially stopped after the collision, showing that its system detected the immediate impact."],
  ["Secondary movement", "The vehicle then moved again and dragged the pedestrian approximately 20 feet before stopping."],
  ["Regulatory response", "California later suspended Cruise’s driverless testing and deployment permits while the incident and reporting were scrutinized."],
];

const ethicalIssues = [
  {
    number: "01",
    title: "Safety & failure handling",
    signal: "Behavior after an unexpected event",
    explanation: "The vehicle’s secondary movement showed that safe autonomous behavior must include what happens after a collision, not only whether the system can avoid one.",
    response: "Design the vehicle to remain stopped whenever sensors detect a collision or cannot determine whether a person or object is beneath it. Emergency behavior should default to protecting human life under uncertainty.",
  },
  {
    number: "02",
    title: "Testing & deployment",
    signal: "Readiness for rare emergencies",
    explanation: "Normal driving tests cannot represent every unusual situation that a public-road system may encounter. Rare edge cases can still create severe consequences.",
    response: "Use extensive simulation, controlled testing, gradual deployment, and independent safety reviews before expanding a safety-critical AI system to broader public use.",
  },
  {
    number: "03",
    title: "Transparency & accountability",
    signal: "Responsibility after failure",
    explanation: "A company’s responsibility continues after an incident. Regulators and the public need complete and accurate information to understand risk and prevent similar failures.",
    response: "Require complete incident reporting within established timelines, include system behavior before and after the event, and support independent audits and stronger regulatory oversight.",
  },
];

const lessons = [
  ["Human safety comes first", "A system that operates around people should respond cautiously when its sensors or decision process are uncertain."],
  ["Edge cases are part of the design", "Rare emergencies should be treated as expected safety requirements, not dismissed because they happen infrequently."],
  ["Deployment is an ethical decision", "Testing quality, rollout speed, monitoring, and rollback plans affect people as directly as the model’s technical performance."],
  ["Accountability requires transparency", "Responsible AI depends on honest disclosure, independent review, and clear ownership when a system causes harm."],
];

const details = [
  ["Objective", "Critically examine a real autonomous-vehicle incident and identify ethical responsibilities related to safety, testing, deployment, transparency, and corporate accountability."],
  ["Process", "I reviewed the 2023 Cruise incident, selected three ethical issues, explained why each issue matters, described how my thinking developed, and proposed practical safeguards."],
  ["Challenge", "The incident could not be understood as only a technical malfunction. I needed to consider the vehicle’s behavior, testing decisions, human consequences, company reporting, and regulatory responsibility together."],
  ["Solution", "I organized the analysis around three connected responsibilities: fail safely under uncertainty, test unusual high-risk situations before broad deployment, and report serious incidents completely and promptly."],
  ["Tools & technologies", "Course materials, public incident and regulatory sources, critical-thinking analysis, Microsoft Word, document-design tools, and web portfolio design."],
  ["Value Proposition", "This artifact demonstrates my ability to move beyond technical performance and evaluate how AI design, deployment, and governance decisions affect human safety."],
  ["Unique value", "It combines a real incident, my evolving thought process, ethical reasoning, and concrete recommendations instead of treating responsible AI as an abstract checklist."],
  ["Relevance", "The work is relevant to responsible software development, safety-critical systems, AI governance, risk assessment, and professional accountability."],
];

export default function CruiseRobotaxiEthicsArtifact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation">
        <a className="brand" href={`${basePath}/`} aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a>
        <div className="navlinks"><a href={`${basePath}/`}>← All artifacts</a><a href="#case">Case study</a><a href="#analysis">Ethical analysis</a><a href="#details">Artifact details</a></div>
      </nav>

      <section className="artifactIntro artifactPageHero" id="top">
        <a className="backLink" href={`${basePath}/`}>← Back to portfolio</a>
        <p className="sectionLabel light">Artifact 05 · AI ethics & critical analysis</p>
        <div className="artifactHeading">
          <div><h1>Safety, Testing, and Accountability in Autonomous AI.</h1><p className="subtitle">Lessons from the 2023 Cruise robotaxi incident</p></div>
          <p className="audience"><b>Designed for</b><br/>Students and professionals interested in responsible AI, autonomous systems, software safety, and technology governance.</p>
        </div>
        <div className="projectActions">
          <a className="button pdfButton" href={`${basePath}/artifacts/cruise-robotaxi-ethics-analysis.pdf`} target="_blank" rel="noreferrer">Read the analysis <span aria-hidden="true">↗</span></a>
          <a className="textAction" href={`${basePath}/artifacts/cruise-robotaxi-ethics-analysis.docx`} download>Download Word document ↓</a>
        </div>
      </section>

      <section className="coachEvidence" id="case">
        <div className="evidenceCopy"><p className="sectionLabel">Submitted coursework</p><h2>A real incident raised questions beyond technical performance.</h2><p>In October 2023, a pedestrian struck by a human-driven vehicle was thrown into the path of a Cruise driverless vehicle. The Cruise vehicle initially stopped but then moved again, dragging the pedestrian before coming to a stop.</p><p>I selected this case because it shows that responsible autonomous AI depends not only on everyday driving performance, but also on failure handling, rare-event testing, transparent reporting, and accountability after harm occurs.</p><div className="projectActions"><a className="button" href={`${basePath}/artifacts/cruise-robotaxi-ethics-analysis.pdf`} target="_blank" rel="noreferrer">Open PDF <span aria-hidden="true">↗</span></a></div></div>
        <figure className="evidenceFrame"><img src={`${basePath}/artifacts/cruise-robotaxi-ethics-analysis-preview.png`} alt="First page of the AI Ethics Critical Thinking Analysis about the 2023 Cruise robotaxi incident"/><figcaption>Original coursework · AI Ethics Critical Thinking Analysis</figcaption></figure>
      </section>

      <section className="dialogueProcess">
        <p className="sectionLabel light">Incident overview</p><h2>From the initial collision<br/>to public accountability.</h2>
        <div className="dialogueGrid">{incidentStages.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="methodsSection" id="analysis">
        <div className="overviewHeading">
          <div><p className="sectionLabel">Critical analysis</p><h2>Three connected<br/>ethical responsibilities.</h2></div>
          <p>The case showed me that safety-critical AI cannot be evaluated only by whether the model usually performs well. Design, testing, deployment, and disclosure decisions all shape the system’s real-world risk.</p>
        </div>
        <div className="methodsGrid">
          {ethicalIssues.map((issue) => <article className="methodCard" key={issue.title}><div className="methodNumber">{issue.number}</div><p className="methodSignal">{issue.signal}</p><h3>{issue.title}</h3><p>{issue.explanation}</p><div className="methodExample"><b>Potential response</b><span>{issue.response}</span></div></article>)}
        </div>
      </section>

      <section className="foundationsSection">
        <div className="overviewHeading">
          <div><p className="sectionLabel">What I learned</p><h2>Responsible AI is a<br/>whole-system responsibility.</h2></div>
          <p>My initial focus was the vehicle’s technical response. The analysis expanded that view to include the decisions and organizations surrounding the system before deployment and after failure.</p>
        </div>
        <div className="foundationGrid">{lessons.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="learningTakeaway">
        <p className="sectionLabel light">Critical-thinking reflection</p>
        <h2>I began by looking at one technical failure. I finished by seeing a chain of responsibility.</h2>
        <p>The incident changed how I think about safety-critical AI. A system can perform well in many situations and still create serious risk when something unexpected occurs. In future work, I would place greater importance on unusual scenarios, human consequences, safeguards before deployment, and honest reporting when failures happen.</p>
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Project overview</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> AI Ethics and Safety: Lessons from the 2023 Cruise Robotaxi Incident<br/><br/><b>Introduction & description:</b> This artifact presents my critical analysis of the 2023 Cruise robotaxi pedestrian incident. It examines failure handling, safety testing and deployment, transparency, and corporate accountability, then proposes safeguards for the responsible development of autonomous AI systems.</p>
        <div className="detailGrid">{details.map(([label, text], index) => <div className="detail" key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="references">
        <div><p className="sectionLabel light">Evidence & disclosure</p><h2>Documented sources<br/>and authorship.</h2><p>The submitted analysis references public information from the National Highway Traffic Safety Administration, the California Department of Motor Vehicles, and the AI Incident Database.</p></div>
        <div><p><b>AI disclosure</b></p><p>I used generative AI to improve grammar and clarity. The ideas, analysis, proposed solutions, and reflection are my own.</p><div className="projectActions"><a className="button pdfButton" href={`${basePath}/artifacts/cruise-robotaxi-ethics-analysis.pdf`} target="_blank" rel="noreferrer">View complete analysis <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><p>Artifact 05 · AI Ethics Critical Thinking Analysis</p><a href={`${basePath}/`}>Return to portfolio →</a></footer>
    </main>
  );
}
