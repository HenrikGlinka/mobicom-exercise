import type { Handler, HandlerEvent } from "@netlify/functions";
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.MOBICOM_API_URL
const TOKEN = process.env.MOBICOM_API_TOKEN;

export const handler: Handler = async (event: HandlerEvent) => {
    const path = event.path.replace('/api/', '');
    const parameters = new URLSearchParams(event.queryStringParameters as Record<string, string>).toString();
    const url = new URL(`${API_URL}${path}`);

    if (parameters) {
        url.search = parameters;
    }

    const options: RequestInit = {
        method: event.httpMethod,
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Accept': 'application/json',
            'Content-Type': 'application/jon'
        },
        body: event.body || undefined
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return {
            statusCode: response.status,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: (error as Error).message })
        };
    }
};