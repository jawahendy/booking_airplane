import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat, poppins } from "@/constants/fonts";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import MotionLazy from "@/components/MotionLazy";


export const metadata: Metadata = {
  title: 'Booking Online Airplane.',
  description:
    'Welcome to Booking Online Airplane.',
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
        <MotionLazy>{children}</MotionLazy>
      </body>
    </html>
  );
}