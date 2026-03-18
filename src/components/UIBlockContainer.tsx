import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function UIBlockContainer({ title, open = false, children, locked = false, justify = "start" }: { title: string; open?: boolean; children?: React.ReactNode; locked?: boolean, justify?: "start" | "end" | "center" | "stretch" }) {

    const [isOpen, setIsOpen] = useState(open);
    const detailsRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.style = `height: ${isOpen ? detailsRef.current.scrollHeight + "px" : "1.5rem"}`;
        }
    }, [isOpen]);


    return (
        <details
            onToggle={event => setIsOpen(event.currentTarget.open)}
            open={open}
            className="relative transition-all duration-300  overflow-clip"
            ref={detailsRef}
        >
            <summary style={{justifyContent: justify}} className='flex items-center gap-1 px-default pointer-events-none mb-default'>
                <h2 className="mr-auto mb-0!">{title}</h2>
                <p className={`${locked ? 'hidden' : ''} pointer-events-auto cursor-pointer flex items-center gap-2 text-xs`}>
                    <span>Vis alle</span>
                    <Icon type={isOpen ? "chevronDown" : "chevronRight"} />
                </p>
            </summary>
            <div className="overflow-x-auto flex! gap-5 *:shrink-0 pt-0 p-default transition-all duration-300 delay-100 max-w-full">{children}</div>
        </details>
    )
}