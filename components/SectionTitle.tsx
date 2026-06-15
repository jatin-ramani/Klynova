interface SectionTitleProps {
  title: string;
  description: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="bar"></div>
      <p>{description}</p>
    </div>
  );
}
