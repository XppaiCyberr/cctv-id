import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Salatiga CCTV Map',
  description: 'Interactive CCTV map for Salatiga city public streams.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
