import './globals.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-gray-50 text-gray-900 font-sans p-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <header className="text-center border-b pb-4">
            <h1 className="text-3xl font-bold">SMSCO AI Platform</h1>
            <p className="text-sm text-gray-600">Choose your language</p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
