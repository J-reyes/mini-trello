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
      <div className={styles.header}>
        <span>{title}</span>
        <button className={styles.deleteButton} onClick={() => onDeleteCard(id)}>×</button>
      </div>
      
      <div className={styles.actions}>
        <button onClick={onMoveLeft} disabled={!onMoveLeft}>←</button>
        <button onClick={onMoveRight} disabled={!onMoveRight}>→</button>
      </div>
    </li>
  );
}
