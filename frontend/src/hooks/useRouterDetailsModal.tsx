import { useState } from "react";
import { RouterItem } from "../types";
import { RouterDetailsModal } from "../Components/RouterDetailsModal/RouterDetailsModal";

export const useRouterDetailsModal = () => {
  const [selectedRouter, setSelectedRouter] = useState<RouterItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (router: RouterItem) => {
    setSelectedRouter(router);
    setIsModalOpen(true);
  };

  const renderRouterDetailsModal = (
    <RouterDetailsModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      router={selectedRouter}
    />
  );

  return {
    selectedRouter,
    isModalOpen,
    handleRowClick,
    renderRouterDetailsModal,
  };
};
