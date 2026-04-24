import type { Column as ColumnType } from "../../types";
import Column from "../Column/Column";

import styles from "./Board.module.css";

interface BoardProps {
  columns: ColumnType[];
}

export default function Board({ columns }: BoardProps) {
  return (
    <div className={styles.board}>
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          cards={column.cards}
        />
      ))}
    </div>
  );
}
