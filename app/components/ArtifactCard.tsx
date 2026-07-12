export type ArtifactCardData = {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  focus: string;
  href: string;
  buttonLabel: string;
  visual?: "timeline" | "report";
};

export function ArtifactCard({ artifact }: { artifact: ArtifactCardData }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <article className="artifactCard">
      <div className="artifactCardVisual" aria-hidden="true">
        <span className="cardNumber">{artifact.number}</span>
        {artifact.visual === "timeline" && (
          <div className="submittedThumb timelineDocument"><img src={`${basePath}/artifacts/timeline-page-1.png`} alt="" /></div>
        )}
        {artifact.visual === "report" && (
          <div className="submittedThumb reportDocument"><img src={`${basePath}/artifacts/world-cup-business-coach-preview.png`} alt="" /></div>
        )}
      </div>
      <div className="artifactCardContent">
        <p className="cardKicker">Artifact {artifact.number} · {artifact.category}</p>
        <h3>{artifact.title}</h3>
        <p className="cardSubtitle">{artifact.subtitle}</p>
        <p>{artifact.description}</p>
        <div className="cardMeta">
          <span><b>Format</b>{artifact.format}</span>
          <span><b>Focus</b>{artifact.focus}</span>
        </div>
        <a className="button cardButton" href={artifact.href}>{artifact.buttonLabel} <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}
