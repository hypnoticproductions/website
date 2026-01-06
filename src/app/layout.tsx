import type { Metadata } from 'next';
import { Inter, Space_Mono, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Richard D. Fortune | Architect of Cognitive Frameworks',
  description: 'Technical founder and AI architect. Building the cognitive infrastructure for tomorrow. Two production-ready platforms. One mission: decode the complex.',
  keywords: ['founder', 'ai', 'cognitive architecture', 'blueprint', 'developer', 'saas', 'legal tech', 'travel safety'],
  authors: [{ name: 'Richard D. Fortune' }],
  openGraph: {
    title: 'Richard D. Fortune | Architect of Cognitive Frameworks',
    description: 'Technical founder and AI architect. Building the cognitive infrastructure for tomorrow.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceMono.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0A0F1C] text-white min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
