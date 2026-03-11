import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function UIBlockContainer({ title, open = false, children, locked = false }: { title: string; open?: boolean; children: React.ReactNode; locked?: boolean }) {

    const [isOpen, setIsOpen] = useState(false);
    const detailsRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.style = `height: ${isOpen ? detailsRef.current.scrollHeight + "px" : "1rem"}`;
        }
    }, [isOpen]);


    return (
        <details
            onToggle={event => setIsOpen(event.currentTarget.open)}
            open={open}
            className="relative transition-all duration-300"
            ref={detailsRef}
        >
            <summary className="flex items-center gap-1 px-default pointer-events-none mb-default">
                <h2 className="mr-auto mb-0!">{title}</h2>
                <p className={`${locked ? 'hidden' : ''} pointer-events-auto cursor-pointer flex items-center gap-2`}>
                    <span>Vis alle</span>
                    <Icon type={isOpen ? "chevronDown" : "chevronRight"} />
                </p>
            </summary>
            <div className="overflow-x-auto flex! gap-2 *:shrink-0 pt-0 p-default transition-all duration-300 delay-100">{children}</div>
        </details>
    )
}