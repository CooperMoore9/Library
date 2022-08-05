const container = document.querySelector('#cardWrapper')
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
 
myLibrary.push(bookExample1, bookExample2)

function addBookToLibrary() {

}

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