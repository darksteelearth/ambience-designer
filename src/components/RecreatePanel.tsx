'use client'

import { AudioWaveform, CircleQuestionMark } from "lucide-react"
import SoundLibrary from "./SoundLibrary"
import SoundRow from "./SoundRow"
import { Button } from "./ui/button"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog"
import { useAmbienceStore } from "@/stores/ambienceStore"
import React, { useEffect, useState } from "react"
import { sound_metadata } from "@/data/sound-metadata"
import { iconStyles } from "@/data/icon-styles"
import AudioPlayer from "./AudioPlayer"
import TonePlayer from "./TonePlayer"
import { useAudioContext } from "@/stores/audioContextStore"

const RecreatePanel = () => {
    const { config, updateConfig, updateAmbiencePlaying } = useAmbienceStore();
    const [level, setLevel] = useState(1);
    const [dialogOpen, setDialogOpen] = useState(true);
    const [gameState, setGameState] = useState("landing");
    const { audioContext, setAudioContext } = useAudioContext();

    const UnknownCell = ({ ping }: { ping?: boolean }) => {
        return (
            <div className="relative">
                {ping && <div className={`absolute inset-0 rounded-md bg-slate-500 animate-ping [animation-timing-function:ease-in] [animation-duration:3s] z-[-1]`}></div>}
                <div className="flex justify-center items-center w-15 h-15 border rounded-md bg-slate-900/50 border-white/30 text-white/80">
                    <CircleQuestionMark className="size-5" />
                </div>
            </div>
        )
    }

    const generateRandomConfig = (currentLevel: number) => {
        const randomSoundIds = new Set();
        for (let i = 0; i < currentLevel; i++) {
            randomSoundIds.add(~~(Math.random() * sound_metadata.length));
        }
        const ids = Array.from(randomSoundIds);
        return sound_metadata.filter(sound => ids.includes(sound.id));
    }

    const [randomConfig, setRandomConfig] = useState(generateRandomConfig(0));
    const [listeningAudioPool, setListeningAudioPool] = useState(randomConfig);

    const checkIfAmbiencesMatch = () => {
        if (config.length !== randomConfig.length) {
            return false;
        }

        const sortedConfigSounds = config.map(({ cellId, ...rest }) => rest).toSorted((a, b) => a.soundId - b.soundId);

        for (let i = 0; i < randomConfig.length; i++) {
            if (sortedConfigSounds[i].soundId !== randomConfig[i].id) {
                return false;
            }
        }

        return true;
    }

    const handleNextLevel = () => {
        updateConfig([]);
        setRandomConfig(generateRandomConfig(level + 1));
        setLevel(level => level + 1);
    }

    const handleStartOver = () => {
        updateConfig([]);
        if (level !== 1) {
            setLevel(1);
        }
        setRandomConfig(generateRandomConfig(1));
    }

    const handleSubmit = () => {
        const ambiencesMatch = checkIfAmbiencesMatch();

        if (ambiencesMatch) {
            setGameState("success");
        } else {
            setGameState("failure");
        }

        setDialogOpen(true);
    }

    const handleListen = () => {
        if (gameState === "listening") {
            setListeningAudioPool(randomConfig);
            setDialogOpen(true);
        }
    }

    const handleBegin = () => {
        setRandomConfig(generateRandomConfig(1));
    }

    useEffect(() => {
        if (randomConfig.length > 0) {
            if (randomConfig.length === level) {
                setListeningAudioPool(randomConfig);
                setGameState("listening");
                setDialogOpen(true);
            } else if (randomConfig.length < level) {
                setRandomConfig(generateRandomConfig(level));
            } else if (randomConfig.length > level) {
                setLevel(randomConfig.length);
            }
        }
    }, [randomConfig, level])

    useEffect(() => {
        if (!audioContext) {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            setAudioContext(audioContext);
          }

        return () => updateConfig([])
    }, [])

    useEffect(() => {
        if (!dialogOpen) {
            setListeningAudioPool([]);
            updateAmbiencePlaying(true);
        } else {
            setListeningAudioPool(randomConfig);
            updateAmbiencePlaying(false);
        }
    }, [dialogOpen])

    return (
        <div className="lg:pl-50 lg:pr-50 pl-10 pr-10 pb-8">
            {listeningAudioPool.map(s =>
                s.scalePitches && s.scalePitches.length > 0 ?
                    <TonePlayer
                        key={s.id}
                        sound={{
                            cellId: s.id,
                            title: s.title,
                            src: "sounds/" + s.src,
                            volume: 0.5,
                            icon: s.icon ?? AudioWaveform
                        }}
                        scalePitches={s.scalePitches}
                        currentVolume={0.5}
                        isPlaying={true}
                    /> :
                    <AudioPlayer
                        key={s.id}
                        sound={{
                            cellId: s.id,
                            title: s.title,
                            src: "sounds/" + s.src,
                            volume: 0.5,
                            icon: s.icon ?? AudioWaveform
                        }}
                        currentVolume={0.5}
                        isPlaying={true}
                    />
            )}
            <div className="flex pt-3 pb-3 w-full justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="flex text-lg sm:text-xl text-white font-medium p-1 pt-2">{`Recreate the Ambience: Level ${level}`}</h1>
                    <div className="flex gap-8 p-3">
                        {level < 5 ?
                            Array.from({ length: level }).map((_, index) => (
                                <UnknownCell key={index} />
                            ))
                            :
                            <div className="flex items-center text-neutral-500 font-bold gap-2">
                                <UnknownCell />
                                <p>X {level}</p>
                            </div>}
                    </div>
                    <div className="flex gap-6 p-3">
                        {gameState === "success" ? <Button variant="outline" onClick={handleNextLevel} className="text-md text-white bg-slate-900 border-white/30">Next Level</Button> :
                            gameState === "failure" ? <Button variant="outline" onClick={handleStartOver} className="text-md text-white bg-slate-900 border-white/30">Start Over</Button> :
                                gameState === "landing" ? <Button variant="outline" onClick={handleBegin} className="text-md text-white bg-slate-900 border-white/30">Begin Listening</Button> :
                                    <>
                                        <Button variant="outline" onClick={handleListen} className="text-md text-white w-20 bg-slate-900/70 border-white/30">Listen</Button>
                                        <Button variant="outline" onClick={handleSubmit} className="text-md text-white w-20 border-green-500/50 bg-green-600/70 hover:bg-green-300">Submit</Button>
                                    </>
                        }
                    </div>
                </div>
            </div>
            <SoundRow />
            <SoundLibrary />

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent className="max-h-[calc(100%-64px)] overflow-auto">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center">
                            {gameState === "success" ? "Correct!" :
                                gameState === "failure" ? "Incorrect!" :
                                    gameState === "listening" ? "Listen to the Ambience" :
                                        "Sound Challenge: Recreate the Ambience"}
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                            {gameState === "success" ? "You recreated the ambience with the following sound(s):" :
                                gameState === "failure" ? "The ambience contains the following sound(s):" :
                                    gameState === "listening" ? "Can you recreate the ambience you hear?" :
                                        "In this game, you will recreate the ambiences you hear by adding sounds to the sound row. Correctly guess all sounds in the ambience to move to the next level. As you advance through the levels, the ambiences will grow in the number of sounds. How many ambiences can you recreate?"}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    {gameState === "listening" ?
                        <div className="flex flex-wrap justify-center gap-13 m-2">
                            {randomConfig.map(s => (
                                <UnknownCell key={s.id} ping />
                            ))}
                        </div> :
                        gameState === "success" || gameState === "failure" ?
                            <div className="flex flex-wrap justify-center gap-2">
                                {randomConfig.map((sound) => (
                                    <div key={sound.id} className="flex flex-col items-center m-1 mt-3">
                                        <div className="relative">
                                            <div className={`absolute inset-0 rounded-md bg-slate-300 ${iconStyles.get(sound.icon ?? AudioWaveform)?.pingColor} animate-ping [animation-timing-function:ease-in] [animation-duration:3s] z-[-1]`}></div>
                                            <div className={`flex justify-center items-center w-15 h-15 border rounded-md bg-slate-900 shadow shadow-md ${iconStyles.get(sound.icon ?? AudioWaveform)?.cellStyle}`}>
                                                {sound.icon ?
                                                    <sound.icon className="size-5" /> :
                                                    <AudioWaveform className="size-5" />
                                                }
                                            </div>
                                        </div>
                                        <p className="w-24 text-center text-pretty text-xs pt-1.5 line-clamp-2 text-ellipsis">{sound.title}</p>
                                    </div>
                                ))}
                            </div> : ""
                    }
                    <AlertDialogFooter>
                        <div className="flex w-full justify-center">
                            <Button variant="outline" onClick={handleBegin} className={gameState === "landing" ? "" : "hidden"}>Begin Listening</Button>
                            <Button variant="outline" onClick={handleNextLevel} className={gameState === "success" ? "" : "hidden"}>Next Level</Button>
                            <Button variant="outline" onClick={handleStartOver} className={gameState === "failure" ? "" : "hidden"}>Start Over</Button>
                            <AlertDialogCancel asChild className={gameState === "listening" ? "" : "hidden"}>
                                <Button variant="outline">Close</Button>
                            </AlertDialogCancel>
                            <AlertDialogCancel asChild>
                                <Button variant="outline" onClick={(e) => e.preventDefault()} className="absolute z-[-1] opacity-0"></Button>
                            </AlertDialogCancel>
                        </div>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default RecreatePanel