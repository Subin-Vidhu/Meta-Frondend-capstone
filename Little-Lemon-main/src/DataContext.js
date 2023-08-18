import { createContext, Provider, React } from "react";

const DataContext = createContext({});
export const DataContextProvider = DataContext.Provider;
export default DataContext;