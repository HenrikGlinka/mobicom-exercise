import { useState } from "react";
import Icon from "./Icon";
import UIBlock from "./UIBlock";

export default function UICheckbox({ label, checked = false, icon, iconChecked, onChange }: { label: string; checked?: boolean; icon: string; iconChecked: string; onChange?: (checked: boolean) => void }) {

    const [isChecked, setIsChecked] = useState(checked);

    return (
        <UIBlock className="[&:has(input:checked)]:bg-primary text-xs text-gray [&:has(input:checked)]:text-white">
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked={checked}
                    onChange={event => {
                        setIsChecked(event.currentTarget.checked);
                        if (onChange) onChange(event.currentTarget.checked);
                    }}
                />
                {isChecked ? <Icon type={iconChecked} size={2} /> : <Icon type={icon} size={2} />}
                {label}
            </label>
        </UIBlock>
    )
}