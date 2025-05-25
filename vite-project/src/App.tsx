import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/sidebar-pages/Home-page.tsx";
import BooksPage from './pages/sidebar-pages/Books-page.tsx';
import SettingsPage from './pages/sidebar-pages/Settings-page.tsx';
import StatsPage from './pages/sidebar-pages/Stats-page.tsx';
import LoginPage from './pages/auth-pages/Login-page.tsx';
import SignUpPage from './pages/auth-pages/Sign-up-page.tsx';
import { ROUTES} from "./constants/Index.ts";
import { useUser } from './constants/User-context.tsx';

// const dummyBooks = [
//   {
//     id: "1",
//     title: "Reactの基本",
//     author: "田中 太郎",
//     pagesRead: 120,
//     totalPages: 300,
//   },
//   {
//     id: "2",
//     title: "TypeScript入門",
//     author: "鈴木 花子",
//     pagesRead: 300,
//     totalPages: 300,
//   },
// ];

function App() {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;

  if (!user) return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.STATS} element={<StatsPage />} />
          <Route path={ROUTES.BOOKS} element={<BooksPage />} />
          <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
