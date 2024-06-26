import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/index.scss';

// const suitFont = localFont({
//   src: './fonts/SUIT-Regular.woff2',
//   variable: '--font-SUIT',
//   weight: '100 900',
// });
const suitFont = localFont({
  src: [
    {
      path: './fonts/SUIT-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SUIT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SUIT-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={suitFont.className}>{children}</body>
    </html>
  );
}
