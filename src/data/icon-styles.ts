import { Bubbles, Droplet, Leaf, MapPin, Music, Waves, Wind, AudioWaveform } from "lucide-react";

export const iconStyles = new Map([
    [Leaf, { cellStyle: "border-green-500 shadow-green-100/50 text-green-600", pingColor: "bg-green-100/50" }],
    [Waves, { cellStyle: "border-sky-500 shadow-sky-100/50 text-sky-600", pingColor: "bg-sky-100/50" }],
    [Droplet, { cellStyle: "border-sky-500 shadow-sky-100/50 text-sky-600", pingColor: "bg-sky-100/50" }],
    [Bubbles, { cellStyle: "border-sky-500 shadow-sky-100/50 text-sky-600", pingColor: "bg-sky-100/50" }],
    [Wind, { cellStyle: "border-cyan-500 shadow-cyan-100/50 text-cyan-600", pingColor: "bg-cyan-100/50" }],
    [MapPin, { cellStyle: "border-slate-500 shadow-slate-100/50 text-slate-600", pingColor: "bg-slate-100/50" }],
    [Music, { cellStyle: "border-pink-500 shadow-pink-100/50 text-pink-600", pingColor: "bg-pink-100/50" }],
    [AudioWaveform, { cellStyle: "border-indigo-500 shadow-indigo-100/50 text-indigo-600", pingColor: "bg-indigo-100/50" }],
]);