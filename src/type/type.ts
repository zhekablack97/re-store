export type booksLoaderType =
  | "BOOKS_LOADER"
  | "BOOKS_REQUESTED"
  | "BOOKS_ERROR"
  | "";
export type actionType = {
  payload: any;
  type: booksLoaderType;
};
export type book = {
  author: string;
  title: string;
  price: string;
  id: number;
  image: string;
};
