import { Container, Grid } from "@material-ui/core";
import React from "react";
import { BookList } from "../Book";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Grid container >
        <Grid item>
          Главная страница
        </Grid>
        </Grid>
      <Grid container spacing={2}>
        <BookList />
        </Grid>
    </Container>
  );
};

export default HomePage;
