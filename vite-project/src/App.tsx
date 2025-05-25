import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/sidebar-pages/Home-page.tsx";
import BooksPage from './pages/sidebar-pages/Books-page.tsx';
import SettingsPage from './pages/sidebar-pages/Settings-page.tsx';
import StatsPage from './pages/sidebar-pages/Stats-page.tsx';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.ts';
import { ROUTES } from './constants/Routes.ts';
import LoginPage from './pages/auth-pages/Login-page.tsx';

const dummyBooks = [
  {
    id: "1",
    title: "Reactの基本",
    author: "田中 太郎",
    pagesRead: 120,
    totalPages: 300,
  },
  {
    id: "2",
    title: "TypeScript入門",
    author: "鈴木 花子",
    pagesRead: 300,
    totalPages: 300,
  },
  {
    id: "3",
    title: "TypeScript入門",
    author: "鈴木 花子",
    pagesRead: 300,
    totalPages: 300,
  },
  {
    id: "4",
    title: "TypeScript入門",
    author: "鈴木 花子",
    pagesRead: 300,
    totalPages: 300,
  },
  {
    id: "5",
    title: "TypeScript入門",
    author: "鈴木 花子",
    pagesRead: 300,
    totalPages: 300,
  },
];

function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(false);

  if (checking) return <div>Loading...</div>;

  if (!user) return <LoginPage />

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.STATS} element={<StatsPage />} />
          <Route path={ROUTES.BOOKS} element={<BooksPage books={dummyBooks} />} />
          <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
