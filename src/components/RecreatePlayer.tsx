'use client'

import { LucideIcon } from "lucide-react"
import { useAmbienceStore } from "@/stores/ambienceStore";
import { useState } from "react";
import ReactHowler from "react-howler";

const RecreatePlayer = ({ sound, scalePitches }: { sound: { cellId: number, title: string, src: string, volume: number, icon: LucideIcon }, scalePitches?: number[] }) => {
    const globalVolume = useAmbienceStore(state => state.globalVolume);

    const randomPitch = () => {
        if (!scalePitches || scalePitches.length === 0) return 1;
        return 0.5 * scalePitches[Math.floor(Math.random() * scalePitches.length)];
    }

    const [modRate, setModRate] = useState(randomPitch());
    const [playing, setPlaying] = useState(true);
    const [looping, setLooping] = useState(false);

    const handleOnSoundEnd = () => {
        setLooping(true);
        setPlaying(true);
        if (!scalePitches || scalePitches.length === 0) return;
        setModRate(randomPitch());
    }

    return (
        <ReactHowler
            key={scalePitches ? modRate : undefined}
            src={sound.src}
            playing={playing}
            loop={scalePitches ? looping : true}
            volume={globalVolume}
            rate={scalePitches ? modRate : 1}
            onPlay={() => setLooping(false)}
            onEnd={handleOnSoundEnd}
        />
    )
}

export default RecreatePlayer