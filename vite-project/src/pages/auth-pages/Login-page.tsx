// src/pages/SignUpPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./auth-components/Login";
import { ROUTES } from "../../constants/Routes";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2>ログイン</h2>
      <input type="email" placeholder="メールアドレス" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" onChange={e => setPassword(e.target.value)} />
      <button onClick={() => Login(email, password)}>ログイン</button>
      <button onClick={() => navigate(ROUTES.SIGNUP)}>新規登録はコチラ</button>
    </div>
  );
}
