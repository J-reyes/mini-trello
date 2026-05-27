import styles from "./Card.module.css";
import { useState } from "react";

interface CardProps {
  id: string;
  title: string;
  onDeleteCard: (cardId: string) => void;
  onMoveLeft?: () => void;
  onMoveRight?: () => void;
  onEditCard: (newTitle: string) => void;
}

export default function Card({
  id,
  title,
  onDeleteCard,
  onMoveLeft,
  onMoveRight,
  onEditCard,
}: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  function handleStartEditing() {
    setEditedTitle(title);
    setIsEditing(true);
  }

  function handleSave() {
    if (editedTitle.trim() === "") return;
    onEditCard(editedTitle.trim());
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
            autoFocus
          />
        ) : (
          <span>{title}</span>
        )}
        <button
          className={styles.deleteButton}
          onClick={() => onDeleteCard(id)}
        >
          ×
        </button>
        <button
          className={styles.editButton}
          onMouseDown={(e) => e.preventDefault()}
          onClick={isEditing ? handleSave : handleStartEditing}
        >
          {isEditing ? "✓" : "✎"}
        </button>
      </div>

      <div className={styles.actions}>
        <button onClick={onMoveLeft} disabled={!onMoveLeft}>
          ←
        </button>
        <button onClick={onMoveRight} disabled={!onMoveRight}>
          →
        </button>
      </div>
    </li>
  );
}
