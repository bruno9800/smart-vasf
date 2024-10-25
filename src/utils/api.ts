interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  body?: string;
}

async function request(endpoint: string, options: RequestOptions) {
  const url = `${process.env.BACKEND_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    // Lançar um erro se a resposta não for 2xx
    throw new Error(data.message || "Algo deu errado");
  }

  return data;
}

const api = {
  get: (endpoint: string) => {
    const token = localStorage.getItem("authToken"); // Recupera o token

    return request(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token || ""}`, // Inclui o token no cabeçalho
      },
    });
  },
  post: (endpoint: string, body: any, token?: string) => {
    return request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  put: (endpoint: string, body: any) => {
    const token = localStorage.getItem("authToken");
    return request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  delete: (endpoint: string) => {
    const token = localStorage.getItem("authToken");
    return request(endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default api;
