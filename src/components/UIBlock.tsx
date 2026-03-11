export default function UIBlock({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-white px-3 py-2.5 gap-x-2 rounded-default shadow-default transition-all duration-200 ease-in-out ${className || ''}`}>
            {children}
        </div>
    )
}