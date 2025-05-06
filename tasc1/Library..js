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