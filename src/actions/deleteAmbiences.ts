'use server'

import prisma from "../../lib/prisma";

export async function deleteAmbiences(ambiences: string[]) {
    const user = await prisma.user.findUnique({
        where: {
            email: "chin.jef@northeastern.edu"
        }
    })

    if (!user) return

    for (const title of ambiences) {
        const ambience = await prisma.ambience.findFirst({
            where: {
                title
            },
            include: {
                config: true
            }
        })

        if (!ambience) continue

        await prisma.sound.deleteMany({
            where: {
                ambienceId: ambience.id
            }
        })

        await prisma.ambience.deleteMany({
            where: {
                title
            }
        })
    }
}