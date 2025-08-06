'use client'

import SoundCell from './SoundCell'
import ScrollAreaWithArrows from './ScrollAreaWithArrows'
import { useAmbienceStore } from '@/stores/ambienceStore'
import { SoundCellData } from '@/data/config'
import { sound_metadata } from '@/data/sound-metadata'
import { AudioWaveform } from 'lucide-react'

const SoundRow = () => {
  const config = useAmbienceStore((state) => state.config);

  return (
    <div className="flex justify-center-safe pl-8 pr-8 pb-10">
      <ScrollAreaWithArrows showscrollbar="true" orientation="horizontal" className="flex rounded-md border-t border-b w-full max-w-4xl">
        <div className="flex justify-center items-center grid grid-rows-[160px] gap-15 grid-flow-col p-6">
          {config.length === 0 && (
            <div className="text-gray-500 text-sm text-center">Browse the Sound Library to add sounds to the ambience.</div>
          )}
          {config.map((soundCellData: SoundCellData) => {
            const scd = sound_metadata.find(s => s.id === soundCellData.soundId);

            return (
              <SoundCell key={soundCellData.cellId} sound={{
                cellId: soundCellData.cellId,
                title: scd?.title ?? "",
                src: "sounds/" + scd?.src,
                volume: soundCellData.volume,
                icon: scd?.icon ?? AudioWaveform
              }}
              scalePitches={scd?.scalePitches}
              />
            )
          })}
        </div>
      </ScrollAreaWithArrows>
    </div>
  )
}

export default SoundRow