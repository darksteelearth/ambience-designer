import { create } from 'zustand'

export type soundUsageData = {
    cellId: number
    soundId: number
    secondsListened: number
    added: 0 | 1
    removed: 0 | 1
}

interface soundUsageState {
    data: soundUsageData[]
    addSoundUsage: (cellId: number, soundId: number, added: 0 | 1) => void
    incrementSecondsListened: (cellId: number) => void
    setRemoved: (cellId: number) => void
}

export const useSoundUsageStore = create<soundUsageState>()((set) => ({
    data: [],
    addSoundUsage: (cellId, soundId, added) => set((state) => ({ data: [...state.data, { cellId, soundId, secondsListened: 0, added, removed: 0 }] })),
    incrementSecondsListened: (cellId) => set((state) => ({
        data: state.data.map((s) =>
            s.cellId === cellId ? {
                ...s,
                secondsListened: s.secondsListened + 1
            } : s)
    })),
    setRemoved: (cellId) => set((state) => ({
        data: state.data.map((s) =>
            s.cellId === cellId ? {
                ...s,
                removed: 1
            } : s)
    }))
}))