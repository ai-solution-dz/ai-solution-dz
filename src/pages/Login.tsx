
import { useLanguage, useUser } from "../App";
import { t } from "../utils/translations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogIn } from "lucide-react";

const Login = () => {
  const { lang } = useLanguage();
  const { user, login } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      login();
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  if (user.isLoggedIn) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="gradient-card p-8 rounded-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {t("loginTitle", lang)}
            </h1>
            <p className="text-gray-300">
              {t("loginSubtitle", lang)}
            </p>
          </div>

          {/* Demo Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {lang === 'en' ? 'Email' : 'البريد الإلكتروني'}
              </label>
              <input
                type="email"
                defaultValue="demo@doc-in.ai"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {lang === 'en' ? 'Password' : 'كلمة المرور'}
              </label>
              <input
                type="password"
                defaultValue="demo123"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              {isLoading ? t("loading", lang) : t("login", lang)}
            </button>
          </form>

          {/* Demo Notice */}
          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <p className="text-blue-300 text-sm text-center">
              {lang === 'en' 
                ? '🚀 This is a demo - click login to simulate authentication'
                : '🚀 هذا عرض توضيحي - انقر على تسجيل الدخول لمحاكاة المصادقة'
              }
            </p>
          </div>

          {/* Features Preview */}
          <div className="mt-8 space-y-4">
            <h3 className="text-white font-semibold text-center">
              {lang === 'en' ? 'What you\'ll get:' : 'ما ستحصل عليه:'}
            </h3>
            <div className="space-y-2">
              {[
                lang === 'en' ? '📊 Real-time analytics dashboard' : '📊 لوحة تحليلات في الوقت الفعلي',
                lang === 'en' ? '🔑 Personal API key' : '🔑 مفتاح API شخصي',
                lang === 'en' ? '📈 Usage statistics' : '📈 إحصائيات الاستخدام',
                lang === 'en' ? '🚀 Full API access' : '🚀 وصول كامل للـ API'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 text-sm">
                  <span>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
