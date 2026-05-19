import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "ホーム", icon: "🏠" },
  { to: "/vocabulary", label: "単語帳", icon: "📖" },
  { to: "/grammar", label: "文法", icon: "📝" },
  { to: "/quiz", label: "クイズ", icon: "🧩" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          id="header-logo"
        >
          <span className="text-2xl">🎵</span>
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
            K-POP Korean
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1" id="header-nav">
          {navItems.map((item) => {
            const isActive =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                id={`nav-${item.label}`}
                className={`
                  flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 shadow-sm"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  }
                `}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
