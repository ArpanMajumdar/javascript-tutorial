// Book constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor

function UI() { }
UI.prototype.addBookToList = function (book) {
    const bookList = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#"><i class="material-icons delete">
    delete
    </i></a></td>`;

    bookList.appendChild(row);
}

UI.prototype.clearInputs = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (message, alertType) {
    const alert = document.querySelector('.alert');
    if (alertType === 'success') {
        alert.innerHTML = `<div class="card-panel green lighten-2 center-align">${message}</div>`;
    } else if (alertType === 'failure') {
        alert.innerHTML = `<div class="card-panel red lighten-2 center-align">${message}</div>`;
    }
    setTimeout(function () {
        document.querySelector('.alert').firstChild.remove();
    }, 2000);
}

UI.prototype.deleteBook = function (target) {
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.parentElement.remove();
    }
}



// Event listeners

// Listener for adding book
document.getElementById('book-form').addEventListener('submit', function (event) {

    // Get form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        // alert('Fields cannot be empty');
        ui.showAlert('Please fill all fields', 'failure');
    } else {
        const book = new Book(title, author, isbn);


        ui.addBookToList(book);
        ui.showAlert('Book added successfully', 'success');
    }
    // Clear inputs
    ui.clearInputs();
    event.preventDefault();
})


// Listener for deleting book
document.getElementById('book-list').addEventListener('click', function (event) {
    const ui = new UI();
    ui.deleteBook(event.target);
    ui.showAlert('Book deleted successfully', 'success');
    event.preventDefault();
});


