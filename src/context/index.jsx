import React, { useState } from "react";
import { setLocalStorage, getLocalStorage } from "shared/storageHelper";

const initialState = {
  manual: getLocalStorage("manualRuns"),
  nightly: getLocalStorage("nightlyRuns"),
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Actions
  const setPipelineData = (data) => {
    setState(data);
    setLocalStorage("nightlyRuns", data?.nightly);
    setLocalStorage("manualRuns", data?.manual);
    window.location.reload();
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setPipelineData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
