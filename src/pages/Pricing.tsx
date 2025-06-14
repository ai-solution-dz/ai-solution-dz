
import { useLanguage, useUser } from "../App";
import { t } from "../utils/translations";
import { useState } from "react";

const Pricing = () => {
  const { lang } = useLanguage();
  const { user } = useUser();
  const [selectedPlan, setSelectedPlan] = useState(user.currentPlan);

  const plans = [
    {
      name: t("testPlan", lang),
      nameKey: "testPlan",
      price: lang === 'en' ? "Free" : "مجاني",
      invoices: "25",
      features: lang === 'en' 
        ? ["25 invoices per month", "Basic AI extraction", "Email support", "7-day data retention"]
        : ["25 فاتورة شهرياً", "استخراج الذكاء الاصطناعي الأساسي", "دعم البريد الإلكتروني", "الاحتفاظ بالبيانات لـ 7 أيام"],
      popular: false,
      icon: "🧪"
    },
    {
      name: t("proPlan", lang),
      nameKey: "proPlan",
      price: lang === 'en' ? "$29/month" : "29$ شهرياً",
      invoices: "500",
      features: lang === 'en'
        ? ["500 invoices per month", "Advanced AI extraction", "Priority support", "30-day data retention", "API access", "Custom integrations"]
        : ["500 فاتورة شهرياً", "استخراج الذكاء الاصطناعي المتقدم", "دعم أولوية", "الاحتفاظ بالبيانات لـ 30 يوم", "وصول API", "تكاملات مخصصة"],
      popular: true,
      icon: "⚙️"
    },
    {
      name: t("enterprisePlan", lang),
      nameKey: "enterprisePlan",
      price: lang === 'en' ? "Custom" : "مخصص",
      invoices: t("unlimited", lang),
      features: lang === 'en'
        ? ["Unlimited invoices", "Premium AI models", "24/7 dedicated support", "Unlimited data retention", "Custom API endpoints", "White-label solution", "SLA guarantee"]
        : ["فواتير غير محدودة", "نماذج الذكاء الاصطناعي المتميزة", "دعم مخصص 24/7", "الاحتفاظ بالبيانات غير محدود", "نقاط API مخصصة", "حل العلامة البيضاء", "ضمان SLA"],
      popular: false,
      icon: "🏢"
    }
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    // In a real app, this would trigger a plan change API call
    console.log(`Selected plan: ${planName}`);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("pricingTitle", lang)}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("pricingSubtitle", lang)}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative gradient-card p-8 rounded-2xl transition-all hover:transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-full text-sm font-semibold text-white">
                    {t("mostPopular", lang)}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-300">
                  {plan.invoices} {plan.invoices !== t("unlimited", lang) ? t("invoicesPerMonth", lang) : ""}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handlePlanSelect(plan.nameKey)}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  selectedPlan === plan.nameKey
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white'
                    : 'border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white'
                }`}
              >
                {selectedPlan === plan.nameKey 
                  ? (lang === 'en' ? 'Current Plan' : 'الخطة الحالية')
                  : (lang === 'en' ? 'Select Plan' : 'اختر الخطة')
                }
              </button>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <div className="gradient-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {lang === 'en' ? 'Need a custom solution?' : 'تحتاج حلاً مخصصاً؟'}
            </h3>
            <p className="text-gray-300 mb-6">
              {lang === 'en' 
                ? 'Contact our sales team for enterprise pricing and custom integrations tailored to your business needs.'
                : 'اتصل بفريق المبيعات للحصول على أسعار المؤسسات والتكاملات المخصصة المصممة لاحتياجات عملك.'
              }
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all">
              {lang === 'en' ? 'Contact Sales' : 'تواصل مع المبيعات'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
