'use client'

import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader, DialogDescription, DialogFooter, DialogClose } from './ui/dialog'
import { Button } from './ui/button'
import { useState } from 'react'
import { Loader2 } from 'lucide-react';
import { useAmbienceStore } from '@/stores/ambienceStore';
import { saveAmbience } from '@/actions/saveAmbience';
import { updateAmbience } from '@/actions/updateAmbience';
import SaveAmbienceForm from './SaveAmbienceForm';
import { useSession } from 'next-auth/react';
import { useSavedAmbiencesStore } from '@/stores/savedAmbiencesStore';

const SaveButton = () => {
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [replaceDialogOpen, setReplaceDialogOpen] = useState(false);
    const [saveLabel, setSaveLabel] = useState(<>Save</>);
    const [replaceLabel, setReplaceLabel] = useState(<>Replace</>);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const { config, updateConfig } = useAmbienceStore();
    const { data: session, status } = useSession();
    const { savedAmbiences, addLocalAmbience, updateLocalAmbience } = useSavedAmbiencesStore();

    const handleSubmit = async (name: string) => {
        setName(name)
        setLoading(true)
        setSaveLabel(<Loader2 className="animate-spin" />)

        try {
            const ambienceExists = !!savedAmbiences.find(ambience => ambience.title === name)

            if (ambienceExists) {
                setLoading(false)
                setSaveLabel(<>Save</>)
                setReplaceDialogOpen(true)
            } else {
                await saveAmbience(name, config);
                updateConfig(config);
                addLocalAmbience({title: name, config})
                setSaveDialogOpen(false);
                setSaveLabel(<>Save</>);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleReplace = async () => {
        setLoading(true)
        setReplaceLabel(<Loader2 className="animate-spin" />)

        try {
            await updateAmbience(name, config);
            updateConfig(config)
            updateLocalAmbience(name, { title: name, config });
            setSaveDialogOpen(false);
            setReplaceDialogOpen(false);
            setReplaceLabel(<>Replace</>)
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" disabled={config.length <= 0 || status === "unauthenticated" || savedAmbiences.length >= 100} className="text-sm">
                        Save Ambience...
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-h-screen overflow-auto">
                    <DialogHeader>
                        <DialogTitle>Save Ambience</DialogTitle>
                        <DialogDescription>
                            Enter a name for this ambience.
                        </DialogDescription>
                    </DialogHeader>
                    <SaveAmbienceForm handleSubmit={handleSubmit} waiting={loading} saveLabel={saveLabel} />
                </DialogContent>
            </Dialog>

            <Dialog open={replaceDialogOpen} onOpenChange={setReplaceDialogOpen}>
                <DialogContent className="max-h-screen overflow-auto">
                    <DialogHeader>
                        <DialogTitle>Ambience Exists</DialogTitle>
                        <DialogDescription>
                            An ambience named "{name}" exists. Do you wish to replace this ambience?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" disabled={loading}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={loading} onClick={handleReplace}>{replaceLabel}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SaveButton