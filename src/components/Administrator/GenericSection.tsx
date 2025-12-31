interface GenericSectionProps {
  title: string;
  buttonText: string;
  onAction: () => void;
}

export default function GenericSection({
  title,
  buttonText,
  onAction,
}: GenericSectionProps) {
  return (
    <div className="table-card">
      <h3 className="fw-bold mb-4">{title}</h3>
      <p className="text-muted">
        Conteúdo da seção {title.toLowerCase()}...
      </p>

      <button className="btn btn-primary" onClick={onAction}>
        {buttonText}
      </button>
    </div>
  );
}
