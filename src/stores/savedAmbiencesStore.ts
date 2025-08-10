import { Ambience } from '@/data/config'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SavedAmbiencesState {
    savedAmbiences: Ambience[]
    updateLocalSavedAmbiences: (savedAmbiences: Ambience[]) => void
    addLocalAmbience: (ambience: Ambience) => void
    updateLocalAmbience: (ambienceTitle: string, updatedAmbience: Ambience) => void
    deleteLocalAmbiences: (ambienceTitles: string[]) => void
    loading: boolean
    setLoading: (loading: boolean) => void
}

export const useSavedAmbiencesStore = create<SavedAmbiencesState>()(
    devtools(
        persist(
            (set) => ({
                savedAmbiences: [],
                updateLocalSavedAmbiences: (savedAmbiences) => set(() => ({ savedAmbiences: savedAmbiences })),
                addLocalAmbience: (ambience) => set((state) => ({ savedAmbiences: [...state.savedAmbiences, ambience] })),
                updateLocalAmbience: (ambienceTitle, updatedAmbience) => set((state) => ({ 
                    savedAmbiences: state.savedAmbiences.map(ambience => 
                        ambience.title === ambienceTitle ? updatedAmbience : ambience
                    )
                 })),
                deleteLocalAmbiences: (ambienceTitles) => set((state) => ({ savedAmbiences: state.savedAmbiences.filter(ambience => !ambienceTitles.includes(ambience.title)) })),
                loading: true,
                setLoading: (loading) => set(() => ({ loading })),
            }),
            { name: 'saved-ambiences-store' },
        )
    ),
)