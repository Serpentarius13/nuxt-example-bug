import axios, { AxiosInstance } from "axios";

export function makeAxiosInstance(): AxiosInstance {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 5000,
  });

  return instance;
}
