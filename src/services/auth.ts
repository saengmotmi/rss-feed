import Axios from "axios";

const client = Axios.create({
  baseURL: "/api",
});

export const login = (params: { code: string }) => {
  return client.post<{ access_token: string }>(`/auth`, params);
};
