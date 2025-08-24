'use client'

import { useAmbienceStore } from "@/stores/ambienceStore";
import { LucideIcon } from "lucide-react"
import { useRef } from "react";
import ReactHowler from "react-howler";

const TonePlayer = ({ sound, scalePitches, currentVolume, isPlaying }: {
    sound: { cellId: number, title: string, src: string, volume: number, icon: LucideIcon },
    scalePitches: number[],
    currentVolume: number,
    isPlaying: boolean
}) => {
    const howlerRef = useRef<ReactHowler>(null);
    const globalVolume = useAmbienceStore(state => state.globalVolume);

    const randomPitch = () => {
        return 0.5 * scalePitches[Math.floor(Math.random() * scalePitches.length)];
    }

    const handleOnSoundEnd = () => {
        if (howlerRef.current) {
            howlerRef.current.howler.rate(randomPitch());
            howlerRef.current.howler.play();
        }
    }

    return <ReactHowler
        src={sound.src}
        playing={isPlaying}
        volume={currentVolume * globalVolume}
        onEnd={handleOnSoundEnd}
        ref={howlerRef}
    />
}

export default TonePlayer