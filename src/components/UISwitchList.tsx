export default function UISwitchList({ children }: { children: React.ReactNode }) {

    return (
        <ul className="flex flex-col gap-4 [&>li]:flex [&>li]:justify-between [&>li]:items-center [&>li]:text-gray [&>li]:text-xs">
            {children}
        </ul>
    )
}