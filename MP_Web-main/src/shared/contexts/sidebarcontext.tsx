import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface IsidebarContextData {
  isDrawerOpen: boolean;
  draweroptions: IsidebarOptions[];
  toggleDrawerOpen: () => void;
  setdraweroptions: (newdraweroption: IsidebarOptions[]) => void;
}

interface IchildrenProp {
  children: ReactNode;
}

interface IsidebarOptions {
  path: string;
  icon: string;
  label: string;
}

const SidebarContext = createContext({} as IsidebarContextData);

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export const AppSidebarProvider: React.FC<IchildrenProp> = ({ children }) => {
  const [isDrawerOpen, setIsdraweropen] = useState(false);
  const [draweroptions, setdraweroptions] = useState<IsidebarOptions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsdraweropen((prev) => !prev);
  }, []);

  const handlesetdraweroptions = useCallback(
    (newdraweroptions: IsidebarOptions[]) => {
      setdraweroptions(newdraweroptions);
    },
    []
  );

  return (
    <SidebarContext.Provider
      value={{
        isDrawerOpen,
        draweroptions,
        toggleDrawerOpen,
        setdraweroptions: handlesetdraweroptions,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
