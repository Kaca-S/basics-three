/*The Dream - Harry Bernstein
Serendipity - Ashok Ferrey
Kafka on the shore - Haruki Murakami
Dirty Havana Trilogy - Pedro Juan Gutierrez
Man Without Women - Haruki Murakami
The War of the End of the World - Mario Vargas Llosa */


                              //ASSIGNMENT 6

const library = [];

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