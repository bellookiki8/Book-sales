// Define an array of book objects with properties such as title, author, price, and image URL
const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/41pwrbhqNkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 10.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwZL._SX324_BO1,204,203,200_.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      price: 8.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/41R0mDwPL-L._SX324_BO1,204,203,200_.jpg",
    },
  ];
  
  // Get the featured books section element from the HTML DOM
  const featuredBooksSection = document.querySelector("#featured-books");
  
  // Iterate through the book objects and create HTML elements to display book data
  books.forEach((book) => {
    // Create a div element to contain the book data
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book");
  
    // Create an image element for the book cover
    const bookCover = document.createElement("img");
    bookCover.src = book.image;
    bookCover.alt = `${book.title} book cover`;
    bookCover.classList.add("book-cover");
  
    // Create a h3 element for the book title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
  
    // Create a p element for the book author
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `by ${book.author}`;
  
    // Create a p element for the book price
    const bookPrice = document.createElement("p");
    bookPrice.textContent = `$${book.price}`;
  
    // Append the book data elements to the book container
    bookContainer.appendChild(bookCover);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPrice);
  
    // Append the book container to the featured books section
    featuredBooksSection.appendChild(bookContainer);
  });
  