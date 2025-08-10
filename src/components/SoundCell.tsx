'use client'

import { ArrowDown, LucideIcon, Volume1, Volume2, VolumeX } from "lucide-react"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Slider } from "./ui/slider"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useAmbienceStore } from "@/stores/ambienceStore"
import { useSoundUsageStore } from "@/stores/soundUsageStore"
import React, { useEffect, useState } from "react"
import ReactHowler from "react-howler"

const SoundCell = ({ sound, scalePitches }: { sound: { cellId: number, title: string, src: string, volume: number, icon: LucideIcon }, scalePitches?: number[] }) => {
  const { globalVolume, updateSoundVolume, removeSound } = useAmbienceStore();
  const [currentVolume, setCurrentVolume] = useState(sound.volume)
  const [showVolumePercentage, setShowVolumePercentage] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [looping, setLooping] = useState(false);
  const { incrementSecondsListened, setRemoved } = useSoundUsageStore();

  const handleRemove = () => {
    removeSound(sound.cellId);
    setRemoved(sound.cellId);
  };

  const randomPitch = () => {
    if (!scalePitches || scalePitches.length === 0) return 1;
    return 0.5 * scalePitches[Math.floor(Math.random() * scalePitches.length)];
  }

  const [modRate, setModRate] = useState(randomPitch());

  const handleOnSoundEnd = () => {
    setLooping(true);
    setPlaying(true);
    if (!scalePitches || scalePitches.length === 0) return;
    setModRate(randomPitch());
  }

  useEffect(() => {
    const secondsInterval = setInterval(() => {
      incrementSecondsListened(sound.cellId);
    }, 1000);
  
    return () => {
      clearInterval(secondsInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ReactHowler 
        key={scalePitches ? modRate : undefined}
        src={sound.src} 
        playing={playing} 
        loop={scalePitches ? looping : true} 
        volume={currentVolume * globalVolume}
        rate={scalePitches ? modRate : 1}
        onPlay={() => setLooping(false)}
        onEnd={handleOnSoundEnd}
      />
      <div className="flex justify-center mt-4">
        <Popover>
          <div className="relative w-20 h-20">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={handleRemove} variant="outline" size="sm" className="absolute -top-2 -right-2 w-5 h-5.5 rounded-xl z-10 border-red-200 hover:bg-red-100" title="return-sound-to-library">
                  <ArrowDown className="stroke-red-500 size-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Return Sound to Library</p>
              </TooltipContent>
            </Tooltip>
            <div className="absolute inset-0 rounded-md bg-sky-100/50 animate-ping [animation-timing-function:ease-in] [animation-duration:3s]"></div>
            <div className="absolute flex justify-center items-center w-full h-full border border-sky-200/70 shadow-xs rounded-md bg-white">
              <sound.icon className="size-5" />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="absolute -bottom-2 left-7 w-6 h-6 rounded-md z-10 shadow-md" title="sound-volume">
                    {currentVolume === 0 ? <VolumeX className="size-3" /> :
                      currentVolume < 0.5 ? <Volume1 className="size-3" /> :
                        <Volume2 className="size-3" />}
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sound Volume</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <PopoverContent className="w-80 ml-2 mr-2">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Sound Volume</h4>
                <p className="text-muted-foreground text-sm">
                  Set the volume of this sound.
                </p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="soundVolume">{showVolumePercentage ? `${(currentVolume * 100).toFixed(0)}%` : "Volume"}</Label>
                <Slider
                  id="soundVolume"
                  value={[currentVolume]}
                  onValueChange={(value) => {
                    setCurrentVolume(value[0]);
                    updateSoundVolume(sound.cellId, value[0])
                  }}
                  onMouseEnter={() => setShowVolumePercentage(true)}
                  onMouseLeave={() => setShowVolumePercentage(false)}
                  max={1}
                  step={0.01}
                  className="col-span-3"
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <p className="w-24 h-9 text-center text-pretty text-xs line-clamp-2 text-ellipsis mt-4">{sound.title}</p>
    </div>
  )
}

export default SoundCell