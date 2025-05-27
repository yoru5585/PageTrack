import { Outlet, NavLink } from "react-router-dom";
import { Home, Search, BarChart2, Settings, X, Menu } from "lucide-react";
import "./layout.css";
import { useState } from "react";
import { ROUTES, LABELS } from "../constants/index.ts";
import { SelectedBookProvider } from "../constants/selectedBook-context.tsx";

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
    <div className="layout-container">
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
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
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

      {/* メインコンテンツ */}
      <main className="main-content">
        <SelectedBookProvider>
          <Outlet />
        </SelectedBookProvider>
      </main>
    </div>
  );
}

export default Layout;
