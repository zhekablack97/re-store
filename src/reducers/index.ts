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
  books: [
    {
      author: "Синсеро Джен",
      title:
        "НИ СЫ. Будь уверен в своих силах и не позволяй сомнениям мешать тебе двигаться вперед",
      id: 1,
    },
    {
      author: "Мэнсон Марк",
      title:
        "Тонкое искусство пофигизма. Парадоксальный способ жить счастливо ",
      id: 2,
    },
  ],
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
