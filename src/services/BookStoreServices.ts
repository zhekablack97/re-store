export class BookStoreService {
  getBooks() {
    return [
      {
        author: "Синсеро Джен",
        title:
          "НИ СЫ. Будь уверен в своих силах и не позволяй сомнениям мешать тебе двигаться вперед",
        id: 1,
        price: 400,
      },
      {
        author: "Мэнсон Марк",
        title:
          "Тонкое искусство пофигизма. Парадоксальный способ жить счастливо ",
        id: 2,
        price: 450,
      },
    ];
  }
}
