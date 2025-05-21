import { httpService } from "./http.service";

const BASE_SERVICE_PATH = "/routers";

const get = () => {
  return httpService.get(BASE_SERVICE_PATH);
};

export const RoutersService = {
  get,
};
