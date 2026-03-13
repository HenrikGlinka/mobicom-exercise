import Icon from "./Icon";
import UIBlock from "./UIBlock";

export default function UIRadio({ label, group, checked = false, icon, iconChecked, onChange }: { label: string; group: string; checked?: boolean; icon: string; iconChecked: string; onChange?: (checked: boolean) => void }) {

    return (
        <UIBlock className="[&:has(input:checked)]:bg-primary text-xs text-gray [&:has(input:checked)]:text-white">
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name={group}
                    className="peer sr-only [&:checked~.unchecked]:hidden [&:not(:checked)~.checked]:hidden" 
                    defaultChecked={checked}
                    onChange={event => {if (onChange) onChange(event.target.checked); }}
                />
                <Icon type={icon} size={2} className="unchecked" />
                <Icon type={iconChecked} size={2} className="checked" />
                {label}
            </label>
        </UIBlock>
    )
}