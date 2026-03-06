export type Device = {
    name: string,
    target_temp: number,
    vent_level: "1" | "2" | "3" | "4" | "5" | "6",
    work_mode: "manual" | "timed" | "boost" | "off"
}

export type StatisticEntry = {
    date: string,
    kwh_usage: number,
    total_price: number,
    currency: string
};

const apiRequest = async (endpoint: string, method: "GET" | "PUT" = "GET", body?: Record<string, unknown>) => {

    const options: RequestInit = {
        method,
        body: body ? JSON.stringify(body) : undefined
    };

    const response: Response = await fetch(`/api/${endpoint}`, options);
    return response.json();
}

export const getAllDevices = async () => apiRequest("devices");
export const getDevice = async (id: string) => apiRequest(`devices/${id}`);

export const updateDevice = async (id: string, data: Device) => apiRequest(`devices/${id}`, "PUT", data);
export const getStatistics = async (deviceId: number, startDate?: string, endDate?: string) => apiRequest(`statistics?device_id=${deviceId}${startDate ? `&from=${startDate}` : ""}${endDate ? `&to=${endDate}` : ""}`);