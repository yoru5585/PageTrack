import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';
import type { Book } from '../../../../constants';

export const addBookWithAutoId = async (bookData: Book, userId: string) => {
  if (!bookData || !userId) return;

  const booksCollectionRef = collection(db, 'users', userId, 'books');
  const newDocRef = await addDoc(booksCollectionRef, {
    title: bookData.title,
    pagesRead: bookData.pagesRead,
    totalPages: bookData.totalPages,
    createdAt: new Date(),
  });

  console.log('追加された book ID:', newDocRef.id);
};
