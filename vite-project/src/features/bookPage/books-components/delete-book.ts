import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

export const deleteBookWithAutoId = async (userId: string, bookId: string) => {
  if (!userId || !bookId) return;

  const logsRef = collection(db, 'users', userId, 'books', bookId, 'readingLogs');

  // 1. readingLogs を全削除
  const logsSnapshot = await getDocs(logsRef);
  for (const logDoc of logsSnapshot.docs) await deleteDoc(logDoc.ref);

  // 2. book を削除
  const bookRef = doc(db, 'users', userId, 'books', bookId);
  await deleteDoc(bookRef);

  console.log('削除された book ID:', bookId);
};
