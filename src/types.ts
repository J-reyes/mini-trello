export type Card = {
    id: string;
    title: string;
};

export type ColumnId = 'todo' | 'inProgress' | 'done';

export type Column = {
    id: ColumnId;
    title: string;
    cards: Card[];
};

export const COLUMN_ORDER: ColumnId[] = ['todo', 'inProgress', 'done'];