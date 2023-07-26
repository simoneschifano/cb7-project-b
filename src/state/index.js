import { createContext ,useReducer } from "react";

export const MainContext=createContext({});

//Crea Lo stato globale

const MainProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <MainContext.Provider value={{ state, dispatch }}>
        {children}
      </MainContext.Provider>
    );
  };
  
  export default MainProvider;