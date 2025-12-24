function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${295} pages, ${read ? "read" : "not yet read"}, id: ${id}`;
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook
}

addBookToLibrary("monkey", "blankson", 299, false);
addBookToLibrary("monkey2", "blankson", 299, true);
addBookToLibrary("monkey3", "blankson", 299, true);
addBookToLibrary("monkey4", "blankson", 299, false);
addBookToLibrary("monkey5", "blankson", 299, false);

const display = document.querySelector(".container");

function createBookCard(Book){
    let book = document.createElement("div");
    book.dataset.id = Book.id
    book.classList.add("book")
    let title = document.createElement("p");
    title.textContent = `Title: ${Book.title}`;
    let author = document.createElement("p");
    author.textContent = `Author: ${Book.author}`;
    let pages = document.createElement("p");
    pages.textContent = `${Book.pages} pages`;
    let read = document.createElement("p");
    read.textContent = `${Book.read ? "read" : "not yet read"}`;


    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);

    display.appendChild(book);
}

for (let i = 0; i < myLibrary.length; i++){
    createBookCard(myLibrary[i])
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});


const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault(); 
});


const submitButton = document.querySelector("#submit");


submitButton.addEventListener("click", () => {
    let newTitle = document.querySelector("#title");
    let newAuthor = document.querySelector("#author");
    let newPages = document.querySelector("#pages");
    let newRead = document.querySelector("#read");

    createBookCard(addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, newRead.checked));

});


