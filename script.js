const container = document.querySelector('#cardWrapper');
const addBookButton = document.querySelector('#addBookButton');
const removeBookButton = document.querySelector('#removeBookButton');
const newBookForm = document.querySelector('#newBookInput');
const modal = document.getElementById("myModal");
const modalButton = document.getElementById('testButton');
const closeButton = document.getElementById('closeButton');
let newBookTitle = '';
let newBookAuthor = '';
let newBookPages = 0;
let newBookRead = false;
let myLibrary = [];

console.log(newBookTitle);

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

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

document.querySelector('#submitButton').addEventListener('click', (event) => {
    event.preventDefault();

    if(newBookForm[0].value == 0 || newBookForm[1].value == 0){
        alert('Please input Title/Author')
    }else if(newBookForm[2].value != parseInt(newBookForm[2].value)){
        alert('Please input Page Number')
    }
    else{
    let newBook = new Book (newBookForm[0].value, newBookForm[1].value, newBookForm[2].value, newBookForm[3].value);
    myLibrary.push(newBook);
    resetBookCards();
    modal.style.display = "none";
}

})

closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});

addBookButton.addEventListener('click', () => {
    modal.style.display = "block";
    resetBookCards()
});

removeBookButton.addEventListener('click', () => {
    if (confirm('Really?')){
        console.log(myLibrary.length - 1)
        myLibrary.splice(myLibrary.length - 1, 1)
        resetBookCards()
    }
});



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
        const bookRead = document.createElement('form');
        const bookReadInput = document.createElement('input');
        const bookReadLabel = document.createElement('label');

        bookReadInput.type = 'checkbox'
        bookReadLabel.setAttribute('for', 'bookReadInput')

        book.classList.add('bookCard');
        bookTitle.classList.add('bookTitle');
        bookAuthor.classList.add('bookAuthor');
        bookPages.classList.add('bookPages');
        bookRead.classList.add('bookRead');
        bookReadInput.classList.add('bookReadInput')

        container.appendChild(book);
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(bookRead);
        bookRead.appendChild(bookReadLabel);
        bookRead.appendChild(bookReadInput);


        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `# of Pages: ${myLibrary[i].pages}`;
        bookReadLabel.textContent = `Read?: `;
    }
};

setBookCards();