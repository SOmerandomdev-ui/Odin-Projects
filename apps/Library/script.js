//Selects Elements for interactions 
let Add = document.querySelector('.Add');
let Menu = document.querySelector('.Menu');
let body = document.querySelector('body');
let X = document.querySelector('.X');
let AddBook = document.querySelector('#Submit');

//Selects Elements for Appending 
let Body = document.querySelector('.Body');

//Book holding array and function constructor as well as the prototype switch 
let books = []

function Book(title, author, pages, read, ID) {
  this.ID = ID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
  return this.read
}

//Showing and hiding the Form 
Add.addEventListener('click', () => {
  Menu.style.opacity = 1;
  Menu.style.pointerEvents = "auto";
})

X.addEventListener('click', () => {
  Menu.style.opacity = 0;
  Menu.style.pointerEvents = "none";
})

//Code for submitting and storing the book info
AddBook.addEventListener('click', (e) => {
  e.preventDefault();
  Menu.style.opacity = 0;
  Menu.style.pointerEvents = "none";

  let Title = document.querySelector('#Name').value;
  let Author = document.querySelector('#Author').value;
  let Pages = document.querySelector('#Pages').value;
  let Read = document.querySelector('#Read').checked;
  let BookContainer = document.createElement('div');
  BookContainer.id = crypto.randomUUID();

  let NewBook = new Book(Title, Author, Pages, Read, BookContainer.id);
  books.push(NewBook);

  //Code for display the book information 
  
  BookContainer.classList.add('BookContainer');
  Body.appendChild(BookContainer);
 

  let BookTitle = document.createElement('div');
  BookTitle.classList.add('BookTitle');
  BookTitle.textContent = Title;
  BookContainer.appendChild(BookTitle);

  let BookAuthor = document.createElement('div');
  BookAuthor.classList.add('BookAuthor');
  BookAuthor.textContent = `Author: ${Author}`
  BookContainer.appendChild(BookAuthor);

  let BookPages = document.createElement('div');
  BookPages.classList.add('BookPages');
  BookPages.textContent = `Pages: ${Pages}`;
  BookContainer.appendChild(BookPages);

  let BookID = document.createElement('div');
  BookID.classList.add('BookID');
  BookID.textContent = `ID: ${BookContainer.id}`;
  BookContainer.appendChild(BookID);

  //Code for the book Read toggle and Deletion 
  let BottomContainer = document.createElement('div');
  BottomContainer.classList.add('BottomContainer');
  BookContainer.appendChild(BottomContainer);

  let BookRead = document.createElement('div');
  BookRead.classList.add('BookRead');

  if (Read) {
    BookRead.style.backgroundColor = "rgb(49, 184, 49)";
    BookRead.textContent = "Read"
  }
  else {
    BookRead.style.backgroundColor = "rgb(184, 49, 49)";
    BookRead.textContent = "Not Read"
  }
  BottomContainer.appendChild(BookRead);

  let Delete = document.createElement('div');
  Delete.classList.add('Delete');
  Delete.textContent = "Delete";
  BottomContainer.appendChild(Delete);

  //Code for when read button is clicked
  BookRead.addEventListener('click', () => {
    NewBook.toggleRead();
    if (NewBook.read) {
      BookRead.style.backgroundColor = "rgb(184, 49, 49)";
      BookRead.textContent = "Not Read"
    }
    else {
      BookRead.style.backgroundColor = "rgb(49, 184, 49)";
      BookRead.textContent = "Read"
    }
  })

  //Code for Deletion of an item 
  Delete.addEventListener('click', (e) => {
    books.forEach (item => {
      if (BookContainer.id == item.ID) {
        BookContainer.remove();
        books.splice(books.indexOf(item),1)
        console.log(books)
      }
  })
  })
})



