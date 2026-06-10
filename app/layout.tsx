import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CCTV ID',
  description: 'Interactive public CCTV map for Indonesian regional streams.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
