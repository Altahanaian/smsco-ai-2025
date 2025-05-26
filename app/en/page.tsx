export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl text-left font-sans">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Welcome to SMSCO Platform</h1>
        <p className="text-gray-600 mb-6">
          Our platform offers smart solutions in consulting and training using AI technologies.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-loose">
          <li>Get matched with the right consultant</li>
          <li>Book instant or scheduled sessions</li>
          <li>Access certified online training programs</li>
        </ul>
      </div>
    </main>
  );
}
