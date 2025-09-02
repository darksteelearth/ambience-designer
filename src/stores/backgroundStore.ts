import { StaticImageData } from 'next/image'
import { create } from 'zustand'
import forest from "../../public/images/forest.png"

interface backgroundState {
    backgroundSrc: StaticImageData
    setBackgroundSrc: (src: StaticImageData) => void
}
  
export const useBackgroundContext = create<backgroundState>()((set) => ({
    backgroundSrc: forest,
    setBackgroundSrc: (src) => set(() => ({ backgroundSrc: src }))
}))