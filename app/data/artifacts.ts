import type { ArtifactCardData } from "../components/ArtifactCard";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const artifacts: ArtifactCardData[] = [
  {
    number: "01",
    category: "Research & communication",
    title: "Timeline of AI Evolution",
    subtitle: "From the Turing Test to AI agents and regulation",
    description: "A visual timeline tracing major developments in artificial intelligence from 1950 through 2024, including neural networks, expert systems, deep learning, generative AI, and modern AI agents.",
    format: "Timeline",
    focus: "AI/ML evolution",
    href: `${basePath}/artifacts/ai-ml-timeline/`,
    buttonLabel: "View Artifact 1",
    thumbnail: "/artifacts/timeline-page-1.png",
    thumbnailClass: "timelineDocument",
  },
  {
    number: "02",
    category: "AI prototyping & design thinking",
    title: "World Cup Business Coach",
    subtitle: "An AI learning assistant for young World Cup fans",
    description: "An AI Lab project documenting the research, prompt experimentation, and design-thinking process used to create a Custom GPT that explains World Cup business concepts to learners ages 10–15.",
    format: "AI Lab Report",
    focus: "AI-assisted learning",
    href: `${basePath}/artifacts/world-cup-business-coach/`,
    buttonLabel: "View Artifact 2",
    thumbnail: "/artifacts/world-cup-business-coach-preview.png",
    thumbnailClass: "reportDocument",
  },
  {
    number: "03",
    category: "Technical analysis & communication",
    title: "Machine Learning and Deep Learning",
    subtitle: "Choosing the right approach through real-world examples",
    description: "A practical comparison of machine learning and deep learning using house price prediction and autonomous driving to explain how data, task complexity, and computing needs influence model selection.",
    format: "Written Analysis",
    focus: "ML/DL comparison",
    href: `${basePath}/artifacts/machine-learning-vs-deep-learning/`,
    buttonLabel: "View Artifact 3",
    thumbnail: "/artifacts/machine-learning-deep-learning-preview.png",
    thumbnailClass: "analysisDocument",
  },
];
