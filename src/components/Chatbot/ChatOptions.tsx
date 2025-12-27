type Option = {
  label: string;
  next: string;
};

type Props = {
  options: Option[];
  onSelect: (next: string) => void;
};

export default function ChatOptions({ options, onSelect }: Props) {
  return (
    <div className="chat-options">
      {options.map((option, index) => (
        <button
          key={index}
          className="chat-button"
          onClick={() => onSelect(option.next)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
