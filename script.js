const container = document.querySelector('#cardWrapper')
const addBookButton = document.querySelector('#addBookButton')
const removeBookButton = document.querySelector('#removeBookButton')
let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `Book Title: ${this.title}; \n` + `Author: ${this.author}; \n` + `# of Pages: ${this.pages}; \n` + `Read?: ${this.read}; \n`;
}

const bookExample1 = new Book('My Brother in Christ 2, Electric Boogaloo', 'Jesus himself', Infinity, false)
const bookExample2 = new Book('bingus', 'dingus', 69420, true)
const bookExample3 = new Book('Crow Anatomy', 'Jacob Crowe', 631, true)
 
myLibrary.push(bookExample1, bookExample2)

addBookButton.addEventListener('click', () => {
    myLibrary.push(bookExample3)
    resetBookCards()
})

removeBookButton.addEventListener('click', () => {
    console.log(myLibrary.length - 1)
    myLibrary.splice(myLibrary.length - 1, 1)
    resetBookCards()
})

function resetBookCards() {
    refreshBookCards();
    setBookCards();
}

function refreshBookCards() {
    const deleteTheBoxes = document.querySelectorAll('.bookCard');
    deleteTheBoxes.forEach((div) => {
        div.remove();
    })
}

function setBookCards() {
    for(let i = 0; i < myLibrary.length ; i++){

        const book = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');

        book.classList.add('bookCard');
        bookTitle.classList.add('bookTitle');
        bookAuthor.classList.add('bookAuthor');
        bookPages.classList.add('bookPages');
        bookRead.classList.add('bookRead');

        container.appendChild(book);
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(bookRead);

        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `# of Pages: ${myLibrary[i].pages}`;
        bookRead.textContent = `Read?: ${myLibrary[i].read}`;
    }
};

setBookCards();