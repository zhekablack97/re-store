import { booksLoaderType } from "../type/type";

export interface IReducer {
  state: {
    books: any;
  };
  action: {
    payload: any;
    type: booksLoaderType;
  };
}

export const initialState = {
  books: [],
};

const reducer = (props: IReducer) => {
  const { action, state } = props;

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
