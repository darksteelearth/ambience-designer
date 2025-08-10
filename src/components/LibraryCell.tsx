'use client'

import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { useAmbienceStore } from '@/stores/ambienceStore'
import { useSoundUsageStore } from '@/stores/soundUsageStore'
import { LucideIcon, Plus } from 'lucide-react'
import React, { useState } from 'react'
import GenericDialog from './GenericDialog'

const LibraryCell = ({ soundId, title, icon }: { soundId: number, title: string, icon: LucideIcon }) => {
    const { addSound, config } = useAmbienceStore();
    const addSoundUsage = useSoundUsageStore((state) => state.addSoundUsage);
    const [tooManySoundsDialogOpen, setTooManySoundsDialogOpen] = useState(false);

    const handleAdd = () => {
        if (config.length >= 50) {
            setTooManySoundsDialogOpen(true);
            return;
        }
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
                            <Button onClick={handleAdd} variant="outline" size="sm" className="absolute w-6 h-6 -top-2 -right-2 rounded-xl border-sky-200 hover:bg-sky-100/50 z-10" title="add-sound">
                                <Plus className="stroke-sky-400 size-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add Sound</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <p className="w-24 text-center text-pretty text-xs pt-1 line-clamp-2 text-ellipsis">{title}</p>
            <GenericDialog 
                open={tooManySoundsDialogOpen} 
                setOpen={setTooManySoundsDialogOpen}
                title="Too Many Sounds"
                message="You have too many sounds added. Please remove some sounds before adding new ones." 
            />
        </div>
    )
}

export default LibraryCell