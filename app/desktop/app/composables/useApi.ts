export const useApi = () => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiUrl,
  });

  console.log(config.public.apiUrl);
  return api;
};
