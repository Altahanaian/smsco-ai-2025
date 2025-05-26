import '../globals.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-gray-50 text-gray-900 font-sans p-4">
        {children}
      </body>
    </html>
  );
}
