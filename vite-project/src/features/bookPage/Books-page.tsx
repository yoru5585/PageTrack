import { useEffect, useState, type ChangeEvent } from 'react';
import type { Book } from '../../constants';
import { useSelectedBook, useUser } from '../../hooks';
import Modal from '../modal/modal-generater';
import {
  fetchBookById,
  fetchBooksByTitle,
  useBooks,
  AddBookModalItem,
  BookInfoPanel,
} from './books-components';
import './Books-page.css';

function BooksPage() {
  const { selectedBook, setSelectedBook } = useSelectedBook();
  const { user } = useUser();
  const allBooks = useBooks(user);

  const [books, setBooks] = useState<Book[]>([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [isModalOpen, SetIsModalOpen] = useState(false);

  // 初回や user が変わったときにデフォルトの本をセット
  useEffect(() => {
    setBooks(allBooks);
  }, [allBooks]);

  const handleBookItemClick = async (bookId: string) => {
    try {
      const result = await fetchBookById(user, bookId);
      setSelectedBook(result);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') setBooks(allBooks);
    else setSearchTitle(e.target.value);
  };

  const handleSearchByTitle = async () => {
    try {
      const result = await fetchBooksByTitle(user, searchTitle);
      setBooks(result);
    } catch (e) {
      console.error(e);
    }
  };

  const bookItems = books.map((book) => (
    <div key={book.id} className="book-card" onClick={() => handleBookItemClick(book.id)}>
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">著者: {book.author}</p>
      <p className="book-progress">
        {book.pagesRead} / {book.totalPages} ページ読了
      </p>
    </div>
  ));

  return (
    <>
      <div>
        <div className="book-search">
          <input type="search" placeholder="タイトル検索" onChange={handleChangeSearchInput} />
          <button onClick={handleSearchByTitle}>検索</button>
        </div>
        <div className="book-list">{bookItems}</div>
        <div className="book-add">
          <button onClick={() => SetIsModalOpen(true)}>追加</button>
        </div>
      </div>

      <div className="book-info">
        <BookInfoPanel selectedBook={selectedBook} />
        <Modal isOpen={isModalOpen} onClose={() => SetIsModalOpen(false)}>
          <AddBookModalItem onClose={() => SetIsModalOpen(false)} />
        </Modal>
      </div>
    </>
  );
}

export default BooksPage;
