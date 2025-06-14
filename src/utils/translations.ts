
export const translations = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    apiDocs: "API Docs",
    pricing: "Pricing",
    login: "Login",
    logout: "Logout",
    
    // Home page
    companyName: "AI Solutions",
    productName: "Doc-IN",
    slogan: "Let AI read your invoices",
    heroTitle: "Revolutionize Your Invoice Processing",
    heroSubtitle: "Transform your Algerian business with AI-powered invoice reading technology. Extract data instantly with precision and speed.",
    ctaExplore: "Explore Dashboard",
    ctaStart: "Get Started",
    
    // Features
    featuresTitle: "Why Choose Doc-IN?",
    featureAccuracy: "99.9% Accuracy",
    featureAccuracyDesc: "Our AI precisely extracts data from invoices with industry-leading accuracy.",
    featureSpeed: "Lightning Fast",
    featureSpeedDesc: "Process hundreds of invoices in seconds, not hours.",
    featureIntegration: "Easy Integration",
    featureIntegrationDesc: "Simple API integration with comprehensive documentation.",
    
    // Dashboard
    welcomeBack: "Welcome back",
    apiKey: "API Key",
    currentPlan: "Current Plan",
    invoicesProcessed: "Invoices Processed",
    thisMonth: "This Month",
    usage: "Usage",
    analytics: "Analytics",
    
    // Pricing
    pricingTitle: "Choose Your Plan",
    pricingSubtitle: "Scale with confidence. Upgrade or downgrade at any time.",
    testPlan: "Test Plan",
    proPlan: "Pro Plan",
    enterprisePlan: "Enterprise Plan",
    invoicesPerMonth: "invoices/month",
    unlimited: "Unlimited",
    mostPopular: "Most Popular",
    
    // API Docs
    apiTitle: "API Documentation",
    apiSubtitle: "Integrate Doc-IN into your applications with our simple REST API.",
    endpoints: "Endpoints",
    authentication: "Authentication",
    examples: "Examples",
    
    // Login
    loginTitle: "Sign In",
    loginSubtitle: "Access your Doc-IN dashboard",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    copy: "Copy",
    copied: "Copied!",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    dashboard: "لوحة التحكم",
    apiDocs: "وثائق API",
    pricing: "الأسعار",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    
    // Home page
    companyName: "حلول الذكاء الاصطناعي",
    productName: "دوك-إن",
    slogan: "دع الذكاء الاصطناعي يقرأ فواتيرك",
    heroTitle: "ثورة في معالجة الفواتير",
    heroSubtitle: "قم بتحويل أعمالك الجزائرية بتقنية قراءة الفواتير المدعومة بالذكاء الاصطناعي. استخراج البيانات فوريًا بدقة وسرعة.",
    ctaExplore: "استكشف لوحة التحكم",
    ctaStart: "ابدأ الآن",
    
    // Features
    featuresTitle: "لماذا تختار دوك-إن؟",
    featureAccuracy: "دقة 99.9%",
    featureAccuracyDesc: "يستخرج الذكاء الاصطناعي البيانات من الفواتير بدقة رائدة في الصناعة.",
    featureSpeed: "سرعة البرق",
    featureSpeedDesc: "معالجة مئات الفواتير في ثوانٍ وليس ساعات.",
    featureIntegration: "تكامل سهل",
    featureIntegrationDesc: "تكامل API بسيط مع وثائق شاملة.",
    
    // Dashboard
    welcomeBack: "أهلاً بعودتك",
    apiKey: "مفتاح API",
    currentPlan: "الخطة الحالية",
    invoicesProcessed: "الفواتير المعالجة",
    thisMonth: "هذا الشهر",
    usage: "الاستخدام",
    analytics: "التحليلات",
    
    // Pricing
    pricingTitle: "اختر خطتك",
    pricingSubtitle: "قم بالتوسع بثقة. ترقية أو تخفيض في أي وقت.",
    testPlan: "خطة تجريبية",
    proPlan: "خطة برو",
    enterprisePlan: "خطة الشركات",
    invoicesPerMonth: "فاتورة/شهر",
    unlimited: "غير محدود",
    mostPopular: "الأكثر شعبية",
    
    // API Docs
    apiTitle: "وثائق API",
    apiSubtitle: "دمج دوك-إن في تطبيقاتك باستخدام REST API البسيط الخاص بنا.",
    endpoints: "نقاط النهاية",
    authentication: "المصادقة",
    examples: "أمثلة",
    
    // Login
    loginTitle: "تسجيل الدخول",
    loginSubtitle: "الوصول إلى لوحة تحكم دوك-إن",
    
    // Common
    loading: "جاري التحميل...",
    error: "خطأ",
    success: "نجح",
    copy: "نسخ",
    copied: "تم النسخ!",
  }
};

export const t = (key: string, lang: string) => {
  return translations[lang as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
};
