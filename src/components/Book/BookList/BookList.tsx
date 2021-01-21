import React, { useEffect } from "react";
import { book } from "../../../type/type";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import { BookStoreService } from "../../../services/BookStoreServices";
import "./BookList.module.scss";
import WithBookStoreService from "../../hoc";
import { booksLoader, booksRequested, booksError } from "../../../actions";
import { compose } from "../../../utils";
import { CircularProgress } from "@material-ui/core";
import ErrorIndcator from "../../ErrorIndicator";

interface IBookListWrapper {
  books?: book[];
  bookStoreService: BookStoreService;
  booksLoader: (
    newBooks: any
  ) => {
    type: string;
    payload: any;
  };
  booksRequested: () => {
    type: string;
  };
  booksError: (
    error: any
  ) => {
    type: string;
    payload: any;
  };
  loading: boolean;
  error: any;
}

const BookList: React.FC<IBookListWrapper> = ({
  books,
  bookStoreService,
  booksLoader,
  booksRequested,
  booksError,
  error,
  loading,
}) => {
  useEffect(() => {
    booksRequested();
    bookStoreService
      .getBooks()
      .then((data) => {
        booksLoader(data);
      })
      .catch((error) => booksError(error));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <ErrorIndcator />
  }
  return (
    <>
      {books?.map((books) => {
        return <BookListItem key={books.id} book={books} />;
      })}
    </>
  );
};

const mapStateToProps = ({ books, loading, error }: any) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoader,
  booksRequested,
  booksError,
};

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
