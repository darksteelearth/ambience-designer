export type SoundCellData = { cellId: number; soundId: number; volume: number };
export type Config = SoundCellData[]
export type Ambience = { title: string, config: Config }