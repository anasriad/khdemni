import { useState } from "react";
import Header from "../components/Header";

type Language = "en" | "fr" | "ar";

interface Step {
  title: string;
  text: string;
}

interface TranslationContent {
  title: string;
  howTo: string;
  description: string;
  dir: "ltr" | "rtl";
  steps: Step[];
}

export default function Tutorials() {
  const [language, setLanguage] = useState<Language>("en");

  const translations: Record<Language, TranslationContent> = {
    en: {
      title: "📘 Tutorials",
      howTo: "How to Use Khdemni",
      description: "Khdemni is a freelancing platform where clients can find trusted service providers, and providers can showcase their skills to land gigs.",
      dir: "ltr",
      steps: [
        {
          title: "📝 Create an Account",
          text: "Start by signing up for free. You can choose to register as a client (if you’re looking to hire) or as a provider (if you’re offering services). This helps tailor your experience to your needs from the beginning.",
        },
        {
          title: "👤 Set Up Your Profile",
          text: "Add a professional photo, list your skills, write a short description, and optionally upload a portfolio. Your profile acts as your online business card — it helps build trust and attract attention from the right people.",
        },
        {
          title: "🔍 Post or Browse Jobs",
          text: "If you're a client, you can easily post job requests with descriptions, budgets, and deadlines. If you're a provider, you can browse through available jobs that match your expertise and location.",
        },
        {
          title: "📨 Send Proposals",
          text: "Providers can apply to posted jobs by submitting custom proposals. You can outline your approach, set a price, and share your availability — all tailored to what the client needs.",
        },
        {
          title: "💬 Communicate",
          text: "Clients and providers can chat directly on the platform. Discuss expectations, timelines, and any questions before starting the job. A clear conversation helps avoid confusion later.",
        },
        {
          title: "💸 Get Paid Securely",
          text: "After the work is delivered and approved, payments are handled through Khdemni’s secure system, giving both parties peace of mind. No need to worry about chasing invoices or transfers.",
        },
      ],
    },
    fr: {
      title: "📘 Tutoriels",
      howTo: "Comment utiliser Khdemni",
      description: "Khdemni est une plateforme où les clients trouvent des prestataires de services fiables, et les prestataires présentent leurs compétences pour obtenir des missions.",
      dir: "ltr",
      steps: [
        {
          title: "📝 Créer un compte",
          text: "Inscrivez-vous gratuitement. Choisissez de vous inscrire comme client (si vous cherchez à embaucher) ou comme prestataire (si vous proposez des services).",
        },
        {
          title: "👤 Complétez votre profil",
          text: "Ajoutez une photo, vos compétences, une description et un portfolio. Votre profil agit comme votre carte de visite.",
        },
        {
          title: "🔍 Publier ou rechercher des offres",
          text: "Les clients publient leurs besoins avec budget et délai. Les prestataires parcourent les missions qui correspondent à leur expertise.",
        },
        {
          title: "📨 Envoyer des propositions",
          text: "Soumettez des propositions personnalisées pour décrocher des missions. Présentez votre méthode, prix et disponibilité.",
        },
        {
          title: "💬 Communiquez",
          text: "Échangez sur la plateforme pour clarifier les attentes et organiser le travail.",
        },
        {
          title: "💸 Paiement sécurisé",
          text: "Les paiements sont traités par le système sécurisé de Khdemni une fois le travail validé.",
        },
      ],
    },
    ar: {
      title: "📘 الدروس",
      howTo: "كيفية استخدام خدمْني",
      description: "خدمْني هو منصة تجمع بين العملاء ومقدمي الخدمات بطريقة موثوقة وسهلة.",
      dir: "rtl",
      steps: [
        {
          title: "📝 إنشاء حساب",
          text: "ابدأ بالتسجيل مجاناً كعميل (للبحث عن خدمات) أو كمقدّم خدمات (لعرض مهاراتك).",
        },
        {
          title: "👤 إعداد ملفك الشخصي",
          text: "أضف صورة، قائمة مهاراتك، وصف موجز، ومحفظة أعمال إن وجدت. الملف الشخصي يعزز الثقة.",
        },
        {
          title: "🔍 نشر أو تصفح الوظائف",
          text: "ينشر العملاء طلباتهم، ويمكن لمقدّمي الخدمات تصفح العروض المطابقة لتخصصهم.",
        },
        {
          title: "📨 إرسال العروض",
          text: "يمكنك تقديم عرض مخصص للعمل، يتضمن السعر والطريقة والتوقيت.",
        },
        {
          title: "💬 التواصل",
          text: "تواصل مع الطرف الآخر للاتفاق على التفاصيل بوضوح.",
        },
        {
          title: "💸 استلام الدفع بأمان",
          text: "يتم دفع الأجور عبر نظام آمن بعد إنهاء وتسليم العمل.",
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-4xl mx-auto" dir={t.dir}>
          {/* Language Selector + Title */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <label htmlFor="language" className="text-sm font-medium text-gray-700 mr-2">
                {language === "ar" ? "اللغة" : "Language:"}
              </label>
              <select
                id="language"
                name="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            <h1 className="text-4xl font-bold text-indigo-700">{t.title}</h1>
          </div>

          {/* How It Works Section */}
          <section className="bg-white p-6 rounded-xl shadow mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.howTo}</h2>
            <p className="text-gray-700 mb-6">{t.description}</p>

            <div className="space-y-6 text-gray-700">
              {t.steps.map((step, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
