import { Card, Grid } from "@material-ui/core";
import React from "react";
import { book } from "../../../type/type";
import styles from "./BookListItem.module.scss";

interface IBookListItem {
  book: book;
}

const BookListItem: React.FC<IBookListItem> = ({ book }) => {
  const { author, title, price } = book;
  console.log("пришли данные от врапера ",book)
  return (
    <Grid item md={3}>
      <Card className={styles.card}>
        <span>
          {price}
          </span>
      <span>{title}</span>
      <span>{author}</span>
      </Card>
      </Grid>
  );
};

export default BookListItem;
