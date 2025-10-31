import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Universal Companies - Spa & Salon Supplies, Products, and Equipment',
    template: '%s | Universal Companies',
  },
  description: 'Leading supplier of spa and salon supplies, professional skincare products, massage equipment, and wellness solutions for estheticians, massage therapists, and beauty professionals.',
  keywords: ['spa supplies', 'salon equipment', 'skincare products', 'massage supplies', 'beauty products', 'esthetician supplies'],
  authors: [{ name: 'Universal Companies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Universal Companies',
    title: 'Universal Companies - Spa & Salon Supplies',
    description: 'Leading supplier of spa and salon supplies, products, and equipment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universal Companies',
    description: 'Leading supplier of spa and salon supplies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
