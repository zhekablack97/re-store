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
    {}
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
    
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const book: any = state.books.find((book: bookType) => book.id === bookId);
      const newItem = {
        id: bookId,
        title: book.title,
        count: 1,
        total: book.price,
      }
      console.log(newItem);
      return {
        ...state,
        cardItems: [
          ...state.cardItems,
          newItem
        ]
      };
    default:
      return state;
  }
};

export default reducer;
