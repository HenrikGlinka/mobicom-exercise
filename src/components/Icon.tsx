import iconStatistics from "../assets/icons/icon_consumption_on.png";
import iconChevron from "../assets/icons/icon_drop-down.png";
import iconBedroom from "../assets/icons/icon_bedroom.png";
import iconLivingroom from "../assets/icons/icon_living-room.png";
import iconBathroom from "../assets/icons/icon_bathroom.png";
import iconKitchen from "../assets/icons/icon_kitchen.png";
import iconHome from "../assets/icons/icon_home_off.png";
import iconHomeOn from "../assets/icons/icon_home_on.png";
import iconAwayOn from "../assets/icons/icon_away_on.png";
import iconAwayOff from "../assets/icons/icon_away_off.png";
import iconSleepOn from "../assets/icons/icon_sleep_on.png";
import iconSleepOff from "../assets/icons/icon_sleep_off.png";

export default function Icon({ type, className, size }: { type: string; className?: string; size?: number}) {

    const icons: Record<string, { src: string, rotation?: number, size?: { width: string, height: string }, filter?: string }> = {
        "statistics": { src: iconStatistics },
        "chevronDown": { src: iconChevron, size: {width: '12px', height: '7px'} },
        "chevronRight": { src: iconChevron, rotation: -90, size: {width: '12px', height: '7px'} },
        "bedroom-off": { src: iconBedroom },
        "bedroom-on": { src: iconBedroom, filter: 'brightness(2)'},
        "livingroom-off": { src: iconLivingroom },
        "livingroom-on": { src: iconLivingroom, filter: 'brightness(2)'},
        "bathroom-off": { src: iconBathroom },
        "bathroom-on": { src: iconBathroom, filter: 'brightness(2)'},
        "kitchen-off": { src: iconKitchen },
        "kitchen-on": { src: iconKitchen, filter: 'brightness(2)'},
        "home-off": { src: iconHome },
        "home-on": { src: iconHomeOn},
        "away-on": { src: iconAwayOn},
        "away-off": { src: iconAwayOff},
        "sleep-on": { src: iconSleepOn},
        "sleep-off": { src: iconSleepOff},
    };

    return (
        <img
            src={icons[type].src}
            alt={type}
            style={{ 
                rotate: `${icons[type]?.rotation ?? 0}deg`,
                width: icons[type]?.size ? icons[type].size.width : `${size || 1}em`,
                height: icons[type]?.size ? icons[type].size.height : `${size || 1}em`,
                filter: icons[type]?.filter ? icons[type].filter : 'none',
            }}
            className={`object-center object-scale-down transition-all duration-200 ease-in-out ${className || ''}`}
        />
    )
}