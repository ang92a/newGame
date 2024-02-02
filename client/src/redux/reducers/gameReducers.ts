import type { Action, GameState } from './types';

const initState: GameState = {
  game: [],
};

export const gameReducers = (state: GameState = initState, action: Action): GameState => {
  switch (action.type) {
    case 'game/load':
      return {
        ...state,
        game: action.payload,
      };
    default:
      return state;
  }
};
