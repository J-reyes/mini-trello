import "./App.css";
import { useReducer } from "react";
import {columnsReducer} from "./reducer";

import Board from "./components/Board/Board";
import type { Column, ColumnId } from "./types";

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
  const [columns, dispatch] = useReducer(columnsReducer, INITIAL_COLUMNS);

  const handleAddCard = (columnId: ColumnId, title: string) => {
    dispatch({ type: 'addCard', columnId, title });
  };
  const handleDeleteCard = (columnId: ColumnId, cardId: string) => {
    dispatch({ type: 'deleteCard', columnId, cardId });
  };
  const handleMoveCard = (cardId: string, sourceColumnId: ColumnId, targetColumnId: ColumnId) => {
    dispatch({ type: 'moveCard', cardId, sourceColumnId, targetColumnId });
  };
  const handleEditCard = (columnId: ColumnId, cardId: string, newTitle: string) => {
    dispatch({ type: 'editCard', columnId, cardId, newTitle });
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
