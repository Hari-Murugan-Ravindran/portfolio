const engagementStages = [
  ["Analyze", "I first identified what made each situation risky instead of immediately applying a standard technique."],
  ["Decide", "I selected an approach based on the data, business context, model behavior, and cost of a wrong decision."],
  ["Explain", "I described my reasoning to the coach and connected each technical choice to its practical effect."],
  ["Refine", "I used the coach’s feedback and follow-up questions to test assumptions and improve my original response."],
];

const scenarios = [
  {
    number: "01",
    title: "Missing data",
    signal: "Customer churn dataset",
    explanation: "A customer dataset had missing account-age and monthly-spend values. I learned to investigate why the values were missing before choosing whether to recover, impute, flag, or remove them.",
    decision: "Check for MCAR, MAR, or MNAR patterns; recover values from approved sources when possible; compare imputation methods; add missingness indicators; and validate the result for bias.",
  },
  {
    number: "02",
    title: "Imbalanced data",
    signal: "Fraud detection",
    explanation: "Only 0.5% of one million transactions were fraudulent, making 99.5% accuracy misleading. The real question was whether the model could identify rare fraud without creating too many false alerts.",
    decision: "Use precision, recall, F1-score, and a confusion matrix; preserve class ratios when splitting data; compare class weighting and resampling; and choose a threshold that reflects business costs.",
  },
  {
    number: "03",
    title: "Data & concept drift",
    signal: "Deployed churn model",
    explanation: "A churn model’s AUC fell from 0.89 to 0.76 after customer behavior and plan offerings changed. I had to distinguish a changing data distribution from a changing relationship between features and churn.",
    decision: "Rule out pipeline problems, compare current and training data, examine performance by segment, retrain with recent representative data, and monitor the updated model through a controlled rollout.",
  },
];

const takeaways = [
  ["Investigate before treating", "A data problem cannot be handled responsibly until its source, pattern, and effect on different groups are understood."],
  ["Measure what matters", "A strong overall score can hide serious failure. Evaluation metrics should reflect the real cost of false positives and false negatives."],
  ["Monitor after deployment", "Model quality can decline as behavior and business conditions change, so production systems need monitoring, alerts, retraining triggers, and safe rollback plans."],
  ["Protect data throughout", "Recovery, cleaning, sharing, and monitoring should use only necessary data, approved sources, controlled access, and clear documentation of how sensitive information is handled."],
];

const details = [
  ["Objective", "Use an AI coach to practice identifying and addressing real-world data problems while considering data quality, bias, privacy, model performance, and business impact."],
  ["Process", "I worked through three progressively complex scenarios, explained each decision in my own words, received immediate feedback, summarized what I learned, and asked follow-up questions about difficult trade-offs."],
  ["Challenge", "Each scenario had more than one possible response. I needed to avoid quick fixes and decide which approach was appropriate for the type of data, the model’s purpose, and the risks involved."],
  ["Solution", "I followed a consistent process: investigate the cause, compare options, choose meaningful evaluation measures, test the decision, document uncertainty, and monitor results over time."],
  ["Tools & technologies", "SchoolAI Data Challenge Scenario Coach, course learning materials, data-cleaning concepts, model-evaluation methods, and web portfolio design."],
  ["Value Proposition", "This artifact shows how an interactive AI coach can help turn data-quality concepts into practical decisions by requiring reasoning, feedback, and revision."],
  ["Unique value", "The work captures not only the technical response to each scenario but also how I weighed trade-offs and improved my thinking during the conversation."],
  ["Relevance", "The activity demonstrates data literacy, responsible AI awareness, model evaluation, production thinking, independent reasoning, and clear technical communication."],
];

