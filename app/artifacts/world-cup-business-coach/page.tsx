const tools = [
  { name: "ChatGPT", purpose: "Prompt comparison", detail: "I tested the same question in three separate chats and evaluated clarity, relevance, and completeness. The second response offered the strongest balance." },
  { name: "Tutor Me", purpose: "Learner-centered guidance", detail: "Using the Khanmigo Lite Custom GPT showed how an assistant can guide learning through questions, feedback, and explanations instead of only supplying answers." },
  { name: "STORM AI", purpose: "Research support", detail: "STORM produced more detailed, source-supported research, while ChatGPT was more effective for concise and accessible explanations." },
];

const stages = [
  ["Empathize", "Understand children ages 10–15 who enjoy the World Cup but may not yet understand its business side."],
  ["Define", "Business concepts such as sponsorship, broadcasting rights, and tourism are often explained with language that is too complex for young learners."],
  ["Ideate", "Imagine an approachable AI coach that connects business ideas to teams, players, matches, tickets, and merchandise."],
  ["Prototype", "Build a Custom GPT with simple language, relatable examples, follow-up questions, and explanations that adapt to the learner."],
  ["Test", "Review the assistant’s clarity and usefulness, then refine its instructions so responses remain age-appropriate and educational."],
];

const details = [
  ["Objective", "Explore generative AI tools and apply design thinking to create an AI-based solution for a defined learning need."],
  ["Process", "I compared AI responses, explored tutoring and research assistants, identified a learner problem, and iteratively designed and tested a specialized Custom GPT."],
  ["Tools & technologies", "ChatGPT, Tutor Me (Khanmigo Lite), STORM AI, prompt engineering, design thinking, and Custom GPT creation."],
  ["Value Proposition", "The project turns complex World Cup business concepts into approachable explanations for learners ages 10–15."],
  ["Unique value", "It combines a familiar global sporting event with adaptive AI instruction, making business learning more engaging and relevant."],
  ["Relevance", "The artifact demonstrates AI tool evaluation, audience awareness, prompt design, prototyping, and responsible educational communication."],
];

export default function WorldCupBusinessCoachArtifact() {
  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation"><a className="brand" href="/" aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a><div className="navlinks"><a href="/">← All artifacts</a><a href="#process">Process</a><a href="#details">Artifact details</a></div></nav>
      <section className="artifactIntro artifactPageHero coachHero" id="top">
        <a className="backLink" href="/">← Back to portfolio</a><p className="sectionLabel light">Artifact 02 · AI prototyping & design thinking</p>
        <div className="artifactHeading"><div><h1>World Cup<br/>Business Coach.</h1><p className="subtitle">An AI learning assistant that makes business concepts easier to understand</p></div><p className="audience"><b>Designed for</b><br/>Young learners ages 10–15 who are interested in the World Cup and want an accessible introduction to sponsorships, media rights, ticketing, tourism, and merchandise.</p></div>
        <div className="projectActions">
          <a className="button pdfButton" href="/artifacts/world-cup-business-coach-report.pdf" target="_blank" rel="noreferrer">View project report <span aria-hidden="true">↗</span></a>
          <a className="textAction" href="/artifacts/world-cup-business-coach-report.docx" download>Download Word document ↓</a>
          <a className="textAction" href="https://chatgpt.com/g/g-6a539f1e2a848191bb5bd6b4bfcc7fca-world-cup-business-coach" target="_blank" rel="noreferrer">Open AI assistant ↗</a>
        </div>
      </section>

      <section className="projectOverview" id="process">
        <div className="overviewHeading"><div><p className="sectionLabel">AI Lab exploration</p><h2>From tool comparison<br/>to a focused solution.</h2></div><p>The lab was more than a finished chatbot. It was an opportunity to compare how generative AI tools respond, research, tutor, and adapt. I then used those observations to build for a specific audience.</p></div>
        <div className="toolGrid">{tools.map((tool, index) => <article className="toolCard" key={tool.name}><span>{String(index + 1).padStart(2, "0")}</span><p>{tool.purpose}</p><h3>{tool.name}</h3><div className="toolRule"></div><p>{tool.detail}</p></article>)}</div>
      </section>

      <section className="thinkingSection">
        <p className="sectionLabel light">Design-thinking process</p><h2>From Initial Idea to<br/>Tested AI Prototype.</h2>
        <div className="thinkingTimeline">{stages.map(([title, detail], index) => <article className="thinkingStep" key={title}><div className="thinkingMarker"><span>{index + 1}</span></div><div><p>Stage {String(index + 1).padStart(2, "0")}</p><h3>{title}</h3><span>{detail}</span></div></article>)}</div>
      </section>

      <section className="coachFeatures">
        <div><p className="sectionLabel">What the prototype does</p><h2>Business lessons,<br/>built around football.</h2></div>
        <div className="featureList">{["Explains sponsorship and advertising", "Introduces broadcasting rights and ticket sales", "Connects tourism and merchandise to revenue", "Invites follow-up questions", "Adapts explanations to the learner"].map((feature, index) => <div key={feature}><span>{String(index + 1).padStart(2, "0")}</span><p>{feature}</p></div>)}</div>
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Project overview</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> AI Lab Report — World Cup Business Coach<br/><br/><b>Introduction & description:</b> This report documents my exploration of generative AI tools and the creation of a Custom GPT that teaches World Cup business concepts through simple language and familiar examples. The project demonstrates how audience research, prompt experimentation, and design thinking can turn a broad technology into a purposeful learning experience.</p>
        <div className="detailGrid">{details.map(([label, text], index) => <div className="detail" key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>
      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><p>Artifact 02 · World Cup Business Coach</p><a href="/">Return to portfolio →</a></footer>
    </main>
  );
}
