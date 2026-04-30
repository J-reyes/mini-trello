import "./App.css";
import { useState } from "react";
import type { Column, ColumnId } from "./types";

import Board from "./components/Board/Board";

const INITIAL_COLUMNS: Column[] = [
  {
    id: "todo",
    title: "Todo",
    cards: [
      {
        id: "1",
        title: "Card 1",
      },
    ],
  },
  {
    id: "inProgress",
    title: "In Progress",
    cards: [
      {
        id: "2",
        title: "Card 2",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      {
        id: "3",
        title: "Card 3",
      },
    ],
  },
];

function App() {
  const [columns, setColumns] = useState<Column[]>(INITIAL_COLUMNS);

  const handleAddCard = (columnId: ColumnId, title: string) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              cards: [...column.cards, { id: crypto.randomUUID(), title }],
            }
          : column,
      ),
    );
  };

  return (
    <>
      <Board columns={columns} onAddCard={handleAddCard} />
    </>
  );
}

export default App;
