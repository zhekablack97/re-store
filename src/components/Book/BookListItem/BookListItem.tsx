import React from "react";
import { Link } from "react-router-dom";
import { book } from "../../../type/type";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import styles from "./BookListItem.module.scss";

interface IBookListItem {
  book: book;
}

const BookListItem: React.FC<IBookListItem> = ({ book }) => {
  const { author, title, price, image } = book;
  console.log("пришли данные от врапера ", book);

  
  return (
    <Grid item md={3}>
      <Card className={styles.card}>
      <CardMedia className={styles.img}  component="img" alt={title} title={title} image={image}/>
        <Typography variant="body1" gutterBottom className={styles.price}>{price} руб.</Typography>
        <Link to="/fdfd" ><Typography variant="body1" gutterBottom className={styles.title}>{title}</Typography>
          </Link>
        <Typography variant="body1" gutterBottom className={styles.title}>{author}</Typography>
      </Card>
    </Grid>
  );
};

export default BookListItem;
