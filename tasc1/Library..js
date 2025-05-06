class Library {

    #
    books;

    constructor(initialBooks = []) {
        const uniqueBooks = [...new Set(initialBooks)];
        if (uniqueBooks.length !== initialBooks.length) {
            throw new Error("Начальный список книг не должен содержать дубликатов.");
        }
        this.#books = uniqueBooks;
    }
    get allBooks() {
        return this.#books;
    }
    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error(`Книга "${title}" уже существует в библиотеке.`);
        }
        this.#books.push(title);
    }