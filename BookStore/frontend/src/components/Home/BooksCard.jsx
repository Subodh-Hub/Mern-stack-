import BookCardSingle from "./BookCardSingle";

const BooksCard = ({ booksData }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {booksData?.books.map((book) => (
        <BookCardSingle book={book} />
      ))}
    </div>
  );
};

export default BooksCard;
