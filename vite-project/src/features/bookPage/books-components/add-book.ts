import { collection, addDoc } from 'firebase/firestore';
import type { Book } from '../../../constants';
import { db } from '../../../firebase';

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
