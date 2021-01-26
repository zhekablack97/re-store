import { actionType, bookType, booksLoaderType } from "../type/type";
export interface IReducer {
  state: {
    books: bookType[];
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
  cardItems: [
    {
      id: 1,
      name: "Book-random",
      count: 3,
      total: 150,
    },
    {
      id: 2,
      name: "Book-random2",
      count: 4,
      total: 550,
    },
  ],
  orderTotal: 220,
};

const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCES":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILUERE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
