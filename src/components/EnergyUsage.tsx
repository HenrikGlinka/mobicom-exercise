import UIBlock from "./UIBlock";
import Icon from "./Icon";
import type { StatisticEntry } from "../utilities/smartHome";

export default function EnergyUsage({ today, yesterday }: { today: StatisticEntry; yesterday: StatisticEntry }) {

    const date = new Date(today.date);
    const day = date.getDate();
    const month = date.toLocaleDateString('da-DK', { month: 'short' });
    const year = date.getFullYear();

    const delta = today.kwh_usage - yesterday.kwh_usage;
    const percentage = Math.round(((delta / yesterday.kwh_usage) * 100));

    return (
        <UIBlock className="grid grid-cols-[auto_auto_1fr] grid-rows-[auto_auto] items-center min-w-full">
            <a href="/stats" className="row-span-2 bg-primary w-10 h-10 flex justify-center items-center rounded-default"><Icon type="statistics" /></a>
            <p className="row-span-2 text-xl text-gray">{day} {month} {year}</p>
            <p className="text-3xl text-right">{today.kwh_usage.toString().replace('.', ',')} <span className="text-xs text-gray">kWh</span></p>
            {percentage !== 0 && <p className={`text-sm text-right ${percentage < 0 ? 'text-success' : 'text-red-600'}`}>{Math.abs(percentage)}% {percentage > 0 ? 'mere' : 'mindre'} end i går</p>}
        </UIBlock>
    )
}