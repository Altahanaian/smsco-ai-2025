import './globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="relative min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* الخلفية */}
        <img
          src="/background-smsco-lavender.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
        />

        {/* الشعار في الأعلى */}
        <header className="w-full py-4 flex justify-center items-center">
          <img
            src="/logo-smsco-transparent.png"
            alt="SMSCO Logo"
            className="h-16 w-auto"
          />
        </header>

        {/* المحتوى */}
        <main className="px-6 pb-12">{children}</main>
      </body>
    </html>
  );
}
