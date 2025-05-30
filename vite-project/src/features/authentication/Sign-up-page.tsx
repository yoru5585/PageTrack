// src/pages/SignUpPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './components/Signup.ts';
import { ROUTES } from '../../constants/index.ts';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <h2>新規登録</h2>
      <input type="email" placeholder="メールアドレス" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="パスワード"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => SignUp(email, password)}>登録</button>
      <button onClick={() => navigate(ROUTES.LOGIN)}>既存ユーザーはコチラ</button>
    </div>
  );
}
