import './App.css'
import { useState } from 'react';
import type { Column } from './types';

import Board from './components/Board/Board';

const INITIAL_COLUMNS: Column[] = [
  {
    id: 'todo',
    title: 'Todo',
    cards: [
      {
        id: '1',
        title: 'Card 1',
      },
    ],
  },
  {
    id: 'inProgress',
    title: 'In Progress',
    cards: [
      {
        id: '2',
        title: 'Card 2',
      }
    ],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [
      {
        id: '3',
        title: 'Card 3',
      },
    ],
  },
];

function App() {
  const [columns, setColumns] = useState<Column[]>(INITIAL_COLUMNS);


  return (
    <>
      <Board columns={columns} />
    </>
  )
}

export default App
