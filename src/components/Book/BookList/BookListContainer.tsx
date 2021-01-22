import React, { useEffect } from "react";
import { book } from "../../../type/type";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import { BookStoreService } from "../../../services/BookStoreServices";
import "./BookList.module.scss";
import WithBookStoreService from "../../hoc";
import { fetchBook} from "../../../actions";
import { compose } from "../../../utils";
import { CircularProgress } from "@material-ui/core";
import ErrorIndcator from "../../ErrorIndicator";

interface IBookListContainer {
  books?: book[];
  loading: boolean;
  error: any;
  fetchBook: () => void;
}
interface IbookList{
  books?: book[];
}
const BookListContainer: React.FC<IBookListContainer> = ({
  books,
  error,
  loading,
  fetchBook,
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
  return (

    <BookLIst books={books} />
  );
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
    fetchBook: fetchBook(bookStoreService, dispatch)
  };
};

const BookLIst:React.FC<IbookList> = ({ books }) => {
  return (
    <>
    {books?.map((books) => {
      return <BookListItem key={books.id} book={books} />;
    })}
  </>
  )
}

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
