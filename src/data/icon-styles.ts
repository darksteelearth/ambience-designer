import { Bubbles, Droplet, Leaf, MapPin, Music, Waves, Wind, AudioWaveform, CloudRain } from "lucide-react";

export const iconStyles = new Map([
    [Leaf, { cellStyle: "border-green-500 shadow-green-100/50 text-green-600", pingColor: "bg-green-300/50" }],
    [Waves, { cellStyle: "border-sky-500 shadow-sky-100/50 text-sky-600", pingColor: "bg-sky-300/50" }],
    [Droplet, { cellStyle: "border-sky-500 shadow-sky-100/50 text-sky-600", pingColor: "bg-sky-300/50" }],
    [Bubbles, { cellStyle: "border-sky-500 shadow-sky-100/50 text-sky-600", pingColor: "bg-sky-300/50" }],
    [CloudRain, { cellStyle: "border-sky-500 shadow-sky-100/50 text-sky-600", pingColor: "bg-sky-300/50" }],
    [Wind, { cellStyle: "border-cyan-500 shadow-cyan-100/50 text-cyan-600", pingColor: "bg-cyan-300/50" }],
    [MapPin, { cellStyle: "border-slate-400 shadow-slate-100/50 text-slate-400", pingColor: "bg-slate-300/50" }],
    [Music, { cellStyle: "border-pink-500 shadow-pink-100/50 text-pink-600", pingColor: "bg-pink-300/50" }],
    [AudioWaveform, { cellStyle: "border-indigo-300 shadow-indigo-100/50 text-indigo-400", pingColor: "bg-indigo-300/50" }],
]);