export default function DataChallengeScenarioCoachArtifact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation">
        <a className="brand" href={`${basePath}/`} aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a>
        <div className="navlinks"><a href={`${basePath}/`}>← All artifacts</a><a href="#experience">Study experience</a><a href="#scenarios">Scenarios</a><a href="#details">Artifact details</a></div>
      </nav>

      <section className="artifactIntro artifactPageHero" id="top">
        <a className="backLink" href={`${basePath}/`}>← Back to portfolio</a>
        <p className="sectionLabel light">Artifact 05 · Data problem-solving & responsible AI</p>
        <div className="artifactHeading">
          <div><h1>Solving Real-World Data Challenges Through an AI Coach.</h1><p className="subtitle">A guided exercise in reasoning through data quality, imbalance, and model drift</p></div>
          <p className="audience"><b>Designed for</b><br/>Students and professionals who want a practical introduction to the decisions behind reliable machine learning data and models.</p>
        </div>
        <div className="projectActions"><a className="button pdfButton" href="#experience">Explore the study experience <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="coachEvidence" id="experience">
        <div className="evidenceCopy"><p className="sectionLabel">The interactive activity</p><h2>Three scenarios became a guided problem-solving exercise.</h2><p>I used the SchoolAI Data Challenge Scenario Coach to work through realistic problems instead of only reading about them. The coach presented a situation, asked me to make a decision, and gave immediate feedback on my reasoning.</p><p>The conversation required me to explain why I chose an approach, consider its limitations, and revise my thinking when the coach introduced a new trade-off. This made the exercise closer to making practical decisions than answering a fixed quiz.</p></div>
        <figure className="evidenceFrame"><img src={`${basePath}/artifacts/data-challenge-scenario-coach.png`} alt="SchoolAI AIML-500 Data Challenge Scenario Coach entry screen"/><figcaption>SchoolAI · AIML-500 Data Challenge Scenario Coach</figcaption></figure>
      </section>

      <section className="dialogueProcess">
        <p className="sectionLabel light">How I engaged</p><h2>From a data problem<br/>to a reasoned decision.</h2>
        <div className="dialogueGrid">{engagementStages.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="methodsSection" id="scenarios">
        <div className="overviewHeading">
          <div><p className="sectionLabel">What I worked through</p><h2>Three data challenges.<br/>Different decisions.</h2></div>
          <p>The scenarios showed that good machine learning work starts before model training and continues after deployment. The right response depends on why the problem occurred and how it affects real decisions.</p>
        </div>
        <div className="methodsGrid">
          {scenarios.map((scenario) => <article className="methodCard" key={scenario.title}><div className="methodNumber">{scenario.number}</div><p className="methodSignal">{scenario.signal}</p><h3>{scenario.title}</h3><p>{scenario.explanation}</p><div className="methodExample"><b>My approach</b><span>{scenario.decision}</span></div></article>)}
        </div>
      </section>

      <section className="foundationsSection">
        <div className="overviewHeading">
          <div><p className="sectionLabel">Learning takeaways</p><h2>Reliable models begin<br/>with responsible data decisions.</h2></div>
          <p>The activity connected technical methods to judgment. Cleaning, evaluation, privacy, monitoring, and documentation are linked parts of building a model people can trust.</p>
        </div>
        <div className="foundationGrid">{takeaways.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="learningTakeaway">
        <p className="sectionLabel light">Reflection</p>
        <h2>The most useful part was having to defend a decision, then improve it when the situation became more complex.</h2>
        <p>The coach’s feedback helped me see that a technically valid method is not automatically the best choice. I also had to consider missingness patterns, the cost of model errors, changing production data, privacy, and the people affected by the result.</p>
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Project overview</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> Solving Real-World Data Challenges Through an AI Coach<br/><br/><b>Introduction & description:</b> This artifact reflects on an interactive SchoolAI activity in which I responded to three data challenge scenarios, explained my decisions, received feedback, and refined my approach. The scenarios focused on missing data, an imbalanced fraud dataset, and data and concept drift in a deployed model.</p>
        <div className="detailGrid">{details.map(([label, text], index) => <div className="detail" key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><p>Artifact 05 · AI-Guided Data Challenge Scenarios</p><a href={`${basePath}/`}>Return to portfolio →</a></footer>
    </main>
  );
}
