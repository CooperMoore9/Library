// Object Constructors

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `Book Title: ${title}; \n` + `Author: ${author}; \n` + `# of Pages: ${pages}; \n` + `Read?: ${read}; \n`;
    }
}

const book1 = new Book('bingus', 'dingus', 69420, true);
const book2 = new Book('My Brother in Christ 2, Electric Boogaloo', 'Jesus himself', Infinity, false);

console.log(book2.info());