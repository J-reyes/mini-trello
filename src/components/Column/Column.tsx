import type { Card as CardType, ColumnId } from "../../types";
import Card from "../Card/Card";
import styles from "./Column.module.css";
import AddCardForm from "../AddCardForm/AddCardForm";

interface ColumnProps {
  id: ColumnId;
  title: string;
  cards: CardType[];
  onAddCard: (title: string) => void;
  onDeleteCard: (cardId: string) => void;
}

export default function Column({
  id: _id,
  title,
  cards,
  onAddCard,
  onDeleteCard,
}: ColumnProps) {
  return (
    <div className={styles.column}>
      <h2>{title}</h2>
      <ul>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              onDeleteCard={onDeleteCard}
            />
          );
        })}
      </ul>
      <AddCardForm onAddCard={onAddCard} />
    </div>
  );
}
