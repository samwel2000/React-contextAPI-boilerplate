import React, { createContext, useContext, useReducer } from "react";


// Define your state context or i call it store
// Or the data layer
export const stateContext = createContext();

//Define the provider wrapper
export const StateProvider = ({ reducer, initialState, children }) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);


// Hook for accesing values in the state context
// Pull information
export const useStateValue = () => useContext(stateContext)