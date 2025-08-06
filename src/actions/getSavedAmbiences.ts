'use server'

import { Ambience } from "@/data/config";
import prisma from "../../lib/prisma";

export async function getSavedAmbiences() {
    const email = "chin.jef@northeastern.edu"
    const userAmbiences = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            ambiences: {
                include: {
                    config: true
                }
            }
        },
    })

    if (!userAmbiences) return []

    const ambiences: Ambience[] = userAmbiences.ambiences.map((ambience) =>
        ({
            title: ambience.title,
            config: ambience.config.map((sound) => ({
                cellId: sound.id,
                soundId: sound.soundId,
                volume: sound.volume
            })),
        })
    );

    return ambiences
}