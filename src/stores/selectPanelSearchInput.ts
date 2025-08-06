import { create } from 'zustand'

interface InputState {
    input: string
    updateInput: (newInput: string) => void
}
  
export const useInputStore = create<InputState>()((set) => ({
    input: "",
    updateInput: (newInput) => set(() => ({ input: newInput })),
}))