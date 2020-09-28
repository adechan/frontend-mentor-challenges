import React, { createContext, useContext, useReducer } from "react";

// prearing the data layer
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// this is how we use it in our app
export const useDataLayerValue = () => useContext(DataLayerContext);
