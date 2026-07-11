const milestones = [
  { year: "1950", title: "The imitation game", person: "Alan Turing", detail: "Turing reframed machine intelligence as an observable question: can a machine converse in a way indistinguishable from a person?", impact: "Established a practical way to discuss and evaluate machine intelligence." },
  { year: "1956", title: "Artificial intelligence gets a name", person: "Dartmouth workshop", detail: "Researchers gathered around the proposal that aspects of learning and intelligence could be described precisely enough for machines to simulate them.", impact: "Defined AI as a field of study and set an ambitious research agenda." },
  { year: "1957", title: "The perceptron", person: "Frank Rosenblatt", detail: "The perceptron introduced a trainable model that adjusted its weights from examples to classify inputs.", impact: "Provided an early foundation for neural-network learning." },
  { year: "1986", title: "Backpropagation gains traction", person: "Rumelhart, Hinton & Williams", detail: "A widely influential paper showed how error signals could train multi-layer neural networks efficiently.", impact: "Made learning useful internal representations far more practical." },
  { year: "1997", title: "A machine defeats a chess champion", person: "IBM Deep Blue", detail: "Deep Blue defeated world champion Garry Kasparov using specialized search, evaluation, and substantial computing power.", impact: "Made machine capability visible to a global, nontechnical audience." },
  { year: "2012", title: "Deep learning’s breakthrough moment", person: "AlexNet", detail: "A deep convolutional neural network dramatically improved image-classification results in the ImageNet competition.", impact: "Accelerated adoption of deep learning across vision and industry." },
  { year: "2017", title: "Attention changes sequence modeling", person: "The Transformer", detail: "The transformer architecture used self-attention to model relationships in sequences without recurrent processing.", impact: "Created the architectural foundation for many modern language and multimodal systems." },
  { year: "2022", title: "Generative AI reaches everyday users", person: "Conversational AI", detail: "Accessible chat interfaces brought large language models into daily writing, analysis, coding, and learning workflows.", impact: "Shifted AI from a specialist tool toward a general-purpose collaborator." },
];

const details = [
  ["Objective", "Create a concise, accurate learning resource that helps professionals understand how foundational ideas led to today’s generative AI systems."],
  ["Process", "I selected pivotal milestones, compared their technical contribution and public significance, then rewrote each entry in plain language with a consistent ‘what happened / why it matters’ structure."],
  ["Tools & technologies", "Course materials, scholarly and institutional references, web-based research, writing and visual-design tools."],
  ["Value proposition", "The timeline turns a complex technical history into an approachable briefing that helps decision-makers discuss AI with greater context and confidence."],
  ["Unique value", "Rather than listing dates alone, each milestone connects a technical advance to its practical or cultural impact."],
  ["Relevance", "AI practitioners need historical perspective to distinguish durable ideas from short-lived trends and to explain emerging systems responsibly."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Portfolio home"><span>AI</span> Learning Portfolio</a>
        <div className="navlinks"><a href="#about">About</a><a href="#artifact">Artifact 1</a><a href="#references">References</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">Professional portfolio · AI & machine learning</div>
        <h1>I make complex AI ideas <em>clear, useful, and human.</em></h1>
        <p className="lede">A growing collection of course-based work that documents my ability to learn emerging technologies, connect ideas, and communicate their value to professional audiences.</p>
        <a className="button" href="#artifact">Explore Artifact 1 <span aria-hidden="true">↓</span></a>
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

      <section className="artifactIntro" id="artifact">
        <p className="sectionLabel light">Artifact 01 · Research & communication</p>
        <div className="artifactHeading"><div><h2>From imitation<br/>to generation.</h2><p className="subtitle">A brief history of artificial intelligence and machine learning</p></div><p className="audience"><b>Designed for</b><br/>Hiring managers, colleagues, and nontechnical leaders who want a fast, meaningful orientation to the field.</p></div>
      </section>

      <section className="timeline" aria-label="AI and machine learning timeline">
        {milestones.map((item, index) => (
          <article className="milestone" key={item.year}>
            <div className="year">{item.year}</div>
            <div className="dot" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="milestoneBody"><p className="person">{item.person}</p><h3>{item.title}</h3><p>{item.detail}</p><div className="impact"><b>Why it matters</b><span>{item.impact}</span></div></div>
          </article>
        ))}
      </section>

      <section className="artifactDetails">
        <p className="sectionLabel">Behind the artifact</p>
        <h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Introduction & description.</b> This interactive-style visual timeline presents eight turning points that shaped modern AI and machine learning. It pairs each advance with a short explanation of its broader importance so readers can see continuity—not just a list of inventions.</p>
        <div className="detailGrid">{details.map(([label, text], i) => <div className="detail" key={label}><span>{String(i + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="references" id="references">
        <div><p className="sectionLabel light">References</p><h2>Sources that shaped<br/>this artifact.</h2></div>
        <ol>
          <li>Turing, A. M. (1950). Computing machinery and intelligence. <i>Mind, 59</i>(236), 433–460.</li>
          <li>McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1955). A proposal for the Dartmouth summer research project on artificial intelligence.</li>
          <li>Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. <i>Nature, 323</i>, 533–536.</li>
          <li>Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. <i>NeurIPS 25</i>.</li>
          <li>Vaswani, A., et al. (2017). Attention is all you need. <i>NeurIPS 30</i>.</li>
        </ol>
      </section>

      <footer><div className="brand"><span>AI</span> Learning Portfolio</div><p>Course-based work · Curiosity · Clarity · Responsible innovation</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
