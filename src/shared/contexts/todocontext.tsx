import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface ITodoContextProps {
  isOpen: boolean;
  handleOpenCreateTodoPage: () => void;
  handleCloseTodoPage: () => void;
}

interface IchildrenProps {
  children: ReactNode;
}

const todoContext = createContext<ITodoContextProps | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(todoContext);

  if (!context) {
    throw new Error("O todo context deve estar em um provider");
  }

  return context;
};

export const TodoContextProvider: React.FC<IchildrenProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCreateTodoPage = () => {
    setIsOpen(true);
  };

  const handleCloseTodoPage = () => {
    setIsOpen(false);
  };

  return (
    <todoContext.Provider
      value={{ isOpen, handleOpenCreateTodoPage, handleCloseTodoPage }}
    >
      {children}
    </todoContext.Provider>
  );
};
