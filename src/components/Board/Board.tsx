import type { ColumnId, Column as ColumnType } from "../../types";
import Column from "../Column/Column";

import styles from "./Board.module.css";

interface BoardProps {
  columns: ColumnType[];
  onAddCard: (columnId: ColumnId, title: string) => void;
  onDeleteCard: (columnId: ColumnId, cardId: string) => void;
}

export default function Board({ columns, onAddCard, onDeleteCard}: BoardProps) {
  return (
    <div className={styles.board}>
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          cards={column.cards}
          onAddCard={(title) => onAddCard(column.id, title)}
          onDeleteCard={(cardId) => onDeleteCard(column.id, cardId)}
        />
      ))}
    </div>
  );
}
