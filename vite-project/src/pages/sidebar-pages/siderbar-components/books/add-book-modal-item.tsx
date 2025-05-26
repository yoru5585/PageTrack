import { useState } from "react";
import { useUser } from "../../../../constants/User-context";
import { addBookWithAutoId } from "./add-book";

type Props = {
  onClose: () => void;
};

function AddBookModalItem({ onClose }: Props) {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [totalPages, setTotalPages] = useState("");

  const AddBook = async () => {
    if (title == "" || totalPages == "") {
      alert("入力内容を確認してください。");
      return;
    }

    try {
      await addBookWithAutoId(
        {
          id: "",
          title: title,
          author: "",
          pagesRead: 0,
          totalPages: parseInt(totalPages),
        },
        user?.uid as string
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ← リロードを防ぐ
    AddBook();
    onClose();
  };

  return (
    <div>
      <h2>本の登録</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="総ページ数"
          value={totalPages}
          onChange={(e) => setTotalPages(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
}

export default AddBookModalItem;
