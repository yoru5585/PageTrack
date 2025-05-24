import "./styles/Books-page.css"

type Book = {
  id: string;
  title: string;
  author: string;
  pagesRead: number;
  totalPages: number;
};

type Props = {
  books: Book[];
};

function BooksPage({ books }: Props) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">著者: {book.author}</p>
          <p className="book-progress">
            {book.pagesRead} / {book.totalPages} ページ読了
          </p>
        </div>
      ))}
    </div>
  );
}

export default BooksPage;