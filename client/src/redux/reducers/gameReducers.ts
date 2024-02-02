import type { Action, GameState } from './types';

const initState: GameState = {
  game: [],
};

export const authReducers = (state: GameState = initState, action: Action): GameState => {
  switch (action.type) {
    case 'game/load':
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};
