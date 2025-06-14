
import { Link, useLocation } from "react-router-dom";
import { useLanguage, useUser } from "../App";
import { t } from "../utils/translations";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { lang, toggleLanguage } = useLanguage();
  const { user, logout } = useUser();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", key: "home" },
    ...(user.isLoggedIn ? [{ path: "/dashboard", key: "dashboard" }] : []),
    { path: "/api-docs", key: "apiDocs" },
    { path: "/pricing", key: "pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">{t("companyName", lang)}</span>
              <span className="text-blue-400 ml-2 rtl:ml-0 rtl:mr-2">{t("productName", lang)}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-blue-400 bg-blue-900/20"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                {t(item.key, lang)}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm font-medium transition-colors"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Login/Logout */}
            {user.isLoggedIn ? (
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("logout", lang)}
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("login", lang)}
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-blue-400 bg-blue-900/20"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                {t(item.key, lang)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
