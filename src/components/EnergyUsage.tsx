import { useEffect, useState } from "react";
import { getDateString } from "../utilities/dateString";
import { getStatistics, type StatisticEntry } from "../utilities/smartHome";
import UIBlock from "./UIBlock";
import Icon from "./Icon";

export default function EnergyUsage() {

    const deviceId = 22;

    const today = new Date();
    const yesterday = getDateString(today, -1);

    const day = today.getDate();
    const month = today.toLocaleDateString('en-US', { month: 'short' });
    const year = today.getFullYear();

    const [statistics, setStatistics] = useState<Array<StatisticEntry | null>>([]);
    const [powerUsagePercentage, setPowerUsagePercentage] = useState<number>(0);

    useEffect(() => {
        getStatistics(deviceId, yesterday).then(([yesterdaysData, todaysData]) => {
            setStatistics([yesterdaysData, todaysData]);
            const delta = todaysData.kwh_usage - yesterdaysData.kwh_usage;
            const percentage = Math.round(((delta / yesterdaysData.kwh_usage) * 100));

            setPowerUsagePercentage(percentage);
        });
            

    }, [deviceId, yesterday]);

    return (
        <UIBlock className="grid grid-cols-[auto_auto_1fr] grid-rows-[auto_auto] items-center min-w-full">
            <a href="/stats" className="row-span-2 bg-primary w-10 h-10 flex justify-center items-center rounded-default"><Icon type="statistics" /></a>
            <p className="row-span-2 text-xl text-gray">{day} {month} {year}</p>
            <p className="text-3xl text-right">{statistics[1]?.kwh_usage.toString().replace('.', ',') ?? '--,-'} <span className="text-xs text-gray">kWh</span></p>
            {powerUsagePercentage !== 0 && <p className={`text-sm text-right ${powerUsagePercentage < 0 ? 'text-success' : 'text-red-600'}`}>{Math.abs(powerUsagePercentage)}% {powerUsagePercentage > 0 ? 'mere' : 'mindre'} end i går</p>}
        </UIBlock>
    )
}