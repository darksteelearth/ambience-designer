import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { NavigationGuardProvider } from "next-navigation-guard";
import AuthSessionProvider from "@/components/AuthSessionProvider";
import SavedAmbiences from "@/components/SavedAmbiences";
import "./globals.css";
import Background from "@/components/Background";

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
      <AuthSessionProvider>
        <SavedAmbiences />
        <body className={`${nunitoSans.className} antialiased`}>
          <NavigationGuardProvider>
            <Background />
            <div className="fixed inset-0 bg-radial from-slate-300/30 to-black z-[-1]" />
            <main className="mt-13">
              {children}
            </main>
          </NavigationGuardProvider>
        </body>
      </AuthSessionProvider>
    </html>
  );
}
