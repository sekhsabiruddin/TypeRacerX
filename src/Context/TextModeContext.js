import { createContext, useState, useContext } from "react";
//here i created context api
const TestModeContext = createContext();

export const TextModeContextProvider = ({ children }) => {
  const [testTime, setTestTime] = useState();

  const values = {
    testTime,
    setTestTime,
  };

  return (
    <TestModeContext.Provider value={values}>
      {children}
    </TestModeContext.Provider>
  );
};
//this is custom hooks
export const useTestMode = () => useContext(TestModeContext);
