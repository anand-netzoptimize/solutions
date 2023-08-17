import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const Context = ({ children }) => {
  const [languageIndex, setLanguageIndex] = useState(0);

  return (
    <LanguageContext.Provider value={{ languageIndex, setLanguageIndex }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Context;
