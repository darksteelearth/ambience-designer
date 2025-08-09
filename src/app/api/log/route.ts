import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req: Request) {
    try {
        const data: Record<number, { t: number, p: number, a: number, r: number }> = JSON.parse(await req.text());

        const soundDataToUpdate = await prisma.globalSoundData.findMany({
            where: {
                soundId: {
                    in: Object.keys(data).map(Number)
                }
            }
        });

        const currentData = Object.fromEntries(soundDataToUpdate.map(s => [s.soundId, { 
            totalSecondsListened: s.totalSecondsListened,
            totalPlays: s.totalPlays,
            timesAdded: s.timesAdded,
            timesRemoved: s.timesRemoved
        }]))

        await prisma.globalSoundData.deleteMany({
            where: {
                soundId: {
                    in: Object.keys(data).map(Number)
                }
            }
        })

        await prisma.globalSoundData.createMany({
            data: Object.entries(data).map(([soundId, value]) => (
            {
                soundId: parseInt(soundId),
                totalSecondsListened: (currentData[soundId]?.totalSecondsListened ?? 0) + value.t,
                totalPlays: (currentData[soundId]?.totalPlays ?? 0) + value.p,
                averageSecondsListened: parseInt(
                    (((currentData[soundId]?.totalSecondsListened ?? 0) + value.t) / 
                    ((currentData[soundId]?.totalPlays ?? 0) + value.p))
                    .toFixed(0)
                ),
                timesAdded: (currentData[soundId]?.timesAdded ?? 0) + value.a,
                timesRemoved: (currentData[soundId]?.timesRemoved ?? 0) + value.r
            }))
        })

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error" }, { status: 400 });
    }
}