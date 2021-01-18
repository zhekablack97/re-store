import { book, booksLoaderType } from "../type/type";
export interface IReducer {
  state: {
    books: book[];
  };
  action: {
    payload: any;
    type: booksLoaderType;
  };
}

export const initialState = {
  books: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "BOOKS_LOADER":
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
