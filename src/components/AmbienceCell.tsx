'use client'

import { useAmbienceStore } from "@/stores/ambienceStore"
import { useSelectedStore } from "@/stores/selectedAmbiences";
import { useRouter } from "next/navigation";
import { Ambience } from "@/data/config";
import { Button } from "./ui/button"
import { Plus } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const AmbienceCell = ({ ambience, createCell, userAmbience }: { ambience: Ambience, createCell: boolean, userAmbience?: boolean }) => {
  const { updateConfig } = useAmbienceStore();
  const { selected, selectAmbience, deselectAmbience } = useSelectedStore();
  const router = useRouter();

  const handleClick = () => {
    updateConfig(ambience.config);
    router.push('/ambience');
  };

  const isSelected = () => {
    return selected.includes(ambience.title);
  }

  const handleSelect = (selected: boolean) => {
    return selected ? selectAmbience(ambience.title) : deselectAmbience(ambience.title);
  }

  return (
    <div className="w-full aspect-[1/1] border rounded-sm flex flex-col items-center justify-between bg-white">
      {createCell ? (
        <>
          <Button variant="ghost"
            className="flex flex-col w-33 h-full text-sm rounded-sm shadow-none"
            onClick={handleClick}>
            <Plus />
            <p className="w-24 text-center text-pretty line-clamp-2 text-ellipsis whitespace-normal">Create New Ambience</p>
          </Button>
        </>
      ) : (
        <>
          {userAmbience && <Checkbox checked={isSelected()} onCheckedChange={handleSelect} className="relative top-2 left-1/2 -translate-x-4" />}
          <div className="flex-grow flex items-center justify-center text-xs font-medium select-none">
            <p className="w-24 text-center text-pretty line-clamp-2 text-ellipsis">{ambience.title}</p>
          </div>
          <Button
            className="w-27 h-7 text-xs rounded-sm m-3 mb-3 shadow-sm bg-sky-500/90 hover:bg-sky-500"
            onClick={handleClick}>
            Open Ambience
          </Button>
        </>
      )
      }
    </div>
  )
}

export default AmbienceCell