import { NavLink } from "react-router-dom";
import { Home, Search, BarChart2, Settings } from "lucide-react";

function BottomNav() {
    const navItems = [
        { label: "ホーム", icon: <Home size={20} />, to: "/" },
        { label: "検索", icon: <Search size={20} />, to: "/search" },
        { label: "統計", icon: <BarChart2 size={20} />, to: "/stats" },
        { label: "設定", icon: <Settings size={20} />, to: "/settings" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md flex justify-around py-2 z-50">
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        `flex flex-col items-center text-sm ${isActive ? "text-indigo-600 font-semibold" : "text-gray-500"
                        }`
                    }
                >
                    {item.icon}
                    <span>{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
