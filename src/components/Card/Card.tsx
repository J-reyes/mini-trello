import styles from "./Card.module.css";

interface CardProps {
  id: string;
  title: string;
  onDeleteCard: (cardId: string) => void;
  onMoveLeft?: () => void;
  onMoveRight?: () => void;
}

export default function Card({ id, title, onDeleteCard, onMoveLeft, onMoveRight }: CardProps) {
  return (
    <li className={styles.card}>
      {title} 
      <button onClick={() => onDeleteCard(id)}>Delete</button>
      <button onClick={onMoveLeft} disabled={!onMoveLeft}>←</button>
      <button onClick={onMoveRight} disabled={!onMoveRight}>→</button>
    </li>
  );
}
