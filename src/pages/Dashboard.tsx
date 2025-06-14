
import { useLanguage, useUser } from "../App";
import { t } from "../utils/translations";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const { lang } = useLanguage();
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  // Mock data for chart
  const chartData = [
    { day: 'Mon', invoices: 45 },
    { day: 'Tue', invoices: 67 },
    { day: 'Wed', invoices: 89 },
    { day: 'Thu', invoices: 56 },
    { day: 'Fri', invoices: 78 },
    { day: 'Sat', invoices: 34 },
    { day: 'Sun', invoices: 23 },
  ];

  const copyApiKey = () => {
    navigator.clipboard.writeText(user.apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!user.isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-300 mb-6">Please log in to access the dashboard.</p>
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            {t("login", lang)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {t("welcomeBack", lang)}! 👋
          </h1>
          <p className="text-gray-300">
            {t("analytics", lang)} & {t("usage", lang)}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* API Key Card */}
          <div className="gradient-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("apiKey", lang)}
            </h3>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <code className="bg-gray-700 px-3 py-2 rounded text-sm text-green-400 flex-1">
                {user.apiKey}
              </code>
              <button
                onClick={copyApiKey}
                className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-sm transition-colors"
              >
                {copied ? t("copied", lang) : t("copy", lang)}
              </button>
            </div>
          </div>

          {/* Current Plan Card */}
          <div className="gradient-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("currentPlan", lang)}
            </h3>
            <div className="text-2xl font-bold text-blue-400 mb-2">
              {user.currentPlan} Plan
            </div>
            <Link
              to="/pricing"
              className="text-blue-300 hover:text-blue-200 text-sm underline"
            >
              Change Plan
            </Link>
          </div>

          {/* Invoices Processed Card */}
          <div className="gradient-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("invoicesProcessed", lang)}
            </h3>
            <div className="text-2xl font-bold text-green-400 mb-2">
              {user.invoicesProcessed.toLocaleString()}
            </div>
            <p className="text-gray-400 text-sm">
              {t("thisMonth", lang)}
            </p>
          </div>
        </div>

        {/* Usage Chart */}
        <div className="gradient-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-6">
            {t("usage", lang)} - Last 7 Days
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#374151', 
                    border: '1px solid #4B5563',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }} 
                />
                <Bar 
                  dataKey="invoices" 
                  fill="url(#gradient)" 
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Link
            to="/api-docs"
            className="gradient-card p-6 rounded-xl hover:transform hover:scale-105 transition-all group"
          >
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300">
              📚 {t("apiDocs", lang)}
            </h3>
            <p className="text-gray-300">
              Learn how to integrate Doc-IN into your applications
            </p>
          </Link>

          <Link
            to="/pricing"
            className="gradient-card p-6 rounded-xl hover:transform hover:scale-105 transition-all group"
          >
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300">
              💳 {t("pricing", lang)}
            </h3>
            <p className="text-gray-300">
              Upgrade your plan for more features and higher limits
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
