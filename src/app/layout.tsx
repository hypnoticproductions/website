import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Richard D. Fortune | Technical Founder & AI Architect',
  description: 'Technical founder who has shipped two production-ready SaaS platforms. Building things that work from St. Lucia.',
  keywords: ['founder', 'saas', 'ai', 'legal tech', 'travel safety', 'developer'],
  authors: [{ name: 'Richard D. Fortune' }],
  openGraph: {
    title: 'Richard D. Fortune | Technical Founder & AI Architect',
    description: 'Technical founder who has shipped two production-ready SaaS platforms.',
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0A1628] text-white min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
