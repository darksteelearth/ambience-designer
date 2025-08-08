'use server'

import prisma from "../../lib/prisma";

export async function checkIfUserExists(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    return !!user
}