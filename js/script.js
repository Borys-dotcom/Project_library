const myLibrary = [];

class Book {
    constructor(tittle, author, pages, read){
        this.tittle = tittle;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    bookInfo() {
        let message = '';
        message = `This book's tittle is: ${this.tittle} and it has been written by: ${this.author}, it's length is ${this.pages} pages. `;
        if (this.read) message += `It has been read.`;
        else message += `It hasn't been read.`;
        return message;
    }
}

function addNewBook(title, author, pages, read){
    myLibrary[myLibrary.length] = new Book(title, author, pages, read);
}

const mainPage = document.querySelector("#mainContainer");

const displayDiv = document.createElement("div");
// displayDiv.classList.add("display");
displayDiv.style.width = "500px";
displayDiv.style.height = "500px";
displayDiv.style.border = "2px solid red";
displayDiv.style.margin = "auto";
mainPage.appendChild(displayDiv);

addNewBook("Hobbit", "Tolkien", 300, true);
addNewBook("Harry Potter", "Rowling", 400, false);
addNewBook("Wiedźmin", "Sapkowski", 250, true);

