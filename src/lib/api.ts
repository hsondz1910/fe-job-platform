const API_URL = process.env.NEXT_PUBLIC_API_URI || 'http://localhost:3001';

export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
        credentials: 'include', // 👈 cookie sẽ được gửi đi với request
    });

    if (!response.ok) {
        throw new Error('API request failed.');
    }

    return response.json();
};
