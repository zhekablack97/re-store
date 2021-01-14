import React from "react";
import { BookList } from "../Book";

const HomePage: React.FC = () => {
  return (
    <div>
      Главная страница
      <BookList />
    </div>
  );
};

export default HomePage;
