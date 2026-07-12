const milestones = [
  { year: "1950", title: "The Turing Test", person: "Alan Turing", detail: "Turing proposed testing whether a machine could imitate human intelligence through conversation.", impact: "Established one of the earliest foundations for evaluating artificial intelligence." },
  { year: "1951", title: "SNARC", person: "Minsky & Edmonds", detail: "Marvin Minsky and Dean Edmonds built one of the earliest neural-network machines.", impact: "Demonstrated an early form of brain-inspired computing." },
  { year: "1956", title: "Birth of AI", person: "Dartmouth Conference", detail: "The Dartmouth Conference established artificial intelligence as a formal research field.", impact: "Gave the discipline its name and a shared research agenda." },
  { year: "1957–1959", title: "General Problem Solver", person: "Newell, Simon & Shaw", detail: "The General Problem Solver was designed to imitate human-like approaches to solving problems.", impact: "Became one of the earliest influential general-purpose AI programs." },
  { year: "1958", title: "The Perceptron", person: "Frank Rosenblatt", detail: "The perceptron was an early artificial neural network capable of learning simple patterns.", impact: "Provided an important foundation for later neural networks and deep learning." },
  { year: "1966", title: "ELIZA", person: "Joseph Weizenbaum", detail: "ELIZA simulated conversation and became one of the first widely recognized chatbot programs.", impact: "Foreshadowed natural-language processing and conversational AI." },
  { year: "1969", title: "Perceptron criticism", person: "Minsky & Papert", detail: "The book Perceptrons highlighted important limitations of early neural networks.", impact: "Reduced enthusiasm for neural-network research and contributed to the first AI winter." },
  { year: "1972–1976", title: "MYCIN", person: "Stanford University", detail: "MYCIN helped diagnose bacterial infections and recommend antibiotics.", impact: "Showed that AI could support expert decision-making in medicine." },
  { year: "1974–1980", title: "First AI winter", person: "Funding and interest decline", detail: "Early systems failed to meet high expectations amid limited computing power, scarce data, and unrealistic predictions.", impact: "Slowed AI research and exposed the cost of overpromising." },
  { year: "1980s", title: "Expert systems commercialize", person: "Business adoption", detail: "Expert systems spread across business, medicine, finance, and engineering, though they were costly to maintain.", impact: "Proved that AI could create commercial value." },
  { year: "1986", title: "Backpropagation revival", person: "Rumelhart, Hinton & Williams", detail: "Backpropagation helped multi-layer neural networks learn more effectively.", impact: "Revived neural-network research and later became essential to deep learning." },
  { year: "1987–1993", title: "Second AI winter", person: "Expert-system downturn", detail: "High maintenance costs and the collapse of the Lisp-machine market weakened confidence in AI.", impact: "Triggered another period of reduced investment and expectations." },
  { year: "1997", title: "Deep Blue wins", person: "IBM", detail: "IBM’s Deep Blue defeated world chess champion Garry Kasparov in a six-game match.", impact: "Demonstrated that specialized AI could outperform humans in complex strategy games." },
  { year: "2002", title: "Roomba reaches homes", person: "iRobot", detail: "The Roomba autonomous vacuum brought AI-powered robotics into everyday household life.", impact: "Made consumer robotics tangible and widely accessible." },
  { year: "2006", title: "Deep-learning revival", person: "Data, algorithms & computing", detail: "Improved algorithms, larger datasets, and stronger computing power renewed progress in neural networks.", impact: "Set the stage for the modern deep-learning boom." },
  { year: "2009", title: "ImageNet", person: "Computer vision at scale", detail: "ImageNet supplied a massive labeled dataset for training and evaluating computer-vision models.", impact: "Enabled later breakthroughs in visual recognition." },
  { year: "2011", title: "Watson wins Jeopardy!", person: "IBM Watson", detail: "Watson defeated former champions Ken Jennings and Brad Rutter on Jeopardy!.", impact: "Marked major progress in natural-language processing and question answering." },
  { year: "2011", title: "Siri goes mainstream", person: "Apple", detail: "Siri brought voice-based AI assistance to millions of smartphone users.", impact: "Made conversational AI part of everyday consumer technology." },
  { year: "2012", title: "AlexNet wins ImageNet", person: "Deep convolutional networks", detail: "AlexNet used deep neural networks and GPUs to achieve a major image-recognition improvement.", impact: "Helped launch the modern deep-learning era." },
  { year: "2014", title: "GANs advance generation", person: "Generative adversarial networks", detail: "GANs enabled AI systems to generate increasingly realistic images and synthetic media.", impact: "Became an important step toward modern generative AI." },
  { year: "2016", title: "AlphaGo defeats Lee Sedol", person: "Google DeepMind", detail: "AlphaGo mastered the highly complex game of Go using deep learning and reinforcement learning.", impact: "Showed the power of learned strategies in difficult decision spaces." },
  { year: "2017", title: "The Transformer", person: "Attention Is All You Need", detail: "Google researchers introduced the transformer architecture based on self-attention.", impact: "Created the foundation for modern large language models." },
  { year: "2018", title: "BERT", person: "Google", detail: "BERT improved contextual language understanding for search, question answering, and other language tasks.", impact: "Advanced transformer-based natural-language understanding." },
  { year: "2020", title: "GPT-3", person: "Large language models", detail: "GPT-3 demonstrated that very large language models could generate fluent text and perform diverse tasks.", impact: "Became a major step toward modern generative AI." },
  { year: "2020", title: "RAG connects knowledge", person: "Retrieval-augmented generation", detail: "RAG combined language models with external information retrieval.", impact: "Made AI more useful for search, enterprise knowledge, and factual question answering." },
  { year: "2021", title: "AlphaFold transforms biology", person: "Google DeepMind", detail: "AlphaFold made major progress in predicting protein structures.", impact: "Showed how AI could accelerate biology, medicine, and drug discovery." },
  { year: "2022", title: "Text-to-image goes mainstream", person: "DALL-E 2 & Stable Diffusion", detail: "Prompt-based image generation changed digital art, design, media, and copyright discussions.", impact: "Expanded generative AI beyond text into widely accessible visual creation." },
  { year: "2022", title: "ChatGPT reaches the public", person: "OpenAI", detail: "ChatGPT made generative AI broadly accessible through a conversational interface.", impact: "Changed how people use AI in education, business, writing, coding, and research." },
  { year: "2023", title: "Agents and open models expand", person: "Claude, LLaMA & tool use", detail: "Safety-focused assistants, open language models, and tool-using AI agents expanded the ecosystem.", impact: "Moved AI toward multi-step systems that can use tools and complete tasks." },
  { year: "2024", title: "Governance and MCP", person: "EU AI Act & Model Context Protocol", detail: "AI regulation advanced while MCP showed a growing need for models to connect safely with tools, files, databases, and business systems.", impact: "Linked the future of AI to both responsible governance and interoperable tool use." },
];

