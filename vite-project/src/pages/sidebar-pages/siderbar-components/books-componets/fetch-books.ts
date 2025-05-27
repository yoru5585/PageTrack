import type { User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import type { Book } from "../../../../constants/types";
import { db } from "../../../../firebase";

export const useBooks = (user: User | null) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (!user) return;

    const booksRef = collection(db, "users", user.uid, "books");

    const unsubscribe = onSnapshot(booksRef, (snapshot) => {
      const newBooks: Book[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Book[];
      setBooks(newBooks);
    });

    return () => unsubscribe(); // クリーンアップ
  }, [user]);

  return books;
};

export const fetchBooksOnce = async (user: User | null): Promise<Book[]> => {
  if (!user) return [];

  const booksRef = collection(db, "users", user.uid, "books");
  const snapshot = await getDocs(booksRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Book[];
};

export const fetchBooksByTitle = async (
  user: User | null,
  title: string
): Promise<Book[]> => {
  if (!user || !title) return [];

  const allBooks = await fetchBooksOnce(user);
  const filtered = allBooks.filter((book) => book.title.includes(title));

  return filtered;
};

export const fetchBookById = async (
  user: User | null,
  id: string
): Promise<Book | null> => {
  if (!user || !id) return null;

  try {
    const bookRef = doc(db, "users", user.uid, "books", id);
    const bookSnap = await getDoc(bookRef);

    if (bookSnap.exists()) {
      return {
        id: bookSnap.id,
        ...bookSnap.data(),
      } as Book;
    } else {
      console.warn("該当する本が見つかりませんでした");
      return null;
    }
  } catch (error) {
    console.error("本の取得中にエラーが発生しました:", error);
    return null;
  }
};
