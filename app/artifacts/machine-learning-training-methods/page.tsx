const studyStages = [
  ["Ask", "I began with the required questions about how supervised, unsupervised, and reinforcement learning models are trained."],
  ["Reason", "I compared the methods in my own words and explained why labeled data, unlabeled data, or rewards change how a model learns."],
  ["Connect", "I linked the explanations to familiar applications such as spam filtering, customer segmentation, and teaching a robot to walk."],
  ["Extend", "I asked follow-up questions about evaluation, model drift, retraining, large language models, and retrieval-augmented generation."],
];

const methods = [
  {
    number: "01",
    title: "Supervised learning",
    signal: "Labeled examples",
    explanation: "The model receives inputs together with the correct outputs. It compares predictions with known answers and adjusts itself to reduce future errors.",
    example: "A spam filter learns from messages already labeled as spam or not spam.",
  },
  {
    number: "02",
    title: "Unsupervised learning",
    signal: "Patterns without labels",
    explanation: "The model works without an answer key and searches for useful structure, similarities, clusters, or relationships in the data.",
    example: "Customer segmentation groups shoppers by similar behavior without predefined categories.",
  },
  {
    number: "03",
    title: "Reinforcement learning",
    signal: "Rewards and penalties",
    explanation: "An agent interacts with an environment, tries actions, and learns which choices produce the highest long-term reward.",
    example: "A robot can learn to walk by receiving feedback for stable movement or falling.",
  },
];

const takeaways = [
  ["Algorithms guide learning", "An algorithm provides the steps for processing data, measuring error, and deciding how the model should change."],
  ["Examples shape the result", "The quality and variety of training data influence which patterns a model learns and how well it works on new cases."],
  ["Repetition refines learning", "Repeated passes through training data give the model opportunities to correct errors and improve its internal settings."],
  ["Evaluation checks understanding", "Testing on unseen data helps show whether a model learned general patterns or only memorized its training examples."],
];

const details = [
  ["Objective", "Use AI guidance to connect machine learning theory to real-world scenarios and strengthen understanding through meaningful dialogue."],
  ["Process", "I completed an interactive study session with a pre-trained AI coach, responded to each required topic, explained my reasoning, and asked follow-up questions when I wanted to explore an idea further."],
  ["Challenge", "The activity required more than collecting answers. I needed to stay engaged, compare ideas, question the explanations, and show that I understood how the concepts connect."],
  ["Solution", "I treated the chatbot as a study partner. I summarized concepts in my own words and used follow-up questions to move from basic training methods into evaluation, retraining, and modern AI systems."],
  ["Tools & technologies", "SchoolAI Machine Learning Training Methods Coach, course learning materials, machine learning concepts, and web portfolio design."],
  ["Value Proposition", "The artifact shows how a guided AI conversation can turn a fixed list of questions into an active, self-paced learning experience."],
  ["Unique value", "It captures both the technical concepts learned and the questioning process used to move beyond the required prompts."],
  ["Relevance", "The experience demonstrates AI collaboration, critical questioning, independent reasoning, digital literacy, and clear technical communication."],
];

export default function MachineLearningTrainingMethodsArtifact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <nav className="nav artifactNav" aria-label="Artifact navigation">
        <a className="brand" href={`${basePath}/`} aria-label="Portfolio home"><span>HR</span> Hari Murugan Ravindran</a>
        <div className="navlinks"><a href={`${basePath}/`}>← All artifacts</a><a href="#experience">Study experience</a><a href="#learning">What I learned</a><a href="#details">Artifact details</a></div>
      </nav>

      <section className="artifactIntro artifactPageHero trainingHero" id="top">
        <a className="backLink" href={`${basePath}/`}>← Back to portfolio</a>
        <p className="sectionLabel light">Artifact 04 · AI-guided learning & critical thinking</p>
        <div className="artifactHeading">
          <div><h1>Learning Machine Learning<br/>Through an AI Coach.</h1><p className="subtitle">An interactive study experience built around questions, reasoning, and follow-up</p></div>
          <p className="audience"><b>Designed for</b><br/>Students and professionals interested in how a guided AI conversation can support active learning and technical understanding.</p>
        </div>
        <div className="projectActions"><a className="button pdfButton" href="#experience">Explore the study experience <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="coachEvidence" id="experience">
        <div className="evidenceCopy"><p className="sectionLabel">The interactive activity</p><h2>A chatbot became<br/>my study partner.</h2><p>Instead of reading a traditional lesson, I entered a guided SchoolAI space and worked through the topic by conversation. The coach introduced each question, responded to my reasoning, and helped me explore related ideas at my own pace.</p><p>The value came from the interaction. I did not only receive definitions. I compared methods, explained connections, and asked new questions when an answer raised another issue I wanted to understand.</p></div>
        <figure className="evidenceFrame"><img src={`${basePath}/artifacts/machine-learning-training-coach.png`} alt="SchoolAI Machine Learning Training Methods activity by Sandra Metzger"/><figcaption>SchoolAI · AIML-500 Machine Learning Training Methods activity</figcaption></figure>
      </section>

      <section className="dialogueProcess">
        <p className="sectionLabel light">How I engaged</p><h2>From required questions<br/>to independent exploration.</h2>
        <div className="dialogueGrid">{studyStages.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="methodsSection" id="learning">
        <div className="overviewHeading">
          <div><p className="sectionLabel">What I learned</p><h2>Three methods.<br/>Three kinds of guidance.</h2></div>
          <p>The conversation helped me see that the main difference is the learning signal. A model may learn from correct answers, discover patterns without labels, or improve through rewards and penalties.</p>
        </div>
        <div className="methodsGrid">
          {methods.map((method) => <article className="methodCard" key={method.title}><div className="methodNumber">{method.number}</div><p className="methodSignal">{method.signal}</p><h3>{method.title}</h3><p>{method.explanation}</p><div className="methodExample"><b>Example</b><span>{method.example}</span></div></article>)}
        </div>
      </section>

      <section className="foundationsSection">
        <div className="overviewHeading">
          <div><p className="sectionLabel">Learning takeaways</p><h2>Training depends on more<br/>than choosing a model.</h2></div>
          <p>My follow-up questions connected the three methods to the wider training process. Data quality, algorithms, repetition, evaluation, and monitoring all affect whether a model becomes useful.</p>
        </div>
        <div className="foundationGrid">{takeaways.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="learningTakeaway">
        <p className="sectionLabel light">Reflection</p>
        <h2>The strongest part of the activity was being able to question the explanation, not just read it.</h2>
        <p>The chatbot gave immediate feedback, but I still had to decide what made sense, connect it to earlier ideas, and choose which follow-up questions would deepen my understanding. That made the activity more active than a standard question-and-answer exercise.</p>
      </section>

      <section className="artifactDetails" id="details">
        <p className="sectionLabel">Project overview</p><h2>Purpose, process,<br/>and professional value.</h2>
        <p className="intro"><b>Title:</b> Learning Machine Learning Through an AI Coach<br/><br/><b>Introduction & description:</b> This artifact reflects on an interactive SchoolAI study session about machine learning training methods. It shows how I used a pre-trained chatbot to work through required concepts, explain my reasoning, receive immediate feedback, and extend the discussion through independent follow-up questions.</p>
        <div className="detailGrid">{details.map(([label, text], index) => <div className="detail" key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{text}</p></div>)}</div>
      </section>

      <footer><div className="brand"><span>HR</span> Hari Murugan Ravindran</div><p>Artifact 04 · AI-Guided Interactive Study</p><a href={`${basePath}/`}>Return to portfolio →</a></footer>
    </main>
  );
}
