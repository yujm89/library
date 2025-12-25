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

addBookToLibrary("book1", "monkey2", 232, false);
addBookToLibrary("book2", "monkey2", 232, true);
addBookToLibrary("book3", "monkey2", 232, true);
addBookToLibrary("book4", "monkey2", 232, false);
addBookToLibrary("book5", "monkey2", 232, true);



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

    let delButton = document.createElement("button");
    delButton.textContent = "delete book";
    delButton.classList.add("delete")
    delButton.dataset.id = Book.id

    delButton.addEventListener("click", (event) => {
        let pressed = event.currentTarget.dataset.id;
        let bookToDelete = document.querySelector(`div[data-id="${pressed}"]`);
        bookToDelete.remove()
    });


    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(delButton)

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



