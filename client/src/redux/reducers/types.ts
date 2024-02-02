import type { Question, Theme, User } from '../../type';

export type AuthState = {
  auth: User | undefined;
};

export type GameState = {
  game: Theme[];
};

export type ThemeState = {
  theme: Question[];
};

export type Action =
  | { type: 'game/load'; payload: Theme[] }
  | { type: 'theme/load'; payload: Question[] }
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' };
