type Props = {
  message: string;
};

export default function ChatMessage({ message }: Props) {
  return (
    <div className="chat-message">
      {message.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
