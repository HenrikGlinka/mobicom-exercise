import { Link } from "react-router";
import Icon from "./Icon";

export default function UIButton({ icon, iconSize = 4, onClick, to = null, label, className = "" }: { icon?: string, iconSize?: number, onClick?: () => void, to?: string | null, label?: string, className?: string }) {

    const style = `pl-5 relative block bg-primary w-full text-white text-xs h-10 flex justify-center items-center rounded-default ${className}`;

    return (
        to === null ?
        <button onClick={onClick} className={style} type="button">
            {icon && <Icon type={icon} size={iconSize} className="absolute left-0" />}
            {label && <span>{label}</span>}
        </button> :
        <Link to={to} className={style}>
            {icon && <Icon type={icon} size={iconSize} className="absolute left-0" />}
            {label && <span>{label}</span>}
        </Link>
    )

}