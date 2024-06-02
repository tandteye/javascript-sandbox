const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
  },
  { title: "1984", author: "George Orwell", publicationYear: 1949 },
];

books.sort((a, b) => {
  const titleA = a.title.toUpperCase(); // ignore upper and lowercase
  const titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA > titleB) {
    return -1;
  }
  if (titleA < titleB) {
    return 1;
  }

  // names must be equal
  return 0;
});

books.reverse();

console.log(books);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
