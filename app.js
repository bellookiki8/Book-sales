// Define an array of book objects with properties such as title, author, price, and image URL
const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.99,
      image: "https://th.bing.com/th/id/R.7c5697ee72aae7fe607f69d223740452?rik=sgWxstAv8tg2Eg&riu=http%3a%2f%2fd28hgpri8am2if.cloudfront.net%2fbook_images%2fonix%2fcvr9781471173936%2fthe-great-gatsby-9781471173936_hr.jpg&ehk=Jz0jBOB5sZkGZ0GWHtNFPKtFLQNRZEIuO6rAtLbpOOA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 10.99,
      image: "https://cdn2.penguin.com.au/covers/original/9780434020485.jpg",
    },
    {
      title: "Arrow of God",
      author: "Chinua Achebe",
      price: 8.99,
      image: "https://th.bing.com/th/id/OIP.wWTlPSNLJf3MYA1VqQOOEgAAAA?pid=ImgDet&rs=1",
    },
    {
      title: "Purple Hibiscus",
      author: "Chimamanda Adichie",
      price: 10.79,
      image: "https://www.bibdsl.co.uk/imagegallery/bookdata/cd410/9780007189885.JPG",
    },
    {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      price: 6.99,
      image: "https://th.bing.com/th/id/OIP.a2bslemABy5pKGyIIkk7GAHaLX?pid=ImgDet&rs=1",
    },
    {
      title: "Half of a Yellow Sun",
      author: "Chimananda Adichie",
      price: 9.89,
      image: "https://images.booksense.com/images/209/095/9781400095209.jpg",
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
  