'use client'

import HomePanel from "@/components/HomePanel";
import NavBar from "@/components/NavBar";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HomePanel />
      <footer className="text-center w-full text-sm text-gray-500 p-4 mt-auto">
        <span>© 2025 Jeffrey Chin</span>
      </footer>
    </div>
  );
}
