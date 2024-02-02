export type Theme = {
  id: number;
  title: string;
};

export type User = {
  id: number;
  email: string;
  password: string;
  score: number;
};

export type Question = {
  id: number;
  question: string;
  answer: string;
  price: number;
  status: boolean;
};
