'use client'

import { useEffect, useRef, useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollArea> {
    orientation: "horizontal" | "vertical";
    showscrollbar: "true" | "false";
    tabslayout?: "true" | "false";
}

const ScrollAreaWithArrows = (props: ScrollAreaProps) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeftOrUp, setCanScrollLeftOrUp] = useState(false)
    const [canScrollRightOrDown, setCanScrollRightOrDown] = useState(false)

    useEffect(() => {
        const viewport = scrollRef.current?.querySelector('[data-radix-scroll-area-viewport]')
        if (!viewport) return

        const updateScrollState = () => {
            if (props.orientation === "horizontal") {
                setCanScrollLeftOrUp(viewport.scrollLeft > 0)
                setCanScrollRightOrDown(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 10)
            } else {
                setCanScrollLeftOrUp(viewport.scrollTop > 0)
                setCanScrollRightOrDown(viewport.scrollTop + viewport.clientHeight < viewport.scrollHeight - 10)
            }
        }

        updateScrollState()

        const observer = new MutationObserver(() => {
            updateScrollState();
        });

        observer.observe(viewport, { childList: true, subtree: true });

        viewport.addEventListener("scroll", updateScrollState)
        window.addEventListener("resize", updateScrollState)

        return () => {
            viewport.removeEventListener("scroll", updateScrollState)
            window.removeEventListener("resize", updateScrollState)
            observer.disconnect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const scrollBy = (offset: number) => {
        const viewport = scrollRef.current?.querySelector('[data-radix-scroll-area-viewport]')
        props.orientation === "horizontal" ?
            viewport?.scrollBy({ left: offset, behavior: "smooth" }) :
            viewport?.scrollBy({ top: offset, behavior: "smooth" });
    }

    return (
        <ScrollArea ref={scrollRef} {...props}>
            {props.children}
            <>
                <div className={`absolute transform ${props.orientation === "horizontal" ? "left-3 top-1/2 -translate-y-1/2" : "top-3 left-1/2 -translate-x-1/2"} transition transition-discrete ${canScrollLeftOrUp ? "" : "opacity-0 pointer-events-none"} z-20`}>
                    <Button variant="outline" onClick={() => scrollBy(-150)} className="w-7 h-7 rounded-xl shadow-md">
                        {props.orientation === "horizontal" ? (<ChevronLeft />) : (<ChevronLeft className="rotate-90" />)}
                    </Button>
                </div>
                <div className={`absolute transform ${props.orientation === "horizontal" ? "right-3 top-1/2 -translate-y-1/2" : "bottom-3 left-1/2 -translate-x-1/2"} transition transition-discrete ${canScrollRightOrDown ? "" : "opacity-0 pointer-events-none"} z-20`}>
                    <Button variant="outline" onClick={() => scrollBy(150)} className="w-7 h-7 rounded-xl shadow-md">
                        {props.orientation === "horizontal" ? (<ChevronRight />) : (<ChevronRight className="rotate-90" />)}
                    </Button>
                </div>
            </>
            <ScrollBar orientation={props.orientation} className={props.showscrollbar === "true" ? "" : "hidden"} />
        </ScrollArea>
    );
};

export default ScrollAreaWithArrows