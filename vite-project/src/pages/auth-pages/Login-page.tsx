// src/pages/SignUpPage.tsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("ログイン成功！");
    } catch (error: any) {
      alert(`登録エラー: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <input type="email" placeholder="メールアドレス" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}
