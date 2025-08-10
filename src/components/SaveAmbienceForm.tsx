'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DialogClose, DialogFooter } from "./ui/dialog";
import { ReactNode } from "react";

const formSchema = z.object({
    title: z.string().trim().min(1, {
        message: "Ambience title cannot be empty.",
    }),
})

const SaveAmbienceForm = ({ handleSubmit, waiting, saveLabel }: { handleSubmit: (name: string) => void, waiting: boolean, saveLabel: ReactNode }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        handleSubmit(values.title)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="title"
                    disabled={waiting}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={100} placeholder="Enter a name..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" disabled={waiting}>Cancel</Button>
                    </DialogClose>
                    <Button type="submit" disabled={waiting}>{saveLabel}</Button>
                </DialogFooter>
            </form>
        </Form>
    )
}

export default SaveAmbienceForm