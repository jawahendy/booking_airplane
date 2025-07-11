import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat, poppins } from "@/constants/fonts";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import MotionLazy from "@/components/MotionLazy";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";


export const metadata: Metadata = {
  title: 'Booking Online Airplane.',
  description:
    'Welcome to Booking Online Airplane.',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ],
  },
  openGraph: mergeOpenGraph({
    title: 'Booking Online Airplane.',
    description:
      'Welcome to Booking Online Airplane.',
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} ${poppins.variable} antialiased font-montserrat`}
      >
        <div className="flex">
          <Sidebar />
          <MobileNavigation />
          <div className="flex-1">
            <MotionLazy>{children}</MotionLazy>
          </div>
        </div>
      </body>
    </html>
  );
}