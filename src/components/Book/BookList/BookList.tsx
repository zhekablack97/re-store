import React, { Component, useEffect } from "react";
import { book } from "../../../type/type";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import { BookStoreService } from "../../../services/BookStoreServices";
import "./BookList.module.scss";
import WithBookStoreService from "../../hoc";
import { booksLoader } from "../../../actions";
import { compose } from "../../../utils";
import { Grid, List } from "@material-ui/core";

interface IBookListWrapper {
  books?: book[];
  bookStoreService: BookStoreService;
  booksLoader: any;
}

const BookList: React.FC<IBookListWrapper> = ({
  books,
  bookStoreService,
  booksLoader,
}) => {
  useEffect(() => {
    const data = bookStoreService.getBooks();
    booksLoader(data);
  }, []);

  return (
    <>
      {books?.map((books) => {
        return <BookListItem key={books.id} book={books} />;
      })}
    </>
  );
};

const mapStateToProps = ({ books }: any) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoader,
};

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
