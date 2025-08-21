import { Inter, Lusitana } from 'next/font/google';
// Importing Google Fonts using Next.js font optimization
// This allows for better performance and automatic font loading
export const inter = Inter({
  subsets: ['latin']
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
