
import "./globals.css";
import { Inter, DM_Sans, Manrope } from 'next/font/google';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  weight: '700',
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: '500',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Squaree',
  description:
    "Predictable growth starts here.",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
