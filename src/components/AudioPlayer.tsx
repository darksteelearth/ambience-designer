'use client'

import { useAmbienceStore } from "@/stores/ambienceStore";
import { useAudioContext } from "@/stores/audioContextStore"
import { LucideIcon } from "lucide-react"
import { RefObject, useEffect, useRef } from "react";

const AudioPlayer = ({ sound, currentVolume, isPlaying }: { 
    sound: { cellId: number, title: string, src: string, volume: number, icon: LucideIcon }, 
    currentVolume: number, 
    isPlaying: boolean 
}) => {
    const audioContext = useAudioContext(state => state.audioContext);
    const globalVolume = useAmbienceStore(state => state.globalVolume);
    
    const sourceNodeRef1 = useRef<MediaElementAudioSourceNode>(null);
    const gainNodeRef1 = useRef<GainNode>(null);

    const sourceNodeRef2 = useRef<MediaElementAudioSourceNode>(null);
    const gainNodeRef2 = useRef<GainNode>(null);

    const audioRef1 = useRef<HTMLAudioElement>(null);
    const audioRef2 = useRef<HTMLAudioElement>(null);

    const initAudio = (audioRef: HTMLAudioElement, sourceNodeRef: RefObject<MediaElementAudioSourceNode | null>, gainNodeRef: RefObject<GainNode | null>) => {
        if (!audioContext) return;
    
        const sourceNode = audioContext.createMediaElementSource(audioRef);
        const gainNode = audioContext.createGain();
    
        sourceNode.connect(gainNode);
        gainNode.connect(audioContext.destination);
    
        gainNode.gain.value = currentVolume * globalVolume;
    
        sourceNodeRef.current = sourceNode;
        gainNodeRef.current = gainNode;
    }

    const stopAudio = (audioRef: HTMLAudioElement) => {
        audioRef.pause();
        audioRef.currentTime = 0;
    }

    const buffer = 1;
    let audio1ended = false;
    let audio2ended = false;

    const handleTimeUpdate1 = () => {
        if (!audioRef1.current || !audioRef2.current) return;

        if (audioRef1.current.currentTime > audioRef1.current.duration - buffer && !audio1ended) {
            audio1ended = true;
            audio2ended = false;
            audioRef2.current.play();
        }
    }

    const handleTimeUpdate2 = () => {
        if (!audioRef1.current || !audioRef2.current) return;

        if (audioRef2.current.currentTime > audioRef2.current.duration - buffer && !audio2ended) {
            audio2ended = true;
            audio1ended = false;
            audioRef1.current.play();
        }
    }

    useEffect(() => {
        if (!audioRef1.current) {
            audioRef1.current = new Audio(sound.src);
            initAudio(audioRef1.current, sourceNodeRef1, gainNodeRef1);
            audioRef1.current.addEventListener('timeupdate', handleTimeUpdate1);
        }

        if (!audioRef2.current) {
            audioRef2.current = new Audio(sound.src);
            initAudio(audioRef2.current, sourceNodeRef2, gainNodeRef2);
            audioRef2.current.addEventListener('timeupdate', handleTimeUpdate2);
        }

        if (isPlaying) {
            audioRef1.current.play();
        } else {
            audioRef1.current.pause();
            audioRef2.current.pause();
        }
    }, [isPlaying])

    useEffect(() => {
        if (gainNodeRef1.current) {
            gainNodeRef1.current.gain.value = currentVolume * globalVolume;
        }

        if (gainNodeRef2.current) {
            gainNodeRef2.current.gain.value = currentVolume * globalVolume;
        }
    }, [currentVolume, globalVolume])

    useEffect(() => {
        return () => {
            if (sourceNodeRef1.current) {
                sourceNodeRef1.current.disconnect();
                sourceNodeRef1.current = null;
            }

            if (gainNodeRef1.current) {
                gainNodeRef1.current.disconnect();
                gainNodeRef1.current = null;
            }

            if (audioRef1.current) {
                stopAudio(audioRef1.current);
                audioRef1.current.removeEventListener('timeupdate', handleTimeUpdate1);
                audioRef1.current = null;
            }

            if (sourceNodeRef2.current) {
                sourceNodeRef2.current.disconnect();
                sourceNodeRef2.current = null;
            }

            if (gainNodeRef2.current) {
                gainNodeRef2.current.disconnect();
                gainNodeRef2.current = null;
            }

            if (audioRef2.current) {
                stopAudio(audioRef2.current);
                audioRef2.current.removeEventListener('timeupdate', handleTimeUpdate2);
                audioRef2.current = null;
            }
        }
    }, [])

    return <></>
}

export default AudioPlayer