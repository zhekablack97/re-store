import { actionType, book, booksLoaderType } from "../type/type";
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
  loading: true,
  error: null,
};

const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        books: [],
        loading: true,
        error: null,
      };
    case "BOOKS_LOADER":
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case "BOOKS_ERROR":
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
