//const API_URL: string = import.meta.env.VITE_MOBICOM_API_URL;
const TOKEN: string = import.meta.env.VITE_MOBICOM_API_TOKEN;

const headers: Record<string, string> = {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json"
};

const apiRequest = async (endpoint: string, method: "GET" | "PUT" = "GET", body?: Record<string, unknown>) => {

    //const url: URL = new URL(endpoint, API_URL);

    const options: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined
    };

    const response: Response = await fetch(`./api/${endpoint}`, options);
    return response.json();
}

export const getAllDevices = async () => apiRequest("devices");
export const getDevice = async (id: string) => apiRequest(`devices/${id}`);

type Device = {
    name: string,
    target_temp: number,
    vent_level: "1" | "2" | "3" | "4" | "5" | "6",
    work_mode: "manual" | "timed" | "boost" | "off"
}

export const updateDevice = async (id: string, data: Device) => apiRequest(`devices/${id}`, "PUT", data);

