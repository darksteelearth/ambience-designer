'use client'

import Image from "next/image"
import { useBackgroundContext } from "@/stores/backgroundStore"

const Background = () => {
    const backgroundSrc = useBackgroundContext(state => state.backgroundSrc);

    return (
        <Image
            alt="background"
            src={backgroundSrc}
            placeholder="blur"
            quality={100}
            sizes="100vw"
            className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
        />
    )
}

export default Background