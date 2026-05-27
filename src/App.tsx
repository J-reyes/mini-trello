import "./App.css";
import { useState } from "react";
import type { Column, ColumnId } from "./types";

import Board from "./components/Board/Board";

const INITIAL_COLUMNS: Column[] = [
  {
    id: "todo",
    title: "Todo",
    cards: [
      { id: "1", title: "Wireframe the new dashboard" },
      { id: "2", title: "Write release notes for v1.2" },
    ],
  },
  {
    id: "inProgress",
    title: "In Progress",
    cards: [{ id: "3", title: "Refactor auth middleware" }],
  },
  {
    id: "done",
    title: "Done",
    cards: [{ id: "4", title: "Set up CI pipeline" }],
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

  const handleDeleteCard = (columnId: ColumnId, cardId: string) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              cards: column.cards.filter((card) => card.id !== cardId),
            }
          : column,
      ),
    );
  };

  const handleEditCard = (
    columnId: ColumnId,
    cardId: string,
    newTitle: string,
  ) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              cards: column.cards.map((card) =>
                card.id === cardId ? { ...card, title: newTitle } : card,
              ),
            }
          : column,
      ),
    );
  };

  const handleMoveCard = (
    cardId: string,
    sourceColumnId: ColumnId,
    targetColumnId: ColumnId,
  ) => {
    setColumns((prev) => {
      const sourceColumn = prev.find((column) => column.id === sourceColumnId);
      const card = sourceColumn?.cards.find((card) => card.id === cardId);
      if (!card) return prev;

      return prev.map((column) => {
        if (column.id === sourceColumnId) {
          return {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
          };
        }
        if (column.id === targetColumnId) {
          return {
            ...column,
            cards: [...column.cards, card],
          };
        }
        return column;
      });
    });
  };

  return (
    <div className="app">
      <h1>Mini Trello</h1>
      <p>A simple board for tracking work in progress.</p>
      <Board
        columns={columns}
        onAddCard={handleAddCard}
        onDeleteCard={handleDeleteCard}
        onMoveCard={handleMoveCard}
        onEditCard={handleEditCard}
      />
    </div>
  );
}

export default App;
