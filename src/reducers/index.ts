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
//todo - убрать базовую книгу
export const initialState = {
  books: [],
  loading: true,
  error: null,
  cardItems: [
    {
      id: null,
      count: 0,
      total: undefined,
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

    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const book: any = state.books.find(
        (book: bookType) => book.id === bookId
      );
      const itemIndex = state.cardItems.findIndex(({ id }) => id === bookId);
      const item = state.cardItems[itemIndex];

      let newItem;

      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price,
        };
      } else {
        newItem = {
          id: bookId,
          title: book.title,
          count: 1,
          total: book.price,
        };
      }

      if (itemIndex < 0) {
        return {
          ...state,
          cardItems: [...state.cardItems, newItem],
        };
      } else {
        return {
          ...state,
          cardItems: [
            ...state.cardItems.slice(0, itemIndex),
            newItem,
            ...state.cardItems.slice(itemIndex + 1),
          ],
        };
      }

      console.log(newItem);

    default:
      return state;
  }
};

export default reducer;
