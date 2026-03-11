export default function BurgerButton() {

    return (
        <button className="w-6 h-5 bg-none flex flex-col justify-between">
            <div className="h-0.5 bg-primary rounded-xl"></div>
            <div className="h-0.5 bg-primary rounded-xl"></div>
            <div className="h-0.5 bg-primary rounded-xl"></div>
        </button>
    )
}