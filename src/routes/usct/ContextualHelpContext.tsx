import React, { createContext, useState } from 'react';
import { ContextualTitle } from './ContextualHelpUtils';

interface IContextualHelpContext {
  activeLetter: string | null;
  setActiveLetter: (letter: string | null) => void;
  letterContextualTitleMap: { [letter: string]: ContextualTitle } | null;
  setLetterContextualTitleMap: (
    map: { [letter: string]: ContextualTitle } | null
  ) => void;
}

export const ContextualHelpContext = createContext<IContextualHelpContext>({
  activeLetter: null,
  setActiveLetter: () => {},
  letterContextualTitleMap: null,
  setLetterContextualTitleMap: () => {},
});

export const ContextualHelpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [letterContextualTitleMap, setLetterContextualTitleMap] = useState<{
    [letter: string]: ContextualTitle;
  } | null>(null);
  return (
    <ContextualHelpContext.Provider
      value={{
        activeLetter,
        setActiveLetter,
        letterContextualTitleMap,
        setLetterContextualTitleMap,
      }}
    >
      {children}
    </ContextualHelpContext.Provider>
  );
};
