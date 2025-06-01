import type { Book } from '../../../constants';

type BookInfoPanelProps = {
  selectedBook: Book | null;
};

function BookInfoPanel({ selectedBook }: BookInfoPanelProps) {
  //ロード中はloadingと表示したい

  return (
    <>
      <h3>{selectedBook?.title}</h3>
      <p>{selectedBook?.author}</p>
      <p>{selectedBook?.totalPages}</p>
      <button>選択</button>
      <button>編集</button>
    </>
  );
}

export default BookInfoPanel;
