// src/pages/SignUpPage.tsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("登録成功！");
    } catch (error: any) {
      alert(`登録エラー: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>新規登録</h2>
      <input type="email" placeholder="メールアドレス" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>登録</button>
    </div>
  );
}
