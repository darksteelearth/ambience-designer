'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useSelectedStore } from "@/stores/selectedAmbiences";
import { deleteAmbiences } from "@/actions/deleteAmbiences";
import { Loader2 } from "lucide-react";
import { Ambience } from "@/data/config";

const DeleteButton = ({ displayedAmbiences, setDisplayedAmbiences }: { displayedAmbiences: Ambience[] | null, setDisplayedAmbiences: Dispatch<SetStateAction<Ambience[] | null>>}) => {
    const [waiting, setWaiting] = useState(false);
    const [deleteLabel, setDeleteLabel] = useState(<>Delete</>);
    const [dialogOpen, setDialogOpen] = useState(false);
    const { selected, setSelected } = useSelectedStore();

    const handleDelete = async () => {
        setWaiting(true);
        setDeleteLabel(<Loader2 className="animate-spin" />);

        try {
            await deleteAmbiences(selected);
            setDisplayedAmbiences((displayedAmbiences || []).filter(ambience => !selected.includes(ambience.title)));
            setSelected([]);
            setDialogOpen(false);
            setDeleteLabel(<>Delete</>);
            setWaiting(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive" className="w-16 rounded-sm h-8">
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen gap-0 overflow-auto">
                <DialogHeader>
                    <DialogTitle>Delete Ambience(s)</DialogTitle>
                    <DialogDescription>
                        Are you sure you wish to delete the following ambience(s)?
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-5 mb-5 text-center">
                    {selected.map((ambience) => (
                        <p key={ambience}>{ambience}</p>
                    ))}
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" disabled={waiting}>Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive" type="submit" disabled={waiting} onClick={handleDelete}>{deleteLabel}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteButton