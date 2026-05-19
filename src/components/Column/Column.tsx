import type { Card as CardType, ColumnId } from "../../types";
import { COLUMN_ORDER } from "../../types";
import Card from "../Card/Card";
import styles from "./Column.module.css";
import AddCardForm from "../AddCardForm/AddCardForm";

interface ColumnProps {
  id: ColumnId;
  title: string;
  cards: CardType[];
  onAddCard: (title: string) => void;
  onDeleteCard: (cardId: string) => void;
  onMoveCard: (cardId: string, targetColumnId: ColumnId) => void;
}

export default function Column({
  id,
  title,
  cards,
  onAddCard,
  onDeleteCard,
  onMoveCard,
}: ColumnProps) {

  const idx = COLUMN_ORDER.indexOf(id);
  const leftColumnId: ColumnId | undefined = idx > 0 ? COLUMN_ORDER[idx - 1] : undefined;
  const rightColumnId: ColumnId | undefined = idx < COLUMN_ORDER.length - 1 ? COLUMN_ORDER[idx + 1] : undefined;

  return (
    <div className={styles.column} data-id={id}>
      <h2>{title}</h2>
      <ul>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              onDeleteCard={onDeleteCard}
              onMoveLeft={leftColumnId ? () => onMoveCard(card.id, leftColumnId) : undefined}
              onMoveRight={rightColumnId ? () => onMoveCard(card.id, rightColumnId) : undefined}
            />
          );
        })}
      </ul>
      <AddCardForm onAddCard={onAddCard} />
    </div>
  );
}
