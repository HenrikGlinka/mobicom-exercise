export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-white px-3 py-2.5 gap-x-2 rounded-default shadow-default ${className || ''}`}>
            {children}
        </div>
    )
}