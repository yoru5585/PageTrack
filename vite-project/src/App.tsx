import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/layout/layout.tsx';
import { LoginPage, SignUpPage } from './pages/auth-pages';
import { ROUTES, useUser } from './constants';
import { HomePage, StatsPage, BooksPage, SettingsPage } from './pages/sidebar-pages';

function App() {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;

  if (!user)
    return (
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

export default App;
