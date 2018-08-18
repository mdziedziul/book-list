// UI Elements
const form = document.getElementById('book-form');
const list = document.getElementById('book-list');

// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {
}

// Create row and insert there a book
UI.prototype.addBookToList = function(book) {

    // Create row and append it to the book table
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);

    // Delete book after clicking on remove button
    document.addEventListener('click', deleteBook);
    function deleteBook(e) {
        if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear inputs after adding book to the list
UI.prototype.clearInputs = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event listener
form.addEventListener('submit', function(e) {  
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Create book with parameters from inputs values
    const book = new Book(title, author, isbn);

    // Add book to book list
    const ui = new UI();
    ui.addBookToList(book);
    // Clear inputs after adding book
    ui.clearInputs();
    
    e.preventDefault();
})