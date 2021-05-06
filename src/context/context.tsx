import React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface Props {
  saveId: number | null;
  setSaveId: React.Dispatch<React.SetStateAction<number | null>>;
}

const defaultValue = {
  saveId: null,
  setSaveId: () => {},
};

export const FontContext = React.createContext<Props>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
const { children } = props;

  const [saveId, setSaveId] = React.useState<number | null>(null);

  return <FontContext.Provider value={{saveId,setSaveId}}>
        {children}
    </FontContext.Provider>;
};