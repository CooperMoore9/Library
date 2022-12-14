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

class Book{
        constructor (title, author, pages, read){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
    }

    logBook(){
        console.log(`Book Title: ${this.title}; \n` + `Author: ${this.author}; \n` + `# of Pages: ${this.pages}; \n` + `Read?: ${this.read}; \n`)
    }


}

const bookExample1 = new Book('My Brother in Christ 2, Electric Boogaloo', 'Jesus himself', Infinity, 'Unread')
const bookExample2 = new Book('bingus', 'dingus', 69420, 'Read')
const bookExample3 = new Book('Crow Anatomy', 'Jacob Crowe', 631, 'Read')
 
myLibrary.push(bookExample1, bookExample2, bookExample3)

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
        if(newBookForm[3].checked){
            newBookForm[3].textContent = 'Read'
        }else{
            newBookForm[3].textContent = 'Unread'
        }
    let newBook = new Book (newBookForm[0].value, newBookForm[1].value, newBookForm[2].value, newBookForm[3].textContent);
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

function bookReadButton(bookVariable) {
    if(bookVariable.read == 'Read'){
        bookVariable.read = 'Unread'
    }else{
        bookVariable.read = 'Read'
    }
}

function deleteBook(bookVariable) {
    myLibrary.splice(myLibrary.indexOf(bookVariable), 1)
}

function setBookCards() {
    for(let i = 0; i < myLibrary.length ; i++){

        let bookVariable = myLibrary[i]

        const book = document.createElement('div');
        const bookCardContentWrapper = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookButtons = document.createElement('div')
        const bookRead = document.createElement('button');
        const deleteButton = document.createElement('button')

        book.classList.add('bookCard');
        bookCardContentWrapper.classList.add('bookCardContentWrapper')
        bookTitle.classList.add('bookTitle');
        bookAuthor.classList.add('bookAuthor');
        bookPages.classList.add('bookPages');
        bookButtons.classList.add('bookButtons')
        bookRead.classList.add('bookRead');
        deleteButton.classList.add('deleteButton')

        container.appendChild(book);
        book.appendChild(bookCardContentWrapper);
        bookCardContentWrapper.appendChild(bookTitle);
        bookCardContentWrapper.appendChild(bookAuthor);
        bookCardContentWrapper.appendChild(bookPages);
        book.appendChild(bookButtons)
        bookButtons.appendChild(bookRead);
        bookButtons.appendChild(deleteButton);

        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPages.textContent = `# of Pages: ${myLibrary[i].pages}`;
        bookRead.textContent =  myLibrary[i].read
        deleteButton.textContent = 'Delete'

        bookRead.addEventListener('click', () => {
            bookReadButton(bookVariable);
            resetBookCards();
        })

        deleteButton.addEventListener('click', () => {
            deleteBook(bookVariable);
            resetBookCards();
        })

    }
};

resetBookCards();