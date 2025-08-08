'use server'

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

export async function checkIfAmbienceExists(title: string) {
    const session = await getServerSession();
    const email = session?.user?.email;
    if (!email) return;

    const user = await prisma.user.findUnique({
        where: {
            email
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