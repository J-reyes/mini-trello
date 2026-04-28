import { useState } from "react";

interface AddCardFormProps {
  onAddCard: (title: string) => void;
}

export default function AddCardForm({ onAddCard }: AddCardFormProps) {
  const [title, setTitle] = useState("");


  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title.trim() === "") return;
    onAddCard(title.trim());
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}
