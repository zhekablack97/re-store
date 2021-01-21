export class BookStoreService {
  getBooks() {
    return [
      {
        author: "Синсеро Джен",
        title:
          "НИ СЫ. Будь уверен в своих силах и не позволяй сомнениям мешать тебе двигаться вперед",
        id: 1,
        price: 400,
        image: "https://cdn1.ozone.ru/s3/multimedia-e/wc1200/6020009318.jpg"
      },
      {
        author: "Мэнсон Марк",
        title:
          "Тонкое искусство пофигизма. Парадоксальный способ жить счастливо ",
        id: 2,
        price: 450,
        image: "https://cdn1.ozone.ru/multimedia/wc1200/1037908934.jpg"
      },
    ];
  }
}
