import styles from "./Card.module.css";

interface CardProps {
  id: string;
  title: string;
  onDeleteCard: (cardId: string) => void;
}

export default function Card({ id, title, onDeleteCard }: CardProps) {
  return (
    <li className={styles.card}>
      {title} 
      <button onClick={() => onDeleteCard(id)}>Delete</button>
    </li>
  );
}
