import { NavLink } from "react-router";
import Icon from "./Icon";

export default function Navigation() {
    return (
        <nav className="sticky bottom-0 left-0 right-0 bg-white shadow-default h-18">
            <ul className="flex justify-around">
                <li>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <Icon
                                type={isActive ? "dashboard-active" : "dashboard"}
                                size={4}
                            />
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}