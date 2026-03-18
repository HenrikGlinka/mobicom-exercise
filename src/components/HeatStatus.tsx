import Icon from "./Icon";

export default function HeatStatus({temperature, mode} : {temperature: number, mode: 'manual' | 'timed' | 'boost' | 'off'}) {

    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
            <Icon type="temp" size={3} className="row-span-2" />
            <p className="text-xl leading-4 self-end">{temperature.toFixed()}°C</p>
            <p className="column-start-2row-start-2 text-xs self-start text-gray">{mode[0].toUpperCase() + mode.slice(1)} - mode</p>
        </div>
    )
}