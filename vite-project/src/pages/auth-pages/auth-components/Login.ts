import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function Login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Firestore にユーザー情報を追加
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: new Date(),
        });
    
        console.log("ユーザーログイン & Firestore 登録完了");
  } catch (error: any) {
    alert(`登録エラー: ${error.message}`);
  }
};