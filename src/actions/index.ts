import { BookStoreService } from "../services/BookStoreServices";

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUESTED",
  };
};
const booksLoader = (newBooks: any) => {
  return {
    type: "FETCH_BOOKS_SUCCES",
    payload: newBooks,
  };
};

const booksError = (error: any) => {
  return {
    type: "FETCH_BOOKS_FAILUERE",
    payload: error,
  };
};

const fetchBook = (bookStoreService: BookStoreService, dispatch: any) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks()
    .then((data) => {
      dispatch(booksLoader(data));
    })
    .catch((error) => dispatch(booksError(error)));
};
export { fetchBook };
