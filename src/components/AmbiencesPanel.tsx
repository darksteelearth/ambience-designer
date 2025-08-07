'use client'

import AmbienceCell from "./AmbienceCell"
import ScrollAreaWithArrows from "./ScrollAreaWithArrows"
import DeleteButton from "./DeleteButton"
import LoadingSpinner from "./LoadingSpinner"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Search } from "lucide-react"
import { Ambience } from "@/data/config"
import { useEffect, useState } from "react"
import { useInputStore } from "@/stores/selectPanelSearchInput"
import { useSelectedStore } from "@/stores/selectedAmbiences"
import { filterItems } from "@/actions/filterItems"

const AmbiencesPanel = ({ listTitle, ambiences, defaultAmbiences }: { listTitle?: string, ambiences: Ambience[] | null, defaultAmbiences: boolean }) => {
    const [displayedAmbiences, setDisplayedAmbiences] = useState(ambiences);
    const { input, updateInput } = useInputStore();
    const selected = useSelectedStore(state => state.selected);

    useEffect(() => {
        if (!ambiences) return;
        if (!defaultAmbiences) { if (!displayedAmbiences) setDisplayedAmbiences(ambiences); return };
        const filteredAmbiences = filterItems(ambiences, input);
        setDisplayedAmbiences(filteredAmbiences);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ambiences, input])

    return (
        <div>
            {listTitle && (
                <div className="flex justify-center pb-3">
                    <h4 className="text-md leading-none font-medium">{listTitle}</h4>
                </div>)
            }
            <ScrollAreaWithArrows showscrollbar="true" orientation="vertical" className="h-[calc(70vh-70px)] border rounded-sm shadow-xs bg-gray-50/50">
                <div className="p-5">
                    {defaultAmbiences && (
                        <>
                            <Label htmlFor="search" className="mb-2">Search</Label>
                            <div className="relative mb-3">
                                <Input id="search" className="bg-white mb-5 pl-8 text-sm" onChange={(e) => updateInput(e.target.value)} value={input} placeholder="Enter an ambience..." />
                                <Search className="w-5 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400/80 hover:text-gray-400/100" />
                            </div>
                        </>
                    )}
                    <div className="grid grid-cols-[134px_134px] lg:grid-cols-[134px_134px_134px] gap-5">
                        {!defaultAmbiences && <AmbienceCell key={Date.now()} ambience={{ title: "Create a New Ambience", config: [] }} createCell />}
                        {displayedAmbiences ? (
                            <>
                                {(defaultAmbiences && displayedAmbiences.length === 0) && <p className="absolute w-full -translate-x-5 p-5 text-gray-500 text-center text-sm">No items matched your search.</p>}
                                {displayedAmbiences.map((ambience) => (
                                    <AmbienceCell key={ambience["title"]} ambience={{ title: ambience["title"], config: ambience["config"] }} createCell={false} userAmbience={!defaultAmbiences} />
                                ))}
                            </>
                        ) : <LoadingSpinner />}
                    </div>
                </div>
            </ScrollAreaWithArrows>
            {!defaultAmbiences && 
            <div className={`flex justify-center mt-3 ${selected.length <= 0 && "hidden"}`}>
                <DeleteButton displayedAmbiences={displayedAmbiences} setDisplayedAmbiences={setDisplayedAmbiences}/>
            </div>}
        </div>
    )
}

export default AmbiencesPanel