import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat, poppins } from "@/constants/fonts";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import MotionLazy from "@/components/MotionLazy";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import { AppProvider } from "@/contexts/AppContext";
import MainContent from "@/components/MainContent";


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

export default function RootLayout() {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.variable} ${inter.variable} ${poppins.variable} antialiased font-montserrat h-full`}
      >
        <AppProvider>
          <div className="flex h-full min-h-screen">
            <Sidebar />
            <MobileNavigation />
            <MotionLazy>
              <MainContent />
            </MotionLazy>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}