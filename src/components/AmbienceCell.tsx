'use client'

import { useAmbienceStore } from "@/stores/ambienceStore"
import { useSelectedStore } from "@/stores/selectedAmbiences";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Ambience } from "@/data/config";
import { Button } from "./ui/button"
import { Loader2, Plus } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const AmbienceCell = ({ ambience, createCell, userAmbience }: { ambience: Ambience, createCell: boolean, userAmbience?: boolean }) => {
  const { updateConfig } = useAmbienceStore();
  const { selected, selectAmbience, deselectAmbience } = useSelectedStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setLoading(true);
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
    <div className="w-full aspect-[1/1] border border-white/30 shadow-xs rounded-sm flex flex-col items-center justify-between bg-slate-900/50 text-white">
      {createCell ? (
        <>
          <Button variant="ghost"
            className="flex flex-col w-33 h-full text-sm rounded-sm hover:bg-slate-100"
            onClick={handleOpen}>
            {loading ?
              <>
                <Loader2 className="animate-spin" />
                <p>Loading...</p>
              </> :
              <>
                <Plus />
                <p className="w-24 text-center text-pretty line-clamp-2 text-ellipsis whitespace-normal">Create New Ambience</p>
              </>
            }

          </Button>
        </>
      ) : (
        <>
          {userAmbience && <Checkbox checked={isSelected()} onCheckedChange={handleSelect} className="relative top-2 left-1/2 -translate-x-4" title="select-checkbox" />}
          <div className="flex-grow flex items-center justify-center text-xs mt-3 font-medium select-none">
            <p className="w-24 text-center text-pretty line-clamp-4 text-ellipsis">{ambience.title}</p>
          </div>
          <Button
            className="w-27 h-fit text-xs rounded-sm m-3 mb-3 shadow-xs text-white bg-sky-700 border border-sky-600 hover:bg-sky-500"
            onClick={handleOpen}>
            {loading ? <Loader2 className="size-3 animate-spin" /> : "Open Ambience"}
          </Button>
        </>
      )
      }
    </div>
  )
}

export default AmbienceCell