import { useEffect, useState } from "react";
import Icon from "./Icon";
import UIBlock from "./UIBlock";

export default function UIRadio({ label, group, checked = false, icon, iconChecked, onChange }: { label: string; group: string; checked?: boolean; icon: string; iconChecked: string; onChange?: (checked: boolean) => void }) {

    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => { setIsChecked(checked); }, [checked]);

    return (
        <UIBlock className="[&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-white">
            <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name={group} className="peer sr-only" defaultChecked={checked} onChange={event => {
                    setIsChecked(event.currentTarget.checked);
                    if (onChange) onChange(event.currentTarget.checked);
                }} />
                {isChecked ? <Icon type={iconChecked} /> : <Icon type={icon} />}
                {label}
            </label>
        </UIBlock>
    )
}