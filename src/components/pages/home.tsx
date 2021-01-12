import React from "react";
import { BookList } from "../Book";

const HomePage: React.FC = () => {
  const books = [
    {
      author: "Синсеро Джен",
      title:
        "НИ СЫ. Будь уверен в своих силах и не позволяй сомнениям мешать тебе двигаться вперед",
      id: 1,
    },
    {
      author: "Мэнсон Марк",
      title:
        "Тонкое искусство пофигизма. Парадоксальный способ жить счастливо ",
      id: 2,
    },
  ];
  return (
    <div>
      Главная страница
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
