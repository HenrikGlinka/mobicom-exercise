import type { Handler, HandlerEvent } from "@netlify/functions";

const API_URL = 'https://exercise.mobicom-pro.com/api/';
const TOKEN = 'ec65af2d7fa7576c78edcefee43183ee32fde218daa25c2e2d5e6a6bde88cbac';

export const handler: Handler = async (event: HandlerEvent) => {
    const path = event.path.replace('/.netlify/functions/api/', '');
    const url = `${API_URL}${path}`;

    console.log(url);
    

    const options: RequestInit = {
        method: event.httpMethod,
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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