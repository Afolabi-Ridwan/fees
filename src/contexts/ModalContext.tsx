import { createContext, useContext, useState, ReactNode } from "react";
import { ModalStateContextType } from "../types/types";



const ModalStateContext = createContext<ModalStateContextType | undefined>(undefined);

export const ModalStateProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState(false);

  const modalStateHandler = (state?: boolean) => {
    setModalState((prev) => (state !== undefined ? state : !prev));
  };

  return (
    <ModalStateContext.Provider value={{ modalState, modalStateHandler }}>
      {children}
    </ModalStateContext.Provider>
  );
};

export const useModalStateContext = () => {
  const context = useContext(ModalStateContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
