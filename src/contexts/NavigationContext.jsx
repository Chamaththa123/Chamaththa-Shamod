import React, { createContext, useRef } from "react";

const NavigationContext = createContext();

export const HomeProvider = ({ children }) => {
  const scrollRefs = {
    aboutUs: useRef(null),
    services: useRef(null),
    contact: useRef(null),
  };

  return <NavigationContext.Provider value={scrollRefs}>{children}</NavigationContext.Provider>;
};

export default NavigationContext;