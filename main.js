
                              //ASSIGNMENT 6
                              
/*The Dream - Harry Bernstein
Serendipity - Ashok Ferrey
Kafka on the shore - Haruki Murakami
Dirty Havana Trilogy - Pedro Juan Gutierrez
Man Without Women - Haruki Murakami
The War of the End of the World - Mario Vargas Llosa */


const library = [
    {title: "The Dream", author: "Harry Bernstein", isRead: true},
    {title: "Serendipity", author: "Ashok Ferrey", isRead: false},
    {title: "Kafka on the shore", author: "Haruki MUrakami", isRead: true},
    {title: "Dirty Havana Trilogy", author: "Pedro Juan Gutierrez", isRead: true},
    {title: "Man Without Women", author: "Haruki Murakami", isRead: false},
    {title: "The War of the End of the World", author: "Mario Vargas Llosa", isRead: true},
];
console.log(library);
function addBook() {
    const title = prompt("Enter the book title:");
    const author = prompt("Enter the author's name:");
    const isRead = confirm("Have you read this book?");

    const newBook = {
        title: title,
        author: author,
        isRead: isRead
    };

    library.push(newBook);
    console.log(`New book ${title} by ${author} is added to your library.`);
}

function listBooks() {
    if (library.length === 0) {
        console.log("There are no book in the library.");
    } else {
        console.log("There are books in the library.");
        library.forEach(book => {
            const readStatus = book.isRead ? "Read" : "Not Read";
            console.log(`${book.title} by ${book.author} - ${readStatus}`);
        });
    }
}

function markAsRead(title) {
    const book = library.find(book => book.title === title);
    if (book) {
        book.isRead = true;
        alert(`This "${title}" as read.`);
    } else {
        alert(`"The book ${title}" is not found in your library.`);
    }
}
// function unreadBooks - Bonus challenge (optional): Allow the user to list only unread books

function listUnreadBooks() {
    const unreadBooks = library.filter(book => !book.isRead); // Filters books where isRead is false
    if (unreadBooks.length === 0) {
        console.log("All books have been read!");
    } else {
        console.log("Unread books in your library:");
        unreadBooks.forEach(book => {
            console.log(`"${book.title}" by ${book.author}`);
        });
    }
}


// 4. List Unread Books - dodati u listu

let running = true;

while (running) {
    const choice = prompt(`
        Book Tracker
        1. Add Book
        2. List Books
        3. Mark Book as Read
        4. List Unread Books
        5. Exit
        Enter your choice:`);

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            listBooks();
            break;
        case "3":
            const title = prompt("Enter the title of the book to mark as read:");
            markAsRead(title);
            break;
        case "4":
            listUnreadBooks(); 
            break;
        case "5":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
    }
}
