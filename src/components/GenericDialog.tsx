'use client'

import { Dispatch, SetStateAction } from "react"
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"

const GenericDialog = ({ open, setOpen, title, message }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, title: string, message: string }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-h-screen overflow-auto">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Ok</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default GenericDialog