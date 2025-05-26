export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">SMSCO AI Platform</h1>
      <p className="text-gray-600 text-sm">Please select your preferred language</p>
      <div className="flex gap-4 rtl:space-x-reverse">
        <a
          href="/ar"
          className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          العربية
        </a>
        <a
          href="/en"
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
        >
          English
        </a>
      </div>
    </main>
  );
}
