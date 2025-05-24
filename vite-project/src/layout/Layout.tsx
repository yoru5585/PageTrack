import { Outlet, NavLink } from "react-router-dom";
import { Home, Search, BarChart2, Settings, X, Menu } from "lucide-react";
import "./Layout.css";
import { useState } from "react";

function Layout() {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const navItems = [
		{ label: " ホーム", icon: <Home size={20} />, to: "/" },
		{ label: " 本一覧", icon: <Search size={20} />, to: "/books" },
		// { label: "統計", icon: <BarChart2 size={20} />, to: "/stats" },
		{ label: " 設定", icon: <Settings size={20} />, to: "/settings" },
	];
	return (
		<div className="layout-container">
			{/* 表示ボタン */}
			<button className="open-btn" onClick={() => {setSidebarOpen(true)}}><Menu size={20} /></button>
			{/* サイドバー */}
			<aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
				{/* 非表示ボタン */}
				<button className="close-btn" onClick={() => {setSidebarOpen(false)}}><X size={20} /></button>
				{/* サイドバーのインナー */}
				<div className="sidebar-inner">
					<h1 className="sidebar-title">PageTrack</h1>
					<nav className="nav-links">
						{navItems.map((item) => (
							<NavLink
								className="nav-link"
								key={item.to}
								to={item.to}
							>
								{item.icon}
								<span>{item.label}</span>
							</NavLink>
						))}
					</nav>
				</div>
				{/* サイドバーのフッター */}
				<footer className="sidebar-footer">
					© 2025 ka-shimizu
				</footer>
			</aside>

			{/* メインコンテンツ */}
			<main className="main-content">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
