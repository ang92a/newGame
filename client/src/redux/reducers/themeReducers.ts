import type { Action, ThemeState } from './types';

const initState: ThemeState = {
  theme: [],
};

export const themeReducers = (state: ThemeState = initState, action: Action): ThemeState => {
  switch (action.type) {
    case 'theme/load':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
