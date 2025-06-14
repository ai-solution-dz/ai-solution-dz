
import { Link } from "react-router-dom";
import { useLanguage, useUser } from "../App";
import { t } from "../utils/translations";
import { ArrowDown, Home as HomeIcon } from "lucide-react";

const Home = () => {
  const { lang } = useLanguage();
  const { user } = useUser();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {t("companyName", lang)}
            </h1>
            <div className="text-2xl md:text-3xl text-blue-300 mb-4 animate-float">
              {t("productName", lang)}
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("slogan", lang)}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t("heroTitle", lang)}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              {t("heroSubtitle", lang)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user.isLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 animate-glow"
                >
                  {t("ctaExplore", lang)}
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 animate-glow"
                >
                  {t("ctaStart", lang)}
                </Link>
              )}
              <Link
                to="/pricing"
                className="border-2 border-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                {t("pricing", lang)}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t("featuresTitle", lang)}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("featureAccuracy", lang)}
              </h3>
              <p className="text-gray-300">
                {t("featureAccuracyDesc", lang)}
              </p>
            </div>

            <div className="gradient-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("featureSpeed", lang)}
              </h3>
              <p className="text-gray-300">
                {t("featureSpeedDesc", lang)}
              </p>
            </div>

            <div className="gradient-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("featureIntegration", lang)}
              </h3>
              <p className="text-gray-300">
                {t("featureIntegrationDesc", lang)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
