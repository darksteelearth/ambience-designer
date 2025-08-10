'use server'

import { Config } from "@/data/config";
import prisma from "../../lib/prisma";
import { getServerSession } from "next-auth";

export async function saveAmbience(title: string, config: Config) {
    const session = await getServerSession();
    const email = session?.user?.email;
    if (!email) return;

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) return

    const ambience = await prisma.ambience.create({
        data: {
            authorId: user.id,
            title: title
        },
    })

    for (const sound of config) {
        await prisma.sound.create({
            data: {
                ambienceId: ambience.id,
                soundId: sound.soundId,
                volume: sound.volume
            }
        });
    }
}