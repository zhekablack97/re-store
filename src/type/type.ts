export type booksLoaderType =
  | "FETCH_BOOKS_SUCCES"
  | "FETCH_BOOKS_REQUESTED"
  | "FETCH_BOOKS_FAILUERE"
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
