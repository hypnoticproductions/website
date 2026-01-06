import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import BlueprintShell from '@/components/layout/BlueprintShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'The Cognitive Architect\'s Repository | Richard D. Fortune',
  description: 'A proprietary 7-Collection Cognitive Intelligence Engine. Mapping the invisible architectures of human potential through pattern recognition, emotional-somatic bridging, and evolutionary frameworks.',
  keywords: ['cognitive architecture', 'pattern recognition', 'emotional intelligence', 'somatic awareness', 'evolutionary frameworks', 'cognitive intelligence', 'Richard Fortune'],
  authors: [{ name: 'Richard D. Fortune' }],
  openGraph: {
    title: 'The Cognitive Architect\'s Repository',
    description: 'A proprietary 7-Collection Cognitive Intelligence Engine',
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary min-h-screen`}
      >
        <BlueprintShell>
          {children}
        </BlueprintShell>
      </body>
    </html>
  );
}
