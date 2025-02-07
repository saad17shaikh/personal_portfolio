import type { Metadata } from "next";
import "./globals.css";
import { Playpen_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Playpen_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saad Shaikh",
  description: "This is a personal portfolio website created by Saad Shaikh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-white/90`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
