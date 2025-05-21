import { createContext, useContext, useState, ReactNode } from "react";
import { ModalStateContextType } from "../types/types";

const ModalStateContext = createContext<ModalStateContextType | undefined>(undefined);

export const ModalStateProvider = ({ children }: { children: ReactNode }) => {
  const [quizModalState, setQuizModalState] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [index, setIndex] = useState(0);

  const quizModalStateHandler = (state?: boolean) => {
    setQuizModalState((prev) => (state !== undefined ? state : !prev));
  };

  const profileCardModalHandler = (state?: boolean) => {
    setIsExpanded((prev) => (state !== undefined ? state : !prev));
  };

  return (
    <ModalStateContext.Provider value={{ index, setIndex, quizModalState, quizModalStateHandler, isExpanded, profileCardModalHandler }}>
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
