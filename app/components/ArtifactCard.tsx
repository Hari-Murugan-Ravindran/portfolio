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
  return (
    <article className="artifactCard">
      <div className="artifactCardVisual" aria-hidden="true">
        <span className="cardNumber">{artifact.number}</span>
        {artifact.visual === "timeline" && (
          <>
            <div className="cardOrb"></div>
            <div className="cardTimeline"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </>
        )}
        {artifact.visual === "report" && (
          <div className="cardReport">
            <span>AI LAB REPORT</span>
            <strong>World Cup<br/>Business Coach</strong>
            <div><i>AI</i><i>UX</i><i>GPT</i></div>
            <small>Design thinking · 13 pages</small>
          </div>
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
