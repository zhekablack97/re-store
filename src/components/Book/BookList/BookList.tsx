import React, { useEffect } from "react";
import { book } from "../../../type/type";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import { BookStoreService } from "../../../services/BookStoreServices";
import "./BookList.module.scss";
import WithBookStoreService from "../../hoc";
import { booksLoader } from "../../../actions";
import { compose } from "../../../utils";
import { List } from "@material-ui/core";

interface IBookListWrapper {
  books?: book[];
  bookStoreService: BookStoreService;
}

const BookList: React.FC<IBookListWrapper> = ({ books, bookStoreService }) => {
  useEffect(() => {
    const data = bookStoreService.getBooks();
    booksLoader(data);
  });

  return (
    <List>
      {books?.map((book) => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </List>
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
