export default function SwitchInput({ checked = false, onChange }: { checked?: boolean; onChange?: (checked: boolean) => void }) {

    return (
        <label className=" w-11 h-6 rounded-full bg-gray [&:has(input:checked)]:bg-primary cursor-pointer flex items-center px-0.5">
            <input type="checkbox" className="peer sr-only" defaultChecked={checked} onChange={event => { if (onChange) onChange(event.target.checked); }} />
            <div className="w-5 h-5 rounded-full bg-white block transition-transform peer-checked:translate-x-5" />
        </label>
    )
}