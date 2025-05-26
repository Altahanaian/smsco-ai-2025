'use client';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <img
          src="/logo-smsco.png"
          alt="SMSCO Logo"
          className="mx-auto mb-4 w-24 h-auto"
        />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">SMSCO AI Platform</h1>
        <p className="text-gray-600 mb-6">Please select your preferred language</p>

        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
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
      </div>
    </main>
  );
}
