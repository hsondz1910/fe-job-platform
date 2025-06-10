const API_URl = process.env.NEXT_PUBLIC_API_URI || 'http://localhost:3001';

export const fetchApi = async (endpoint: string, options?: RequestInit) => {
    const response = await fetch(`${API_URl}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error('API request failed.');
    }

    return response.json();
}