const details = [
  ["Objective", "Create a chronological visual resource that explains how artificial intelligence developed from foundational ideas into modern generative AI, agents, and regulation."],
  ["Process", "I researched important AI milestones, selected technical and social turning points, organized them chronologically, and combined concise explanations with visual references across four connected pages."],
  ["Tools & technologies", "Web-based research, document design tools, image resources, and PDF creation and merging tools."],
  ["Value Proposition", "This timeline gives students, colleagues, and nontechnical professionals an accessible way to understand how today’s AI systems emerged from decades of research, setbacks, and breakthroughs."],
  ["Unique value", "The artifact connects technical advances, commercial adoption, AI winters, consumer products, generative AI, agents, and regulation in one continuous narrative."],
  ["Relevance", "Historical context helps AI professionals recognize recurring patterns, communicate emerging technology responsibly, and distinguish long-term progress from short-term hype."],
];

export default function TimelineArtifact() {
  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation"><a className="brand" href="/" aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a><div className="navlinks"><a href="/">← All artifacts</a><a href="#timeline">Timeline</a><a href="#details">Artifact details</a></div></nav>
      <section className="artifactIntro artifactPageHero" id="top">
        <a className="backLink" href="/">← Back to portfolio</a><p className="sectionLabel light">Artifact 01 · Research & visual communication</p>
        <div className="artifactHeading"><div><h1>Timeline of<br/>AI evolution.</h1><p className="subtitle">A visual journey through more than seven decades of artificial intelligence</p></div><p className="audience"><b>Designed for</b><br/>Students, colleagues, hiring managers, and nontechnical professionals who want a concise orientation to the development of AI.</p></div>
        <div className="pdfCallout"><div><span>Timeline PDF</span><p>Explore the complete visual timeline.</p></div><a className="button pdfButton" href="/artifacts/timeline-of-ai-evolution.pdf" target="_blank" rel="noreferrer">Open PDF <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="timeline" id="timeline" aria-label="Timeline of AI evolution">
        {milestones.map((item, index) => <article className="milestone" key={`${item.year}-${item.title}`}><div className="year">{item.year}</div><div className="dot" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="milestoneBody"><p className="person">{item.person}</p><h3>{item.title}</h3><p>{item.detail}</p><div className="impact"><b>Why it matters</b><span>{item.impact}</span></div></div></article>)}
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Project overview</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> Timeline of AI Evolution<br/><br/><b>Introduction & description:</b> This timeline traces more than seven decades of artificial intelligence, beginning with Alan Turing’s 1950 proposal and progressing through neural networks, expert systems, AI winters, deep learning, large language models, multimodal systems, agents, and AI regulation through 2024.</p>
        <div className="detailGrid">{details.map(([label, text], i) => <div className="detail" key={label}><span>{String(i + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>
      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><p>Artifact 01 · Timeline of AI Evolution</p><a href="/">Return to portfolio →</a></footer>
    </main>
  );
}
