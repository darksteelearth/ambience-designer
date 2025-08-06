import { create } from 'zustand'

interface selectedState {
    selected: string[]
    setSelected: (selected: string[]) => void
    selectAmbience: (ambience: string) => void
    deselectAmbience: (ambience: string) => void
}
  
export const useSelectedStore = create<selectedState>()((set) => ({
    selected: [],
    setSelected: (selected) => set(() => ({ selected: selected })),
    selectAmbience: (ambience) => set((state) => ({ selected: [ ...state.selected, ambience ] })),
    deselectAmbience: (ambience) => set((state) => ({ selected: state.selected.filter(item => item !== ambience) })),
}))