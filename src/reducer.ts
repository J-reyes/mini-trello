import type {Column, ColumnId} from "./types";


export type Action =
    | {type: 'addCard', columnId: ColumnId, title: string}
    | {type: 'deleteCard', columnId: ColumnId, cardId: string}
    | {type: 'editCard', columnId: ColumnId, cardId: string, newTitle: string}
    | {type: 'moveCard', cardId: string, sourceColumnId: ColumnId, targetColumnId: ColumnId};


export function columnsReducer(state: Column[], action: Action): Column[] {
    switch (action.type) {
        case 'addCard':
            return state.map((column) =>
                column.id === action.columnId
                    ? {
                        ...column,
                        cards: [...column.cards, {id: crypto.randomUUID(), title: action.title}],
                    }
                    : column,
            );
        case 'deleteCard':
            return state.map((column) =>
                column.id === action.columnId
                    ? {
                        ...column,
                        cards: column.cards.filter((card) => card.id !== action.cardId),
                    }
                    : column,
            );
        case 'editCard':
            return state.map((column) =>
                column.id === action.columnId
                    ? {
                        ...column,
                        cards: column.cards.map((card) => card.id === action.cardId ? { ...card, title: action.newTitle } : card),
                    }
                    : column,
            );
        case 'moveCard': {
            const sourceColumn = state.find((column) => column.id === action.sourceColumnId)
            const card = sourceColumn?.cards.find((card) => card.id === action.cardId)
            if (!card) return state;

            return state.map((column) => {
                if (column.id === action.sourceColumnId) {
                    return {
                        ...column,
                        cards: column.cards.filter((card) => card.id !== action.cardId),
                    }
                }
                if (column.id === action.targetColumnId) {
                    return {
                        ...column,
                        cards: [...column.cards, card],
                    }
                }
                return column;
            })
        }
        default: {
            const _exhaustiveCheck: never = action;
            return _exhaustiveCheck;
    }
  }
}