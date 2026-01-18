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
  icons: {
    icon: 'https://res.cloudinary.com/dd6z9fx5m/image/upload/v1768759323/Generated_Image_January_18_2026_-_1_20PM_b87nye.jpg',
    shortcut: 'https://res.cloudinary.com/dd6z9fx5m/image/upload/v1768759323/Generated_Image_January_18_2026_-_1_20PM_b87nye.jpg',
    apple: 'https://res.cloudinary.com/dd6z9fx5m/image/upload/v1768759323/Generated_Image_January_18_2026_-_1_20PM_b87nye.jpg',
  },
  openGraph: {
    title: 'The Cognitive Architect\'s Repository | Richard D. Fortune',
    description: 'A proprietary 7-Collection Cognitive Intelligence Engine. Mapping the invisible architectures of human potential through pattern recognition, emotional-somatic bridging, and evolutionary frameworks.',
    type: 'website',
    siteName: 'The Cognitive Architect\'s Repository',
    images: [
      {
        url: 'https://res.cloudinary.com/dd6z9fx5m/image/upload/v1768759885/Generated_Image_January_18_2026_-_1_57PM_tai7x9.jpg',
        width: 1200,
        height: 630,
        alt: 'The Cognitive Architect\'s Repository',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cognitive Architect\'s Repository | Richard D. Fortune',
    description: 'A proprietary 7-Collection Cognitive Intelligence Engine. Mapping the invisible architectures of human potential through pattern recognition, emotional-somatic bridging, and evolutionary frameworks.',
    images: ['https://res.cloudinary.com/dd6z9fx5m/image/upload/v1768759885/Generated_Image_January_18_2026_-_1_57PM_tai7x9.jpg'],
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
