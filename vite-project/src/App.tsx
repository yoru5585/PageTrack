import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './features/layout/layout.tsx';
import { ROUTES } from './constants';
import SignUpPage from './features/authentication/Sign-up-page.tsx';
import LoginPage from './features/authentication/Login-page.tsx';
import HomePage from './features/homePage/Home-page.tsx';
import BooksPage from './features/bookPage/Books-page.tsx';
import StatsPage from './features/statsPage/Stats-page.tsx';
import SettingsPage from './features/settingPage/Settings-page.tsx';
import { useUser } from './hooks/UserProvider.tsx';

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
