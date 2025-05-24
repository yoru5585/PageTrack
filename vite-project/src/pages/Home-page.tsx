import { useState } from "react";
import "./styles/Home-page.css";

function HomePage() {
  const [totalBooksPoint, setTotalBooksPoint] = useState(0);

  return (
    <main>
      <section className="time">
        <p>time</p>
      </section>
      <section className="points">
        <div className="total-books-point">
          <p>総獲得ポイント</p>
          <p>{totalBooksPoint} P</p>
        </div>
        <div className="select-book-point">
          <p>ここに今読んでる本のページ数</p>
          <p>{totalBooksPoint} ページ</p>
        </div>
      </section>
      <section className="">
        <button onClick={() => {setTotalBooksPoint(totalBooksPoint + 1)}}>ページ数追加</button>
      </section>
    </main>
  );
}

export default HomePage;