import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home-page.tsx";
import BooksPage from './pages/Books-page.tsx';
import SettingsPage from './pages/Settings-page.tsx';

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
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage books={dummyBooks} />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
