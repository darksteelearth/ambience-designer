import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { NavigationGuardProvider } from "next-navigation-guard";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ambience Designer",
  description: "Design your sound world with Ambience Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        <NavigationGuardProvider>
          <NavBar />
          <div className="fixed inset-0 -z-20 bg-radial from-sky-50/50 to-gray-50" />
          <main className="mt-13">
            {children}
          </main>
        </NavigationGuardProvider>
      </body>
    </html>
  );
}
