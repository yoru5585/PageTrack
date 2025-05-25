import { useEffect, useState, type ChangeEvent } from "react";
import type { Book } from "../../constants/Types";
import { useUser } from "../../constants/User-context";
import "./sidebar-styles/Books-page.css";
import { addBookWithAutoId } from "./siderbar-components/books/add-book";
import { fetchBooksByTitle, useBooks } from "./siderbar-components/books/fetch-books";

function BooksPage() {
  const { user } = useUser();
  const allBooks = useBooks(user);
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTitle, setSearchTitle] = useState("");

  // 初回や user が変わったときにデフォルトの本をセット
  useEffect(() => {
    setBooks(allBooks);
  }, [allBooks]);

  const bookItems = books.map((book) => (
    <div key={book.id} className="book-card">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">著者: {book.author}</p>
      <p className="book-progress">
        {book.pagesRead} / {book.totalPages} ページ読了
      </p>
    </div>
  ));

  const dummyBook: Book = {
    id: "1",
    title: "Reactの基本",
    author: "田中 太郎",
    pagesRead: 120,
    totalPages: 300,
  }

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") setBooks(allBooks);
    else setSearchTitle(e.target.value);
  };

  const handleAddBook = async () => {
    try {
      await addBookWithAutoId(dummyBook, user?.uid as string);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearchByTitle = async () => {
    try {
      const result = await fetchBooksByTitle(user, searchTitle);
      setBooks(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="book-header">
        <p>選択中の本</p>
        <button onClick={handleAddBook}>追加</button>
      </div>
      <div className="book-search">
        <input type="search" placeholder="タイトル検索" onChange={handleChangeSearchInput} />
        <button onClick={handleSearchByTitle}>検索</button>
      </div>
      <div className="book-list">
        {bookItems}
      </div>
    </main>
  );
}

export default BooksPage;