const methods = [
  {
    number: "01",
    title: "Supervised learning",
    signal: "Labeled examples",
    explanation: "The model receives inputs together with the correct outputs. It compares its predictions with the known answers and adjusts itself to reduce future errors.",
    example: "Email spam filtering uses messages labeled as spam or not spam so the model can learn which patterns separate the two groups.",
  },
  {
    number: "02",
    title: "Unsupervised learning",
    signal: "Patterns without labels",
    explanation: "The model works with data that has no answer key. Its job is to find useful structure, similarities, clusters, or relationships within the data.",
    example: "Customer segmentation can group shoppers by similar behavior without being told in advance which customer groups exist.",
  },
  {
    number: "03",
    title: "Reinforcement learning",
    signal: "Rewards and penalties",
    explanation: "An agent interacts with an environment, tries different actions, and learns which choices produce the highest long-term reward.",
    example: "A robot can learn to walk by receiving positive feedback for stable forward movement and negative feedback when it falls.",
  },
];

const trainingSteps = [
  ["Prepare the data", "Collect, clean, organize, and check the examples that will be used for learning."],
  ["Select an approach", "Choose a model and algorithm that fit the data, task, and available resources."],
  ["Train the model", "Feed the data into the model and use the algorithm to adjust its internal parameters."],
  ["Evaluate performance", "Test the model with unseen data to measure whether it learned patterns that generalize."],
  ["Tune and repeat", "Adjust settings, train again, and compare results until performance stops improving."],
  ["Monitor and retrain", "Watch performance after use and retrain when new data or model drift reduces accuracy."],
];

const foundations = [
  ["Algorithms guide learning", "An algorithm provides the mathematical procedure for processing data, measuring error, and deciding how the model should change."],
  ["Examples shape the model", "Training data is the source of the patterns a model learns. Accurate and representative examples improve its chance of working well on new cases."],
  ["Repetition improves the fit", "Each pass through the data, called an epoch, gives the model another opportunity to correct errors and refine what it has learned."],
  ["Evaluation needs the right metric", "Classification tasks may use accuracy, precision, and recall. Regression tasks may use measures such as mean absolute error or root mean squared error."],
];

const details = [
  ["Objective", "Build a clear understanding of how supervised, unsupervised, and reinforcement learning models are trained and improved."],
  ["Process", "I worked through a guided learning activity, connected each method to a practical example, and followed the training process from data preparation through monitoring."],
  ["Challenge", "The three methods all learn from experience, but they use different types of feedback. It can be difficult to see where one approach ends and another begins."],
  ["Solution", "I organized the ideas by learning signal, real-world example, and training stage so the differences can be compared without relying on lengthy technical definitions."],
  ["Tools & technologies", "Course learning materials, a guided AI learning environment, machine learning training concepts, and web portfolio design."],
  ["Value Proposition", "The guide gives new learners a practical overview of how models learn, how performance is checked, and why training may need to continue over time."],
  ["Unique value", "It connects the three main learning methods with the shared training cycle, showing both how they differ and what they have in common."],
  ["Relevance", "The artifact demonstrates conceptual understanding, critical questioning, comparison, and the ability to turn a learning activity into a useful professional resource."],
];

export default function MachineLearningTrainingMethodsArtifact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation">
        <a className="brand" href={`${basePath}/`} aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a>
        <div className="navlinks"><a href={`${basePath}/`}>← All artifacts</a><a href="#methods">Methods</a><a href="#cycle">Training cycle</a><a href="#details">Artifact details</a></div>
      </nav>

      <section className="artifactIntro artifactPageHero trainingHero" id="top">
        <a className="backLink" href={`${basePath}/`}>← Back to portfolio</a>
        <p className="sectionLabel light">Artifact 04 · Machine learning foundations</p>
        <div className="artifactHeading">
          <div><h1>How Machine<br/>Learning Models Learn.</h1><p className="subtitle">Training methods, feedback, evaluation, and improvement</p></div>
          <p className="audience"><b>Designed for</b><br/>Students and early-career professionals who want a practical introduction to the main ways machine learning models are trained.</p>
        </div>
        <div className="projectActions"><a className="button pdfButton" href="#methods">Explore the training methods <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="methodsSection" id="methods">
        <div className="overviewHeading">
          <div><p className="sectionLabel">Three learning signals</p><h2>Different ways<br/>to learn from experience.</h2></div>
          <p>The main difference between these methods is the kind of guidance the model receives. Some models learn from correct answers, some search for structure, and others learn from the results of their actions.</p>
        </div>
        <div className="methodsGrid">
          {methods.map((method) => <article className="methodCard" key={method.title}><div className="methodNumber">{method.number}</div><p className="methodSignal">{method.signal}</p><h3>{method.title}</h3><p>{method.explanation}</p><div className="methodExample"><b>Example</b><span>{method.example}</span></div></article>)}
        </div>
      </section>

      <section className="trainingCycle" id="cycle">
        <div><p className="sectionLabel light">Training cycle</p><h2>From raw data<br/>to a working model.</h2><p className="cycleIntro">Training is not a single action. It is a cycle of preparing, measuring, adjusting, and checking again.</p></div>
        <div className="cycleSteps">
          {trainingSteps.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="foundationsSection">
        <div className="overviewHeading">
          <div><p className="sectionLabel">What makes training work</p><h2>Data provides the examples.<br/>Algorithms guide the change.</h2></div>
          <p>A model improves when the training process combines useful data, an appropriate algorithm, repeated practice, and an evaluation method that matches the real task.</p>
        </div>
        <div className="foundationGrid">{foundations.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="learningTakeaway">
        <p className="sectionLabel light">Key takeaway</p>
        <h2>A model is only as useful as the examples, feedback, and evaluation behind it.</h2>
        <p>Good training is not just about choosing a powerful model. It also requires representative data, a clear learning objective, repeated testing, and continued monitoring when the real world changes.</p>
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Project overview</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> How Machine Learning Models Learn<br/><br/><b>Introduction & description:</b> This web learning guide explains supervised, unsupervised, and reinforcement learning through their different learning signals and real-world applications. It also shows how data preparation, algorithms, repetition, evaluation, tuning, and monitoring work together during the life of a machine learning model.</p>
        <div className="detailGrid">{details.map(([label, text], index) => <div className="detail" key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><p>Artifact 04 · Machine Learning Training Methods</p><a href={`${basePath}/`}>Return to portfolio →</a></footer>
    </main>
  );
}
