import { useState } from 'react';
import './sidebar-styles/Home-page.css';
import ClockApp from '../clock/App';

function HomePage() {
  const [totalBooksPoint, setTotalBooksPoint] = useState(0);

  return (
    <main className="homepage-container">
      <section className="time">
        <ClockApp />
      </section>
      <section className="points">
        <div className="total-books-point">
          <p>総獲得ポイント</p>
          <div>
            <h2>{totalBooksPoint} P</h2>
          </div>
        </div>
        <div className="select-book-point">
          <p>今読んでる本のタイトル</p>
          <h2>{totalBooksPoint} / 100 ページ</h2>
          <button
            onClick={() => {
              setTotalBooksPoint((prev) => prev + 1);
            }}
          >
            読んだページを記録する
          </button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
