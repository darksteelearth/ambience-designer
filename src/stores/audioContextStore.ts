import { create } from 'zustand'

interface audioContextState {
    audioContext: AudioContext | null;
    setAudioContext: (audioContext: AudioContext) => void
}
  
export const useAudioContext = create<audioContextState>()((set) => ({
    audioContext: null,
    setAudioContext: (audioContext) => set(() => ({ audioContext: audioContext }))
}))