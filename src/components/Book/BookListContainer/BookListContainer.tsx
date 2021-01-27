import React, { useEffect } from "react";
import { bookType } from "../../../type/type";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import { BookStoreService } from "../../../services/BookStoreServices";
import "./BookList.module.scss";
import WithBookStoreService from "../../hoc";
import { fetchBook, onAddedToCart } from "../../../actions";
import { compose } from "../../../utils";
import { CircularProgress } from "@material-ui/core";
import ErrorIndcator from "../../ErrorIndicator";

interface IBookListContainer {
  books?: bookType[];
  loading: boolean;
  error: any;
  fetchBook: () => void;
  onAddedToCart: (id: number) => void;
}
interface IbookList {
  books?: bookType[];
  onAddedToCart: (id: number) => void;
}
const BookListContainer: React.FC<IBookListContainer> = ({
  books,
  error,
  loading,
  fetchBook,
  onAddedToCart
}) => {
  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <ErrorIndcator />;
  }
  return <BookLIst onAddedToCart={onAddedToCart} books={books} />;
};

const mapStateToProps = ({ books, loading, error }: any) => {
  return { books, loading, error };
};

const mapDispatchToProps = (
  dispatch: any,
  ownProps: { bookStoreService: BookStoreService }
) => {
  const { bookStoreService } = ownProps;
  return {
    fetchBook: fetchBook(bookStoreService, dispatch),
    onAddedToCart: (id:number) => dispatch(onAddedToCart(id))
  };
};

const BookLIst: React.FC<IbookList> = ({ books, onAddedToCart }) => {
  return (
    <>
      {books?.map((books) => {
        return <BookListItem key={books.id} onAddedToCart={() => onAddedToCart(books.id)} book={books} />;
      })}
    </>
  );
};

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
