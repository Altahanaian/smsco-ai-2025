// app/ar/layout.tsx أو app/en/layout.tsx
import React from 'react';

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
