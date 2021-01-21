import { Container, Grid } from "@material-ui/core";
import React from "react";
import { BookList } from "../Book";
import Header from "../Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Header item={5} sum={290} />
    <Container>
      <Grid container>
        <Grid item>Главная страница</Grid>
      </Grid>
      <Grid container spacing={2}>
        <BookList />
      </Grid>
      </Container>
      </>
  );
};

export default HomePage;
