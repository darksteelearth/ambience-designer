'use server'

import { Ambience } from "@/data/config";
import prisma from "../../lib/prisma";
import { getServerSession } from "next-auth";

export async function getSavedAmbiences() {
    const session = await getServerSession();
    const email = session?.user?.email;
    if (!email) return []

    const userAmbiences = await prisma.user.findUnique({
        where: {
            email
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