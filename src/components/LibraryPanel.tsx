'use client'

import { AudioWaveform, LucideIcon, Search } from "lucide-react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import ScrollAreaWithArrows from "./ScrollAreaWithArrows"
import LibraryCell from "./LibraryCell"
import { SoundCategory } from "@/data/sound-metadata"
import { filterItems } from "@/actions/filterItems"
import { useState } from "react"

const LibraryPanel = ({ sounds, search }: { sounds: { id: number, title: string, src: string, tags: SoundCategory[], icon?: LucideIcon }[], search?: boolean }) => {
  const [displayedSounds, setDisplayedSounds] = useState(sounds);

  const handleOnChange = (input: string) => {
    const filteredSounds = filterItems(sounds, input);
    setDisplayedSounds(filteredSounds);
  }

  return (
    <div>
      {search &&
        <div className="flex justify-center-safe pb-4">
          <div className="flex w-full gap-4">
            <Label htmlFor="search" className="text-white/90">Search</Label>
            <div className="relative w-full">
              <Input id="search" className="bg-slate-900/70 text-white pl-8 text-sm border-white/30 placeholder:text-white/70" onChange={(e) => handleOnChange(e.target.value)} maxLength={200} placeholder="Search for sounds..." />
              <Search className="w-5 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-white/70 hover:text-white" />
            </div>
          </div>
        </div>}
      <div className="flex justify-center-safe">
        <ScrollAreaWithArrows showscrollbar="true" orientation="horizontal" className="flex rounded-md shadow-xs border border-white/30 bg-slate-900/70 w-full">
          <div className="flex justify-evenly grid grid-rows-[96px_96px] gap-5 grid-flow-col p-6">
            {displayedSounds.length > 0 ?
              <>
                {displayedSounds.map((sound) => (
                  <LibraryCell key={sound.id} soundId={sound.id} title={sound.title} icon={sound.icon ? sound.icon : AudioWaveform} />
                ))}
              </> :
              <div className="flex row-span-2 justify-center items-center">
                <p className="text-white/70 text-sm">No sounds matched your search.</p>
              </div>
            }
          </div>
        </ScrollAreaWithArrows>
      </div>
    </div>
  )
}

export default LibraryPanel