'use server'

import prisma from "../../lib/prisma";

export async function addUser(name: string, email: string) {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    })

    return user;
}