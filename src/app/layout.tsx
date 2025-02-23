
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '../app/components/Navbar';
import './globals.css';


const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
 })
export const metadata: Metadata = {
  title: 'IGTL - InfiGlobal Techlogix',
  description: 'InfiGlobal Techlogix Private Limited',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}