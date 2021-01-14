import { CircularProgress } from "@material-ui/core";
import React from "react";
import { book } from "../../../type/type";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";

import "./BookList.module.scss";
import WithBookStoreService from "../../hoc";
import { booksLoader } from "../../../actions";
import { compose } from "../../../utils";

interface IBookListWrapper {
  books?: book[];
}

const BookList: React.FC<IBookListWrapper> = ({ books }) => {
  return (
    <div>
      {books?.map((book) => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log("state - ", state)
  return {
    books: state.books,
  };
};

const mapDispatchToProps = {
  booksLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
