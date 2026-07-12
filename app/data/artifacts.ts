import type { ArtifactCardData } from "../components/ArtifactCard";

export const artifacts: ArtifactCardData[] = [
  {
    number: "01",
    category: "Research & communication",
    title: "Timeline of AI Evolution",
    subtitle: "From the Turing Test to AI agents and regulation",
    description: "A four-page visual timeline tracing major developments in artificial intelligence from 1950 through 2024, including neural networks, expert systems, deep learning, generative AI, and modern AI agents.",
    format: "Four-page PDF timeline",
    focus: "AI/ML evolution",
    href: "/artifacts/ai-ml-timeline",
    buttonLabel: "View Artifact 1",
    visual: "timeline",
  },
  {
    number: "02",
    category: "AI prototyping & design thinking",
    title: "World Cup Business Coach",
    subtitle: "An AI learning assistant for young World Cup fans",
    description: "An AI Lab project documenting the research, prompt experimentation, and design-thinking process used to create a Custom GPT that explains World Cup business concepts to learners ages 10–15.",
    format: "13-page AI Lab report",
    focus: "AI-assisted learning",
    href: "/artifacts/world-cup-business-coach",
    buttonLabel: "View Artifact 2",
    visual: "report",
  },
];
