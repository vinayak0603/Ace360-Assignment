const BASE_URL = 'https://dummyjson.com';

export const authAPI = {
  login: async (credentials) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json();
  },
};

export const productsAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return response.json();
  },

  search: async (query) => {
    const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);

    if (!response.ok) {
      throw new Error('Failed to search products');
    }

    return response.json();
  },
};
