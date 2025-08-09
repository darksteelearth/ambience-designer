'use client'

import { Button } from './ui/button'
import { LucideIcon, Plus } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { useAmbienceStore } from '@/stores/ambienceStore'
import { useSoundUsageStore } from '@/stores/soundUsageStore'
import React from 'react'

const LibraryCell = ({ soundId, title, icon }: { soundId: number, title: string, icon: LucideIcon }) => {
    const addSound = useAmbienceStore((state) => state.addSound);
    const addSoundUsage = useSoundUsageStore((state) => state.addSoundUsage);

    const handleAdd = () => {
        const cellId = Date.now();
        addSound(cellId, soundId);
        addSoundUsage(cellId, soundId, 1);
    };

    return (
        <div className="flex-col flex items-center">
            <div className="flex justify-center">
                <div className="relative w-15 h-15">
                    <div className="flex justify-center items-center w-full h-full border border-sky-200/70 bg-white shadow-xs rounded-md">
                        {React.createElement(icon, { className: 'size-5' })}
                    </div>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={handleAdd} variant="outline" size="sm" className="absolute w-5 h-5.5 -top-2 -right-2 rounded-xl border-sky-200 hover:bg-sky-100 z-10" title="add-sound">
                                <Plus className="stroke-sky-500 size-3.5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add Sound</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <p className="w-24 text-center text-pretty text-xs pt-1 line-clamp-2 text-ellipsis">{title}</p>
        </div>
    )
}

export default LibraryCell