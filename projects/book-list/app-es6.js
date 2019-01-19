// Book constructor

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI constructor

class UI {
    static addBookToList(book) {
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

    static clearInputs() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    static showAlert(message, alertType) {
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

    static deleteBook(target) {
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}

// Local storage

class BookRepository {

    static getBooks() {
        let books;

        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static saveBooks(books) {
        localStorage.setItem('books', JSON.stringify(books));
    }

    static addBook(book) {
        const books = BookRepository.getBooks();
        books.push(book);
        BookRepository.saveBooks(books);
    }

    static removeBook(isbn) {
        const books = BookRepository.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        })

        BookRepository.saveBooks(books);
    }

    static displayBooks() {
        const books = BookRepository.getBooks();

        books.forEach(book => {
            UI.addBookToList(book);
        });
    }
}


// Event listeners

// Listener for adding book
document.getElementById('book-form').addEventListener('submit', function (event) {

    // Get form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        // alert('Fields cannot be empty');
        UI.showAlert('Please fill all fields', 'failure');
    } else {
        const book = new Book(title, author, isbn);


        UI.addBookToList(book);
        BookRepository.addBook(book);

        UI.showAlert('Book added successfully', 'success');
    }
    // Clear inputs
    UI.clearInputs();
    event.preventDefault();
})


// Listener for deleting book
document.getElementById('book-list').addEventListener('click', function (event) {
    UI.deleteBook(event.target);
    UI.showAlert('Book deleted successfully', 'success');
    BookRepository.removeBook(event.target.parentElement.parentElement.previousElementSibling.textContent);
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function (event) {
    BookRepository.displayBooks();
});


