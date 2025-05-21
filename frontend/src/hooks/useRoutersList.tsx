import { useEffect, useState } from "react";
import { RoutersService } from "../services/routers.service";
import { AxiosError } from "axios";
import { RouterItem } from "../types";

export const useRouterList = () => {
  const [routersData, setRoutersData] = useState<RouterItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const initRouters = async () => {
    try {
      setIsLoading(true);
      const { data } = await RoutersService.get();
      console.log("data");
      setRoutersData(data);
    } catch (error) {
      const axiosErr = error as AxiosError;
      setError(axiosErr.message || "Failed to load routers");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    initRouters();
  }, []);
  return { routersData, isLoading, error };
};
