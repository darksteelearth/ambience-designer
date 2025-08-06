import { create } from 'zustand'
import { Config } from '@/data/config'
// import { devtools, persist } from 'zustand/middleware'

interface AmbienceState {
  config: Config
  originalConfig: Config
  globalVolume: number
  updateConfig: (newConfig: Config) => void
  updateSoundVolume: (cellId: number, newVolume: number) => void
  updateGlobalVolume: (newVolume: number) => void
  addSound: (soundId: number) => void
  removeSound: (cellId: number) => void
}

export const useAmbienceStore = create<AmbienceState>()(
  // devtools(
  //   persist(
      (set) => ({
        config: [],
        originalConfig: [],
        globalVolume: 1,
        updateConfig: (newConfig) => set(() => ({ 
          config: newConfig,
          originalConfig: newConfig
        })),
        updateSoundVolume: (cellId, newVolume) => set((state) => ({
          config: state.config.map((s) => s.cellId === cellId ? {...s, volume: newVolume } : s),
        })),
        updateGlobalVolume: (newVolume) => set(() => ({ 
          globalVolume: newVolume 
        })),
        addSound: (soundId) =>
          set((state) => ({
            config: [...state.config, { cellId: Date.now(), soundId, volume: 0.5 }],
          })),
        removeSound: (cellId) =>
          set((state) => ({
            config: state.config.filter((s) => s.cellId !== cellId),
          })),
      }),
      // { name: 'ambience-store' },
    )
  // ),
// )