import { BarChart2, Home, Menu, Search, Settings, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LABELS, ROUTES, SelectedBookProvider } from '../../constants';
import './layout.css';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { label: LABELS.HOME, icon: <Home size={20} />, to: ROUTES.HOME },
    { label: LABELS.BOOKS, icon: <Search size={20} />, to: ROUTES.BOOKS },
    { label: LABELS.STATS, icon: <BarChart2 size={20} />, to: ROUTES.STATS },
    {
      label: LABELS.SETTINGS,
      icon: <Settings size={20} />,
      to: ROUTES.SETTINGS,
    },
  ];

  return (
    <div>
      {/* 表示ボタン */}
      <button
        className="open-btn"
        onClick={() => {
          setSidebarOpen(true);
        }}
      >
        <Menu size={20} />
      </button>
      {/* サイドバー */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        {/* 非表示ボタン */}
        <button
          className="close-btn"
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          <X size={20} />
        </button>
        {/* サイドバーのインナー */}
        <div className="sidebar-inner">
          <h1 className="sidebar-title">{LABELS.MENU_TITLE}</h1>
          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink className="nav-link" key={item.to} to={item.to}>
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        {/* サイドバーのフッター */}
        <footer className="sidebar-footer">© 2025 ka-shimizu</footer>
      </aside>

      <main className="main-content">
        <SelectedBookProvider>
          <Outlet />
        </SelectedBookProvider>
      </main>
    </div>
  );
}

export default Layout;
