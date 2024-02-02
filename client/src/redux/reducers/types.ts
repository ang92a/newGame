import type { Theme, User } from '../../type';

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'game/load'; payload: Theme[] }
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' };
