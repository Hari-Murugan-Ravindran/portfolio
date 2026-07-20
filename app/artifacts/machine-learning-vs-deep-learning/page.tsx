const comparisons = [
  {
    label: "Machine learning",
    example: "House price prediction",
    approach: "Linear regression studies past sales and uses selected features such as location, square footage, bedrooms, property age, and nearby sale prices.",
    fit: "This approach fits structured data, needs less computing power, and produces a result that is easier to interpret.",
  },
  {
    label: "Deep learning",
    example: "Autonomous driving",
    approach: "Multilayered neural networks learn from large volumes of camera and sensor data to recognize roads, signs, pedestrians, vehicles, and obstacles.",
    fit: "This approach fits complex, rapidly changing information because it can learn important features directly from raw data.",
  },
];

const decisions = [
  ["Data structure", "Machine learning is effective when inputs are organized into clear categories. Deep learning is useful for images, sensor streams, and other complex data."],
  ["Feature selection", "Traditional machine learning often relies on people to identify useful features. Deep learning can discover many of those features during training."],
  ["Computing needs", "Machine learning can solve many structured problems with fewer resources. Deep learning generally needs more data and processing power."],
  ["Task complexity", "The simplest method that fits the problem is often the better choice. A more complex model does not automatically produce more useful results."],
];

const details = [
  ["Objective", "Explain the difference between machine learning and deep learning and show why each approach is suited to a different real-world problem."],
  ["Process", "I reviewed the concepts, selected one practical example for each approach, described how the systems use data, and compared their suitability based on structure, complexity, and computing requirements."],
  ["Challenge", "Machine learning and deep learning are often discussed as interchangeable ideas, which can make their practical differences difficult for a new learner to recognize."],
  ["Solution", "I used two familiar applications, house price prediction and autonomous driving, to connect technical differences to situations readers can easily visualize."],
  ["Tools & technologies", "Course learning materials, document creation tools, linear regression concepts, neural networks, and real-world application analysis."],
  ["Value Proposition", "The analysis helps readers understand why the right AI approach depends on the problem, the available data, and the resources required."],
  ["Unique value", "Instead of defining the methods only in technical terms, the artifact compares them through two recognizable applications with very different data needs."],
  ["Relevance", "The artifact demonstrates technical understanding, comparative reasoning, model-selection awareness, and the ability to explain AI concepts in clear language."],
];

export default function MachineLearningDeepLearningArtifact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation">
        <a className="brand" href={`${basePath}/`} aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a>
        <div className="navlinks"><a href={`${basePath}/`}>← All artifacts</a><a href="#comparison">Comparison</a><a href="#details">Artifact details</a></div>
      </nav>

      <section className="artifactIntro artifactPageHero comparisonHero" id="top">
        <a className="backLink" href={`${basePath}/`}>← Back to portfolio</a>
        <p className="sectionLabel light">Artifact 03 · Technical analysis & communication</p>
        <div className="artifactHeading">
          <div><h1>Machine Learning<br/>and Deep Learning.</h1><p className="subtitle">Understanding the difference through real-world examples</p></div>
          <p className="audience"><b>Designed for</b><br/>Students and professionals seeking a clear introduction to when machine learning or deep learning may be the better approach.</p>
        </div>
        <div className="projectActions">
          <a className="button pdfButton" href={`${basePath}/artifacts/machine-learning-deep-learning-examples.pdf`} target="_blank" rel="noreferrer">View written analysis <span aria-hidden="true">↗</span></a>
          <a className="textAction" href={`${basePath}/artifacts/machine-learning-deep-learning-examples.docx`} download>Download Word document ↓</a>
        </div>
      </section>

      <section className="comparisonOverview" id="comparison">
        <div className="overviewHeading">
          <div><p className="sectionLabel">Core comparison</p><h2>Two methods.<br/>Two different needs.</h2></div>
          <p>Both approaches learn from data, but their usefulness depends on the kind of information available and the problem being solved. These examples show why choosing an appropriate method matters.</p>
        </div>
        <div className="comparisonGrid">
          {comparisons.map((item, index) => (
            <article className="comparisonCard" key={item.label}>
              <div className="comparisonCardTop"><span>{String(index + 1).padStart(2, "0")}</span><p>{item.label}</p></div>
              <h3>{item.example}</h3>
              <div className="comparisonText"><div><b>How it works</b><p>{item.approach}</p></div><div><b>Why it fits</b><p>{item.fit}</p></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="decisionSection">
        <div><p className="sectionLabel light">Model selection</p><h2>Match the method<br/>to the problem.</h2></div>
        <div className="decisionList">
          {decisions.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Project overview</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> Understanding Machine Learning and Deep Learning Through Real-World Examples<br/><br/><b>Introduction & description:</b> This written analysis explains the relationship between artificial intelligence, machine learning, and deep learning. It uses house price prediction and autonomous driving to show how data structure, feature selection, task complexity, and computing needs affect the choice of approach.</p>
        <div className="detailGrid">{details.map(([label, text], index) => <div className="detail" key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><p>Artifact 03 · Machine Learning and Deep Learning</p><a href={`${basePath}/`}>Return to portfolio →</a></footer>
    </main>
  );
}
