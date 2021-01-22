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
    case "FETCH_BOOKS_REQUESTED":
      return {
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCES":
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILUERE":
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
