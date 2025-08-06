'use server'

import prisma from "../../lib/prisma";

export async function checkIfAmbienceExists(title: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: "chin.jef@northeastern.edu"
        }
    })

    if (!user) return

    return !!(await prisma.ambience.findFirst({
        where: {
            authorId: user.id,
            title,
        }
    }));
}