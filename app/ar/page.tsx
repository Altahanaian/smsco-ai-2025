export default function ArabicHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl text-right font-sans">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">مرحبًا بك في منصة سمسكو</h1>
        <p className="text-gray-600 mb-6">
          منصتنا تقدم حلولًا ذكية في مجال الاستشارات والتدريب باستخدام تقنيات الذكاء الاصطناعي.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-loose rtl:space-x-reverse">
          <li>مطابقة ذكية مع المستشار المناسب</li>
          <li>حجز جلسات فورية أو مجدولة</li>
          <li>الوصول إلى برامج تدريبية معتمدة عبر الإنترنت</li>
        </ul>
      </div>
    </main>
  );
}
