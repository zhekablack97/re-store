const booksLoader = (newBooks: any) => {
  return {
    type: "BOOKS_LOADER",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};
const booksError = (error: any) => {
  return {
    type: "BOOKS_ERROR",
    payload: error,
  };
};
export { booksLoader, booksRequested, booksError };
