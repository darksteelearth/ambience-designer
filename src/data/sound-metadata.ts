import { Bubbles, Droplet, Leaf, MapPin, Waves, Wind, Music } from "lucide-react";
import { pentatonicScale, minorSeventh, minorSeventh2Oct } from "./frequency-ratios";

export enum SoundCategory { NATURE, BACKGROUND_NOISE, ENVIRONMENT, COLORED_NOISE, TONAL, OTHER }

export const sound_metadata = [
    { id: 1, title: "Airport Waiting Room", src: "airport_waiting_room.mp3", tags: [SoundCategory.ENVIRONMENT], icon: MapPin },
    { id: 2, title: "Birds", src: "birds_fade_in_fade_out.mp3", tags: [SoundCategory.NATURE], icon: Leaf },
    { id: 3, title: "Blizzard Winds", src: "blizzard_winds_fade_in_fade_out.mp3", tags: [SoundCategory.NATURE], icon: Wind },
    { id: 4, title: "Breaking Waves", src: "breaking_waves.mp3", tags: [SoundCategory.NATURE], icon: Waves },
    { id: 5, title: "Brook", src: "brook_fade_in_fade_out.mp3", tags: [SoundCategory.NATURE], icon: Waves },
    { id: 6, title: "Cave Droplets 1", src: "cave_droplets_1.mp3", tags: [SoundCategory.NATURE, SoundCategory.BACKGROUND_NOISE], icon: Droplet },
    { id: 7, title: "Cave Droplets 2", src: "cave_droplets_2.mp3", tags: [SoundCategory.NATURE, SoundCategory.BACKGROUND_NOISE], icon: Droplet },
    { id: 8, title: "Cave Stream", src: "cave_stream.mp3", tags: [SoundCategory.NATURE], icon: Waves },
    { id: 9, title: "Distant Chatter", src: "distant_chatter.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 10, title: "Gentle Breeze 1", src: "gentle_breeze_1_fade_in_fade_out.mp3", tags: [SoundCategory.BACKGROUND_NOISE], icon: Wind },
    { id: 11, title: "Gentle Breeze 2", src: "gentle_breeze_2_fade_in_fade_out.mp3", tags: [SoundCategory.BACKGROUND_NOISE], icon: Wind },
    { id: 12, title: "Heavy Rain", src: "heavy_rain_fade_in_fade_out.mp3", tags: [SoundCategory.NATURE], icon: Leaf },
    { id: 13, title: "Lake Insects", src: "lake_insects.mp3", tags: [SoundCategory.NATURE], icon: Leaf },
    { id: 14, title: "Moving Low Frequencies", src: "moving_low_frequencies.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 15, title: "Rustling Leaves", src: "rustling_leaves_fade_in_fade_out.mp3", tags: [SoundCategory.NATURE], icon: Leaf },
    { id: 16, title: "Rustling Newspaper", src: "rustling_newspaper.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 17, title: "Shopping Center", src: "shopping_center.mp3", tags: [SoundCategory.ENVIRONMENT], icon: MapPin },
    { id: 18, title: "Sonar Pings", src: "sonar_pings.mp3", tags: [SoundCategory.TONAL] },
    { id: 19, title: "Sounds by the Sea 1", src: "sounds_by_the_sea_1.mp3", tags: [SoundCategory.NATURE, SoundCategory.ENVIRONMENT], icon: Waves },
    { id: 20, title: "Sounds by the Sea 2", src: "sounds_by_the_sea_2.mp3", tags: [SoundCategory.NATURE, SoundCategory.ENVIRONMENT], icon: Waves },
    { id: 21, title: "Submarine Cockpit", src: "submarine_cockpit.mp3", tags: [SoundCategory.ENVIRONMENT], icon: Bubbles },
    { id: 22, title: "Thunder", src: "thunder.mp3", tags: [SoundCategory.NATURE], icon: Leaf },
    { id: 23, title: "Turning Pages", src: "turning_pages.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 24, title: "Typing Sounds", src: "typing_sounds.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 25, title: "Underground Wind", src: "underground_wind.mp3", tags: [SoundCategory.BACKGROUND_NOISE], icon: Wind },
    { id: 26, title: "Underwater Bubbles", src: "underwater_bubbles.mp3", tags: [SoundCategory.BACKGROUND_NOISE], icon: Bubbles },
    { id: 27, title: "Writing on Paper", src: "writing_on_paper.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 28, title: "Crickets", src: "crickets_fade_in_fade_out.mp3", tags: [SoundCategory.NATURE, SoundCategory.BACKGROUND_NOISE], icon: Leaf },
    { id: 29, title: "Distant Muffled Traffic", src: "distant_muffled_traffic.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 30, title: "Electric Hum", src: "electric_hum.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 31, title: "Underground Parking Lot", src: "underground_parking_lot.mp3", tags: [SoundCategory.BACKGROUND_NOISE, SoundCategory.ENVIRONMENT], icon: MapPin },
    { id: 32, title: "Street Sounds 1", src: "street_sounds_1.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 33, title: "Street Sounds 2", src: "street_sounds_2.mp3", tags: [SoundCategory.BACKGROUND_NOISE] },
    { id: 34, title: "Winter Storm", src: "winter_storm.mp3", tags: [SoundCategory.NATURE, SoundCategory.BACKGROUND_NOISE], icon: Wind },
    { id: 35, title: "White Noise", src: "white_noise.wav", tags: [SoundCategory.COLORED_NOISE, SoundCategory.BACKGROUND_NOISE] },
    { id: 36, title: "Pink Noise", src: "pink_noise.wav", tags: [SoundCategory.COLORED_NOISE, SoundCategory.BACKGROUND_NOISE] },
    { id: 37, title: "Brown Noise", src: "brown_noise.wav", tags: [SoundCategory.COLORED_NOISE, SoundCategory.BACKGROUND_NOISE] },
    { id: 38, title: "Blue Noise", src: "blue_noise.wav", tags: [SoundCategory.COLORED_NOISE, SoundCategory.BACKGROUND_NOISE] },
    { id: 39, title: "Dark Bells", src: "bell_1_C.mp3", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh2Oct },
    { id: 40, title: "Marimba", src: "bell_2_C.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh2Oct },
    { id: 41, title: "Melodic Drone Tones", src: "drone_1_C.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh2Oct },
    { id: 42, title: "Bass Drone", src: "drone_3_C.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh },
    { id: 43, title: "Synth Bells", src: "bell_3_C.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh2Oct },
    { id: 44, title: "Mellow Drone", src: "drone_4_C.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh },
    { id: 45, title: "Resonant Sweeping Drone", src: "resonant_sweeping_drone_C.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh2Oct },
    { id: 46, title: "Layered Synth Tones", src: "layered_synth_tones.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh2Oct },
    { id: 47, title: "Layered Synth Tones 2", src: "layered_synth_tones_2.wav", tags: [SoundCategory.TONAL], icon: Music, scalePitches: minorSeventh2Oct },
]

export const nature_sounds = sound_metadata.filter(sound => sound.tags.includes(SoundCategory.NATURE))
export const background_noises = sound_metadata.filter(sound => sound.tags.includes(SoundCategory.BACKGROUND_NOISE))
export const environments = sound_metadata.filter(sound => sound.tags.includes(SoundCategory.ENVIRONMENT))
export const colored_noises = sound_metadata.filter(sound => sound.tags.includes(SoundCategory.COLORED_NOISE))
export const tonal_sounds = sound_metadata.filter(sound => sound.tags.includes(SoundCategory.TONAL))
export const other_sounds = sound_metadata.filter(sound => sound.tags.includes(SoundCategory.OTHER))