
import { useLanguage } from "../App";
import { t } from "../utils/translations";
import { useState } from "react";

const ApiDocs = () => {
  const { lang } = useLanguage();
  const [copiedEndpoint, setCopiedEndpoint] = useState("");

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(""), 2000);
  };

  const endpoints = [
    {
      method: "POST",
      path: "/upload-invoice",
      description: lang === 'en' ? "Upload an invoice file for processing" : "رفع ملف فاتورة للمعالجة",
      example: `curl -X POST https://api.doc-in.ai/upload-invoice \\
  -H "Authorization: Bearer dokin_abc123" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@invoice.pdf"`
    },
    {
      method: "GET",
      path: "/extract/{id}",
      description: lang === 'en' ? "Extract data from processed invoice" : "استخراج البيانات من الفاتورة المعالجة",
      example: `curl -X GET https://api.doc-in.ai/extract/12345 \\
  -H "Authorization: Bearer dokin_abc123"`
    },
    {
      method: "GET",
      path: "/usage",
      description: lang === 'en' ? "Get API usage statistics" : "الحصول على إحصائيات استخدام API",
      example: `curl -X GET https://api.doc-in.ai/usage \\
  -H "Authorization: Bearer dokin_abc123"`
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t("apiTitle", lang)}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("apiSubtitle", lang)}
          </p>
        </div>

        {/* Authentication Section */}
        <div className="gradient-card p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🔐 {t("authentication", lang)}
          </h2>
          <p className="text-gray-300 mb-4">
            {lang === 'en' 
              ? "All API requests require authentication using your API key in the Authorization header:"
              : "جميع طلبات API تتطلب المصادقة باستخدام مفتاح API الخاص بك في رأس التفويض:"
            }
          </p>
          <div className="bg-gray-800 p-4 rounded-lg relative">
            <code className="text-green-400">
              Authorization: Bearer YOUR_API_KEY
            </code>
            <button
              onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY", "auth")}
              className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs transition-colors"
            >
              {copiedEndpoint === "auth" ? t("copied", lang) : t("copy", lang)}
            </button>
          </div>
        </div>

        {/* Endpoints Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            📡 {t("endpoints", lang)}
          </h2>
          
          {endpoints.map((endpoint, index) => (
            <div key={index} className="gradient-card p-8 rounded-xl">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  endpoint.method === 'POST' ? 'bg-green-600' : 'bg-blue-600'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-blue-300 text-lg">
                  {endpoint.path}
                </code>
              </div>
              
              <p className="text-gray-300 mb-6">
                {endpoint.description}
              </p>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">
                  {t("examples", lang)}:
                </h4>
                <div className="bg-gray-800 p-4 rounded-lg relative">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {endpoint.example}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(endpoint.example, endpoint.path)}
                    className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs transition-colors"
                  >
                    {copiedEndpoint === endpoint.path ? t("copied", lang) : t("copy", lang)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Response Example */}
        <div className="gradient-card p-8 rounded-xl mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            📄 {lang === 'en' ? 'Response Example' : 'مثال على الاستجابة'}
          </h3>
          <div className="bg-gray-800 p-4 rounded-lg relative">
            <pre className="text-green-400 text-sm overflow-x-auto">
{`{
  "id": "12345",
  "status": "processed",
  "data": {
    "invoice_number": "INV-2024-001",
    "date": "2024-01-15",
    "total": 150.00,
    "currency": "DZD",
    "vendor": "Company ABC",
    "items": [
      {
        "description": "Service A",
        "quantity": 2,
        "unit_price": 75.00
      }
    ]
  }
}`}
            </pre>
            <button
              onClick={() => copyToClipboard('{"id": "12345", "status": "processed", ...}', "response")}
              className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs transition-colors"
            >
              {copiedEndpoint === "response" ? t("copied", lang) : t("copy", lang)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
