import { getDateString } from "../utilities/dateString";
import { getAllDevices, getStatistics } from "../utilities/smartHome";

export default async function dashboardLoader() {

    const deviceId = 22;

    const [devices, statistics] = await Promise.all([
        getAllDevices(),
        getStatistics(deviceId, getDateString('yesterday'), getDateString('today')),
    ]);

    return { devices, statistics };
}