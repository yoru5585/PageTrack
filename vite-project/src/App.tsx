import './App.css'

function App() {
  type Book = {
    id: string;
    title: string;
    author: string;
    currentPage: number;
    totalPages: number;
  };

  const books: Book[] = [
    {
      id: "1",
      title: "吾輩は猫である",
      author: "夏目漱石",
      currentPage: 120,
      totalPages: 300,
    },
    {
      id: "2",
      title: "ハリー・ポッターと賢者の石",
      author: "J.K.ローリング",
      currentPage: 80,
      totalPages: 350,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4">
        <header className="text-2xl font-bold text-gray-800 mb-4">
          📚 PageTrack
        </header>

        <div className="flex justify-end mb-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            ＋ 本を追加
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {books.map((book) => {
            const progress = Math.floor((book.currentPage / book.totalPages) * 100);
            return (
              <div
                key={book.id}
                className="bg-white shadow rounded-lg p-4 border border-gray-200"
              >
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-700">
                  {book.currentPage} / {book.totalPages} ページ（{progress}%）
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App
