import { useState } from "react";
import styles from "./AddCardForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Add a card..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Card
      </button>
    </form>
  );
}
