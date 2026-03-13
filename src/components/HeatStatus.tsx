import Icon from "./Icon";

export default function HeatStatus(temperature: number, mode: 'Manual' | 'Tidsplan' | 'Boost') {

    return (
        <div className="grid grid-cols-2 grid-rows-2">
            <Icon type="" />
            <p>{temperature}°C</p>
            <p>{mode} - mode</p>
        </div>
    )
}