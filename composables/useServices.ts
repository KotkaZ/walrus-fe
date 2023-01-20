import { Configuration, CityExplorerApi } from '@/generated';

export interface ApiServices {
  cityExplorerApi: CityExplorerApi;
}

// Should be used only with vue 'inject' supported methods such as setup().
export const useServices = (): ApiServices => {
  const config = useRuntimeConfig();
  const basePath = config.public.basePath;

  const configuration: Configuration = new Configuration({
    basePath,
  });

  const cityExplorerApi: CityExplorerApi = new CityExplorerApi(configuration);

  return {
    cityExplorerApi,
  };
};
