'use server'

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

export async function deleteAmbiences(ambiences: string[]) {
    const session = await getServerSession();
    const email = session?.user?.email;
    if (!email) return;

    const user = await prisma.user.findUnique({
        where: {
            email
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