export type booksLoaderType =
  | "FETCH_BOOKS_SUCCES"
  | "FETCH_BOOKS_REQUESTED"
  | "FETCH_BOOKS_FAILUERE"
  | "BOOK_ADDED_TO_CART" | "";
export type actionType = {
  payload: any;
  type: booksLoaderType;
};
export type bookType = {
  author: string;
  title: string;
  price: string;
  id: number;
  image: string;
};
export type cardItemsType = {
  id: number;
  name: string;
  count: number;
  total: number;
};
