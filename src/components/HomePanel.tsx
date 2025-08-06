'use client'

import { Bubbles, Droplet, Leaf, Waves, Wind, Music, AudioWaveform, LucideIcon } from "lucide-react";
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";
import { useAmbienceStore } from "@/stores/ambienceStore";
import React from "react";

const HomePanel = () => {
  const router = useRouter();
  const { updateConfig } = useAmbienceStore();

  const handleBrowseAmbiences = () => {
    router.push('/select');
  }

  const handleCreateNewAmbience = () => {
    updateConfig([]);
    router.push('/ambience');
  }

  const headerCellIcons = [Leaf, Wind, Droplet, Waves, Bubbles, Music, AudioWaveform];

  const HeaderCell = ({ icon }: { icon: LucideIcon }) => {
    return (
      <div className="flex justify-center items-center w-15 h-15 border rounded-md bg-white shadow-xs">
        {React.createElement(icon, { className: "size-5" })}
      </div>
    )
  }

  return (
    <div className="flex flex-col h-[calc(100vh-50px)] justify-center-safe items-center p-5">
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl font-bold line-clamp-2 w-100 sm:w-full p-2">Ambience Designer</h1>
        <p className="text-center sm:text-2xl text-xl w-90 sm:w-full text-gray-500 p-2">Combine sounds to create your own sound world.</p>
      </header>
        <div className="flex w-100 md:w-170 lg:w-200 overflow-hidden min-h-35 p-10">
          <div className="flex grid grid-flow-col justify-center items-center text-gray-500 gap-15 pr-15 infinite-scroll">
            {headerCellIcons.map((icon, key) => (
              <HeaderCell key={key} icon={icon} />
            ))}
          </div>
          <div className="flex grid grid-flow-col justify-center items-center text-gray-500 gap-15 pr-15 infinite-scroll">
            {headerCellIcons.map((icon, key) => (
              <HeaderCell key={key} icon={icon} />
            ))}
          </div>
        </div>
      <div className="flex grid gap-4 p-2 pb-8">
        <div className="flex justify-center items-center">
          <Button variant="outline" onClick={handleBrowseAmbiences} className="text-md w-fit h-fit">Browse Ambiences</Button>
        </div>
        <div className="flex justify-center items-center">
          <Button variant="outline" onClick={handleCreateNewAmbience} className="text-md w-fit h-fit">Create a New Ambience</Button>
        </div>
      </div>
    </div>
  )
}

export default HomePanel