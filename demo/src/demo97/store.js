import { defineStore } from "pinia";
const allBooks = [
    { author: "Фёдор Достоевский", title: "Преступление и наказание" },
    { author: "Лев Толстой", title: "Война и мир" },
    { author: "Александр Пушкин", title: "Евгений Онегин" },
    { author: "Джордж Оруэлл", title: "1984" },
    { author: "Габриэль Гарсия Маркес", title: "Сто лет одиночества" }
  ];
  

export const useStore = defineStore('books', {
    state: () => ({
        books: []
    }),
    getters: {
        count() {
            return this.books.length
        },
    },
    actions: {
        addBook(book) {
            //this.books.length = 0;
            this.books.push(book)
        },
        updateBook() {
            const randomIndex = Math.floor(Math.random() * allBooks.length);
            const book = allBooks[randomIndex];
            this.addBook(book);
        }
    }
})
