class Library {


    books;

    constructor(initialBooks = []) {
        const uniqueBooks = [...new Set(initialBooks)];
        if (uniqueBooks.length !== initialBooks.length) {
            throw new Error("Начальный список книг не должен содержать дубликатов.");
        }
        this.books = uniqueBooks;
    }
    get allBooks() {
        return this.books;
    }
    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error(`Книга "${title}" уже существует в библиотеке.`);
        }
        this.books.push(title);
    }
    removeBook(title) {
        const index = this.books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книга "${title}" не найдена в библиотеке.`);
        }
        this.books.splice(index, 1);
    }
    hasBook(title) {
        return this.books.includes(title);
    }
}
try {
    const library = new Library(["1984", "Мастер и Маргарита", "Война и мир"]);

    console.log("Список книг:", library.allBooks); // ["1984", "Мастер и Маргарита", "Война и мир"]

    library.addBook("Убить пересмешника");
    console.log("После добавления книги:", library.allBooks); // ["1984", "Мастер и Маргарита", "Война и мир", "Убить пересмешника"]

    library.removeBook("1984");
    console.log("После удаления книги:", library.allBooks); // ["Мастер и Маргарита", "Война и мир", "Убить пересмешника"]

    console.log("Есть ли книга 'Война и мир'? ", library.hasBook("Война и мир")); // true
} catch (error) {
    console.error(error.message);
}